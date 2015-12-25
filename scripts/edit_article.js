$(function(){
	$('input#uploadImg').change(function(){
		alert('changed');
	});
	$('.drop-area').click(function(){
		$('input#uploadImg')[0].click();
	});
})