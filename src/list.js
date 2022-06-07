import { list } from "./const.js";

export const listOnChange = (list.onchange = ({ target }) => {
  target.closest(".list_item").className = "line-through";
  target.setAttribute("disabled", true);
});

export const listOnClick = (list.onclick = ({ target }) => {
  const isButton = target.className === "btn btn-primary mb-3 delete-button";

  if (isButton) {
    target.closest(".list_item").remove();
  }
});
