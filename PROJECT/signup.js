function myFunction0() {
  var x = document.getElementById("myInput0");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunction1() {
  var x = document.getElementById("myInput1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Signup form submitted!");
});
