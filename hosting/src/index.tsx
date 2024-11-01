import { render } from "solid-js/web";
import { App } from "./App";
import "./index.css";
import "tailwindcss/tailwind.css";

const root = document.getElementById("root");

render(() => <App />, root);
