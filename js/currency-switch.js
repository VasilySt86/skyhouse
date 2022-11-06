fx.base = "IDR";
fx.rates = {
	"IDR": 1.0,        // always include the base rate (1:1)
	"USD": 0.000068965517241,
	'EUR': 0.000058547586207,
	'GBP': 0.000051384827586,
	'AUD': 0.000090837931034,
	'NZD': 0.000099394482759,
	'SGD': 0.000092382758621,
	'MYR': 0.000273658620690,
	'CNY': 0.000439268965517,
	'JPY': 0.007651379310345,
	'HKD': 0.000541348275862,
	'RUB': 0.004220000000000,
}

// Currency switcher
	var oldFx = "IDR";
	var currentFx = "IDR";

	var $fxControl = $('.currency-switcher').find('a.control');
	var $fxSelect = $('.currency-switcher').find('ul');
	var $disclaimer = $('#currency-disclaimer');
	var $Controldisclaimer = $('#currency-disclaimer').find('div.closedisclamer');

	$fxControl.on('click', function() {
		$fxSelect.fadeIn(100);
		return false;
	});

	$fxSelect.on('click', '.close', function() {
		$fxSelect.fadeOut(100);
		return false;
	});

	$Controldisclaimer.on('click', function() {
		$disclaimer.fadeOut(10);
		return false;
	});

	$fxSelect.on('click', 'a', function() {
		oldFx = currentFx;
		currentFx = $(this).text().toUpperCase().trim();

		$fxControl.html( $(this).html() );
		$fxSelect.fadeOut(100);

		if ( !$disclaimer.is('visible') ) {
			$disclaimer.fadeIn(500);
		}

		$('span.fx').each(function() {
			if ( currentFx === $(this).data('fx') && $(this).data('val') ) {
				$(this).text( currentFx + " " + $(this).data('val'));
			} else {
				var val = accounting.parse( $(this).text() );
				var conv = fx(val).from(oldFx).to(currentFx);
				$(this).text( currentFx + " " + accounting.formatMoney(conv));
			}
		});
		return false;
	});