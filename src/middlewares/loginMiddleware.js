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