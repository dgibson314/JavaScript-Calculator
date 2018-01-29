function isOperator(x) {
    return (x === "(" || x === ")" || x === "/" || x === "x" ||
            x === "-" || x === "+" || x === "(-)" || x === ".");
}

function updateDisplay(button) {
    var buttonVal = $(button).text();
    var buttonType = $(button).attr("class");
    var currValDisplay = $("#current-val").text();


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
            if (currValDisplay !== "0" && !isOperator(currValDisplay)) {
                $("#current-val").text(buttonVal);
                $("#op-chain").append(buttonVal);
            }
            break;

        // Number
        case "num-btn":
            if (currValDisplay === "0") {
                if (buttonVal !== "0") {
                    $("#current-val").text(buttonVal);
                    $("#op-chain").text(buttonVal);
                }
                else {}
            }
            else if (isOperator(currValDisplay)){
                $("#current-val").text(buttonVal);
                $("#op-chain").append(buttonVal);
            }
            else {
                $("#current-val").append(buttonVal);
                $("#op-chain").append(buttonVal);
            }
            break;
    }

}

$(document).ready(function() {
    
    $("button").on("click", function() {
        updateDisplay(this);
    });

});
