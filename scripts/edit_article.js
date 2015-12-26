$(function(){
	var localImgSrc;
	var linkImgsrc;
	// input file changed
	$('input#uploadImg').change(function(){
		var fileHandle = this.files[0];
		var reader = new FileReader();
		reader.onload = function(e){
			// get img src
			localImgSrc = e.target.result;
			// create img element
			var img = $('<img/>').css({
				'width' : '95%',
				'margin' : '10px 0px',
			});
			// set img src attr
			img.attr('src',localImgSrc);
			// create div container elemnet
			var imgContainer = $('<div></div>').css({
				'width' : '100%',
				'display' : 'table-cell',
				'vertical-align' : 'middle',
			});
			// append img to container
			imgContainer.append(img);
			// hide all children in drop-area
			$('.drop-area')
			.children()
			.css({
				'display' : 'none',
			});
			// append img to drop-area
			$('.drop-area').append(imgContainer);
			// disable img link input 
			$('#uploadImgLink').attr('disabled','true');
		};
		reader.readAsDataURL(fileHandle);
	});
	// click drop-area
	$('.drop-area').click(function(){
		$('input#uploadImg')[0].click();
	});
	// click insert img confirm
	$('#uploadImgConfirm').click(function(){
		// create insertedImg
		var insertedImg = $('<img/>').css({
			'width' : '100px',
		});
		insertedImg.attr('src',localImgSrc);
		// get editableContent
		var editableContent = $('#editableContent');
		// insert into editableContent
		if(localImgSrc){
			insertNodeOverSelection(insertedImg[0], editableContent[0]);
		}
		else if(linkImgsrc){

		}
		else{
			alert('妳/你還沒有選取任何圖片唷');
		}
	});
})