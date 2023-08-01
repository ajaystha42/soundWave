<?php

// Database Configuration
$servername = "localhost";
$username = "soundwave";
$password = "123";
$dbname = "soundwave_db";

// Creating Database Connection
$con = mysqli_connect($servername, $username, $password, $dbname);


// Connection Error
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

// Update Submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Getting Value from Form
      $firstName = mysqli_real_escape_string($con, $_POST["firstname"]);
      $lastName = mysqli_real_escape_string($con, $_POST["lastname"]);
      $address = mysqli_real_escape_string($con, $_POST["address"]);
      $contact = mysqli_real_escape_string($con, $_POST["contact"]);
      $email = mysqli_real_escape_string($con, $_POST["email"]);
      
    // SQL Query
    $query = "UPDATE USERS SET first_name = '$firstName', last_name = '$lastName',
    contact ='$contact', address= '$address' WHERE email ='$email'";
    
    // Executing SQL Query
    if(mysqli_query($con, $query)) {
        $query = "SELECT * FROM USERS WHERE email = '$email'";

    // Executing SQL and fetching user's count
        $result = mysqli_query($con, $query);
         $user = mysqli_fetch_assoc($result);
         echo "<script>localStorage.removeItem('user');</script>";

         echo "<script>localStorage.setItem('user', '" . json_encode($user) . "');</script>";

        echo "<script>window.location ='./../html/userDetails.html'</script>";
    }
    else echo "Error Occured : " . $query . "<br>" . mysqli_error($con);

   
}



 // Closing Database Connection
 mysqli_close($con);

?>