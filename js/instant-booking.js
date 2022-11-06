jQuery(function($) {

	$('#checkin').datepicker({
        inline: true,  
        showOtherMonths: true,
        minDate: new Date(),
        dateFormat: "d M yy",
        altFormat: "yy-mm-dd",
        altField: "#alt-checkin",
        prevText: '',
        nextText: '',
        firstDay: 1,
        dayNamesMin: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        monthNames: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthNamesShort: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        onSelect: function( selectedDate ) {
            var selectedDate = $(this).datepicker('getDate');
            if (selectedDate) {
              selectedDate.setDate(selectedDate.getDate() + 2);
            }
            $( "#checkout" ).datepicker("option", "minDate", selectedDate);
            setTimeout(function(){
                $( "#checkout" ).datepicker('show');
            }, 100);
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
    $("#check-in-arrow").click(function() { $('#checkin').datepicker('show');});
    $('#checkout').datepicker({
        inline: true,  
        showOtherMonths: true,
        minDate: new Date(),
        dateFormat: "d M yy",
        altFormat: "yy-mm-dd",
        altField: "#alt-checkout",
        prevText: '',
        nextText: '',
        firstDay: 1,
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
    $("#check-out-arrow").click(function() { $('#checkout').datepicker('show');});
    $(function() {
        $('#checkin').datepicker();
        myDate=new Date(); 
        myDate.setDate(myDate.getDate() );
        $('#checkin').datepicker('setDate', myDate);
    });
    $(function() {
        $('#checkout').datepicker();
        myAnotherDate=new Date(); 
        myAnotherDate.setDate(myAnotherDate.getDate() + 2);
        $('#checkout').datepicker('setDate', myAnotherDate);
    });

});