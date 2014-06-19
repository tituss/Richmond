$(function() {
			 $('#toggle1').click(function() {
		    	$(".toggle2").hide("fast");
			    $('.toggle1').slideToggle('fast');
			    return false;
			    });
			 $('#toggle2').click(function() {
			 	$(".toggle1").hide("fast");
			    $('.toggle2').slideToggle('fast');
			    return false;
			    });
		});