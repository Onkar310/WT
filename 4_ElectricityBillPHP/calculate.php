<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? $_POST["name"] : '';
    $phone = isset($_POST["phone"]) ? $_POST["phone"] : '';
    $address = isset($_POST["address"]) ? $_POST["address"] : '';
    $units = isset($_POST["units"]) ? $_POST["units"] : '';
    $totalBill = 0;

    if ($units <= 50) {
        $totalBill = $units * 3.50;
    } elseif ($units <= 150) {
        $totalBill = (50 * 3.50) + (($units - 50) * 4.00);
    } elseif ($units <= 250) {
        $totalBill = (50 * 3.50) + (100 * 4.00) + (($units - 150) * 5.20);
    } else {
        $totalBill = (50 * 3.50) + (100 * 4.00) + (100 * 5.20) + (($units - 250) * 6.50);
    }

    // Save data to a file (create the file if it doesn't exist)
    $filename = 'bill_data.json';
    $billRecords = json_decode(file_get_contents($filename), true) ?: array();
    $billData = array(
        'name' => $name,
        'phone' => $phone,
        'address' => $address,
        'units' => $units,
        'totalBill' => $totalBill
    );
    $billRecords[] = $billData;
    file_put_contents($filename, json_encode($billRecords));

    echo number_format($totalBill, 2);
}
