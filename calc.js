$(document).ready(function() {
    
    $("button").click(function() {
        var text = $(this).text();
        switch ($(this).attr("class")) {
            // AC or CE
            case "special-btn":
                if (text === "AC") {
                    $("#current-val").text("0");
                    $("#op-chain").text("0");
                }
                break;

            // Operator
            case "op-btn":
                break;

            // Number
            case "num-btn":
                break;
        }
    });

});
