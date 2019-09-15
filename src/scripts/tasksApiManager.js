const tasksApiManager = {
    // Method to get all tasks
    getAllTasks: () => {
      return fetch("http://localhost:8088/tasks").then(response =>
        response.json()
      )}
    }