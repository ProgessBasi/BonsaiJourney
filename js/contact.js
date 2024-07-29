// Get all the input fields
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const feedback = document.getElementById("feedback");
const form = document.getElementById("form");

// Get all the error spans
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const feedbackError = document.getElementById("feedbackError");

// Add event listener to the form
form.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();

  // Name validation
  if (!/^[a-zA-Z]+$/.test(name.value)) {
    nameError.textContent = "Name can only contain letters";
    return false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailError.textContent = "Please enter a valid email address";
    return false;
  } else {
    emailError.textContent = "";
  }

  // Phone number validation

  if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.value.match(phone)) {
    return true;
  } else {
    phoneError.textContent = "Please enter a valid phonenum";
    return false;
  }

  // Feedback validation
  if (feedback.value.split(" ").length < 10) {
    feedbackError.textContent = "Feedback must contain at least 10 words";
    return false;
  } else {
    feedbackError.textContent = "";
  }
  
  //Reset the form after successful validation
  form.reset();
  //Submit the form after successful validation
  form.submit();
}
