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
    $query = "SELECT * FROM USERS WHERE email = $email";

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