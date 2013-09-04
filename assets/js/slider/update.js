$('#slider2').slider().on('slide',function(ev){
    var val=ev.value;
    $('#val1').val(val);
    var oldVal=$('#slider1').slider('getValue')[0].value === undefined ?5:$('#slider1').slider('getValue')[0].value;
    console.log($('#slider1').slider('getValue')[0].value);
    if( (val+oldVal) < 10)
	$('#slider1').slider('setValue',10-val);
    else{
	$('#slider2').slider('setValue',10-oldVal);
    	$('#slider1').slider('setValue',oldVal);
    }
	
});
$('#slider1').slider().on('slide',function(ev){
    var val=ev.value;
    $('#val').val(val);
    var oldVal=$('#slider2').slider('getValue')[0].value === undefined ?5:$('#slider2').slider('getValue')[0].value;
    if( (val+oldVal) < 10 )
	$('#slider2').slider('setValue',10-val);    
    else{
	$('#slider1').slider('setValue',10-oldVal);
    	$('#slider2').slider('setValue',oldVal);    
    }
});