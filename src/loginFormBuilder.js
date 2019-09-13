// Module to build the login and registration form
// Also has container for log out button

const formBuilder = {
  makeLoginForm: () => {
    return `<div id="login-form">
        <h3>Log In</h3>
        <form action="">
          <input type="text" id="login-email-input" placeholder="Email" />
          <input type="text" id="login-password-input" placeholder="Password" />
          <button id ="login-button">Log In</button>
        </form>
      </div>`;
  },

  makeRegisterForm: () => {
    return `<div id="register-form">
        <h3>Register</h3>
        <form action="">
          <input type="text" id="register-username-input" placeholder="Username"/>
          <input type="text" id="register-email-input" placeholder="Email" />
          <input type="text" id="register-password-input" placeholder="Password"/>
          <button id="register-button">Register</button>
        </form>
      </div>`;
  },

  makeLogoutForm: () => {
    return `<div id="logout-form">
    <h4>Thank you for visiting Nutshell!</h4>
<button id="logout-button">Log Out</button>
</div>`
  }

}
