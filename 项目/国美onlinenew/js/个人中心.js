var telReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
var passReg = /^[a-zA-Z]\w{5,17}$/;
$('.btn').click(function() {
	if (!(telReg.test($('.tel').val()))) {
		alert('请输入正确的手机号码！');
		return;
	};
	if (!(passReg.test($('.password').val()))) {
		alert('请输入正确的密码！');
		return;
	};
	$('.mask').hide();
	localStorage.a = $('.tel').val();
	$('.telp').html($('.tel').val());
});
$('.telp').click(function(){
	$('.mask').show();
})