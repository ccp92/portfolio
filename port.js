$(document).ready(function() {
	$('#quote').hover(function() {
		$(this).attr('src', 'assets/previews/quote.png');
	}, function() {
		$(this).attr('src', 'assets/previews/quotebw.png');
	});
	
	$('#amy').hover(function() {
		$(this).attr('src', 'assets/previews/amy.png');
	}, function() {
		$(this).attr('src', 'assets/previews/amybw.png');
	});
	
	$('#port').hover(function() {
		$(this).attr('src', 'assets/previews/port.png');
	}, function() {
		$(this).attr('src', 'assets/previews/portbw.png');
	});
	
	$('#card4').hover(function() {
		$(this).attr('src', 'assets/test/quad4.jpeg');
	}, function() {
		$(this).attr('src', 'assets/test/quad4bw.jpeg');
	});
});