$(document).ready(function () {
    $("#calculateBtn").click(function () {
        // Check if any of the form fields are empty
        if ($("#name").val() === '' || $("#phone").val() === '' || $("#address").val() === '' || $("#units").val() === '') {
            alert("Please fill in all Fields before Calculating the Bill.");
            return;
        }
        var name = $("#name").val();
        var phone = $("#phone").val();
        var address = $("#address").val();
        var units = $("#units").val();

        $.ajax({
            type: "POST",
            url: "calculate.php",
            data: {
                name: name,
                phone: phone,
                address: address,
                units: units
            },
            success: function (data) {
                $("#result").html("Total Bill: Rs. " + data);
            },
            error: function (error) {
                console.log("Error:", error);
            }
        });
    });

    $("#displayDataBtn").click(function () {
        $.getJSON("bill_data.json", function (data) {
            if (data.length > 0) {
                var table = '<table class="table table-bordered"><thead><tr><th>Name</th><th>Phone</th><th>Address</th><th>Units</th><th>Total Bill</th></tr></thead><tbody>';
                $.each(data, function (index, record) {
                    table += '<tr><td>' + record.name + '</td><td>' + record.phone + '</td><td>' + record.address + '</td><td>' + record.units + '</td><td>' + record.totalBill + '</td></tr>';
                });
                table += '</tbody></table>';
                $("#billTable").html(table);
            } else {
                $("#billTable").html("No data available.");
            }
        }).fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
            $("#billTable").html("Error fetching data.");
        });
    });
    $("#clearDataBtn").click(function () {
        $("#billTable").empty(); // Clear the table content
    });
});
