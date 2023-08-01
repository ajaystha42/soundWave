// $(document).ready(function () {
//   $("#loginForm").validate({
//     rules: {
//       password: {
//         required: true,
//         minlength: 8,
//         strongPassword: true,
//       },
//     },
//     messages: {
//       password: {
//         required: "Please enter a password",
//         strongPassword:
//           "The password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long",
//       },
//     },
//     errorPlacement: function (error, element) {
//       error.appendTo("#" + element.attr("id") + "Error");
//     },
//   });
//   // "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
//   $.validator.addMethod(
//     "strongPassword",
//     function (value, element) {
//       return (
//         this.optional(element) ||
//         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)
//       );
//     },
//     "The password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long"
//   );
// });

function validateForm() {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const passwordPattern = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$";

  const emailError = document.getElementById("email-error");
  // const passwordError = document.getElementById("password-error");

  emailError?.classList.add("error-hidden");
  passwordError?.classList.add("error-hidden");

  let result = true;
  let email = document.getElementById("email").value;
  // let password = document.getElementById("password").value;
  if (email === "") {
    if (email === "") emailError?.classList.remove("error-hidden");
    // if (password === "") passwordError?.classList.remove("error-hidden");
    result = false;
  }

  // Using REGEX
  else if (!email.match(emailPattern)) {
    document.getElementById("email-error").textContent = "Invalid email";
    emailError?.classList.remove("error-hidden");
    result = false;
  }
  return result;

  // Clear the cart when user clicks on Clear Cart button
  document.querySelector(".clear-cart-btn").addEventListener("click", () => {
    localStorage.removeItem("cart");
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
  });
}
