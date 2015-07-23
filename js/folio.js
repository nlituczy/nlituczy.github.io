/**
 *folio.js v1.0.0
 * http://www.nicholaslituczy.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2015, Nicholas Lituczy
 * http://www.nicholaslituczy.com

              /\‚
            /    \ ‚
          /        \‘
         |\          \
       /\|::\         '\  '
     /    \:::\         \‚
   /        \:::\        '\ °
  |\          \::|         |'
  |:|       |\  \/        /|‘
  |/       /|::\________/::|'
 /       /::|:::|::::::|:::|‘
|\     /::::|\::|::::::|::/‘
|::\ /:::::/   \|::::::|/  '
|:::|::::/       ¯¯¯¯¯¯¯
 \::|::/
   \|/


**/

$(document).ready(function(){

//dropdown menu
  /*$('.menu-icon').click(function(){
  	$(this).toggleClass('open');
    $('#menu-select > li').toggleClass('open');
  });*/

//resume replace view
  $('#about').click(function(){
	   $('body').toggleClass('page-open');
     $('#contact-form').toggleClass('open');
  });

//contact replace view
  $('#contact').click(function(){
	   $('body').toggleClass('page-open');
     $('#contact-form').toggleClass('open');
  });

//contact replace view
  $('#twitter').click(function(){
	   $('body').toggleClass('page-open');
     $('#contact-form').toggleClass('open');
  });
// Write some text


/* -----------------------
    Text Data
-------------------------*/
  var sections = [
  		{	sentence: " am Nicholas Lituczy",
  		},
  		{	sentence: " am a product designer",
  		},
  		{	sentence: " live in New York city",
  		},
  		{	sentence: " am a builder",
  		},
  		{	sentence: " create",
  		},
  		{	sentence: " explore",
  		},
  		{	sentence: " learn",
  		},
  		{	sentence: " dream",
  		},
  		{	sentence: " build",
  		},
  		{	sentence: " am doing another usability test",
  		},
  		{	sentence: " am making my nth cup of coffee",
  		},
  		{	sentence: " am debugging this website",
  		},
  		{	sentence: " am reading about data driven design",
  		},
  		{	sentence: " obsessed with No Man's Sky",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  		{	sentence: " ",
  		},
  	];
  var i = 0;
  var j = 0;
  var k = 0;
  var lengthSentence = 0;
  var lengthArray = sections.length;
  var forward = true;
  var beginning = "I";
  var currentPart = "";
  var interval = 50;
  var opening = false;

  /* -----------------------
      TYPING
  -------------------------*/
  function writing(text){
  	lengthSentence = sections[i].sentence.length;
  	var body = $("body");
  	if(!opening){ // first part
  		setTimeout(function(){
  			if(k < beginning.length){
  				if(beginning[k] === "<"){

  					k=k+4;
  				}
  				currentPart += beginning[k];
  				text.html(currentPart);
  				k++;
  				writing(text);
  			}else if(k === (beginning.length)){
  				text.html(currentPart);
  				opening = true;
  				writing(text);
  			}
  		},interval);
  	}else if(opening){ // sentences
  		setTimeout(function(){
  			interval = 50;
  			if(j === lengthSentence){
  				forward = false;
  			}
  			if(j === lengthSentence-2){
  				$(".afterTyping").one().attr("onScreen");
  			}
  			if( j === lengthSentence-1 && forward){
  				interval = 2000;
  			}
  			if(j < lengthSentence && forward ){
  				if(sections[i].sentence[j] === "&"){
  					currentPart += "<strong>";
  				}else if(sections[i].sentence[j] === "%"){
  					currentPart += "</strong>";
  				}
  				else{
  					currentPart += sections[i].sentence[j];
  				}
  				text.html(currentPart);
  				j++;
  			}else if(j > 0 && !forward){
  				if(sections[i].sentence[j] === "&"){
  					currentPart = currentPart.slice(0, - 8);
  				}else if(sections[i].sentence[j] === "%"){
  					currentPart = currentPart.slice(0, - 9);
  				}
  				else{
  					currentPart = currentPart.slice(0, - 1);
  				}
  				text.html(currentPart);
  				j--;
  			}else if(j === 0){
  				forward = true;
  				/*body.css({
  					"background" : sections[i].background});*/
  				i++; // loop fra sezioni
  			}
  			if(i === lengthArray){
  				i = 0;
  			}
  			writing(text);
  		}, interval);
  	}
  }


  /* -----------------------
      BACKGROUND LOOP
  -------------------------*/


var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

  if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#container').css({
   background: "-webkit-gradient(linear, left bottom, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 50%, "+color2+" 50%)"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient,50);

/*

  function rand(min, max) {
      return min + Math.random() * (max - min);
  }
  function changebackground(){
  	var body = $("body");
      var h = rand(1, 360);
      var s = rand(80, 90);
      var l = rand(50, 60);
      var h2;
      if(h < 180){
      	h2 = h + 180;
      }else{
      	h2 = h - 180;
      }
      body.css({ // looping background
      	"background" : "hsl(" + h + "," + s + "%,"+ l + "%)"
      });
      $(".fixedBg").css({ // background on hover
      	"background" : "hsl(" + h + "," + s + "%,"+ l + "%)",
      	"color" : "hsl(" + h2 + "," + s + "%,"+ l + "%)"
      });
      /*$(".loopCol").css({
      	"background" : "hsl(" + h + "," + s + "%,"+ l + "%)"
      });
  	$(".coloredHover").css({ // color links on hover
      	"color" : "hsl(" + h + "," + s + "%,"+ l + "%)"
      });

  }



// background loop - old links colors
  function loopColors(){
  	var selector = $(".loopCol");
      var h = rand(1, 360);
      var s = rand(0, 100);
      var l = rand(0, 80);
      selector.css({
      	"color" : "hsl(" + h + "," + s + "%,"+ l + "%)"
      });
  }

//background loop
	changebackground();
	setTimeout(function(){
		$("body").removeAttr("noTransition");
		$("fixedBg").removeAttr("noTransition");
		changebackground();
	}, 2000)
	setInterval(function(){
		changebackground();
	}, 20000);

  */

/*--------------------
	Type stuff
----------------------*/
	var firstTimer = 5000;
	var text = $(".jstext");
	setTimeout(function(){
		writing(text);
		//incipit(text);
	}, firstTimer);

/*--------------------
	view fix
----------------------*/
/*
  (function(window){
  $.fn.stopAtTop= function () {
    var $this = this,
        $window = $(window),
        thisPos = $this.offset().top,
        //thisPreservedTop = $this.css("top"),
        setPosition,
        under,
        over;

    under = function(){
        if ($window.scrollTop() < thisPos) {
            $this.css({
                position: 'absolute',
                top: ""
            });
            setPosition = over;
        }
    };

    over = function(){
        if (!($window.scrollTop() < thisPos)){
            $this.css({
                position: 'fixed',
                top: 0
            });
            setPosition = under;
        }
    };

    setPosition = over;

    $window.resize(function()
    {
        bumperPos = pos.offset().top;
        thisHeight = $this.outerHeight();
        setPosition();
    });

    $window.scroll(function(){setPosition();});
    setPosition();
  };
  })(window);

  $('#one').stopAtTop();
  $('#two').stopAtTop();
  $('#three').stopAtTop();
  $('#four').stopAtTop();
*/
});
