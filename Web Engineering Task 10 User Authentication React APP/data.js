const ROLE = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'admin', role: ROLE.ADMIN },
    { id: 2, name: 'teacher', role: ROLE.TEACHER },
    { id: 3, name: 'student', role: ROLE.STUDENT }
  ],
  attendance: [
    { id: 1, name: "Abdullah", userId: 1 },
    { id: 2, name: "Jonathan", userId: 2 },
    { id: 3, name: "Zain ul Abideen", userId: 3 },
    { id: 4, name: "Ali Ahmad", userId: 4 },
    { id: 5, name: "Osama", userId: 5 }
  ]
}