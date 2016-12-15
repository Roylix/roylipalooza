$(document).foundation()
$('[data-toggle-dia]').click(function (ev){
	const panel = $(this).data('toggleDia')
	$('#lineup-tabs').foundation('selectTab',panel)
	// console.log(panel);
})