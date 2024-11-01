import { firestore } from "firebase-functions";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const onActivityWrite = firestore
  .document("activities/{activityId}")
  .onWrite(async (change) => {
    const activityDescription = change.after.get("activityDescription");

    if (
      !activityDescription ||
      activityDescription.length < 10 ||
      activityDescription === change.before.get("activityDescription")
    ) {
      return;
    }

    const prompt = `Give me an estimate of the emissions of the greenhouse gases specified in the Kyoto Protocol caused by the following activity description and format the result as a JSON object with the greenhouse gas as the key and the emission in kg as the value: \n\n${activityDescription}`;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 100,
    });

    const answer = response.data.choices[0].text;

    change.after.ref.update({ detailedAnswer: answer });
  });
