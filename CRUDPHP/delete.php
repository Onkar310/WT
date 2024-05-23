<?php
require_once("db_config.php");

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    // Get the ID from the URL parameter
    $id = $_GET["id"];

    // Use prepared statement to prevent SQL injection
    $stmt = $conn->prepare("DELETE FROM studrecord WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Invalid request method";
}

$conn->close();
