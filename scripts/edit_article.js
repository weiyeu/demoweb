/**
 * show image file on .drop-area element
 * 
 * @param fileHandle
 *            An image file object that is gonna show on drop-area
 * @param imgSrcObj
 * 			  image src object that contain local image src link(for pointer purpose)
 */
 function showImgOnDropArea(fileHandle, imgSrcObj){
 	var reader = new FileReader();
 	reader.onload = function(e){
		// get img src
		localImgSrc = e.target.result;
		imgSrcObj.localImgSrc = localImgSrc;
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
}

/* document ready */
$(function(){
	var imgSrcObj = {localImgSrc : null};
	var linkImgsrc;
	var uniqueIdNum = 0;
	// input file changed
	$('input#uploadImg').change(function(){
		var fileHandle = this.files[0];
		showImgOnDropArea(fileHandle,imgSrcObj);
	});
	// click drop-area
	$('.drop-area')
	.on('click', function(){
		$('input#uploadImg')[0].click();
	})
	.on('dragover',function(e){
		e.preventDefault();
	})
	.on('drop',function(e){
		e.preventDefault();
		var fileHandle = e.originalEvent.dataTransfer.files[0];
		showImgOnDropArea(fileHandle,imgSrcObj);
	});
	// drop img on editableContent
	$('#editableContent')
	.on('drop',function(e){
		var id = e.originalEvent.dataTransfer.getData('text');
		var insertedImg = $('#'+id);
		insertedImg
		.on('dragstart',function(e){
			var id = $(this).attr('id');
			e.originalEvent.dataTransfer.setData('text',$(this).attr('id'));
		});
		var range = document.caretRangeFromPoint(e.originalEvent.clientX, e.originalEvent.clientY);
		range.insertNode(insertedImg[0]);
		e.preventDefault()
	});
	// click insert img confirm
	$('#uploadImgConfirm').click(function(){
		// countup id
		uniqueIdNum++;
		// create insertedImg
		var insertedImg = $('<img/>').css({
			'width' : '100px',
		});
		insertedImg.attr({
			'src' : imgSrcObj.localImgSrc,
			'class' : 'inserted',
			'id' : 'id'+uniqueIdNum,
		});
		// add event handler to insertedImg
		var resizeable = false;
		var dragging = false;
		var startX = 0;
		var startY = 0;
		var startWidth = 0;
		insertedImg
		// click to toggle resize function
		.on('click',function(e){
			if(resizeable){
				// clear resizeable border
				$(this).css({
					'border' : '',
				});
			}
			else{
				$(this).css({
					'border' : '2px dashed lightgray',
				});
			}
			resizeable = !resizeable;
		})
		.on('mousedown touchstart',function(e){
			if(resizeable){
				e.preventDefault();
				dragging = true;
				startX = e.pageX;
				startY = e.pageY;
				startWidth = $(this).width();
			}
		})
		.on('mousemove touchmove',function(e){
			if(dragging){
				var moveX = e.pageX - startX;
				var moveY = e.pageY - startY;
				// resize insertedImg
				$(this).css({
					'width' : (startWidth + moveX)+'px',
				});
			}
		})
		.on('mouseup touchend',function(e){
			dragging = false;
		})
		.on('dragstart',function(e){
			var id = $(this).attr('id');
			e.originalEvent.dataTransfer.setData('text',$(this).attr('id'));
		});
		// get editableContent
		var editableContent = $('#editableContent');
		// insert into editableContent
		if(imgSrcObj.localImgSrc){
			insertNodeOverSelection(insertedImg[0], editableContent[0]);
		}
		else if(linkImgsrc){

		}
		else{
			alert('妳/你還沒有選取任何圖片唷');
		}
	});
})
