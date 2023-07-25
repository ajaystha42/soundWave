$(document).ready(function () {
  // first hide the container and show loader
  $(".form-container").hide();
  $(".loader").fadeOut();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  // wait for the loader to fade out and display the container with animation
  const timeout = setTimeout(() => {
    $(".form-container").show();
    $(".form-container").animate({
      left: "2px",
      opacity: "1",
      height: "100%",
      width: "100%",
    });
  }, 500);

  $("#firstname").val(user.first_name);
  $("#lastname").val(user.last_name);
  $("#address").val(user.address);
  $("#email").val(user.email);
  // $("password").value = user.password;
  $("#datepicker").val(user.dob);
  $("#contact").val(user.contact);
  $("#gender").val(user.gender);
  $("#country_selector").val(user.country);
});

// function $(id) {
//   return document.getElementById(id);
// }

// window.onload = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user);

//   $("firstname").value = user.first_name;
//   $("lastname").value = user.last_name;
//   $("address").value = user.address;
//   $("email").value = user.email;
//   // $("password").value = user.password;
//   $("datepicker").value = user.dob;
//   $("contact").value = user.contact;
//   $("gender").value = user.gender;
//   $("country_selector").value = user.country;
// };
