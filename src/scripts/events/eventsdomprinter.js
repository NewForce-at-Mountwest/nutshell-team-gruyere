import addeventlist from "./eventeventclicker.js"

import jwapiManager from "./eventsapimanager.js"


const jweventsdomprinter = {
    buildeventcomponent: () => {
        const eventLog = document.querySelector("#event-section")

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

        //     document
        //  .querySelector("#jwsubmitbutton")
        //  .addEventListener("click", function() {
        //    // On click, create an object with the values from the user's inputs

        //    const newEventToPost = {
        //      nameOfEvent: document.querySelector("#nameofevent").value,
        //      locationOfEvent: document.querySelector("#locationofevent").value,
        //      dateOfEvent: document.querySelector("#dateofevent").value
        //    };
        //    // Post the object to json-server

        //    jwapiManager
        //      .then(parsedEventEntryArray => {
        //        // Get all the journal entries from json-server and reprint them to refresh the page
        //        jweventsdomprinter.getallevents(parsedEventEntryArray);
        //      })
        //      .postevent(newEventToPost)
        //      .then(jwapiManager.getallevents)
        //     }