<?php
require_once("db_config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the data from the POST request
    $id = $_GET["id"];
    $prn = $_POST["prn"];
    $name = $_POST["name"];
    $division = $_POST["division"];
    $phone = $_POST["phone"];

    // Use prepared statement to prevent SQL injection
    $stmt = $conn->prepare("UPDATE studrecord SET prn=?, name=?, division=?, phone=? WHERE id=?");
    $stmt->bind_param("ssssi", $prn, $name, $division, $phone, $id);

    if ($stmt->execute()) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Invalid request method";
}

$conn->close();
