function compute()
{
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;
    
    var resultElement = document.getElementById("result");
    resultElement.innerText = interest;
}
        

function updateRate() {
   var rateValue = document.getElementById("rate-value");
   var rateElem = document.getElementById("rate");
   rateValue.innerText = rateElem.value;
}