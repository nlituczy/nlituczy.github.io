/**
 *folio.js v1.0.0
 * http://www.nicholaslituczy.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2015, Nicholas Lituczy
 * http://www.nicholaslituczy.com
**/

$(document).ready(function(){

/* -----------------------
    Page Navigation
-------------------------*/

// Scroll to location

  $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate( {
            'scrollTop': $target.offset().top-40
        }, 900, 'swing', function () {
            window.location.hash = target;
        } );
    } );

  $(function() {

      var $el, leftPos, newWidth,
          $mainNav = $("#menu-links");

      $mainNav.append("<li id='#magic-line'></li>");
      var $magicLine = $("#magic-line");

      $magicLine
          .width($(".current-page-item").width())
          .css("left", $(".current-page-item a").position().left)
          .data("origLeft", $magicLine.position().left)
          .data("origWidth", $magicLine.width());

      $("#menu-links li a").hover(function() {
          $el = $(this);
          leftPos = $el.position().left;
          newWidth = $el.parent().width();
          $magicLine.stop().animate({
              left: leftPos,
              width: newWidth
          });
      }, function() {
          $magicLine.stop().animate({
              left: $magicLine.data("origLeft"),
              width: $magicLine.data("origWidth")
          });
      });
  });

/* -----------------------
    Background Loop
-------------------------*/

  var canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext("2d");

  var TAU = 2 * Math.PI;

  times = [];
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    draw();
    requestAnimationFrame(loop);
  }

  function Ball (startX, startY, startVelX, startVelY) {
    this.x = startX || Math.random() * canvas.width;
    this.y = startY || Math.random() * canvas.height;
    this.vel = {
      x: startVelX || Math.random() * 2 - 1,
      y: startVelY || Math.random() * 2 - 1
    };
    this.update = function(canvas) {
      if (this.x > canvas.width + 50 || this.x < -50) {
        this.vel.x = -this.vel.x;
      }
      if (this.y > canvas.height + 50 || this.y < -50) {
        this.vel.y = -this.vel.y;
      }
      this.x += this.vel.x;
      this.y += this.vel.y;
    };
    this.draw = function(ctx, can) {
      ctx.beginPath();
      ctx.globalAlpha = .4;
      ctx.fillStyle = '#F4F1EF';
      ctx.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, 3, 0, TAU, false);
      ctx.fill();
    }
  }

  var balls = [];
  for (var i = 0; i < canvas.width * canvas.height / (65*65); i++) {
    balls.push(new Ball(Math.random() * canvas.width, Math.random() * canvas.height));
  }

  var lastTime = Date.now();
  function update() {
    var diff = Date.now() - lastTime;
    for (var frame = 1; frame * 13< diff; frame++) {
      for (var index = 1; index < balls.length; index++) {
        balls[index].update(canvas);
      }
    }
    lastTime = Date.now();
  }

  function draw() {
    ctx.globalAlpha=1;
    ctx.fillStyle = '#1D2327';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    for (var index = 0; index < balls.length; index++) {
      var ball = balls[index];
      ball.draw(ctx, canvas);
      ctx.beginPath();
      for (var index2 = balls.length -1; index2 > index; index2 += -1) {
        var ball2 = balls[index2];
        var dist = Math.hypot(ball.x - ball2.x, ball.y - ball2.y);
          if (dist < 100) {
            ctx.strokeStyle = "#F4F1EF";
            ctx.globalAlpha = 1 - (dist > 100 ? .8 : dist / 150);
            ctx.lineWidth = "2px";
            ctx.moveTo((0.5 + ball.x) | 0, (0.5 + ball.y) | 0);
            ctx.lineTo((0.5 + ball2.x) | 0, (0.5 + ball2.y) | 0);
          }
      }
      ctx.stroke();
    }
  }

  // Start
  loop();


/*--------------------
	 View Stack
----------------------*/
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



/*--------------------
	 Social Media
----------------------*/
  $('.popup').click(function(event) {
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, 'twitter', 'linkedin', opts);

    return false;
  });

});
