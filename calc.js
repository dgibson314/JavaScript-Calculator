var ans = "";

function isOperator(str) {
    return (str === "(" || str === ")" || str === "/" || str === "x" ||
            str === "-" || str === "+" || str === "=");
}

function hasDecimal(str) {
    return (str.indexOf(".") !== -1);
}

function eraseLastToken(str) {
    var tokens = str.split("");
    
    var last = tokens.length - 1;
    if (isOperator(tokens[last])) {
        tokens.pop();
    }
    else {
        while (!isOperator(tokens[last])) {
            tokens.pop();
            last--;
        }
    }
    return tokens.join("");
}

function updateDisplay(button) {

    var buttonVal = $(button).text();
    var buttonType = $(button).attr("class");
    var currValDisplay = $("#current-val").text();
    var opChainDisplay = $("#op-chain").text();

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
                    $("#op-chain").text(eraseLastToken(opChainDisplay));
                    break;
                case ".":
                    if (isOperator(currValDisplay)) {
                        $("#current-val").text("0.");
                        $("#op-chain").append("0.");
                    }
                    else {
                        if (!hasDecimal(currValDisplay)) {
                            $("#current-val").append(".");
                            $("#op-chain").append(".");
                        }
                    }
                    break;
            }
            break;

        // Operator {'(', ')', '/', 'x', '-', '+', '='}
        case "op-btn":
            if (buttonVal === "=") {
                var cleanOpChain = opChainDisplay.replace("x", "*");
                var result = eval(cleanOpChain);
                if (hasDecimal(result.toString())) {
                    result = +result.toFixed(2);
                }
                ans = result;
                $("#current-val").text(result);
                $("#op-chain").append("=" + result);
            }
            else if (ans !== "") {
                $("#current-val").text(buttonVal);
                $("#op-chain").text(ans + buttonVal);
                ans = "";
            }
            else if (currValDisplay !== "0" && !isOperator(currValDisplay)) {
                $("#current-val").text(buttonVal);
                $("#op-chain").append(buttonVal);
            }
            break;

        // Number
        case "num-btn":
            if (currValDisplay === "0" || ans !== "") {
                if (buttonVal !== "0") {
                    $("#current-val").text(buttonVal);
                    $("#op-chain").text(buttonVal);
                }
                else {}
            }
            else if (currValDisplay === "_") {
                $("#current-val").text(buttonVal);
                $("#op-chain").append(buttonVal);
            }
            else if (isOperator(currValDisplay)){
                $("#current-val").text(buttonVal);
                $("#op-chain").append(buttonVal);
            }
            else {
                $("#current-val").append(buttonVal);
                $("#op-chain").append(buttonVal);
            }
            ans = "";
            break;
    }

}

$(document).ready(function() {

    $("button").on("click", function() {
        updateDisplay(this);
    });

});
