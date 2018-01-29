function updateDisplay(button) {
    var buttonVal = $(button).text();
    var buttonType = $(button).attr("class");

    switch (buttonType) {
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
            var currValDisplay = $("#current-val").text();
            if (currValDisplay === "0") {
                if (buttonVal !== "0") {
                    $("#current-val").text(buttonVal);
                }
                else {}
            }
            else {
                $("#current-val").append(buttonVal);
            }
            break;
    }

}

$(document).ready(function() {
    
    $("button").on("click", function() {
        updateDisplay(this);
    });

});
