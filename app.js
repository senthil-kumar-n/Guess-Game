// console.log("hello");
// console.log(document.getElementById("user-input").value);
// let usrInput = document.getElementById("user-input").value = 0;
// console.log(document.getElementById("user-input").value);
// console.log(document.getElementById('output-id').textContent);
// console.log(document.getElementById('response-id').textContent);
// document.getElementById('response-id').textContent = "Correct Answer";

//Assigning Initial Score value
let score = 100;
document.querySelector('.score').textContent = score;


//Generating Secret Number 
let secretNumber = Math.floor(Math.random()*20);
document.querySelector('.secret-num').textContent = "?";

//Click Button Function definition
const cbtn = document.getElementById('cbtn-id');
cbtn.addEventListener('click', function () {
    // console.log("Enter Button");

    let guess = Number(document.getElementById('user-input').value);


    if (!guess) {
console.log("Enter the Checking validation");
document.getElementById('response-id').textContent = "Please enter Number to Play";

    }
    
    else if (guess === secretNumber) {
        // console.log('Entering if loop');
        // console.log(typeof(guess));
        // console.log(" The user Entered value is " + document.getElementById('user-input').value);
        // console.log(guess);
        document.getElementById('response-id').textContent = "Correct Answer";
        document.querySelector('.highscore').textContent = score;
        document.querySelector('body').style.backgroundColor= "green";
        document.querySelector('.secret-num').textContent = secretNumber;

        
    }

    else if (guess > secretNumber) {
        // console.log('Entering if loop');
        // console.log(typeof(guess));
        // console.log(" The user Entered value is " + document.getElementById('user-input').value);
        // console.log(guess);
        document.getElementById('response-id').textContent = "Too High";
        score = score - 10;
        document.querySelector('.score').textContent = score;

        
    }

    else if (guess < secretNumber) {
        // console.log('Entering if loop');
        // console.log(typeof(guess));
        // console.log(" The user Entered value is " + document.getElementById('user-input').value);
        // console.log(guess);
        document.getElementById('response-id').textContent = "Too Low";
        score = score - 10;
        document.querySelector('.score').textContent = score;
    }
    // else {
    //     console.log('Entering Else loop');
    //     console.log(typeof(guess));
    //     console.log(guess);
    //     // console.log(" The user Entered value is " + document.getElementById('user-input').value);
    //     document.getElementById('response-id').textContent = "Sorry Try Again!";
        
    
    // }
      

})


let resbtn = document.querySelector(".reset");

resbtn.addEventListener('click',function () {


    console.log("Reset button pressed");
    let score = 0;
    document.querySelector('.score').textContent = score;    
    let secretNumber = 0;
    document.querySelector('.secret-num').textContent = secretNumber;
    document.getElementById('user-input').value ="";
    document.getElementById('response-id').textContent = "Start Playing the Game by Entering Number 1-20";
    document.querySelector('.secret-num').textContent = "?";
})