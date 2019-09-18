//This module imports all the event listeners and page loads from the individual modules
//articles, events, tasks

// Import dashboard sections from articles, tasks and events here
import formPrinter from "./printToDom.js";
import taskClickEvents from "../taskClickEvents.js";
import jwClickEvents from "../events/eventsclickevents.js";
import jweventsdomprinter from "../events/eventsdomprinter.js";

const dashboardActivator = () => {
  // articles

  //tasks
  taskClickEvents.taskInput();
  taskClickEvents.taskEdit();
  taskClickEvents.taskDelete();
  taskClickEvents.taskSave();
  taskClickEvents.taskEditSave();

  // events
  jweventsdomprinter.buildeventcomponent();
  jwClickEvents.editEvent();
  jwClickEvents.submitEvent();

  //logout form
  formPrinter.printLogoutForm();
};

export default dashboardActivator;
