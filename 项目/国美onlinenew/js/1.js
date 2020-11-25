var usernameReg = /^.+$/;
var telReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
var t = [
	['陶星星'],
	['189****6782'],
	[],
	['北京市朝阳区霄云路26号鹏润大厦B座23层2309国美在线商务有限公司']
];
$('.xinzeng').click(function() {
	if (!($('.consignee>input').eq(0).val() != '' && $('.consignee>input').eq(1).val() != '' && $('.consignee>input').eq(
			2).val() != '')) {
		alert('请输入');
		return;
	};
	// 收货人
	if (localStorage.username != null) {
		t[0] = localStorage.username.split(',');
		t[1] = localStorage.telphone.split(',');
		t[3] = localStorage.DetailedAddress.split(',');
	}
	t[0].push($('.consignee>input').eq(0).val());
	localStorage.username = t[0];

	//手机号码
	t[1].push($('.consignee>input').eq(1).val());
	localStorage.telphone = t[1];

	//详细地址
	t[3].push($('.consignee>input').eq(2).val());
	localStorage.DetailedAddress = t[3];
});
