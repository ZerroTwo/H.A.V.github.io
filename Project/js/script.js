window.onload = function() {
	let block = document.querySelectorAll('.block');
	console.log(block);
	let scene = document.getElementById('scene');

	let parallaxInstance  = new Parallax(scene);
	
	var tap = document.getElementsByClassName('tap');

	function scrollWin(x) {
		var win = (	$(window).height() + 1)* ++x;
		$('html, body').animate({scrollTop: win}, 800);
		return false;
};
	for( let i = 0 ; i < tap.length ; i++){
		tap[i].parentNode.addEventListener('click' , function(e){
			scrollWin(i);
	});};


function blockButton(){
	let i = 0;
	return function e (){
		if( i == block.length - 1){
			block[i].addEventListener('click' , function(){
				alert('In Developing');
			})
		} else {
			i++
			e();
		};};};
const blockactive = blockButton();
blockactive();}