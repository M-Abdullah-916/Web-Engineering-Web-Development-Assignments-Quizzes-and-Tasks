const {ROLE} = require('../data');

function canViewAttendance (users,attendance){
    return (
        users.role === ROLE.STUDENT ||
        attendance.userId === users.id
    )

}

module.exports = {
    canViewAttendance
}