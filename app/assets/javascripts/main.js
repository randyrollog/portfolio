(function() {

	'use strict';

	window.requestAnimFrame = function(){
		return (
			window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
			function(/* function */ callback){
				window.setTimeout(callback, 1000 / 60);
			}
		);
	}();

	window.cancelAnimFrame = function(){
		return (
			window.cancelAnimationFrame       || 
			window.webkitCancelAnimationFrame || 
			window.mozCancelAnimationFrame    || 
			window.oCancelAnimationFrame      || 
			window.msCancelAnimationFrame     || 
			function(id){
				window.clearTimeout(id);
			}
		);
	}();
	
	var svgs = Array.prototype.slice.call( document.querySelectorAll( 'svg' ) ),
		hidden = Array.prototype.slice.call( document.querySelectorAll( '.hide' ) ),
		current_frame = 0,
		total_frames = 60,
		path = new Array(),
		length = new Array(),
		handle = 0;

	function init() {
		[].slice.call( document.querySelectorAll( 'path' ) ).forEach( function( el, i ) {
			path[i] = el;
			var l = path[i].getTotalLength();
			length[i] = l;
			path[i].style.strokeDasharray = l + ' ' + l; 
			path[i].style.strokeDashoffset = l;
		} );

	}

	function draw() {
		var progress = current_frame/total_frames;
		if (progress > 1) {
			window.cancelAnimFrame(handle);
			showPage();
		} else {
			current_frame++;
			for(var j=0; j<path.length;j++){
				path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
			}
			handle = window.requestAnimFrame(draw);
		}
	}

	function showPage() {
		svgs.forEach( function( el, i ) {
			el.setAttribute( 'class', el.getAttribute('class') + ' hide' );
		} );
		hidden.forEach( function( el, i ) {
			classie.remove( el, 'hide' );
			classie.add( el, 'show' );
		} );
	}

	init();
	draw();

})();

$(function() {

	$(window).bind('scroll',function(e){
	    parallaxScroll();
	});

	function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#back_wave').css('top',(470+(scrolled*.05))+'px');
    $('#mid_wave').css('top',(520-(scrolled*.25))+'px');
    $('#front_wave').css('top',(500-(scrolled*.28))+'px');

    $('#stars_container_1').css('top',(100-(scrolled*.25))+'px');
    $('#stars_container_2').css('top',((scrolled*.05))+'px');
	}

	var overlay = jQuery('<div id="overlay"> </div>');
	overlay.appendTo(document.body);
	overlay.hide();

	var mr = $("#my_resume");
	mr.hide();
	mr.zoom();

	var cf = $('#contact_form');
	cf.hide();

	// hide info for larger screens
	var nci = $('#nav_contact_info');
	nci.hide();

	var xOut = $('#x_out_resume');
	xOut.hide();

	// toggles visibility of contact info for small screens
	$("#nav_contact_wrapper_small").click(function(event){
  	event.preventDefault();
    nci.toggle('fast');
  });

  $("#resume_icon").click(function(event){
  	event.preventDefault();
  	overlay.fadeIn(200);
    mr.fadeIn(600);
    xOut.fadeIn(600);
  });

  xOut.click(function(event){
  	event.preventDefault();
    $(this).fadeOut(600);
    overlay.fadeOut(900);
    mr.fadeOut(600);
  });

  $(".x_out").click(function(event){
  	event.preventDefault();
  	cf.fadeOut(600);
    overlay.fadeOut(900);
  });

  // works section
  // set options for slide
    $('.works').slides({
    	vertical:false,
			resizable:false,
			active:false,
			transitionSpeed: 200,
			easing:"swing",
			events: {
				activate:"mouseenter",
				deactivate:"mouseout"
			},
			handle:".gsSlide",
			stayOpen: false,
			keyEvents:false,
			circle : false,
			classes:{
				active:"gsAactive",
				vertical:"gsVertical",
				horizontal:"gsHorizontal",
				slide:"gsSlide",
				deactivating:"gsDeactivating",
				positionActive:"gsPositionActive"
			},
			cache:false,
			limits : {},
			callbacks : {}
    });

    var overlay = jQuery('<div id="overlay"> </div>');
		var mr = $("#my_resume");
		var xOut = $('#x_out_resume');
		overlay.appendTo(document.body);
		overlay.hide();

		mr.hide();
		mr.zoom();

		xOut.hide();

		// about section
		$("#resume_btn").click(function(event){
    	event.preventDefault();
    	overlay.fadeIn(200);
      mr.fadeIn(600);
      xOut.fadeIn(600);
    });

    $("#my_resume").click(function(event){
    	event.preventDefault();
      $(this).fadeOut(600);
      overlay.fadeOut(900);
    });

    $('#song_player').hide();
		$('#music_caption').hide();

		$('#music_btn').mouseenter(function(event) {
			event.preventDefault();
			$('#music_caption').show(100);
			$(this).click(function(event) {
				$('#song_player').show(200);
			});
		});

		$('#music_btn').mouseout(function(event) {
			event.preventDefault();
			$('#music_caption').hide(150);
		});


});