<?php
require_once("db_config.php");

$sql = "CREATE TABLE IF NOT EXISTS studrecord (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prn VARCHAR(20) NOT NULL,
    name VARCHAR(255) NOT NULL,
    division VARCHAR(10) NOT NULL,
    phone VARCHAR(15) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
