<?php
$servername = "127.0.0.1";
$username = "root";
$password = "115225";

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//echo "<script type='text/javascript'>alert('message');</script>";
$message =  $_POST["message_area"];
$user = $_POST["user"];
$sql = "INSERT INTO mydb.guest_book (message,user) VALUES ('$message','$user')";
echo $sql;
$result = $conn->query($sql);
echo mysqli_error($conn);
?>

