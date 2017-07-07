$(document).ready(function (){

	var $pagoTarjeta = $('#test2');
	var $mas = $('#extra1');
	var $mas2 = $('#extra2');
	var $mas3 = $('#extra3');

    $pagoTarjeta.change(function(){
    	$('#info-tarjeta').css('display', 'block');
    });
	    $('#test1').change(function(){
	    $('#info-tarjeta').css('display', 'none');
    });

    $mas.click(function(){
	    $('#incluye').css('display', 'block');
	    $('#dura').css('display', 'none');
	    $('#saber').css('display', 'none');
    });
	$mas2.click(function(){
	    $('#incluye').css('display', 'none');
	    $('#dura').css('display', 'block');
	    $('#saber').css('display', 'none');
    });
    $mas3.click(function(){
	    $('#incluye').css('display', 'none');
	    $('#dura').css('display', 'none');
	    $('#saber').css('display', 'block');
    });

    $('.carousel').carousel();
});
