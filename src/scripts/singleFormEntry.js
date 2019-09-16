import tasksDomPrinter from "./tasksDomPrinter.js"

const makeTaskEntryComponent =  () => {
    return `<section>
    <div id= "task-input-form">
    <h3> Tasks </h3>
    <form>
    <fieldset>
    <label for="taskDate">Date of task</label>
    <br>
    <input type="date" name="taskDate" id="task-date">
    </fieldset>
    <fieldset>
    <textarea name="taskEntry" id="task-input-area" placeholder="Enter task here" cols="15" rows="5">
    </textarea>
    </fieldset>
    </form>
    </div>
    <br>
    <button class= "save-btn" id="save-new">Save</button/>
    </section>
    `
}



export default makeTaskEntryComponent;
