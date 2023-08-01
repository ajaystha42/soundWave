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
            //setting user info to local storage
            echo "<script>localStorage.setItem('user', '" . json_encode($user) . "');</script>";

            // Redirecting to home page
            echo "<script>window.location ='./../index.html'</script>";
            // Adding exit stop further code execution after redirect
            exit; 
        } else {
             //For Validation in Login - Incorrect Password
            echo "<script>localStorage.setItem('email', '" . $email . "');</script>";
            echo "<script>localStorage.setItem('passworderror', '" . 'Password is incorrect' . "');</script>";
            echo "<script>window.location ='../html/login.html'</script>";
        }
    } else {
         //For Validation in Login - User Donot Exist
        echo "<script>localStorage.setItem('error', '" . 'User doesnot exist' . "');</script>";
        echo "<script>window.location ='../html/login.html'</script>";
    }

    
}

// Closing Database Connection
mysqli_close($con);
?>
