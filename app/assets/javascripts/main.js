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