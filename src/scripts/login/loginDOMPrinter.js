// Module to print or clear the login and registration forms to/from the DOM


const formPrinter = {

    printRegisterForm: () => {
        document.querySelector("#register-form").innerHTML = formBuilder.makeRegisterForm()
    },

    removeRegisterForm: () => {
        document.querySelector("#register-form").innerHTML = ""
    },

    printLoginForm: () => {
        document.querySelector("#login-form").innerHTML = formBuilder.makeLoginForm()
    },

    removeLoginForm: () => {
        document.querySelector("#login-form").innerHTML = ""
    },

    printLogoutForm:()=>{
        document.querySelector("#logout-form").innerHTML= formBuilder.makeLogoutForm()
    },

    removeLogoutForm:()=>{
        document.querySelector("#logout-form").innerHTML=""
    }

}
