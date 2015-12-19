$(function(){
	/*set year select list*/
	$('select#year').each(function(){
		// current year
		var currentYear = 2015;
		// append year to select list
		for(var i = 0; i < 90; i++){
			var year = currentYear - i;
			$(this).append('<option>'+year+'</option>');
		}
	});
	/*set month select list*/
	$('select#month').each(function(){
		// month array
		var monthArr = ['一','二','三','四','五','六','七','八','九','十','十一','十二'];
		// get this
		var element = $(this);
		// append month to select list
		monthArr.forEach(function(entry){
			element.append('<option>'+entry+'</option>');
		});
	});
	/*set date select list*/
	$('select#date').each(function(){
		// number of dates per month
		var numOfDates = 31;
		// append date to select list
		for(var i = 1; i <= numOfDates ; i++){
			$(this).append('<option>'+i+'</option>');
		}
	});
});