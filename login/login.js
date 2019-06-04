$(document).ready( function() {
    let users = [
                    {
                        "e-mail": "greencloud@ua.pt",
                        "password": "gcmasua",
                        "name": "Admin",
                        "lname": "",
                        "partner": true
                    },
                    {
                        "e-mail": "master@ua.pt",
                        "password": "1234",
                        "name": "system",
                        "lname": "",
                        "partner": true


                    },
                    {
                        "e-mail": "marianaladeiro@ua.pt",
                        "password": "luissantos",
                        "name": "Mariana",
                        "lname": "Ladeiro",
                        "partner": true

                    }
                ]

    validar = function(user, password) {

        for (var i = 0; i < users.length; i++){
            if (users[i]["e-mail"] == user && (users[i]["password"] == password)){
                localStorage.setItem("name",users[i]["name"]);
                localStorage.setItem("email",users[i]["e-mail"]);
                localStorage.setItem("lname",users[i]["lname"]);
                localStorage.setItem("partner",users[i]["partner"]);
                
                


                return true;
            }
        }
        return false;
        
    }


    $("#FirstForm").submit( function(event) {
        var u = $("#email").val();
        var p = $("#password").val();
        event.preventDefault()
        let state = localStorage.getItem("Login")
        //console.log(validar(u,p), u, p)
        if (u != "" && p!= "") {
            if (validar(u,p)) {
                $("#name_error").hide();
                $("#name_error").addClass('no_error');
                localStorage.setItem("Login",1);

                if (state == 2){
                    window.location = "../details/details.html"

                } else {
                    window.location = "../index.html"
                }
            } else {
                $("#password").val("");
                if($('#name_error').hasClass('no_error')){
                    $("#name_error").show();
                    $('#name_error').removeClass('no_error');
                }
                $("#name_error").text("Password incorrect");

            }
        } else if ( p == "") {
            if($('#name_error').hasClass('no_error')){
                $("#name_error").show();
                $('#name_error').removeClass('no_error');
                $("#name_error").text("Password incorrect");
            }
            $("#name_error").text("Insert Password!");


        }

    })

    swithLogin = function() {
        $("#first").hide();
        $("#second").show();

    }

    switchSignin = function() {
        $("#second").hide();
        $("#first").show();
    }


    $("#SecondForm").submit( function(event) {
        var Fname = $("#firstname").val();
        var Lname = $("#lastname").val();

        var email = $("#NewEmail").val();
        var password = $("#NewPassword").val();
        var cPass = $("#ConfirmPassword").val();

        event.preventDefault()

        checkForUser(email);

        if (Fname != "" && email != "" && password != "") {

            $("#blank_error").hide();
            $('#blank_error').addClass('no_error');

            if (checkForUser(email)) {  // return true se não existir email igual
    
                if ( password == cPass  ) {

                    $("#password_error").hide();
                    $('#password_error').addClass('no_error');

                    $("#blank_error").hide();
                    $('#blank_error').addClass('no_error');

                    $("#email_error").hide();
                    $('#email_error').addClass('no_error');

                    users.push({
                        "e-mail": email,
                        "password": password,
                        "name": Fname
                    })
                    

                    localStorage.setItem("Login",1);
                    localStorage.setItem("name",Fname);
                    localStorage.setItem("email",email);
                    localStorage.setItem("lname",Lname);
                   



                    $("#email_error").hide();
                    $("#email_error").addClass('no_error');
                    window.location = "../index.html"

                } else {

                    if($('#password_error').hasClass('no_error')){
                        $("#password_error").show();
                        $('#password_error').removeClass('no_error');
                    }

                }
               

            } else {
                if($('#email_error').hasClass('no_error')){
                    $("#email_error").show();
                    $('#email_error').removeClass('no_error');
                }
            }
        } else {

            if($('#blank_error').hasClass('no_error')){
                $("#blank_error").show();
                $('#blank_error').removeClass('no_error');
            }
        }
        

    })


    checkForUser = function(e) {
        for (var i = 0; i < users.length; i++){
            console.log(e);
            if (users[i]["e-mail"] == e ){
                return false;
            }
        }
        return true
    }

    



})
