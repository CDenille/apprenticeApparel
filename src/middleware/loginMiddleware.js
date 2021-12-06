const { db }  = require('/usr/local/google/home/denillec/multiverse_activites/Week 5/apprentice_apparel/server/db.js')
//const {allUsers} = require('../../server/model/User')

function checkUser (User, allUsers) {
    for(let i=0; i<allUsers.length; i++) {
        if(User.email == allUsers[i].dataValues.email) {
            console.log('Email exist')
            if(User.password == allUsers[i].dataValues.password) {
                console.log('User exist')
                
                return true
            }else {
                console.log('Incorrect password')
                return false;
            }
        }
    
    }

    //console.log('User does not exist. Please sign up for an account')
    return false
}

module.exports = {checkUser}