

let obj = {
    firstName : "Shashikant",
    lastName : "Kumar"

}

function a(){
    console.log(this.lastName + " " + this.firstName)
}

Function.prototype.myCall = function(context = {}, ...args) {
   
    if(typeof this !== 'function'){
        console.log("Not function")
    }
    context.fn = this;
    return context.fn(...args);
}

a.myCall(obj)