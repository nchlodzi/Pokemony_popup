$(document).ready(function(){

	function closePopUp2(){

		$('.popUpExit').on('click', function(){
			$('.newsletterPopUp').hide();

		})

		$('.popUpBg-gray').on('click', function(){
			$(this).parent('.newsletterPopUp').hide();

		})
	}

	function popUpFocus2(){
		var email = $('#popUpEmail');
		var emailVal = email.val();
		var errorEmail = $('.popUpErrorEmail');

		email.on('focus', function(){
			email.css('border', '1px solid #f90000');
			$(errorEmail).hide();
			if(emailVal == "Podaj swój adres e-mail"){
				emailVal == email.val('');
			};
		});
	}



	function validation2(){
		var form = $('form');
		var email = $('#popUpEmail');
		var errorEmail = $('.popUpErrorEmail');
		var button = $('.popUpButton');
		var popUpMain = $('.popUpMain');
        var popUpMain2 = $('.popUpMain2');
        var popUp = $('.newsletterPopUp');


		$(button).on('click', function(event){
			event.preventDefault();
			var newEmail = email.val();

			if ((newEmail.indexOf('.') == -1) && (newEmail.indexOf('@') === -1)){
				$(errorEmail).show();
				event.preventDefault();	
			}
			else{
				$(popUpMain).hide();
			 	$(popUpMain2).show();
				$(popUp).delay(7000).hide(0);
			}

		})


	}

	closePopUp2();
	validation2();
	popUpFocus2();
});