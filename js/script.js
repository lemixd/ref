// Lottie animation properties
var rocketAnim = bodymovin.loadAnimation({
	container: document.getElementById('rocket'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'js/rocket.json'
	});

var splashAnim = bodymovin.loadAnimation({
	container: document.getElementById('splash'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'js/splash.json'
	});


// Thousands separator for numbers
function numberFormatting(numberToFormat) {

	var numberToFormat = 1500483;

	var parts = numberToFormat.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	return parts.join(".")
}

document.getElementById('paymentCounter').innerHTML = numberFormatting();