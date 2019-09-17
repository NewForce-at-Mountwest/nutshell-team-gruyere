// //This module handles the login and registration of the app
// // Built by Kelli Evans

import formPrinter from "./printToDom.js";
import buildUserObject from "./objectBuilder.js";
import APIManager from "./APIManager.js";
import dashboardActivator from "./dashboardActivator.js";
import dashboardDeactivator from "./dashboardDeactivator.js";

const loginManager = {
  loggingIN: () => {
    document.querySelector("#login-button").addEventListener("click", () => {
      // Get the username and password values from the form
      const emailValue = document.querySelector("#login-email-input").value;
      const passwordValue = document.querySelector("#login-password-input")
        .value;
      // console.log(emailValue, passwordValue)
      // Use the email to go to the database and get that user's information
      APIManager.getSingleUser(emailValue).then(user => {
        if (user.length === 1) {
          // User is going to be an array no matter what, so we'll have to delve into the array to get the user's data
          console.log("This is the user", user);
          // Compare the user's password from the database to the information they entered
          console.log(user[0].password, passwordValue);
          if (user[0].password === passwordValue) {
            // If the passwords match, store the id in local storage
            localStorage.setItem("userId", user[0].id);

            // When the user is logged in, print the dashboard with events, articles and tasks
            formPrinter.removeLoginForm();
            dashboardActivator();
          } else {
            // Error handling would go here
            window.alert("Incorrect password!");
          }
        } else {
          window.alert("That username does not exist!");
        }
      });
    });
  },

  register: () => {
    // formPrinter.printRegisterForm()
    document.querySelector("#register-button").addEventListener("click", () => {
      //if user clicks the submit button, registration will be posted to database
      // if (event.target.id === "register-button") {

      //first check if username is already in the database.
      const username = document.querySelector("#register-username-input").value;
      const email = document.querySelector("#register-email-input").value;
      const password = document.querySelector("#register-password-input").value;

      console.log("this is the username", username);
      // let isUnique = false;

      APIManager.getSingleUser("email", email)
        //check to see is the email address already exists in the database
        .then(singleUser => {
          if (singleUser.length === 0) {
            // isUnique = true;

            APIManager.getSingleUser("username", username).then(singleUser => {
              //check to see if the username already exists in the database
              if (singleUser.length === 0) {
                // isUnique = true;

                const userObject = buildUserObject(username, password, email);

                APIManager.addUser(userObject).then(() => {
                  APIManager.getSingleUser("username", username).then(
                    singleUser => {
                      localStorage.setItem("activeUser", singleUser[0]);
                      console.log("this is userObject", userObject);
                      formPrinter.removeRegisterForm();
                      dashboardActivator();
                    }
                  );
                });
              } else {
                debugger;
                // isUnique = false;
                window.alert("That username is already in the database");
              }
            });
          } else {
            // isUnique = false;
            window.alert("That email is already in the database");
          }
        });
    });
  },

  logOut: () => {
    null;
  }
};

//     //EVENT LISTENER ON THE LOGIN CONTAINER TO HANDLE ALL OF LOGIN AND REGISTRATION FEATURES
//     document.querySelector("#login-button").addEventListener("click", () => {

//         // const eventTarget = event.target.id.split("-")

//         if (event.target.id === "login-button") {
//             const email = document.querySelector("#login-email-input").value
//             const password = document.querySelector("#login-password-input").value
//             //check if email is in the database
//             APIManager.getSingleUser(email)
//                 .then((singleUser) => {

//                     console.log(singleUser)
//                     // if (singleUser.length === 1) {
//                     //     //check if password matches
//                     //     if (singleUser[0].password === password) {
//                     //         formPrinter.removeLoginForm()
//                     //         sessionStorage.setItem("activeUser", singleUser[0].id)

//                     //         //this activates the dashboard
//                     //         dashboardActivator()
//                     //     }
//                     //     else {
//                     //         window.alert("The password is incorrect!")

//                     //     }
//                     // }
//                     // else {
//                     //     window.alert("That email does not exist in the database")

//                     // }
//                 })
//         }

//         //If user clicks the register button, load the registration form
//         if (event.target.id === "reg-btn") {}

//     // EVENT LISTENER FOR THE LOGOUT OPERATION
//     document.querySelector("#logout-button").addEventListener("click", () => {
//         if (event.target.id === "logout-button") {

//             sessionStorage.removeItem("activeUser")
//             //this is just a placeholder until we have the dashboard //
//             formPrinter.removeLogoutForm()
//             dashboardDeactivator()
//             formPrinter.printLoginForm()
//         }
//     })
// }

export default loginManager;
