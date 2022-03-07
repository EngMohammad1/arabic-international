/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

( function( $ ) {
	var body, masthead, menuToggle, siteNavigation, socialNavigation, siteHeaderMenu, resizeTimer;

	function initMainNavigation( container ) {

		// Add dropdown toggle that displays child menu items.
		var dropdownToggle = $( '<button />', {
			'class': 'dropdown-toggle',
			'aria-expanded': false
		} ).append( $( '<span />', {
			'class': 'screen-reader-text'
		} ) );

		container.find( '.menu-item-has-children > a' ).after( dropdownToggle );

		// Toggle buttons and submenu items with active children menu items.
		container.find( '.current-menu-ancestor > button' ).addClass( 'toggled-on' );
		container.find( '.current-menu-ancestor > .sub-menu' ).addClass( 'toggled-on' );

		// Add menu items with submenus to aria-haspopup="true".
		container.find( '.menu-item-has-children' ).attr( 'aria-haspopup', 'true' );

		container.find( '.dropdown-toggle' ).click( function( e ) {
			var _this            = $( this ),
				screenReaderSpan = _this.find( '.screen-reader-text' );

			e.preventDefault();
			_this.toggleClass( 'toggled-on' );
			_this.next( '.children, .sub-menu' ).toggleClass( 'toggled-on' );

			// jscs:disable
			_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
			// jscs:enable
			screenReaderSpan.text( screenReaderSpan.text() === screenReaderText.expand ? screenReaderText.collapse : screenReaderText.expand );
		} );
	}
	//initMainNavigation( $( '.main-navigation' ) );

	masthead = $('#masthead');
	mobileButton = $("#menu-toggle");
	menuToggle = $('#mobile-site-header-menu');
	footer = $('#colophon');
	siteNavigation = $('#mobile-site-navigation');

    // Enable menuToggle.
    (function () {

		// Return early if menuToggle is missing.
		if ( ! menuToggle.length ) {
			return;
		}
		mobileButton.on('click', function () {
		    $(menuToggle).toggleClass('toggled-on');
		    if ($(menuToggle).hasClass('toggled-on')) {
		        $(menuToggle).attr('aria-expanded', 'true');
		    } else {
		        $(menuToggle).attr('aria-expanded', 'false');
		    }
		    $(footer).toggleClass("toggled-on");
		} );
    })();


	// Add the default ARIA attributes for the menu toggle and the navigations. used for ADA compliance
	function onResizeARIA() {
		if ( window.innerWidth < 910 ) {
			if ( menuToggle.hasClass( 'toggled-on' ) ) {
				menuToggle.attr( 'aria-expanded', 'true' );
			} else {
				menuToggle.attr( 'aria-expanded', 'false' );
			}

			menuToggle.attr( 'aria-controls', 'mobile-site-navigation ' );
		} else {
			menuToggle.removeAttr( 'aria-expanded' );
			menuToggle.removeAttr( 'aria-controls' );
		}
	}

	$( document ).ready( function() {
		body = $( document.body );

		$( window )
			.on( 'load.hackerweb', onResizeARIA )
			.on( 'resize.hackerweb', function() {
				clearTimeout( resizeTimer );
				resizeTimer = setTimeout( function() {
				}, 300 );
				onResizeARIA();
			} );

	});


    // Custom functions
	$(document).ready(function () {
	    if ($(".slideLeft").length > 0) {
	        $(".slideLeft").each(function() {
	            currentLeftElement = $(this);
	            windowHeight = $(window).innerHeight() + 100;
	            elementTopPosition = $(currentLeftElement)[0].getBoundingClientRect().top;
	            if ($(window).width() > 1000) {
	                $(window).scroll(function () {
	                    st = $(this).scrollTop();
	                    windowHeight = $(window).innerHeight() - 100;
	                    elementTopPosition = $(currentLeftElement)[0].getBoundingClientRect().top;
	                    if ((st + windowHeight) > elementTopPosition) {
	                        $(currentLeftElement).css('transform', 'translateX(0%)');
	                        $(currentLeftElement).css('opacity', '1');
	                    }
	                });
	            } else {
	                $(currentLeftElement).css('transform', 'translateX(0%)');
	                $(currentLeftElement).css('opacity', '1');
	            }

	            if (windowHeight >= elementTopPosition) {
	                $(currentLeftElement).css('transform', 'translateX(0%)');
	                $(currentLeftElement).css('opacity', '1');
	            }

	            setTimeout(function () {
	                if (windowHeight > elementTopPosition) {
	                    $(currentLeftElement).css('transform', 'translateX(0%)');
	                    $(currentLeftElement).css('opacity', '1');
	                }
	            }, 2000);
	        });
	    }
	    if ($(".slideRight").length > 0) {
	        $(".slideRight").each(function () {
	            currentRightElement = $(this);
	            windowHeight = $(window).innerHeight() + 100;
	            elementTopPosition = $(currentRightElement)[0].getBoundingClientRect().top;
	            if ($(window).width() > 1000) {
	                $(window).scroll(function () {
	                    st = $(this).scrollTop();
	                    windowHeight = $(window).innerHeight() ;
	                    elementTopPosition = $(currentRightElement)[0].getBoundingClientRect().top;
	                    if ((st + windowHeight) > elementTopPosition) {
	                        $(currentRightElement).css('transform', 'translateX(0%)');
	                        $(currentRightElement).css('opacity', '1');
	                    }
	                });
	            } else {
	                $(currentRightElement).css('transform', 'translateX(0%)');
	                $(currentRightElement).css('opacity', '1');
	            }

	            if (windowHeight >= elementTopPosition) {
	                $(currentRightElement).css('transform', 'translateX(0%)');
	                $(currentRightElement).css('opacity', '1');
	            }
	            
	            setTimeout(function () {
	                if (windowHeight > elementTopPosition) {
	                    $(currentRightElement).css('transform', 'translateX(0%)');
	                    $(currentRightElement).css('opacity', '1');
	                }
	            }, 2000);
	            
	        });

	        
	    }

        //Map layout
	    if ($("#headerClickMap").length > 0) {
	        $("#headerClickMap").click(function () {
	            if ($("#headerMap").length > 0) {
	                if ($("#headerMap").hasClass("headerMapOpen")) {
	                    $("#headerMap").removeClass("headerMapOpen");
	                } else {
	                    $("#headerMap").addClass("headerMapOpen");
	                }
	                
	            }
	            if ($("#headerSearch").length > 0) {
	                $("#headerSearch").removeClass("headerSearchOpen");
	            }
	        });
	    }

	    //search layout
	    if ($("#search-form-close-button").length > 0) {
	        $("#search-form-close-button").click(function () {
	            if ($("#headerSearch").length > 0) {
	                $("#headerSearch").removeClass("headerSearchOpen");
	            }
	        });
	    }
	    if ($("#headerClickSearch").length > 0) {
	        $("#headerClickSearch").click(function () {
	            if ($("#headerSearch").length > 0) {
	                if ($("#headerSearch").hasClass("headerSearchOpen")) {
	                    $("#headerSearch").removeClass("headerSearchOpen");
	                } else {
	                    $("#headerSearch").addClass("headerSearchOpen");
	                }
	            }
	            if ($("#headerMap").length > 0) {
	                $("#headerMap").removeClass("headerMapOpen");
	            }
	        });
	    }


	    // add a class to a input if it has a value. allows the shrink label to work.
	    $("input").each(function(item,index ){
	        $(this).on("blur", function () {
	            if ($(this).val() !== "") {
	                $(this).addClass("has-value");
	            } else {
	                $(this).removeClass("has-value");
	            }
	        });	    
	    });
	    $("textarea").each(function (item, index) {
	        $(this).on("blur", function () {
	            if ($(this).val() !== "") {
	                $(this).addClass("has-value");
	            } else {
	                $(this).removeClass("has-value");
	            }
	        });
	    });

        //shrink header
	    //shrinkHeader();

	    //delay for banner plugin.
	    setTimeout(function () {
	        if ($("#innerHomeBanner").length > 0) {
	            $("#innerHomeBanner").css('opacity', '1');
	        }
			if ($("#contentWrapper").length > 0) {
				$("#contentWrapper").css('opacity', '1');
			}
			if ($("#site-header-menu").length > 0) {
			    $("#site-header-menu").css('opacity', '1');
			}
	    }, 50)	  

		//add analytics tracking.
		sendContactFormAnalytics();
	});
	function parallax() {
	    if ($(".parallax").length > 0) {
	        $(".parallax .parallaxImage").each(function (index, element) {
	            var yoffset = 0;
	            var lastScrollTop = 0;
	            var offsetBy = .3;
	            $(window).scroll(function (event) {
	                st = $(this).scrollTop();
	                elementTop = $(element)[0].getBoundingClientRect().top || null;

	                if (elementTop) {
	                    if (st < elementTop) {
	                        $(element).css("transform", "translateY(0%)");
	                        yoffset = 0;
	                    } else {
	                        if (st > lastScrollTop) {
	                            // downscroll code
	                            if (st > elementTop) {
	                                $(element).css("transform", "translateY(-" + yoffset + "%)");
	                                yoffset = yoffset + offsetBy
	                            }
	                        } else {
	                            // upscroll code
	                            if (st > elementTop) {
	                                $(element).css("transform", "translateY(-" + yoffset + "%)");
	                                yoffset = yoffset - offsetBy
	                            }
	                        }
	                    }
	                    
	                }
	                lastScrollTop = st;
	            });
	        });
	        
	    }

	}
	function shrinkHeader() {
	    if ($("#masthead").length > 0) {
	       
	        if ($(window).width() > 1000) {
	            $(window).scroll(function () {
	                st = $(this).scrollTop();
	                if (st > 30) {
	                   
	                    $("#masthead").addClass("shrinkHeader");
                        $("#contentWrapper").addClass("headSpace");
	                } else {
	                    $("#masthead").removeClass("shrinkHeader");
                        $("#contentWrapper").removeClass("headSpace");
	                }
	            });
	        }
	    }
	}
    
    jQuery( document ).ready( function( $ ) {

        // ... display the Full Screen search when:
        // 1. The user focuses on a search field, or
        // 2. The user clicks the Search button
        $( 'form[role=search] input, form[role=search] button','#header-search-btn' ).on( 'focus, click', function( event ) {
            // Prevent the default action
            event.preventDefault();

            // Display the Full Screen Search
            $( '#full-screen-search' ).addClass( 'open' );

            // Focus on the Full Screen Search Input Field
            $( '#full-screen-search input' ).focus();
        } );
        
        $( '#header-search-btn').on( 'click', function( event ) {
            // Prevent the default action
            event.preventDefault();

            // Display the Full Screen Search
            $( '#full-screen-search' ).addClass( 'open' );

            // Focus on the Full Screen Search Input Field
            $( '#full-screen-search input' ).focus();
        } );        

        // Hide the Full Screen search when the user clicks the close button
        $( '#full-screen-search button.close' ).on( 'click', function( event ) {
            // Prevent the default event
            event.preventDefault();

            // Hide the Full Screen Search
            $( '#full-screen-search' ).removeClass( 'open' );
        } );

    } ); 
    
    function sendContactFormAnalytics() {
	    //Attach analytics to contact form 7
	    var wpcf7Elm = document.querySelector('.wpcf7') || null;
	    if (wpcf7Elm) {
	        wpcf7Elm.addEventListener('wpcf7submit', function (event) {
	            if (sendAnalytics) {
	                sendAnalytics('Form Submission', 'Form Submission', location.pathname, 'Contact Form');
	            }
	        }, false);
	    }
	}
} )( jQuery );
