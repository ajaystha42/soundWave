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
if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    // Getting Value from Form
      $firstName = mysqli_real_escape_string($con, $_POST["firstname"]);
      $lastName = mysqli_real_escape_string($con, $_POST["lastname"]);
      $password = mysqli_real_escape_string($con, $_POST["password"]);
      $email = mysqli_real_escape_string($con, $_POST["email"]);
      $gender = mysqli_real_escape_string($con, $_POST["gender"]);
      $contact = mysqli_real_escape_string($con, $_POST["contact"]);
      $country = mysqli_real_escape_string($con, $_POST["country"]);
      $address = mysqli_real_escape_string($con, $_POST["address"]);

    // Encrypting Password
    $encrypted_password = password_hash($password, PASSWORD_BCRYPT);


    // SQL Query
    $query = "UPDATE USERS SET firstName = '$firstName', lastName = '$lastName', password ='$password' gender ='$gender', 
    contact ='$contact',country ='$country', address= '$address' WHERE email ='$email'";

    // Executing SQL Query
    if(mysqli_query($con, $query)) echo "Data updated successfully!!";
    else echo "Error Occured : " . $query . "<br>" . mysqli_error($con);

   
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
        // SQL Query
    $query = "SELECT * FROM USERS";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo "<h1>Users</h1>";
        while ($row = $result->fetch_assoc()) {
            echo "First Name: " . $row['first_name'] . ",Last Name: " . $row['last_name'] . ", Email: " . $row['email'] . ", Gender: " . $row['gender'] .", Contact: " . $row['contact'] .", Country: " . $row['country'] .", Address: " . $row['address'] . "<br>";
        }
    } else {
        echo "No users found.";
    }
}


 // Closing Database Connection
 mysqli_close($con);

?>