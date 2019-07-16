console.log("hello")
class Calculator{
    add(i,j){
        return i+j;
    }
    sub(i,j){
        return i-j;
    }
    mul(i,j){
        return i*j;
    }
    div(i,j){
        return i/j;
    }
    mod(i,j){
        return i%j;
    }
}

module.exports={
    Calculator
}