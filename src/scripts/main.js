import articleDOMPrinter from "./article/articleDOMPrinter.js";
import articlePrinter from "./article/articleDOMPrinter.js";
import articleAPIManager from "./article/articleAPIManager.js";
import loginManager from "./login/loginManager.js";
import taskClickEvents from "./taskClickEvents.js"
import articleClickEvents from "./article/articleClickEvents.js";


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



// Article component
articlePrinter.printNewArticleButtonToDOM();
articleClickEvents.articleNewButton();
articleClickEvents.articleSaveButton();
articleClickEvents.articleDeleteButton();
articleClickEvents.articleEditButton();
articleClickEvents.articleSaveEditButton();


