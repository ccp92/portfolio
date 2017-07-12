$(document).ready(function() {
	$('#card1').hover(function() {
		$(this).attr('src', 'assets/test/quad1.jpeg');
	}, function() {
		$(this).attr('src', 'assets/test/quad1bw.jpeg');
	});
	
	$('#card2').hover(function() {
		$(this).attr('src', 'assets/test/quad2.jpeg');
	}, function() {
		$(this).attr('src', 'assets/test/quad2bw.jpeg');
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