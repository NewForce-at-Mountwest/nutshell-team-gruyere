const makeSingleTaskEntryComponent =  (taskFormPrint) => {
    return `<section>
    <div id= "task-input-form">
    <h3> Tasks </h3>
    <form>
    <fieldset>
    <textarea name="taskEntry" id="saved-task-input-area" placeholder="Enter task here" cols="15" rows="5">
    </textarea>
    </fieldset>
    </form>
    </div>
    <br>
    <button class= "update-save-btn id="save-each-${taskFormPrint.id}">Save</button/>
    <button class= "edit-btn" id="edit-each-${taskFormPrint.id}">Edit</button/>
    <button class= "delete-btn" id= "delete-each-${taskFormPrint.id}">Delete</button>
    </section>
    `
}