$(document).ready(function (){

var  $pagoTarjeta = $('#test2');

  $pagoTarjeta.change(function(){
    $('#info-tarjeta').css('display', 'block');
  })
  $('#test1').change(function(){
    $('#info-tarjeta').css('display', 'none');
  })
})
