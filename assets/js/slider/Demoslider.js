
    $('#slider1').slider({
	 orientation: "vertical",
	        min: 0,
	        max: 10,
	        value: 5,
	        step:0.1,
	        tooltip:"show",
	        handle: "square",
	        handle: "hide",
	        formater: function(value) {
	            return 'Current value: '+value.toFixed(2);
	          }
	        
    });

    $('#slider2').slider({
	 orientation: "vertical",
	        min: 0,
	        max: 10,
	        value: 5,
	        step:0.1,
	        tooltip:"show",
	        handle: "square",
	        handle: "hide",
	        formater: function(value) {
	            return 'Current value: '+value.toFixed(2);
	          }
	        
    });