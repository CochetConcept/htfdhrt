TweenLite.set("#questionreponse", {perspective:1200});

var tl = new TimelineLite({});

tl
.to("#question", 1, {rotationX:180 , autoAlpha:0, ease:Linear.easeNone})
.from("#reponse", 1, {rotationX:"-180", zIndex:"0", autoAlpha:0, ease:Linear.easeNone}, '-=1')
.pause()     
      
      
$('.btn-question').click(function(e){
	tl.timeScale(1);
	tl.play();
})
		
$('.btn-question-close').click(function(e){
	tl.timeScale(1);
	tl.reverse();
})






/* Version 2.0 */

/*

TweenLite.set("#questionreponse", {perspective:800});

var tl = new TimelineLite({});

tl
.to("#question", 1, {rotationX:180, ease:Linear.easeNone}, '-=1')

.from("#reponse", 1, {rotationX:"180", zIndex:"0", ease:Linear.easeNone}, '-=1') 
  
*/  








/* Version 1.0 */

/*

TweenLite.set("#questionreponse", {perspective:800});

var tl = new TimelineMax({});

tl.to("#question", 1, {rotationX:180, ease:Linear.easeNone}, '-=1')
.set("#reponse", {scaleY:-1, zIndex:"2"})
.to("#reponse", 1, {rotationX:"180", ease:Linear.easeNone}, '-=1')  
  
*/  