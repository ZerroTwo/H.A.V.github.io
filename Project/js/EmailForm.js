$('#sendMail').on('click' , function(e){
	var email = $('#email').val().trim();
	var name = $('#name').val().trim();
	var message = $('#message').val();
	
	$('#errorMessageName , #errorMessageEmail , #errorMessageText').html('');
	
	if (name == '') {
		$('.btn-name , .btn-email , .type-order').removeClass('error');
		$('#errorMessageName').text('Enter your name');
		$('.btn-name').addClass('error');
		e.preventDefault();
	} else if (email == ''){
		$('.btn-name , .btn-email , .type-order').removeClass('error');
		$('#errorMessageEmail').text('Enter your email');
		$('.btn-email').addClass('error');
		e.preventDefault();
	}	else if (message.length < 10) {
		$('.btn-name , .btn-email , .type-order').removeClass('error');
		$('#errorMessageText').text('At least 10 characters');
		$('.type-order').addClass('error');
		e.preventDefault();
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
