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

// Signup Submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Getting Value from Form
      $firstName = mysqli_real_escape_string($conn, $_POST["firstName"]);
      $lastName = mysqli_real_escape_string($conn, $_POST["lastName"]);
      $password = mysqli_real_escape_string($conn, $_POST["password"]);
      $email = mysqli_real_escape_string($conn, $_POST["email"]);
      $gender = mysqli_real_escape_string($conn, $_POST["gender"]);
      $contact = mysqli_real_escape_string($conn, $_POST["contact"]);
      $country = mysqli_real_escape_string($conn, $_POST["country"]);
      $address = mysqli_real_escape_string($conn, $_POST["address"]);

    // Encrypting Password
    $encrypted_password = password_hash($password, PASSWORD_BCRYPT);


    // SQL Query
    $query = "INSERT INTO USERS (first_name, last_name, email, password, gender, contact, country, address) 
            VALUES('$firstName', '$lastName', '$password', '$email', '$gender', '$contact', '$country', '$address')";

    // Executing SQL Query
    if(mysqli_query($con, $query)) echo "Data inserted successfully!!";
    else echo "Error Occured : " . $query . "<br>" . mysqli_error($conn);

    // Closing Database Connection
    mysqli_close($con);
}

?>