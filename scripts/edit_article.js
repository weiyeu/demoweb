$(function(){
	$('input#uploadImg').change(function(){
		var fileHandle = this.files[0];
		var reader = new FileReader();
		reader.onload = function(e){
			// create img element
			var img = $('<img/>').css({
				'width' : '95%',
				'display' : 'inline-block',
			});
			// set img src attr
			img.attr('src',e.target.result);
			// hide all children in drop-area
			$('.drop-area')
			.children()
			.css({
				'display' : 'none',
			});
			// append img to drop-area
			$('.drop-area').append(img);
		};
		reader.readAsDataURL(fileHandle);
	});
	$('.drop-area').click(function(){
		$('input#uploadImg')[0].click();
	});
})