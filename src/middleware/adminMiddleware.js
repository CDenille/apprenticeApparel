const { ModuleFilenameHelpers } = require('webpack')
const { db }  = require('/usr/local/google/home/denillec/multiverse_activites/Week 5/apprentice_apparel/server/db.js')
//const {allUsers} = require('../../server/model/User')

function isAdmin(User) {
    if(User.admin == 1) {
        return true
    }else {
        return false
    }
}
module.exports = {isAdmin}