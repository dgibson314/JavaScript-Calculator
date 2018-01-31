function notNumber(str) {
    return (str === "(" || str === ")" || str === "/" || str === "x" ||
            str === "-" || str === "+" || str === "=" || str === "." ||
            str === "_");
}

function hasDecimal(str) {
    return (str.indexOf(".") !== -1);
}

function updateDisplay(button) {

    var buttonVal = $(button).text();
    var buttonType = $(button).attr("class");
    var currValDisplay = $("#current-val").text();


    switch (buttonType) {
        // AC, CE, decimal, negative
        case "special-btn":
            switch (buttonVal) {
                case "AC":
                    $("#current-val").text("0");
                    $("#op-chain").text("0");
                    break;
                case "CE":
                    $("#current-val").text("_");
                    break;
                case ".":
                    if (!notNumber(currValDisplay) &&
                        !hasDecimal(currValDisplay)) {
                        $("#current-val").append(buttonVal);
                        $("#op-chain").append(buttonVal);
                    }
                    break;
            }
            break;

        // Operator {'(', ')', '/', 'x', '-', '+', '='}
        case "op-btn":
            // TODO
            if (buttonVal === "=") {
            }

            if (currValDisplay !== "0" && !notNumber(currValDisplay)) {
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
            else if (notNumber(currValDisplay)){
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
