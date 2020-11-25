// 配送方式
var x = [];
x.push(localStorage.style);
$('.style').html(x[0])
// 配送时间
var y = [];
y.push(localStorage.time);
$('.time').html(y[0])
// 发票信息
var t = [];
t.push(localStorage.ticket);
$('.ticket').html(t[0]);
//单位
var z = [];
z.push(localStorage.company);
$('.geren').html(z[0]);
//项目
var p=[];
p.push(localStorage.project);
$('.mingxi').html(p[0]);