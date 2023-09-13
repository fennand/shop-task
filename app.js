let message;

//Ask customer name

let username = prompt("Hello customer, what is you name?");

//Start age verification process

let age = prompt("Age verification, how old are you? (just type the numbers)");

if (age <= 17) {
  message = "There are restrictions in place on the purchase of alcohol, cigarettes, and some media (movies, TV boxsets)";
} else if (age > 18) {
  message = "Have at it!";
} else {
  message = "DOES NOT COMPUTE! You have not entered a valid age. Please refresh the page and enter just the numers of your age (ie for 21 years old just type 21)";
}

message = "Hello " + username + ". " + message;
document.write(message);

//Over 18 confirmation button

function myFunction() {
    var txt;
    if (confirm("Only click OK to continue if you are over 18")) {
      txt = "Over 18";
    } else {
      txt = "Under 18";
    }
    document.getElementById("demo").innerHTML = txt;
  }

//Discount button

  function toggleText() {
    let text = document.getElementById("demo1");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }