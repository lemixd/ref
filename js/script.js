var rocketAnim = bodymovin.loadAnimation({
	container: document.getElementById('rocket'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'js/rocket.json'
	})

var splashAnim = bodymovin.loadAnimation({
	container: document.getElementById('splash'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'js/splash.json'
	})