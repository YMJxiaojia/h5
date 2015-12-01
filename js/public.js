$(function() {
	var onOff=true;
	function contactService() {
		var _str='';
		_str+="<div class='dialog-tit'>"
		  _str+="<h3>客服电话</h3>"
		  _str+="<p>确定拨打电话400-010-6909</p>"
		_str+="</div>"
		_str+="<div class='dialog-con'>"
		  _str+="<div class='btn-box'><a href='javascrpit:;' class='pop-btn'>取消</a><a href='javascript:;' class='pop-btn2'>确定</a></div>"
		_str+="</div>"
		return _str;
	};
	$('.tel-number').click(function() {
		openNew(contactService());
		$('.btn-box a').click(function() {
			$('#m-mask').remove();
			$('#m-login').remove();
		});
	});
	$('.modify').mousedown(function() {
		if ($('.modify').text()=='修改') {
			$('.account-name').prop('disabled', false);
			$(this).html('确定');			
			$(this).css('background', '#77bbff');
		}else{
			$(this).css('background', '#999');
			$('.account-name').prop('disabled', true);
			$('.account-name').off( "blur" );
		}
	});
	$('.account-name').blur(function() {
		$('.modify').html('修改');
		$('.modify').css('background', '#999');
		$('.account-name').val('');
		$('.account-name').prop('disabled', true);
	});

});