$(document).foundation()
$('[data-toggle-dia]').click(function (ev){
	const panel = $(this).data('toggleDia')
	$('#lineup-tabs').foundation('selectTab',panel)
	// console.log(panel);
})

//guardar en una variable lo que nos devuelve jquery de ese elemento del DOM
const $offCanvas = $('#offCanvas')
const $sticky = $('#sticky')
const $drilldown = $('[data-drilldown]') 
// Para hacer que despues de seleccionar una opcion se borre cuando volvamos a hacer click en menu

$offCanvas.find('li').click(function (ev) {
	$drilldown.foundation('_hideAll')
	$offCanvas.foundation('close')
	setTimeout(function(){
		$sticky.css('left', '0px')
	},300)
})