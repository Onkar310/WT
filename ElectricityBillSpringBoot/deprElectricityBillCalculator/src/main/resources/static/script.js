$(document).ready(function () {
    $("#billForm").submit(function (e) {
        e.preventDefault();

        var units = $("#units").val();

        $.ajax({
            type: "GET",
            url: "/calculateBill",
            data: {
                units: units
            },
            success: function (result) {
                $("#result").html("Electricity Bill: Rs. " + result);
            }
        });
    });
});
