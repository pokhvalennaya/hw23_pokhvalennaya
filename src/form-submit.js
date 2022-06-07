import { form } from "./const";
import { toDoInput } from "./const";
import { list } from "./const";
import { div } from "./const";

export const formSubmit = (form.onsubmit = (event) => {
  event.preventDefault();

  if (toDoInput.value.trim().length === 0) {
    toDoInput.classList.add("error");
    div.innerHTML = "This field is required!";
    return;
  }

  const li = document.createElement("li");
  li.className = "list_item";
  li.innerHTML = toDoInput.value;
  list.append(li);

  const check = document.createElement("input");
  check.type = "checkbox";
  check.checked = false;
  check.className = "checkbox check form-check-input me-1";
  li.prepend(check);

  form.reset();

  const button = document.createElement("button");
  button.innerHTML = "Delete";
  button.className = "btn btn-primary mb-3 delete-button";
  li.append(button);
});
