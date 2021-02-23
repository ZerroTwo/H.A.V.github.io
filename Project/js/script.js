window.onload = function() {
/*	let arrow = document.querySelector('.arrow');
	let major = document.querySelector('.major');
	let grid = document.querySelector('.grid');
	let myJob = document.querySelector('.myjob');
	let body = document.getElementById('body');*/
	let btnLock = document.getElementById('btn-lock');
	let a = document.querySelectorAll('.a')



/*
function opacityMajor(){
	major.classList.add('active');
	arrow.classList.add('active');
};
opacityMajor();

function appearanceMyJob (){
	myJob.classList.add('active');
};

function appearance (){
	if( i < grid.children.length){
		grid.children[i].classList.add('active');
		i++;
		setTimeout(appearance, 350);
	};
};

*/
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
			e();
		};};};


const blockactive = blockButton();

blockactive();


btnLock.addEventListener('click' , lock);


}
