/*
	Este es el codigo que mueve a megaman.
	Escribo esto porque se que lo estas leyendo.
*/
var leftPosition = 0;
var left = ["-368px -2px","-710px -2px","-1000px -2px"];
var leftmotion;
function movetoleft(){
	clearInterval(rightmotion);
	var count = 0;
	leftmotion = setInterval(function(){
		$('#megaman').css('background-position', left[count]);
		count++;
		$('#megaman').css('margin-left', leftPosition);
		leftPosition += 10;
		if(count > 3){count = 0;}
	}, 60);
}
var right = ["-660px 376px","-330px 376px","-0px 376px"];
var rightmotion;
function movetoright(){
	clearInterval(leftmotion);
	var count = 0;
	rightmotion = setInterval(function(){
		$('#megaman').css('background-position', right[count]);
		count++;
		$('#megaman').css('margin-left', leftPosition);
		leftPosition -= 10;
		if(count > 3){count = 0;}
	}, 60);
}
function stop(){
	clearInterval(leftmotion);
	clearInterval(rightmotion);
	$('#megaman').css('background-position', '-2px -2px');
}