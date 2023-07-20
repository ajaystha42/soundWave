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

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    // Getting Value from Form
      $email = mysqli_real_escape_string($con, $_POST["email"]);

    // SQL Query
    $query = "DELETE FROM USERS WHERE email = $email";


    // Executing SQL Query
    if(mysqli_query($con, $query)) echo "Data deleted successfully!!";
    else echo "Error Occured : " . $query . "<br>" . mysqli_error($con);
}
 // Closing Database Connection
 mysqli_close($con);

?>