function loginVakidationForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Incorrect email address or false");
    return false;
  }
}
