$(document).ready( function() {
    let users = [
                    {
                        "e-mail": "greencloud@ua.pt",
                        "password": "gcmasua",
                        "name": "Admin"
                    },
                    {
                        "e-mail": "master@ua.pt",
                        "password": "1234",
                        "name": "system"
                    },
                    {
                        "e-mail": "marianaladeiro@ua.pt",
                        "password": "luissantos",
                        "name": "Mariana"
                    }
                ]

    validar = function(user, password) {
        if (user == "" || password == "") {
            return false;
        } else {
            for (var i = 0; i < users.length; i++){
                if (users[i]["e-mail"] == user && (users[i]["password"] == password)){
                    localStorage.setItem("name",users[i]["name"]);
                    return true;
                }
            }
            return false;
        }
    }


    $(".form").submit( function(event) {
        var u = $("#email").val();
        var p = $("#password").val();
        event.preventDefault()

        //console.log(validar(u,p), u, p)
        if (u != "" && p!= "") {
            if (validar(u,p)) {
                localStorage.setItem("Login",1);
                $("#name_error").hide();
                $("#name_error").addClass('no_error');
                window.location = "../index.html"
            } else {
                $("#password").val("");
                if($('#name_error').hasClass('no_error')){
                    $("#name_error").show();
                    $('#name_error').removeClass('no_error');
                }
            }
        } else {
            console.log("not defined")
        }

    })

    swithLogin = function() {
        $("#first").hide();
        $("#second").show();

    }




})
