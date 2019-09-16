import tasksDomPrinter from "./tasksDomPrinter.js"

const tasksApiManager = {
    // Method to get all tasks
    getAllTasks: () => {
      return fetch("http://localhost:8088/tasks")
      .then(response => response.json())
      .then(arrayOfTasksEntries => tasksDomPrinter.printTasksToDom(arrayOfTasksEntries)
      );
      },

      getOneTaskEntry: (id) => {
        return fetch(`http://localhost:8088/tasks/${id}`)
        .then(response => response.json())
      },

      saveTaskEntry: entryObjectParam =>
         fetch("http://localhost:8088/tasks", {
            method: "POST",
                headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(entryObjectParam)
    }),
    editOneTask: (entryObjectParam, id) =>
    fetch(`http://localhost:8088/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entryObjectParam)
    }),
    }

export default tasksApiManager