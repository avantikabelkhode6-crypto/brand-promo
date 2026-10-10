const form = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  // Stop the page from reloading on submit
  event.preventDefault();

  const email = emailInput.value.trim();

  if (email === "") {
    message.textContent = "Please enter your email.";
    message.style.color = "red";
  } else if (!email.includes("@")) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
  } else {
    message.textContent = "Thanks for subscribing!";
    message.style.color = "green";
    form.reset();
  }
});