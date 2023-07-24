function validateForm() {
  let result = true;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  if (email === "" || password === "") {
    if (emailError) emailError?.classList.remove("error-hidden");
    if (passwordError) passwordError?.classList.remove("error-hidden");
    result = false;
  }
  return result;
}
