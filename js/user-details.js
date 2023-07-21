function $(id) {
  return document.getElementById(id);
}

window.onload = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  $("firstname").value = user.firstName;
  $("lastname").value = user.lastName;
  $("address").value = user.address;
  $("email").value = user.email;
  $("password").value = user.password;
  // $("datepicker").value = user.dob;
  $("contact").value = user.contact;
  $("gender").value = user.gender;
  $("country_selector").value = user.country;
};
