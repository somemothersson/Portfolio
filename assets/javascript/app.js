var live = "about";
// hide()

$("#portfolio").on("click", function () {
    console.log("clicked")

        $(".about").hide()
        $(".porto").show()


});
$("#about").on("click", function () {
    console.log("clicked")
        $(".porto").hide()
        $(".about").show()


});


