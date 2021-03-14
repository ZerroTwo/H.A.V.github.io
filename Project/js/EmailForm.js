$('#sendMail').on('click' , function(){
	var email = $('#email').val().trim();
	var name = $('#name').val().trim();
	var message = $('#message').val();
	if (name == '') {
		$('.btn-name , .btn-email , .type-order').removeClass('error');
		$('#errorMessageName , #errorMessageEmail , #errorMessageText').html('');
		$('#errorMessageName').text('Введите Имя');
		$('.btn-name').addClass('error');
		return false;
	} else if (email == ''){
		$('.btn-name , .btn-email , .type-order').removeClass('error');
		$('#errorMessageName , #errorMessageEmail , #errorMessageText').html('');
		$('#errorMessageEmail').text('Введите email');
		$('.btn-email').addClass('error');
		return false;
	}	else if (message.length < 10) {
		$('.btn-name , .btn-email , .type-order').removeClass('error');
		$('#errorMessageName , #errorMessageEmail , #errorMessageText').html('');
		$('#errorMessageText').text('Введите не менее 10 символов');
		$('.type-order').addClass('error');
		return false;
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
			alert('Были ошибки, сообщение не отправлено');
		 else 
		 	$('#form').trigger('reset');

			$('#sendMail').prop('disabled',  false);
}});});
