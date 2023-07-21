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

// Login Submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Getting Value from Form
    $email = mysqli_real_escape_string($con, $_POST["email"]);
    $password = mysqli_real_escape_string($con, $_POST["password"]);
    

    // SQL Query
    $query = "SELECT * FROM USERS WHERE email = '$email'";

    // Executing SQL and fetching user's count
    $result = mysqli_query($con, $query);

    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);

        // Verifying Password
        if (password_verify($password, $user["password"])) {
            //set the email in the local storage if the password is verified.
                echo "<script>localStorage.setItem('email', '" . $email . "');</script>";

            // Redirect to index.html after setting the localStorage variable is set
            echo "<script>window.location ='./../index.html'</script>";
            
            exit; // Add exit to ensure no further code execution after redirect
        } else {
            echo "Invalid Password, Try Again.";
        }
    } else {
        echo "User doesn't exist";
    }

    
}

// Closing Database Connection
mysqli_close($con);
?>
