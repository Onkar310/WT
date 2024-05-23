<?php
require_once("db_config.php");

$sql = "SELECT * FROM studrecord";
$result = $conn->query($sql);

$students = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $students[] = [
            "id" => $row["id"],
            "prn" => $row["prn"],
            "name" => $row["name"],
            "division" => $row["division"],
            "phone" => $row["phone"],
        ];
    }
}

$conn->close();

header("Content-Type: application/json");
echo json_encode($students);
