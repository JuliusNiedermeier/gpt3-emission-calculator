import { Configuration, OpenAIApi } from "openai";
import "dotenv/config";
import { writeFileSync } from "fs";
import { resolve } from "path";

const prompt =
  "Give me an estimate of the emissions of the greenhouse gases specified in the Kyoto Protocol caused by the following activity description and format the result as a JSON object with the greenhouse gas as the key and the emission in kg as the value: \n\nI travelled 1 km by car.";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

openai
  .createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0,
    max_tokens: 100,
  })
  .then((response) =>
    writeFileSync(
      resolve(__dirname, "response.json"),
      JSON.stringify(response.data),
      "utf-8"
    )
  )
  .catch((error) =>
    writeFileSync(
      resolve(__dirname, "error.json"),
      JSON.stringify(error),
      "utf-8"
    )
  );
