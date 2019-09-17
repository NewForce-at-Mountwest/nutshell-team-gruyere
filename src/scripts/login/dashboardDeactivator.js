
// this module clears the dashboard upon logout
// built by Kelli Evans

// Import dashboard sections from articles, tasks and events here


const dashboardDeactivator = () => {


    document.querySelector("#event-section").innerHTML = ""
    document.querySelector("#task-section").innerHTML = ""
    document.querySelector("#article-section").innerHTML = ""
    document.querySelector("#login-section").innerHTML = ""
    document.querySelector("#logout-form").innerHTML = ""

    // insert your functions or HTML strings that need to be cleared on logout


}

export default dashboardDeactivator;