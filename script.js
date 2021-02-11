
// compute function
function compute()
{
    // retrieve elements
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var resultElem = document.getElementById("result");

    if(parseFloat(principal) <= 0 || principal == "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        var interest = principal * years * rate / 100;
        var temporary = (new Date()).getFullYear();
        temporary = temporary + parseInt(years);
        
        resultElem.innerHTML= `
        <div class='result'> 
            <ul> 
                <li>If you deposit ${principal} </li> 
                <li>at an interest rate of ${rate}%. </li>
                <li>You will receive an amount of ${interest} </li>
                <li>in the year ${temporary}</li>
            </ul>
        </div>`;
    }
}

// update rate label function
function updateRate() {
    document.getElementById("rate-value").innerHTML = `${document.getElementById("rate").value * 10}%`;
}
