
// compute function
function compute()
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
        
        applyResult(resultElem, principal, interest, rate, temporary);
    }
}

function applyResult(elem, principal, interest, rate, years) {
    elem.innerHtml= "<div class='result'> <ul> <li>If you deposit " + principal + "</li> <li>at an interest rate of " + rate + "%.</li><li>You will receive an amount of " + interest + ",</li><li>in the year " + years + "</li></ul></div>";
}

// update rate label function
function updateRateLabel() {
    rate = document.getElementById("rate").value;

    document.getElementById("rateLabel").innerHTML = rate + " %";
}
