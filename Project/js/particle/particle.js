
    let	bubbles = document.getElementById('bubbles');
	let windowHeight = $(window).height();
	let par = partilesStart();
	let i = 0;
	/*
		window.addEventListener('scroll' , function(){
			let scrollWinY = window.scrollY;
			
			if ( scrollWinY < windowHeight) {
				i = 0;

				return i;
			//	bubbles.classList.add('feature-css');
			} else if ( scrollWinY > windowHeight){
				if (i == 0) {
				
				i = 1;
				return i;
			}
			//	bubbles.classList.remove('feature-css');
			} 

		});*/
/*
	window.addEventListener('scroll' , function(){
		let scrollWinY = window.scrollY;
		if (scrollWinY > windowHeight) {
			if( i == 1 ){
			partilesStart();
			return false;
			}
		}
	});
*/
	
function partilesStart() {



    var width, height, canvas, ctx, circles, target, animateHeader = true;
    initHeader();
    addListeners();


    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};



        canvas = document.getElementById('bubbles');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        circles = [];
        for(var x = 0; x < width*0.019; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }


    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.9;
            _this.scale = 0.1+Math.random()*0.9;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }

};









//!function(){function n(){c=!(document.body.scrollTop>a)}function t(){o=window.innerWidth,a=window.innerHeight,r.width=o,r.height=a}function i(){if(c){d.clearRect(0,0,o,a);for(var n in h)h[n].draw()}requestAnimationFrame(i)}function e(){function n(){t.pos.x=Math.random()*o,t.pos.y=a+100*Math.random(),t.alpha=.1+.9*Math.random(),t.scale=.1+.9*Math.random(),t.velocity=Math.random()}var t=this;t.pos={},n(),this.draw=function(){t.alpha<=0&&n(),t.pos.y-=t.velocity,t.alpha-=5e-4,d.beginPath(),d.arc(t.pos.x,t.pos.y,10*t.scale,0,2*Math.PI,!1),d.fillStyle="rgba(255,255,255,"+t.alpha+")",d.fill()}}var o,a,r,d,h,l,c=!0;!function(){o=window.innerWidth,a=window.innerHeight,l={x:0,y:a},(r=document.getElementById("bubbles")).width=o,r.height=a,d=r.getContext("2d"),h=[];for(var n=0;n<.012*o;n++){var t=new e;h.push(t)}i()}(),window.addEventListener("scroll",n),window.addEventListener("resize",t)}();