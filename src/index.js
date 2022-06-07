import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { formSubmit } from "./form-submit";
import { listOnChange } from "./list";
import { listOnClick } from "./list";
import { inputOninput } from "./to-do-input";
import { errorMessage } from "./error-message";

formSubmit();
listOnChange();
listOnClick();
inputOninput();
errorMessage();
