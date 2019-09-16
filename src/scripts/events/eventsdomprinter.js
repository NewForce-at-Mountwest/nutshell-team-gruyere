import addeventlist from "./eventeventclicker.js"

import jwapiManager from "./eventsapimanager.js"


const jweventsdomprinter = {
    buildeventcomponent: () => {
        const eventLog = document.querySelector("#event-section")
        eventLog.innerHTML= ""
        document.querySelector("#apisection").innerHTML = ""
        eventLog.innerHTML = `
<h2>EVENTS</h2>
<button id="event-button">Add Event</button>
`
        jwapiManager.getallevents()
            .then(parsedevents => {
                // When they come back from the API, print them
            parsedevents.forEach(singleEvent => {
            document.querySelector("#apisection").innerHTML +=
         `<p>${singleEvent.name}</p>
        <p>${singleEvent.location}</p>
        <p>${singleEvent.date}</p>`
                })
            });
    }
}

export default jweventsdomprinter;