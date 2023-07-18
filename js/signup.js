$(document).ready(function () {
  $("#userRegistrationForm").validate({
    rules: {
      firstname: {
        required: true,
        minlength: 2,
      },
      lastname: {
        required: true,
        minlength: 2,
      },
      password: {
        required: true,
        minlength: 8,
      },
      email: {
        required: true,
      },
      contact: {
        required: true,
      },
      country: {
        required: true,
      },
      address: {
        required: true,
        minlength: 40,
      },
    },
    messages: {
      firstname: {
        required: "Please enter your first name",
        minlength: "Your first name must be at least 5 characters long",
      },
      lastname: {
        required: "Please enter your last name",
        minlength: "Your last name must be at least 5 characters long",
      },
      password: {
        required: "Please enter a password",
        minlength: "Your password must be at least 8 characters long",
      },
      contact: {
        required: "Please enter your phone number",
        minlength: "Your phone number must be 10 digit",
      },
    },
  });
});

$("#country_selector").countrySelect({
  defaultCountry: "us",
  defaultStyling: "inside",
});
