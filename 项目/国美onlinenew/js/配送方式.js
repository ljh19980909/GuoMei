//配送方式
var x = [];
$('.Style').css({
		color: '#000'
	});
$('.Style').click(function() {
	$('.Style').css({
		color: '#000'
	});
	$(this).css({
		color: '#B91B34'
	});
	localStorage.style = $(this).html();
	x.push(localStorage.style);
});
//配送时间
var y = [];
$('.time').css({
		color: '#000'
	});
$('.time').click(function() {
	$('.time').css({
		color: '#000'
	});
	$(this).css({
		color: '#B91B34'
	});
	localStorage.time = $(this).html();
	y.push(localStorage.time);
});