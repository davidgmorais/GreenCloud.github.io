var options= ko.observableArray([
    {"name": "Book a trip", "url": "./booking/booking.html"},
    {"name": "Add a location", "url": "booking.html"},
    {"name": "Become a member", "url": "booking.html"},
    {"name": "Talk to others", "url": "./chat/chat.html"},
    {"name": "Client support", "url": "booking.html"},
    {"name": "About our investor", "url": "booking.html"}
]);


$(document).ready( function() {

    let login = localStorage.getItem("Login");
    let name = localStorage.getItem("name");

    var self= this;

    console.log(name);

    ko.applyBindings(options);


    setInterval(function(){
		$("#arrow").fadeOut()
		$("#arrow").fadeIn()

	},1000)



    $("#arrow_box").click( function() {
        $('html, body').animate({
			scrollTop: $(window).height()
		}, 1200);
		
    })

    if (login == 1) {
        console.log("your already logged in");
        $("#login").addClass("dropdown-toggle");
        $("#login").attr("data-toggle","dropdown");
        $("#login").text(localStorage.getItem("name"));
    }

    $("#login").click(function() {
        if (login != 1) {
            window.location = "./login";
        }
    });

    $("#logout").click( function() {
        console.log("loging out...");
        $("#login").removeClass("dropdown-toggle");
        $("#login").removeAttr("data-toggle");
        localStorage.setItem("Login",0);
        window.location = "./index.html"
    });




})
