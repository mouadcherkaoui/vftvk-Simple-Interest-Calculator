
// compute function
function compute1()
{
    // retrieve elements
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var resultElem = document.getElementById("result");

    // check params
    if(parseFloat(principal) <= 0 || principal == "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    // calculate interest
    else {
        var interest = principal * years * rate / 100;
        var temporary = (new Date()).getFullYear();
        temporary = temporary + parseInt(years);
        
        applyResult(resultElem, principal, rate, years);
    }
}

function applyResult(elem, principal, rate, years) {
    elem.innerHtml= "<div class='result'>"
    elem.innerHtml += " <u> <li>If you deposit " + principal + "</li>"
    elem.innerHtml += " <li>at an interest rate of " + rate + "%.</li>"
    elem.innerHtml += "<li>You will receive an amount of " + interest + ",</li>"
    elem.innerHTML += "<li>in the year " + tempY + "</li></ul><\div>";
}

// update rate label function
function updateRateLabel() {
    rate = document.getElementById("rate").value;

    document.getElementById("rateLabel").innerHTML = rate + " %";
}
