import "./style.css";
import { sum } from "./sum";

const result = document.querySelector<HTMLElement>(".sumResult");
result.textContent = sum(1, 2);
