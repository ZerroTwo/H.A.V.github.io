window.onload = function() {
	let btnLock = document.getElementById('btn-lock');
	let a = document.querySelectorAll('.a')
function lock() {
	var win = $(window).height() + 1;
	$('html, body').animate({scrollTop: win}, 800);
	return false;
};
btnLock.addEventListener('click' , lock);
function blockButton(){
	let i = 0;
	return function e (){
		if( i == a.length - 1){
			a[i].addEventListener('click' , function(){
				alert('In Developing');
			})
		} else {
			i++
			e();
		};};};
const blockactive = blockButton();
blockactive();}
