$(document).ready( function(){
	$("#navbar ul a").on("click", function(){
		var element = this;
		$(this).addClass('selected');
		
		$("#navbar ul a").not(element).each(function(){
			$(this).removeClass('selected');
		});
	});	
});