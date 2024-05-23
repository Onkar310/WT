<?php
require_once("db_config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prn = $_POST["prn"];
    $name = $_POST["name"];
    $division = $_POST["division"];
    $phone = $_POST["phone"];

    $sql = "INSERT INTO studrecord (prn, name, division, phone) VALUES ('$prn', '$name', '$division', '$phone')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
