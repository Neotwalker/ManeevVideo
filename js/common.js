$(document).ready(function () {

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function () {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});


	$(".animation_1").animated("zoomIn");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head, .main_color_bg").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

	$(".toggle_mnu").click(function () {
		$(".sandwich").toggleClass("active");
		if ($('.top_mnu').is(':visible')) {
			$('.gradient-button').css('background-image', '');
			$('.gradient-button').css('background-position', '');
		} else {
			$('.gradient-button').css('background-image', 'linear-gradient(to right, #4830F0, #9EEFE1, #4830F0');
			$('.gradient-button').css('background-position', '100% 0');
		};
	});

	$(document).ready(function () {

		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('#button-up').fadeIn();
				$('#button-up').css('opacity', '0.85');
			} else {
				$('#button-up').fadeOut();
				$('#button-up').css('opacity', '0');
			}
		});

		$('#button-up').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});

	});

	$(".top_mnu ul a").click(function () {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
		$(".main-text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function () {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {

			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

	$('.btn').click(function (event) {
		$('.block').removeClass('active')
		var num = $(this).attr('data-num');
		$('#block' + num).addClass('active')
	});
	$(".btn").on("click", function () {
		$(".btn").removeClass("active");
		$(this).addClass("active");
	});

	$('#js-carousel-3').owlCarousel({
		dotsEach: 4,
		nav: true,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		navText: [
			'<i class="fa fa-caret-square-o-left"></i>',
			'<i class="fa fa-caret-square-o-right"></i>'
		],
		responsive: {
			0: {
				items: 2
			},
			480: {
				items: 3
			},
			768: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	});

	$('#js-carousel-4').owlCarousel({
		items: 1,
		nav: true,
		navText: [
			'<i class="fa fa-caret-square-o-left"></i>',
			'<i class="fa fa-caret-square-o-right"></i>'
		],
	});

	$('#js-carousel-5').owlCarousel({
		loop: false,
		items: 1,
		dots: true
	});

	$('input[name="tel"]').mask("+7 (999) 999-99-99");

});

$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".top_text a").animated("fadeInLeft", "fadeOutRight");
	$(".main-text h1").animated("fadeInDown", "fadeOutUp");
	$(".main-text p").animated("fadeInUp", "fadeOutDown");

});

