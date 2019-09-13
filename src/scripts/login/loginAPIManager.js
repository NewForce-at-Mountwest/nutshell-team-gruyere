// This module contains fetch calls and posts to the database

const loginAPIManager = {

    getSingleUser: (userKey, userValue)=>{
        return fetch(`http://localhost:8088/users?${userKey}=${userValue}`)
.then(database => database.json())
    },

getAllUsers: ()=>{
    return fetch("http://localhost:8088/users")
}


}