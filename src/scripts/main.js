import jweventsdomprinter from "./events/eventsdomprinter.js"
import jwapiManager from "./events/eventsapimanager.js"
import loginManager from "./login/loginManager.js";

jweventsdomprinter.buildeventcomponent()
// import formPrinter from "../scripts/login/printToDom.js";



// formPrinter.printLoginForm();
// formPrinter.printRegisterForm();
loginManager.loggingIN();
loginManager.register();
// loginManager.logOut();

