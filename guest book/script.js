 $(document).ready(function(){
    $("button").click(function(){
        // $.ajax({url: "demo_test.tt", success: function(result){
            // $("#div1").html(result);
        // },
		// error:function(){alert("error")}});
		$.ajax({
			type:    "POST",
			url:     "123",
			data:    {"postComment":""},
			success: function(data,a,c) {
				alert('call back');
			},
			// vvv---- This is the new bit
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = ");
			}
		});
    });
});
  