var index = 0,
	pri1 = 0,
	pri2 = 0,
	pri3 = 0,
	pri4 = 0,
	pri5 = 0;
//自营店
var one = document.querySelector('.one');
var Two = document.querySelectorAll('.two');
var three = document.querySelector('.three');
var Four = document.querySelectorAll('.four');
var a = document.querySelectorAll('.a');
var alls = document.querySelector('.all');
//第一个
$('.one').change(function() {
	alert(1)
	$('.two').prop('checked', $(this).prop('checked'));
	all();
});
//第二个
$('.three').change(function() {
	alert(2)
	$('.four').eq(0).prop('checked', $(this).prop('checked'));
	all();
});
// 第三个
$('.all').change(function() {
	$('.two,.all,.one,.three,.four').prop('checked', $(this).prop('checked'));
	all();
});
//点选3
function theAll() {
	for (var i = 0; i < a.length; i++) {
		var counts = 0;
		a[i].onclick = function() {
			for (var i = 0; i < a.length; i++) {
				if (a[i].checked) {
					counts++;
				};
				if (counts == a.length) {
					alls.checked = true;
				} else {
					alls.checked = false;
				};
			};
			counts = '';
		};
	};
}
theAll();

var x = document.querySelector('.Num');

function all() {
	pageOne();
	pageTwo();
	pageThree();
	$('.total').html(pri1 + pri2 + pri3 + pri4 + pri5);
}
//第一个
$('.two').eq(0).click(function() {
	index++;
	pri = 298;
	if (index % 2 == 1) {
		$('.total').html(298);
	} else {
		$('.total').html(pri1 + pri2 + pri3 + pri4 + pri5);
	};
	all();
});
// 点击单选
function pageOne() {
	if ($('.two').eq(0).prop('checked') == true) {
		pri1 = $('.Pri').eq(0).html() * x.value;
	} else {
		pri1 = 0;
	};
}
x.onchange = function() {
	all();
};
// 第二个
$('.two').eq(1).click(function() {
	index++;
	pri = 299;
	if (index % 2 == 1) {
		$('.total').html(298);
	} else {
		$('.total').html(pri1 + pri2 + pri3 + pri4 + pri5);
	};
	all();
});
var y = document.querySelector('.Num1');

function pageTwo() {
	if ($('.two').eq(1).prop('checked') == true) {
		pri2 = $('.Pri').eq(1).html() * y.value;
	} else {
		pri2 = 0;
	};
};
y.onchange = function() {
	all();
};

// 第三个
$('.four').eq(0).click(function() {
	index++;
	pri = 291;
	if (index % 2 == 1) {
		$('.total').html(298);
	} else {
		$('.total').html(pri1 + pri2 + pri3 + pri4 + pri5);
	};
	all();
});
var z = document.querySelector('.Num2');

function pageThree() {
	if ($('.four').eq(0).prop('checked') == true) {
		pri3 = $('.Pri').eq(2).html() * z.value;
	} else {
		pri3 = 0;
	};
};
z.onchange = function() {
	all();
};

// 第四个
$('.four').eq(1).click(function() {
	index++;
	pri = 0;
	if (index % 2 == 1) {
		$('.total').html(0);
	} else {
		$('.total').html(pri1 + pri2 + pri3 + pri4 + pri5);
	};
	all();
});
var t = document.querySelector('.Num3');

function pageFour() {
	if ($('.four').eq(1).prop('checked') == true) {
		pri4 = $('.Pri').eq(3).html() * t.value;
	} else {
		pri4 = 0;
	};
};
t.onchange = function() {
	all();
};
// 第五个
$('.four').eq(2).click(function() {
	index++;
	pri = 0;
	if (index % 2 == 1) {
		$('.total').html(0);
	} else {
		$('.total').html(pri1 + pri2 + pri3 + pri4 + pri5);
	};
	all();
});
var p = document.querySelector('.Num4');

function pageFive() {
	if ($('.four').eq(2).prop('checked') == true) {
		pri5 = $('.Pri').eq(4).html() * p.value;
	} else {
		pri5 = 0;
	};
};

p.onchange = function() {
	all();
};

//点选(1)
for (var i = 0; i < Two.length; i++) {
	var count = 0;
	Two[i].onclick = function() {
		for (var i = 0; i < Two.length; i++) {
			if (Two[i].checked) {
				count++;
			};
			if (count >= 1) {
				one.checked = true;
			} else {
				one.checked = false;
			};
		};
		count = '';
	};
};

//点选(2)
for (var i = 0; i < Four.length; i++) {
	var counts = 0;
	Four[i].onclick = function() {
		for (var i = 0; i < Four.length; i++) {
			if (Four[i].checked) {
				counts++;
			};
			if (counts >= 1) {
				three.checked = true;
			} else {
				three.checked = false;
			};
		};
		counts = '';
	};
};