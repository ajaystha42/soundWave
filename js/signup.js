$(document).ready(function () {
  $("#userRegistrationForm").validate({
    rules: {
      firstname: {
        required: true,
      },
      lastname: {
        required: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      confirmPassword: {
        required: true,
        equalTo: "#password",
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
      gender: {
        required: true,
      },
      address: {
        required: true,
      },
      dob: {
        required: true,
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
      address: {
        required: "Please enter a address",
      },
      email: {
        required: "Please enter your email",
      },
      password: {
        required: "Please enter a password",
        minlength: "Your password must be at least 5 characters long",
      },
      contact: {
        required: "Please enter your phone number",
        minlength: "Your phone number must be 10 digit",
      },
      gender: {
        required: "Please select your gender",
      },
      country: {
        required: "Please select your country",
      },
      confirmPassword: {
        required: "Please confirm your password",
        equalTo: "Your passwords do not match",
      },
      dob: {
        required: "Please select your DOB",
      },
    },
  });
});
