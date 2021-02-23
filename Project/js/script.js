window.onload = function() {
	let btnLock = document.getElementById('btn-lock');
	let a = document.querySelectorAll('.a')
function lock() {
	var win = $(window).height();
	$('html, body').animate({scrollTop: win}, 800);
	return false;
};
function blockButton(){
	let i = 0;
	return function e (){
		if( i == a.length - 1){
			a[i].addEventListener('click' , function(){
				alert('In Developing');
			})
		} else {
			i++
			e();};};};
const blockactive = blockButton();
blockactive();
btnLock.addEventListener('click' , lock);
}
