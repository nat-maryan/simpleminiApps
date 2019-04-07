// check off specific toDos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete ToDo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//grabbing new todo from input
		var toDoText = $(this).val();
		$(this).val("");   
		//create a new li and add it to the list
		$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + toDoText + "</li>");
	}
});

$('.fa-pencil-square').click(function(){
	$("input").toggle();
});