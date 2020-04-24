function displayAlert(){
    alert("Hello, there!!");
}

function displayName(){
    alert("My Name is Smayan!!");
}

function displayADD(){

    // Get the value of the input field with id="numb"
    var x = document.getElementById("firstNumber").value;
    // Get the value of the input field with id="numb"
    var y = document.getElementById("secondNumber").value;
    
    var z = parseInt(x)+ parseInt(y);

    // alert("The addition of two numbers is:"+ z);
    document.getElementById("answer").value = z;

}

function displaySubstract(){

    // Get the value of the input field with id="numb"
    var x = document.getElementById("firstNumber").value;
    // Get the value of the input field with id="numb"
    var y = document.getElementById("secondNumber").value;
    
    var z = parseInt(x)-parseInt(y);
    document.getElementById("answer").value = z;
}


function displayMultiply(){

    // Get the value of the input field with id="numb"
    var x = document.getElementById("firstNumber").value;
    // Get the value of the input field with id="numb"
    var y = document.getElementById("secondNumber").value;
    
    var z = parseInt(x)* parseInt(y);
    document.getElementById("answer").value = z;

}

function displayDivide(){

    // Get the value of the input field with id="numb"
    var x = document.getElementById("firstNumber").value;
    // Get the value of the input field with id="numb"
    var y = document.getElementById("secondNumber").value;
    
    var z = parseInt(x)/parseInt(y);
    document.getElementById("answer").value = z;
}


function checkPalindrome(){
    // Get the value of the input field with id="numb"
    var x = document.getElementById("inputData").value;
    //salert("You entered:"+ x);
    z = palindrome(x);

    // alert("The addition of two numbers is:"+ z);
    document.getElementById("answerPalindrome").value = z;

}

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }