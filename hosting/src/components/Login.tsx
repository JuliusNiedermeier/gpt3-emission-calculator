import { signInWithEmailAndPassword } from "firebase/auth";
import { batch, Component, createSignal, Show } from "solid-js";
import { auth } from "../services/firebase";

export const Login: Component = () => {
  const [password, setPassword] = createSignal("");
  const [invalid, setInvalid] = createSignal(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      "julius.niedermeier@outlook.de",
      password()
    )
      .then(console.log)
      .catch((e) =>
        batch(() => {
          console.log(e);
          setInvalid(true);
          setPassword("");
        })
      );
  };

  return (
    <div class="grid place-content-center min-h-screen">
      <form onSubmit={handleSubmit} class="grid gap-2">
        <h1 class="text-xl font-medium ml-3">Login</h1>
        <input
          class="p-3 border rounded-xl border-gray-300 bg-white outline-none"
          classList={{ "ring-red-500 ring ring-1": invalid() }}
          type="password"
          placeholder="Password..."
          value={password()}
          onInput={(e) => {
            setPassword(e.currentTarget.value);
            invalid() && setInvalid(false);
          }}
        />
        <Show when={invalid()}>
          <span class="ml-3 text-red-600">Invalid password</span>
        </Show>
      </form>
    </div>
  );
};
