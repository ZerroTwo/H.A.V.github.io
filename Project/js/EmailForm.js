$('#sendMail').on('click' , function(e){
	let email = $('#email').val().trim();
	let name = $('#name').val().trim();
	let message = $('#message').val();
	let flag;
	$('#errorMessageName , #errorMessageEmail , #errorMessageText').html('');
	/*Проверка ПОЛНАЯ ЕРУНДА, ПРОСТИТЕ )))))*/
	if (name == '') {
		$('.btn-name , .btn-email , .type-order').removeClass('error');
		$('#errorMessageName').text('Enter your name');
		$('.btn-name').addClass('error');
		flag = false;
	} else if (email == ''){
		$('.btn-name , .btn-email , .type-order').removeClass('error');
		$('#errorMessageEmail').text('Enter your email');
		$('.btn-email').addClass('error');
		flag = false;
	}	else if (message.length < 10) {
		$('.btn-name , .btn-email , .type-order').removeClass('error');
		$('#errorMessageText').text('At least 10 characters');
		$('.type-order').addClass('error');
		flag = false;
	} else {
		flag = true;
	}
	if(!flag){
		return flag;
	}
	
	$('#errorMessage').text('');
	$.ajax({
		url: 'ajax/mail.php',
		type: 'POST',
		cache : false,
		data: {'name' : name , 'email' : email , 'message' : message},
		dataType: 'html',
		beforeSend: function() {
			$('#sendMail').prop('disabled',  true);
		},
		success: function(data){
			if (!data == false) 
			alert('Error ***');
		 else 
		 	$('#form').trigger('reset');

			$('#sendMail').prop('disabled',  false);
}});});
