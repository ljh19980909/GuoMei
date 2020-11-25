$('.a').click(function() {
	$('.sort_left_mask').css({
		display: 'none'
	});
	$(this).next().show();
});
$('#inputText').on('input', function() {
	$('.sort_right_content>ul>li>a').each(function(i, v) {
		console.log(v,i)
		if (v.innerHTML.indexOf($('#inputText').val()) < 0) {
			$(this).css('display', 'none');
		} else if (v.innerHTML.indexOf($('#inputText').val()) > 0) {
			$(this).css('display', 'block');
		} else if ($('#inputText').val == '') {
			$('.a').show();
		};
	});
});
