( function( $ ) {
    // Custom functions
    $(document).ready(function () {
        //animate content
        $('.rotateMe').addClass("hideMe").viewportChecker({
            classToAdd: 'showMe animated rotateIn',
            offset: 100
           });
        //animate content
        $('.fadeMeUp').addClass("hideMe").viewportChecker({
            classToAdd: 'showMe animated fadeInUp',
            offset: 100
           });
        //animate content
        $('.fadeMeLeft').addClass("hideMe").viewportChecker({
            classToAdd: 'showMe animated fadeInLeft',
            offset: 100
           });
        //animate content
        $('.fadeMeRight').addClass("hideMe").viewportChecker({
            classToAdd: 'showMe animated fadeInRight',
            offset: 100
           });
        //Home down arrow
        $('.arrow').click(function(){
            var y = $(window).scrollTop();
            $('html, body').animate({ scrollTop: y + 800 }) 
       }); 
        $('.contact').click(function(){
            $('#contact').removeClass('slideOut hide-contact');
            $('#contact').addClass('slideIn');
        });
        $('#closeMe').click(function(){
            $('#contact').removeClass('slideIn');
            $('#contact').addClass('slideOut hide-contact');
        });
        
        checkWidth();

    });
    
    function checkWidth(){
        var $window = $(window);
        var windowsize = $window.width();
        if (windowsize < 767){
            $('.rotateMe').removeClass('delay-1s');
            $('.rotateMe').removeClass('delay-2s');
            $('.fadeMeUp').removeClass('delay-1s');
            $('.fadeMeUp').removeClass('delay-2s');
            
        }
    }
    
    //Home background images w/ fade
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 1000) {
            $('#bg2').fadeIn(800);
        }
        else {
            $('#bg2').fadeOut(800)
             };

        if (y > 2000) {
            $('#bg3').fadeIn(800);
        }
        else {$('#bg3').fadeOut(800) 
             };
    });
    
	//fade out content when reaching top of window
	$(window).scroll(function() {
		// Setting: Start fading 80% up the page
		var startPos = 0.2;
		// Cache window object
		var $w = $(window);

		// go through each element and check its relative position within the viewport
		$('.fadeMe').each(function() {

			// Get current relative position in viewport, based on the top edge
			var pos = $(this).offset().top - $w.scrollTop();

			// Get viewport height
			var vh = $w.height();
			var windowsize = $w.width();

			if (pos < vh * startPos && windowsize > 1200) {
				// If element has past the starting threshold, fade it
				$(this).css('opacity', pos / (vh * startPos) * 1);
			} else {
				$(this).css('opacity', 1);
			}
		});
	});
    
})(jQuery);