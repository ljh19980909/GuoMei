//发票是否需要
var t = [];
$('.ticket').click(function() {
	$('.ticket').css('color', '#000');
	$(this).css('color', '#B91B34');
	localStorage.ticket = $(this).html();
	t.push(localStorage.ticket);
});

//单位
var z = [];
console.log($('.com'))
$('#sure').click(function() {
	window.location.href = '填写订单.html';
	if ($('.title').eq(0).prop('checked') == true) {
		localStorage.company = $('.com').eq(0).html();
	} else {
		localStorage.company = $('.com').eq(1).next().val();
		z.push(localStorage.company);
	}
	z.push(localStorage.company);
});
//项目
var p = [];
$('.project').click(function() {
	$('.project').css('color', '#000');
	$(this).css('color', '#B91B34');
	localStorage.project = $(this).html();
	p.push(localStorage.project);
});
