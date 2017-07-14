$(document).ready(function() {
	$('#card1').hover(function() {
		$(this).attr('src', 'assets/previews/quote.png');
	}, function() {
		$(this).attr('src', 'assets/previews/quotebw.png');
	});
	
	$('#card2').hover(function() {
		$(this).attr('src', 'assets/previews/amy.png');
	}, function() {
		$(this).attr('src', 'assets/previews/amybw.png');
	});
	
	$('#card3').hover(function() {
		$(this).attr('src', 'assets/test/quad3.jpeg');
	}, function() {
		$(this).attr('src', 'assets/test/quad3bw.jpeg');
	});
	
	$('#card4').hover(function() {
		$(this).attr('src', 'assets/test/quad4.jpeg');
	}, function() {
		$(this).attr('src', 'assets/test/quad4bw.jpeg');
	});
});