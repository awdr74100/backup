$("#go").on("submit", function (e) {
    e.preventDefault();
    var data = $("#go").serialize();
    $.post("register.php", data,
        function (data) {
            $("#go").html(data);
        },
        "dataType"
    );
});