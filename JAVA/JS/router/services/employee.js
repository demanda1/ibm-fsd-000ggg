const employee=require('../db/employee').employee

class empServices{
    constructor(){
        this.employee=employee
    }
    all(){
        return this.employee
    }
    add(user){
        this.employee.push(user)
        return this.employee
    }
}

module.exports.empServices=empServices