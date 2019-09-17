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
                // console.log(singleEvent)
            document.querySelector("#apisection").innerHTML +=
         `<h3>${singleEvent.name}</h3>
        <p>LOCATION:${singleEvent.location}</p>
        <p>DATE:${singleEvent.date}</p>
        <button id="edit-button-${singleEvent.id}">EDIT</button>
        `
                })
            });
    },

    printEventEditForm: (eventToEdit) => {

        const targetEventCard = document.querySelector(`#student-card-${EventToEdit.id}`)

        targetEventCard.innerHTML = `<section>
          <input id="edit-input-${eventToEdit.id}" type="text" value="${eventToEdit.name}">
          <input id="edit-input-${eventToEdit.id}" type="text" value="${eventToEdit.location}">
          <input id="edit-input-${eventToEdit.id}" type="text" value="${eventToEdit.date}">
          <button id="save-edit-${eventToEdit.id}">Save</button>
        </section>`
console.log(targetEventCard)
    }
}

export default jweventsdomprinter;