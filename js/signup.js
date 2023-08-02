$(document).ready(function () {
  $("#userRegistrationForm").validate({
    rules: {
      password: {
        required: true,
        minlength: 8,
        strongPassword: true,
      },
      confirmPassword: {
        required: true,
        equalTo: "#password",
      },
      email: {
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
      address: {
        required: "Please enter a address",
      },
      email: {
        required: "Please enter your email",
      },
      password: {
        required: "Please enter a password",
        minlength: "Your password must be at least 8 characters long",
        strongPassword:
          "The password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long",
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
  $.validator.addMethod(
    "strongPassword",
    function (value, element) {
      return (
        this.optional(element) ||
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)
      );
    },
    "The password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long"
  );

  document.querySelector(".nav-menu-btn").addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("show");
  });

  // Clear the cart when user clicks on Clear Cart button
  document.querySelector(".clear-cart-btn").addEventListener("click", () => {
    localStorage.removeItem("cart");
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
  });
});
