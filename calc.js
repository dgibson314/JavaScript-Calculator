$(document).ready(function() {
    
    $("button").click(function() {
        var buttonVal = $(this).text();
        switch ($(this).attr("class")) {
            // AC or CE
            case "special-btn":
                if (buttonVal === "AC") {
                    $("#current-val").text("0");
                    $("#op-chain").text("0");
                }
                break;

            // Operator
            case "op-btn":
                break;

            // Number
            case "num-btn":
                var currVal = $("#current-val").text();
                if (currVal === "0") {
                    if (buttonVal !== "0") {
                        $("#current-val").text(buttonVal);
                    }
                    else {
                        ;
                    }
                }
                else {
                    $("#current-val").append(buttonVal);
                }
                break;
        }
    });

});
