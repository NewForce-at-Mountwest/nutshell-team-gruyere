const tasksDomPrinter = {
    // method that puts an array of task objects and prints to dom
    printTasksToDom: arrayOfTasks => {
    // reference to task container
        document.querySelector("#task-section").innerHTML = "";
        //loop array of tasks
        arrayOfTasks.forEach(singleTask => {
            document.querySelector("#task.section").innerHTML += `<section>
                <div class= "task-note" id=task-note-${singleTask.id}"> `
        })
    }

}