function loginForm() {
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    var errorMessage = document.getElementById("error-message");
    errorMessage.classList.add("show");
    return false;
  }
}
