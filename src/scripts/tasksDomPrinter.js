import makeTaskEntryComponent from "./singleFormEntry.js";

const tasksDomPrinter = {
    // method that puts an array of task objects and prints to dom
    printTasksToDom: arrayOfTasks => {
        console.log(arrayOfTasks)
        //loop array of tasks

        arrayOfTasks.forEach(singleTask => {
            document.querySelector("#task-output-container").innerHTML += `<div class="task-card" id="task-card-${singleTask.id}"><p>${singleTask.date}</p><p>${singleTask.taskEntry}
            <button class= "edit-btn" id="edit-each-${singleTask.id}">Edit</button/>
            <button class= "delete-btn" id= "delete-each-${singleTask.id}">Delete</button></div>`;
        });
},
    printTaskEditForm: taskEditObject => {
    document.querySelector(`#task-card-${taskEditObject.id}`).innerHTML = `<div>
      <input type="text" id="edit-input-${taskEditObject.id}" value="${taskEditObject.taskEntry}">
      <button id="submit-edit-${taskEditObject.id}">Save</button>
    </div>`
    }
};
export default tasksDomPrinter;