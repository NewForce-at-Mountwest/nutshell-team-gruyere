
//This module imports all the event listeners and page loads from the individual modules
//articles, events, tasks


// Import dashboard sections from articles, tasks and events here
import formPrinter from "./printToDom.js"


const dashboardActivator = () => {
    formPrinter.printLogoutForm();
    // articles
    // events
    // tasks

    // document.querySelector("#hidden").id="visible";
}

export default dashboardActivator;