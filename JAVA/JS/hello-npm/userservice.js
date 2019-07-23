const users= require('./users').users;

class UserServices{
    getUser(_uname,_pass){
        return users.find((u)=>{
            return u.name == _uname && u.pass==_pass
        })
    }
}

module.exports={
    UserServices
}