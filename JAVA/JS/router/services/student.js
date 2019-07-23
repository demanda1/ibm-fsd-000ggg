const student=require('../db/student').student

class studentServices{
    constructor(){
        this.student=student
    }
    all(){
        return this.student
    }
    add(user){
        this.student.push(user)
        return this.student
    }
}

module.exports.studentServices=studentServices