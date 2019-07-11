var s 	   = 	document.getElementById("s");
var m 	   = 	document.getElementById("m");
var l 	   = 	document.getElementById("l");

var sM     =    document.getElementById("sM");
var mM     =    document.getElementById("mM");
var lM     =    document.getElementById("lM");
var grey   =    document.getElementById("grey");
var close  = 	document.getElementById("close");
var first  =    document.getElementById("first");
var modal2 =    document.getElementById("modal-pic");
var close2 =    document.getElementById("close2");
var change =    document.getElementById("change");
var modale =    document.getElementById("modale");
var video  =    document.getElementById("video");
var fourth =    document.getElementById("fourth");
var counter  = 1;
var counter2 = 0;
var popupCover  = document.getElementById("popup-cover");



s.onclick = function(){
	s.setAttribute("name", "size");
	m.setAttribute("name", "0");
	l.setAttribute("name", "0");
	sM.setAttribute("name", "size");
	mM.setAttribute("name", "0");
	lM.setAttribute("name", "0");
	s.style.backgroundColor = 				'#ACACAC';
	m.style.backgroundColor = 				'#ffffff';
	l.style.backgroundColor = 				'#ffffff';
}
m.onclick = function(){
	m.setAttribute("name", "size");
	s.setAttribute("name", "0");
	l.setAttribute("name", "0");
	mM.setAttribute("name", "size");
	sM.setAttribute("name", "0");
	lM.setAttribute("name", "0");
	s.style.backgroundColor = 				'#ffffff';
	m.style.backgroundColor = 				'#ACACAC';
	l.style.backgroundColor = 				'#ffffff';
}
l.onclick = function(){
	l.setAttribute("name", "size");
	s.setAttribute("name", "0");
	m.setAttribute("name", "0");
	lM.setAttribute("name", "size");
	sM.setAttribute("name", "0");
	mM.setAttribute("name", "0");
	s.style.backgroundColor = 				'#ffffff';
	m.style.backgroundColor = 				'#ffffff';
	l.style.backgroundColor = 				'#ACACAC';
}



document.getElementById("grey1").onclick = function(){
	if(counter == 0){
	content.appendChild(elem);
}

	popupCover.style.display = 'block';
	modale.style.zIndex = '100';
	modal2.style.display = 'block';
	document.getElementById("change").src = 'assets/DSC_002.jpg';
	counter = 1;

}



sM.onclick = function(){
	sM.setAttribute("name", "size");
	mM.setAttribute("name", "0");
	lM.setAttribute("name", "0");
	sM.style.backgroundColor = 				'#ACACAC';
	mM.style.backgroundColor = 				'#ffffff';
	lM.style.backgroundColor = 				'#ffffff';
}
mM.onclick = function(){
	mM.setAttribute("name", "size");
	sM.setAttribute("name", "0");
	lM.setAttribute("name", "0");
	sM.style.backgroundColor = 				'#ffffff';
	mM.style.backgroundColor = 				'#ACACAC';
	lM.style.backgroundColor = 				'#ffffff';
}
lM.onclick = function(){
	lM.setAttribute("name", "size");
	sM.setAttribute("name", "0");
	mM.setAttribute("name", "0");
	sM.style.backgroundColor = 				'#ffffff';
	mM.style.backgroundColor = 				'#ffffff';
	lM.style.backgroundColor = 				'#ACACAC';
}









var button = document.getElementById("button");
var cover = document.getElementById("coverid");
var hidden = document.getElementsByTagName("body")[0];
button.onclick = function() {
	 document.getElementById("modale").style.display = 'block';
	 cover.style.display = 'block';
	 cover.style.opacity = '0.5';
	 hidden.style.overflow = 'hidden';
	
	

}

close.onclick = function(){
	document.getElementById("modale").style.display= 'none';
	cover.style.display = 'none';
	hidden.style.overflow = 'auto';
	document.getElementById("city").value = "";
	document.getElementById("email").value = "";
}

var elem = document.createElement('img');
elem.setAttribute("src", "assets/DSC_004.jpg");
elem.setAttribute("class", "change");
elem.setAttribute("id", "change");
first.onclick = function(){
	if(counter == 0){
	content.appendChild(elem);
}
	popupCover.style.display = 'block';
	modale.style.zIndex = '100';
	modal2.style.display = 'block';
	document.getElementById("change").src = 'assets/DSC_004.jpg';
	counter = 1;
}


close2.onclick = function(){
	modal2.style.display = 'none';
	modale.style.zIndex = '200';
	document.getElementById("popup-cover").style.display = 'none';
	if(counter2 == 1){

		content.removeChild(vid);
		counter = 0;
		counter2 = 0;
	}
	
	
	}
var second = document.getElementById("second");
var third =  document.getElementById("third");

second.onclick = function(){
	if(counter == 0){
	content.appendChild(elem);
}
	
	popupCover.style.display = 'block';
	modale.style.zIndex = '100';
	modal2.style.display = 'block';
	document.getElementById("change").src = 'assets/DSC_005.jpg';
	counter = 1;


}
third.onclick = function(){
	if(counter == 0){
	content.appendChild(elem);
}
	
	popupCover.style.display = 'block';
	modale.style.zIndex = '100';
	modal2.style.display = 'block';
	document.getElementById("change").src = 'assets/DSC_003.jpg';
	counter = 1;

}
var source = document.createElement("source");
	var vid = document.createElement("video");


fourth.onclick = function(){
	
	popupCover.style.display = 'block';
	vid.currentTime = '0';
	vid.loop = 'true';
	vid.playbackRate = '1';
	vid.play();
	counter2 = 1;
	modale.style.zIndex = '100';
	modal2.style.display = 'block';
	content.appendChild(vid);
	vid.appendChild(source);
vid.controls = 'controls';
vid.style.width = '100%';
vid.style.height = '100%';
source.src = 'assets/vid-final_edit.mp4';
	if(counter == 1){
		content.removeChild(document.getElementById('change'));
		
	
counter = 0;
	}

	
	



}

var content = document.getElementById("content");
content.onclick = function(){

	if(counter2 == 1){
		content.removeChild(vid);
		counter = 0;
		counter2 = 0;
	}
	document.getElementById("popup-cover").style.display = 'none';
	modale.style.zIndex = '200';
	modal2.style.display = 'none';
}

grey.onclick = function(){
	if(counter == 0){
	content.appendChild(elem);
}
	
	popupCover.style.display = 'block';
	modale.style.zIndex = '100';
	modal2.style.display = 'block';
	document.getElementById("change").src = 'assets/DSC_002.jpg';
	counter = 1;
}


var mainblock = document.getElementById("mainblock");


	
fourth.onmouseover = function(){
	fourth.src = 'assets/icon4.png';
}
fourth.onmouseout = function(){
	fourth.src = 'assets/icon3.png';
}












var video = document.getElementById("vid6");




//включение видео отрисовки

var $win = $(window);
var $marker = $('#vid6');

$win.scroll(function() {
  
  if($win.scrollTop() + $win.height() >= $marker.offset().top) {
    $('#message').html('visible'); 
    video.play();
    video.playbackRate = '6';

  }else{
    $('#message').html('not visible'); 
  }
});
var width = document.body.clientWidth;
var $width2 = $(window).width();

var send = document.getElementById("send");
function disap(){
	send.style.display = 'flex';
	gif.style.display = 'none';
}
var gif = document.getElementById("gif");
send.onclick = function(){
	send.style.display = 'none';
	gif.style.display = 'block';
	setTimeout(disap, 1500);

}
