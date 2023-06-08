import "./style.css";
import { sum } from "./sum";

const result = document.querySelector<HTMLElement>(".sumResult");
if (result) {
  result.textContent = String(sum(1, 2));
}
