$(document).ready(()=>{

    for (let producto of arrayProductos) {

        $(`#${producto.id}`).click(function(){
            $(".list-group-item").slideDown("slow");
        })

    }

    $(".card-img-top").css({"transition": "all 0.2s ease-in-out",
                            "border": "2px solid blanchedalmond",
                            "border-radius": "3px"})
                            
        .hover(
        function() {
            $(this).css("transform","scale(1.05");
        },
        function() {
            $(this).css("transform","scale(1.0)");
        }
    );

});
