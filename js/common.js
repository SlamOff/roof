$(document).ready(function() {
	// remove placeholder after focus
	$(document).ready(function () {
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
 	});
 	//scrollto
 	$('.menu .scroll').mPageScroll2id();
	// lang
	$('.lang li').click(function(){
		$('.lang li').removeClass('active');
		$(this).addClass('active');
	});
	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});
	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});
	// accordion
	function resizeMobile(){
		if($(window).width() < 767){
			$('.why h4').click(function(){
				$('.why p').hide();
				$(this).siblings('p').slideToggle();
				console.log('11111');
			});
			$('.toggle_btn').click(function(){
				$(".sandwich").toggleClass("active");
				if($('.menu ul').is(':visible')) {
					$('.menu ul').slideUp(300);
				} else {
					$('.menu ul').slideDown(300);
				};
				console.log('88888');
			});
		}
	}
	resizeMobile();
	// toggle menu btn



	// counter translate
	var text1 = "днів", text2 = 'годин', text3 = 'хвилин';
	$('.ua_body #timer-text-cba4ffa6973e33402f91530ef54215bc-days').text(text1);
	$('.ua_body #timer-text-cba4ffa6973e33402f91530ef54215bc-hours').text(text2);
	$('.ua_body #timer-text-cba4ffa6973e33402f91530ef54215bc-minutes').text(text3);
	// translate validation
	var locationURL = window.location.pathname;
	if ( locationURL == "/index_ua.html" ) {
		var validationName = "Обов'язково для заповнення";
		var validationNameMax = "Від 2 до 16 літер";
		var validationPhone = "Введіть правильний номер";
		var validationEmail = "Введіть правильний E-mail";
		var text1 = "днів", text2 = 'годин', text3 = 'хвилин';
	}
	else {
		var validationName = "Обязательно для заполнения";
		var validationNameMax = "От 2 до 16 букв";
		var validationPhone = 'Введите корректный номер';
		var validationEmail = "Введите корректный E-mail";
		var text1 = "дней", text2 = 'часов', text3 = 'минут';
	}
	// sliders
	$('.brand_slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		//nextArrow: '.brand_next',
		//prevArrow: '.brand_prev',
		responsive: [
			{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5
			}
			},
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 4
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
			},
			{
			breakpoint: 580,
			settings: {
				slidesToShow: 2
			}
			},
			{
			breakpoint: 380,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	$('.brand_slider2').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		//nextArrow: '.brand_next2',
		//prevArrow: '.brand_prev2',
		responsive: [
			{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5
			}
			},
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 4
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
			},
			{
			breakpoint: 580,
			settings: {
				slidesToShow: 2
			}
			},
			{
			breakpoint: 380,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	$('.portfolio_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.portfolio_next',
		prevArrow: '.portfolio_prev',
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	$('.cert_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '.cert_next',
		prevArrow: '.cert_prev',
		dots: true,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
			}
		]
	});
	$('.review_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.review_next',
		prevArrow: '.review_prev',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	$( "#tabs" ).tabs();
	// $('.slider').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	nextArrow: '.slider_next',
	// 	prevArrow: '.slider_prev',
	// 	swipe: false,
	// 	dots:true,
	// 	responsive: [
	// 		{
	// 		breakpoint: 768,
	// 		settings: {
	// 			swipe: true
	// 		}
	// 		}
	// 	]
	// });
	// gallery cert
	$('.cert_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	function func (a,b){
		return a + b;
	}
	console.log(func(3,5));
	// click products
	var f = $('.right_slider .col-sm-4 img').click(function(){
		var imgSrc = $(this).attr('src');
		var leftImg = $(this).closest('.slider_content').find('.left_img img');
		leftImg.attr('src', imgSrc);
	});
	// gallery portfolio
	// if($(window).width() < 600){
	// 	$('.portfolio img').wrap('<a href="" class="portfolio_popup"></a>');
	// }
	// validation
	$('#mainForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#mainForm2').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#economForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#metalForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#bitumForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#compForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#natForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#fastForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#stepForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
});