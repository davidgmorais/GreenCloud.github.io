$(document).ready( function() {

    let login = localStorage.getItem("Login");
    let name = localStorage.getItem("name");
    let partner = localStorage.getItem("partner");

    console.log(name);

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
            window.location = "./login/login.html";
        }
    });

    $("#logout").click( function() {
        console.log("loging out...");
        $("#login").removeClass("dropdown-toggle");
        $("#login").removeAttr("data-toggle");
        localStorage.setItem("Login",0);
        localStorage.setItem("name",null);
        localStorage.setItem("lname",null);
        localStorage.setItem("email",null);
        window.location = "./index.html"
    });

    $("#addLocationForm").click( function() {
        if (login != 1) {
            window.location = "./login/login.html"
        }

        if (partner != "true") {

            $("#notPartner").show();
            $("#FormBody").hide();
            $("#msg").hide();
            $("#submitForm").hide()


        } else {

            $("#notPartner").hide();
            $("#FormBody").show();
            $("#msg").hide();
            $("#submitForm").show()

        }

        $("#adress").val("");
        $("#city").val("");
        $("#opinion").val("");
        $("#pics").val("");

    })

    $("#submitForm").click( function() {
        $("#notPartner").hide();
        $("#FormBody").hide();
        $("#msg").show();
        $("#submitForm").hide()
    })


    $("#bmForm").click( function() {
        if (login != 1) {
            window.location = "./login/login.html"
        }

        $("#FormBody2").show();
        $("#msg2").hide();
        $("#submitForm2").show()


        $("#name").val("");
        $("#nr").val("");
        $("#opinion").val("");
        $("#file").val("");

    })
  
    $("#submitForm2").click( function() {
        $("#FormBody2").hide();
        $("#msg2").show();
        $("#submitForm2").hide()
    })

});

