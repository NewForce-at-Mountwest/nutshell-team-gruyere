// Module to build an object using inputs from the registration field

const buildUserObject = (userName, password, email) => {

    const userObject = {
        "username": userName,
        "password": password,
        "email": email
    }
    return userObject;
}
