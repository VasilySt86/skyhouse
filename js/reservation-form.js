jQuery(document).ready(function($) {

	$('#Field230').datepicker({
		inline: true,
		showOtherMonths: true,
		minDate: new Date(),
		dateFormat: "DD, d M yy",
	      prevText: '',
	      nextText: '',
		firstDay: 1,
		dayNames: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
		dayNamesMin: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		monthNames: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
		monthNamesShort: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
	      onSelect: function( selectedDate ) {
	            var selectedDate = $(this).datepicker('getDate');
	            if (selectedDate) {
	            selectedDate.setDate(selectedDate.getDate() + 1);
	            }
	      $( "#Field231" ).datepicker("option", "minDate", selectedDate);
	      setTimeout(function(){
	            $( "#Field231" ).datepicker('show');
	            }, 16);
	      },
	      beforeShow: function(input, inst) {
	            var cal = inst.dpDiv;
	            var top  = $(this).offset().top + $(this).outerHeight();
	            var left = $(this).offset().left;
	            setTimeout(function() {
	                cal.css({
	                    'top' : top,
	                    'left': left
	                });
	            }, 10);
	        },
	});
	$('#Field231').datepicker({
		inline: true,  
		showOtherMonths: true,
		minDate: new Date(),
		dateFormat: "DD, d M yy",
	      prevText: '',
	      nextText: '',
		firstDay: 1,
		dayNames: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
		dayNamesMin: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		monthNames: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
		monthNamesShort: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
	      beforeShow: function(input, inst) {
	            var cal = inst.dpDiv;
	            var top  = $(this).offset().top + $(this).outerHeight();
	            var left = $(this).offset().left;
	            setTimeout(function() {
	                cal.css({
	                    'top' : top,
	                    'left': left
	                });
	            }, 10);
	        },
	});

});