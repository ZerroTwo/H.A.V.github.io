$('#sendMail').on('click' , function(e){
	let email = $('#email').val().trim();
	let name = $('#name').val().trim();
	let message = $('#message').val();
	let flag = true;
	

	
	function remove(){
		$('#errorMessageName , #errorMessageEmail , #errorMessageText').html('');
		$('.btn-name , .btn-email , .type-order').removeClass('error');
	}
	
	/*Проверка ПОЛНАЯ ЕРУНДА, ПРОСТИТЕ )))))*/
	if (name == '') {
		remove();
		$('#errorMessageName').text('Enter your name');
		$('.btn-name').addClass('error');
	} else if (email == ''){
		remove();
		$('#errorMessageEmail').text('Enter your email');
		$('.btn-email').addClass('error');
	}	else if (message.length < 10) {
		remove();
		$('#errorMessageText').text('At least 10 characters');
		$('.type-order').addClass('error');
	} else {
		remove();
		flag = false;
	}
	if(flag){
		return ;
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
