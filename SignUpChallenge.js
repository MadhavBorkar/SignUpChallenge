document.getElementById('btn').addEventListener('click', SubmitForm);

function SubmitForm() {
  const emailValid = validateEmail();
  const passwordValid = validatePassword();

  const confirmSubmission = window.confirm('Are you sure you want to submit?');
  if (emailValid && passwordValid && confirmSubmission) {
    alert("Successful signup!");
    document.getElementById('form').submit();
  } else if (emailValid && passwordValid) {
    alert("Submission canceled.");
  } else {
    alert("fill form correctly.");
  }
}

function validateEmail() {
  const email = document.querySelector("#email");
  const emailBox = document.querySelector(".emailBox");
  const emailText = document.querySelector(".emailText");
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

  if (email.value.match(emailPattern)) {
    emailBox.classList.add("valid");
    emailBox.classList.remove("invalid");
    emailText.innerHTML = "Your Email Address is Valid";
    return true;
  } else {
    emailBox.classList.add("invalid");
    emailBox.classList.remove("valid");
    emailText.innerHTML = "Must be a valid email address.";
    return false;
  }
}

function validatePassword() {
  const password = document.querySelector("#password");
  const passBox = document.querySelector(".passBox");
  const passText = document.querySelector(".passText");
  const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  if (password.value.match(passPattern)) {
    passBox.classList.add("valid");
    passBox.classList.remove("invalid");
    passText.innerHTML = "Your Password is Valid";
    return true;
  } else {
    passBox.classList.add("invalid");
    passBox.classList.remove("valid");
    passText.innerHTML ="Your password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number and one symbol .";
    return false;
  }
}

document.querySelector("#email").addEventListener("input", validateEmail);
document.querySelector("#password").addEventListener("input", validatePassword);