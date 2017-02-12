$(document).ready(function(){

	function showPopUp(){
		$('.buttonMain').on('click', function(){
			$('.popUpTalk').show();
		})

		$('.aboutUsSmallText').find('span').on('click', function(){
			$('.popUpTalk').show();
		})

		$('.videoPlaceholder').on('click', function(){
			$('.popUpVideo').show();
		})
	}

	function hidePopUp(){
		$('.exit').on('click', function(){
			$('.popUpTalk').hide();
		})

		$('.exitVideo').on('click', function(){
			$('.popUpVideo').hide();
		})
	}

	function fieldsFocus(){

		var name = $('.fieldName');
		var nameVal = name.val();
		var email = $('.fieldEmail');
		var emailVal = email.val();
		var message = $('.message');
		var messageVal = message.val();

		name.on('focus', function(){
			if(nameVal === "Name"){
				nameVal == name.val('');
			}
		})

		email.on('focus', function(){
			if(emailVal === "E-mail adresse"){
				emailVal == email.val('');
			}
		})

		message.on('focus', function(){
			if(messageVal === "Message"){
				messageVal == message.val('');
			}
		})

	}	
	

	function fieldsBlur(){
		
		
		var email = $('.fieldEmail');
		var emailVal = email.val();
		var message = $('.message');
		var messageVal = message.val();


		$('.fieldName').blur(function(){

			var nameVal = $('.fieldName').val();
			if(nameVal == ''){
				nameVal == $('.fieldName').val('Name');
			}
		})

		$('.fieldEmail').blur(function(){
			
			var emailVal = $('.fieldEmail').val();
			if(emailVal == ''){
				emailVal == $('.fieldEmail').val('E-mail adresse');
			}
		})

		$('.message').blur(function(){
			
			var messageVal = $('.message').val();
			if(messageVal == ''){
				messageVal == $('.message').val('Message');
			}
		})

	}	

	
	function odsylacz(){

		$('.arrowSend').find('a').on('click', function(){

			var href = $(this).attr('href');

		 	$('html, body').animate({
		        scrollTop: $(href).offset().top - 20
		    }, 1000);

				return false;
		})
		
	}

	
	$('.slickSlider').slick({
        centerMode: true,
  		slidesToShow: 1.65,
  		prevArrow: $('.arrowPrev'),
  		nextArrow: $('.arrowNext'),
  		infinite: true,
  		responsive: true,
      });

	var owl = $('.owl-carousel');
	owl.owlCarousel({
    	items:4,
   	 	center: true,
    	margin:50,
 	    loop:true,
 	    margin:10,
    	autoplay:true,
    	autoplayTimeout:3000,
    	autoplayHoverPause:true
	});
	
	$('.play').on('click',function(){
    	owl.trigger('autoplay.play.owl',[3000])
	})
	$('.stop').on('click',function(){
    	owl.trigger('autoplay.stop.owl')
	})
	

	
	showPopUp();
	hidePopUp();
	fieldsFocus();
	fieldsBlur();
	odsylacz();
	

});