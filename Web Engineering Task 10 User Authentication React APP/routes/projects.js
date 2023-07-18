const express = require('express')
const { authUser } = require('../basicAuthentication')
const router = express.Router()
const { attendance } = require('../data')
const {canViewAttendance} = require('../permissions/attendance')


router.get('/', (req, res) => {
  res.json(attendance)
})

router.get('/:attendanceId', setAttendance, authUser, authGetAttendance,(req, res) => {
  console.log(req.attendance);
  res.json(req.attendance)
})

function setAttendance(req, res, next) {
  const attendanceId = parseInt(req.params.attendanceId)
  console.log(attendanceId);
  req.attendance = attendance.find(attendance => attendance.id === attendanceId)
  console.log(req.attendance);
  if (req.attendance == null) {
    res.status(404)
    return res.send('Attendance not found')
  }
  next()
}

function authGetAttendance(req,res,next){
  if(!canViewAttendance(req.users,req.attendance)){
    console.log(req.users)
    console.log(req.attendance)
    res.status(401);
    res.send("Not Allowed");
  }
  next()
}

module.exports = router