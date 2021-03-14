<?php
	$email = $_POST['email'];
	$name = $_POST['name'];
	$message = $_POST['message'];

	$subject = '=?utf-8?B?'.base64_encode('Сообщение с партфолио').'?=';
	$headers = 'Form: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n';

	$success = mail('pyshock375@mail.ru', $subject , $message , $headers);
	echo $success;


?>