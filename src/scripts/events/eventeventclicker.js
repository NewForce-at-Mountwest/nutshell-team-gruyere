
const addeventbuttonclick =  document.querySelector("body")

// WHEN BUTTON IS CLICKED WILL BRING UP ADD EVENT INPUT

const addeventlist=
addeventbuttonclick.addEventListener("click",function(){

    if (event.target.id.includes("event-button")){
        document.querySelector("#event-section").innerHTML=
         `
         <h2>ADD EVENT</h2>
         <form>
NAME OF EVENT: <input type="text"  value=" ">
<br><br>
DATE OF EVENT: <input type="text" value=" ">
<br></br>
LOCATION     : <input type="text" value=" ">
<br></br>
</form>
<button id=jwsubmitbutton>SUBMIT</button
        `
}
})


export default addeventlist