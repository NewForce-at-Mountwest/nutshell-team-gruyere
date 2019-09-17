import jwapiManager from "./eventsapimanager.js"
import jweventsdomprinter from "./eventsdomprinter.js"

const addeventbuttonclick = document.querySelector("body")

// WHEN BUTTON IS CLICKED WILL BRING UP ADD EVENT INPUT

const addeventlist =
  addeventbuttonclick.addEventListener("click", function () {

    if (event.target.id.includes("event-button")) {
      document.querySelector("#buttonsection").innerHTML = `
         <h2>ADD EVENT</h2>
         <form>
NAME OF EVENT: <input type="text" id= "nameofevent"  value=" ">
<br><br>
LOCATION: <input type="text" id="locationofevent" value=" ">
<br></br>
DATE OF EVENT : <input type="text" id="dateofevent" value=" ">
<br></br>
</form>
<button id=jwsubmitbutton>SUBMIT</button> `

      document.querySelector("#jwsubmitbutton")
        .addEventListener("click", function () {
          // On click, create an object with the values from the user's inputs

          const newEventToPost = {
            name: document.querySelector("#nameofevent").value,
            location: document.querySelector("#locationofevent").value,
            date: document.querySelector("#dateofevent").value
          };
          // Post the object to json-server
          jwapiManager
            .postevent(newEventToPost)
            .then(jwapiManager.getallevents)
            .then(parsedEventArray => {
              // Get all the journal entries from json-server and reprint them to refresh the page
              jweventsdomprinter.buildeventcomponent(parsedEventArray);
            });
        });
  }
})



    // Event listener for edit button

  //   document.querySelector("body").addEventListener("click", () => {
  //     if (event.target.id.includes("edit-button")) {
  //       console.log("you clicked edit")
  //       console.log(event.target.id.split("-")[2])
  //       jwapiManager
  //         .getoneevent(event.target.id.split("-")[2])
  //         .then(singleEvent => {
  //           console.log(singleEvent)
  //           jweventsdomprinter.printEventEditForm(singleEvent);
  //         });
  //     }
  //   });

  //   //   Event listner for submit button

  //   document.querySelector("body").addEventListener("click", () => {
  //     if (event.target.id.includes("save-edit-")) {

  //       const idFromDatabase = event.target.id.split("-")[2];
  //       console.log("this should be the id from the db", idFromDatabase)

  //       console.log("You clicked the save edit button!");
  //       // Get values of form inputs
  //       const nameValue = document.querySelector(`#edit-name-${idFromDatabase}`)
  //         .value;
  //       console.log(nameValue)
  //       const locationValue = document.querySelector(
  //         `#edit-location-${idFromDatabase}`
  //       ).value;
  //       const dateValue = document.querySelector(
  //         `#edit-date-${idFromDatabase}`
  //       ).value;
  //       // Put them in an object
  //       const editedEventValues = {
  //         name: nameValue,
  //         location: locationValue,
  //         date: dateValue
  //       }

  //       console.log(editedEventValues)
  //       // Make a PUT request to db
  //       jwapiManager.editeventEntry(idFromDatabase, editedEventValues)
  //         .then(jwapiManager.getallevents)
  //         .then(allTheEntries => {
  //           jweventsdomprinter.buildeventcomponent(allTheEntries)
  //         })
  //       // Refresh the page --> GET all and then reprint all
  //     }
  //   });
  // })

export default addeventlist