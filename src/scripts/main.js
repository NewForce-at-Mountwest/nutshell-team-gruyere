import tasksApiManager from "./tasksApiManager.js"
import makeTaskEntryComponent from "./singleFormEntry.js"

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
    taskEntry: taskEntryValue
};
tasksApiManager.saveTaskEntry(newTaskEntryObject)
.then (() => tasksApiManager.getAllTasks())

}})

// Edit button

document.querySelector("body").addEventListener("click", () => {

    // Check to see if the user clicked on something with a class of edit-btn

    if(event.target.classlist.contains("edit-btn")){
        tasksApiManager.editOneTask(event.target.id.split("-")[2])
        .then(singleTaskToEdit => {
          domPrinter.printEditForm(singleTaskToEdit)
        })
      }
    })
