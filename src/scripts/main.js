// import formPrinter from "../scripts/login/printToDom.js";
import loginManager from "./login/loginManager.js";
import taskClickEvents from "./taskClickEvents.js"


// formPrinter.printLoginForm();
// formPrinter.printRegisterForm();
loginManager.loggingIN();
loginManager.register();
taskClickEvents.taskInput();
taskClickEvents.taskEdit();
taskClickEvents.taskDelete();
taskClickEvents.taskSave();
taskClickEvents.taskEditSave();
// loginManager.logOut();

