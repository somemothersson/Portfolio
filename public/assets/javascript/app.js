var live = "about";
// hide()
$(".porto").hide()

    
    $("#portfolio").on("click", function () {
        console.log("clicked")
    
            $(".about").hide()
            $(".porto").slideDown()
    
    
    });
    $("#about").on("click", function () {
        console.log("clicked")
        $(".porto").hide()
        $(".about").slideDown()
    
    });






