function messageAlert(){
    alert("I am an alert box!");
}

function add(num1, num2){
    var answer = num1 + num2;
    console.log("answer: ", answer);
}

function addWithReturn(param1, param2){
    var result = param1 + param2;
    return result;
}

var addWithReturnResult = addWithReturn(2, 5);