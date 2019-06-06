$(document).ready( function() {

    setInterval(function () {
        $("#arrow").fadeOut()
        $("#arrow").fadeIn()

    }, 1000)

    $("#home").click( function() {
        window.location = "../index.html"   
    })

    $("#arrow_box").click(function () {
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 1200);

    })
})