const { ROLE } = require('./data')
function authUser(req,res,next){
    if (req.user == null) {
        res.status(403)
        return res.send("You need to sign in")
    }
    next()
}

function authRole(role,role2,role3){
    return(req,res,next) => {
        if(req.user.role !==  role && req.user.role !== role2 && req.user.role !== role3){
            res.status(401)
            return res.send("Not Allowed")
        }

        next()
    }

}

module.exports={
    authUser,
    authRole
}