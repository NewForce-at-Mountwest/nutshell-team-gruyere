import jwapiManager from "./eventsapimanager.js"
import jweventsdomprinter from "./eventsapimanager.js"

const addeventbuttonclick =  document.querySelector("body")

// WHEN BUTTON IS CLICKED WILL BRING UP ADD EVENT INPUT

const addeventlist=
addeventbuttonclick.addEventListener("click",function(){

    if (event.target.id.includes("event-button")){
        document.querySelector("#buttonsection").innerHTML=`
         <h2>ADD EVENT</h2>
         <form>
NAME OF EVENT: <input type="text" id= "nameofevent"  value=" ">
<br><br>
LOCATION: <input type="text" id="locationofevent" value=" ">
<br></br>
DATE OF EVENT : <input type="text" id="dateofevent" value=" ">
<br></br>
</form>
<button id=jwsubmitbutton>SUBMIT</button `
}
})


export default addeventlist