// Lottie animation properties
var rocketAnim = bodymovin.loadAnimation({
	container: document.getElementById('rocket'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'js/rocket.json'
	});

// var splashAnim = bodymovin.loadAnimation({
// 	container: document.getElementById('splash'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: true,
// 	path: 'js/splash.json'
// 	});

	
    // var params = {
	// 	container: document.getElementById('splash'),
	// 	renderer: 'svg',
	// 	loop: true,
	// 	autoplay: true,
	// 	path: 'js/splash.json'
	// };

    // var anim = lottie.loadAnimation(params);
    // let splash = document.getElementById('splash');
    // splash.addEventListener("mouseenter", function () {
	// // anim.setSpeed(3);
	// // anim.play();
    // });

    // splash.addEventListener("mouseleave", function () {
	// // anim.setSpeed(1);
	// // anim.pause();
    // });



	
	// var observer = new MutationObserver(function(mutations) {
	// 	mutations.forEach(function(mutationRecord) {
	// 		console.log(mutationRecord.type);
	// 	});    
	// });

	// var config = { attributes: true, childList: true, characterData: true }

	// observer.observe(rocket, config);




var spacegirlAnim = bodymovin.loadAnimation({
	container: document.getElementById('spacegirl'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'js/spacegirl.json'
	});


// Thousands separator for numbers
function numberFormatting(numberToFormat) {

	var numberToFormat = 1500483;

	var parts = numberToFormat.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	return parts.join(".")
}

document.getElementById('paymentCounter').innerHTML = numberFormatting();


// Parallax
window.addEventListener('scroll', function(e) {

	const target = document.querySelectorAll('.scroll');

	var index = 0, length = target.length;
	for (index; index < length; index++) {
		var pos = window.pageYOffset * target[index].dataset.rate;

		if(target[index].dataset.direction === 'vertical') {
			target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
		} else {
			var posX = window.pageYOffset * target[index].dataset.ratex;
			var posY = window.pageYOffset * target[index].dataset.ratey;
			
			target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
		}
	}
});



// Video modal toggle
function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popup-video");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}


// Animation on scroll
var wow = new WOW(
	{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       false,      
		live:         true        // default
		}
	)
wow.init();



// Swiper slider init
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 24,
	centeredSlides: true,
	loop: true,
	roundLengths : true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        }
      }
});