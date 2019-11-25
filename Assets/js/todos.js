// marking todos

$("ul").on("click", "li", (function() {
    $(this).toggleClass("completed");
}));

//  Deleting ToDos

$("ul").on("click", "span", (function(event) {
    $(this).parent().fadeOut(750, function() {
        $(this).remove();
    });
    event.stopPropagation();

}));

//Entering todos 

$("input[type= 'text']").keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        if (todoText === "") {
            alert("Please Enter ToDo Item");
        } else {
            var ap = $("ul").append("<li><span><i class='fa fa-minus-circle'></i></span> " + todoText + "</li>");
        }


    }

});

$(".fa-pencil").click(function() {
    $("input[type= 'text']").fadeToggle();

});