function calculateCompoundInterest() {
	var principal = parseFloat(document.getElementById("principal").value);
	var interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;
	var years = parseInt(document.getElementById("years").value);

	var total = principal * Math.pow(1 + interestRate, years);
	var interest = total - principal;

	var result = "Total: R$" + total.toFixed(2) + "<br>";
	result += "Juros: R$" + interest.toFixed(2);

	document.getElementById("result").innerHTML = result;
}