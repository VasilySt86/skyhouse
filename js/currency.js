// Jquery with no conflict
jQuery(document).ready(function($) {
	
	//##########################################
	// Currency Converter
	//##########################################
	
	$('.replaceOriginal').currencyConverter({ 
		baseCurrency: "USD",
		targets:["IDR"],
		replaceOriginalPrice: true,
		decimalPrecision: 0,
		exchangeRateUpdateInterval: 0,
		autodetectFallbackCurrency: "IDR",
		exchangeRateOverrides: {
		   USDIDR : 14500.00,
	   },
	});
	
});//close