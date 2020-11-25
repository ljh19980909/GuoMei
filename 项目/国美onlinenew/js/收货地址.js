
// 默认
$('.circular_inner').eq(0).css('backgroundColor', '#b91b34');
//随机
$('.circular_inner').click(function() {
	$('.circular_inner').css('backgroundColor', '#ffffff');
	$(this).css('backgroundColor', '#b91b34');
});
var x = [
	['陶星星'],
	['189****6782'],
	[],
	['北京市朝阳区霄云路26号鹏润大厦B座23层2309国美在线商务有限公司']
];
x[0] = localStorage.username.split(',');
x[1] = localStorage.telphone.split(',');
x[3] = localStorage.DetailedAddress.split(',');

if(x[0].length>1){
	for(var i=1;i<x[0].length;i++){
		$('.content').append('<div class="content"><div class="circular"><div class="circular_inner"></div></div><div class="contact">'+ x[0][i]+' '  + x[1][i]+'</div><div class="address"><span class="city"></span><span>'+x[3][i]+'</span></div><div class="edit iconfont"><a href="国美_编辑收获地址.html">&#xe614; 编辑</a></div>');
	};
};

	
