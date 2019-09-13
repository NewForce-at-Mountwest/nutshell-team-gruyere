import addeventlist from "./eventeventclicker.js"


const jweventsdomprinter= {
    buildeventcomponent: () => {
    const eventLog = document.querySelector("#event-section")

eventLog.innerHTML =
 `
 <h2>EVENTS</h2>
<button id="event-button">Add Event</button>
 `
// console.log(eventLog)
            }
         }


export default jweventsdomprinter;