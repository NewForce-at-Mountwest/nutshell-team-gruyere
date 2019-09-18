import tasksApiManager from "./tasksApiManager.js"
import makeTaskEntryComponent from "./singleFormEntry.js"
import tasksDomPrinter from "./tasksDomPrinter.js"


// input for task section
document.querySelector("#task-section").innerHTML += makeTaskEntryComponent()
tasksApiManager.getAllTasks()

// save button for new task entry
const saveTaskEntryButton = document.querySelector("body");
// console.log(saveTaskEntryButton, "you clicked the button!!")
saveTaskEntryButton.addEventListener("click", function() {
    // once the button is clicked do these things:
    if(event.target.id === "save-new"){
    console.log("click")
    const taskEntryValue = document.querySelector("#task-input-area").value;
    const taskDateValue = document.querySelector("#task-date").value;

const newTaskEntryObject = {
    date: taskDateValue,
    name: taskEntryValue
};
tasksApiManager.saveTaskEntry(newTaskEntryObject)
.then (() => tasksApiManager.getAllTasks())

}})

// Task edit button

document.querySelector("body").addEventListener("click", () => {


    if(event.target.id.includes("edit-each")){
        tasksApiManager.getOneTaskEntry(event.target.id.split("-")[2])
        .then(singleTaskToEdit => {
          tasksDomPrinter.printTaskEditForm(singleTaskToEdit)
        })
      }
    })

    // Task edit save button
document.querySelector("body").addEventListener("click", () => {
    if(event.target.id.includes("submit-edit")){
      const editedTaskObject = {
        name: document.querySelector(`#edit-input-${event.target.id.split("-")[2]}`).value,
        date: document.querySelector(`#edit-date-input-${event.target.id.split("-")[2]}`).value
      }
      tasksApiManager.editOneTask(editedTaskObject, event.target.id.split("-")[2])
      .then(tasksApiManager.getAllTasks)
    }
  });

// ------- CLICK EVENT FOR TASK DELETE BUTTONS ----------//

    document.querySelector("body").addEventListener("click", () => {
    // If the user clicks on a delete button, do some stuff
    if (event.target.id.includes("delete-each")) {
      // get the unique id of the person you want to delete
      const taskWordArray = event.target.id.split("-");
      const idOfThingToDelete = taskWordArray[2];
      console.log(idOfThingToDelete);
    // Make a DELETE request to our json-server
    tasksApiManager.deleteOneTask(idOfThingToDelete).then(() => {
        // Once the delete is completed, get all the students-- we need to "refresh" the page (kind of)
      tasksApiManager.getAllTasks()
      .then(parsedTasks => {
          // When the students come back, print them to the DOM again
        tasksDomPrinter.printTasksToDOM(parsedTasks);
    });
});
}})
