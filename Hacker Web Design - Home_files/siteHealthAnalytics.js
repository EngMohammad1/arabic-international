//***********************************************************
// Version 1.0
// Modified 1/5/2018
// Written by Skynet Solutions www.skynet-solutions.net
// 
// This script automatically track phone numbers, email and butttons that you specify. 
// To specify a button add one of the following class to the button trackAnalytics,trackAnalyticsContact, or trackAnalyticsNewsletter depending on the type of button it is.
// to specify a custom message with the event use the element property data-id to add a custom message. Example <a href="tel:555-5555" class="trackAnalytics" data-id="This is a custom analytics message.">
//*************************************************************
//Add google onclick event reporting for phone numbers.
//To minify use https://jscompress.com/
if (typeof jQuery !== 'undefined') {
	jQuery(document).ready(function () {
		jQuery('a[href^="tel:"]').each(function (key, value) {
			jQuery(this).click(function () {
				label = "";
				if (jQuery(this).attr("data-id")) {
					label = jQuery(this).attr("data-id");
				} else {
					label = jQuery(this).attr('href');
				}
				sendAnalytics('Click 2 Call', label, label);
			});

		})
		jQuery('a[href^="fax:"]').each(function (key, value) {
			jQuery(this).click(function () {
				label = "";
				if (jQuery(this).attr("data-id")) {
					label = jQuery(this).attr("data-id");
				} else {
					label = jQuery(this).attr('href');
				}
				sendAnalytics('Click 2 Fax', label, label);
			});

		})
		jQuery('a[href^="mailto:"]').each(function (key, value) {
			jQuery(this).click(function () {
				label = "";
				if (jQuery(this).attr("data-id")) {
					label = jQuery(this).attr("data-id");
				} else {
					label = jQuery(this).attr('href');
				}
				sendAnalytics('Click 2 Email', label, label);
			});

		})
		jQuery('.trackAnalytics').each(function (key, value) {
			jQuery(this).click(function () {
				label = "";
				if (jQuery(this).attr("data-id")) {
					label = jQuery(this).attr("data-id");
				} else {
					if (jQuery(this).attr("id")) {
						label = jQuery(this).attr("id");
					} else {
						if (jQuery(this).attr("href")) {
							label = jQuery(this).attr("href");
						}
					}
				}
				sendAnalytics('Button Click', label, label);
			});

		})
		jQuery('.trackAnalyticsContact').each(function (key, value) {
			jQuery(this).click(function () {
				label = "";
				if (jQuery(this).attr("data-id")) {
					label = jQuery(this).attr("data-id");
				} else {
					if (jQuery(this).attr("id")) {
						label = jQuery(this).attr("id");
					} else {
						if (jQuery(this).attr("href")) {
							label = jQuery(this).attr("href");
						}
					}
				}
				sendAnalytics('Contact Button Click', label, label);
			});

		})
		jQuery('.trackAnalyticsNewsletter').each(function (key, value) {
			jQuery(this).click(function () {
				label = "";
				if (jQuery(this).attr("data-id")) {
					label = jQuery(this).attr("data-id");
				} else {
					if (jQuery(this).attr("id")) {
						label = jQuery(this).attr("id");
					} else {
						if (jQuery(this).attr("href")) {
							label = jQuery(this).attr("href");
						}
					}
				}
				sendAnalytics('Newsletter Button Click', label, label);
			});

		})


	});
}
function sendAnalytics(category, action, label, value) {

	if (!category) {
		category = ""
	}
	if (!action) {
		action = ""
	}
	if (!label) {
		label = ""
	}
	if (!value) {
		value = ""
	}
	if (typeof ga !== 'undefined') {
		ga('send', 'event', category, action, label, "0");
	}
	if (typeof gtag !== 'undefined') {
		gtag('event', 'click', { 'event_category': category, 'event_action': action, 'event_label': label, 'value': "0" });
	}
	if (typeof _gaq !== 'undefined') {
		_gaq.push(['_trackEvent', category, action]);
	}
	if (typeof dataLayer !== 'undefined') { //tag manager
		dataLayer.push({ 'event': category, 'action': action, 'label': label });
	}
}