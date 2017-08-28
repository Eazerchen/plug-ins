$('.tabs>li').on('click',function(){
  var $this = $(this);
  var index = $this.index();
  $this.addClass('active').siblings().removeClass('active');
  $this.parents('.tab-wrap').find('.panel').eq(index).addClass('active').siblings().removeClass('active');
});




var products = [
	{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手 猴哥款',
		price: '￥405.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金转运珠 猴哥款',
		price: '￥100.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手链 3D猴哥款',
		price: '￥45.00'
	}
];

function getProdHtml(prod){
	var html = '';
	html += '<li class="prod">';
	html += '<div class="cover"><a class="btn" href="">立即抢购</a></div>';
	html += '<a href="#">';
	html += '<img src="'+prod.img+'" alt="">';
	html += '<div class="prod-name">'+prod.name+'</div>';
	html += '<div class="prod-price">'+prod.price+'</div>';
	html += '</a>';
	html += '</li>';
	return html;
}


$('.btn-add').on('click', function(e){
	e.preventDefault();
	$.each(products, function(index, prod){
    var html = getProdHtml(prod);
		$('.tab-wrap:last .prod-ct:odd').append(html);
	});
});
