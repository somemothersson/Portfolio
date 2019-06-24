var live = "about";
// hide()
$(".porto").hide()
    $(".about").show()
    
    $("#portfolio").on("click", function () {
        console.log("clicked")
    
            // $(".about").hide()
            $(".porto").slideDown()
    
    
    });
    $("#about").on("click", function () {
        console.log("clicked")
        $(".porto").hide()
        $(".about").slideDown()
    
    });






