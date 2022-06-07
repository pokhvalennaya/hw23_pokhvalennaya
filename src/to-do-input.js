import { toDoInput } from "./const";
import { div } from "./const";

export const inputOninput = (toDoInput.oninput = () => {
  const isErrorField = toDoInput.classList.contains("error");

  if (isErrorField) {
    toDoInput.classList.remove("error");
    div.innerHTML = "";
  }
});
