let catalogo = [
    {
        "name": "Viagem de Moliceiro",
        "place": "aveiro",
        "price": "20€/pessoa",
        "img": "http://misericordiamogadouro.com/wp-content/uploads/2015/06/barco-moliceiro-aveiro.jpg",
        "description": 'Neste programa poderá contemplar a magia da nossa ria enquanto descobre os lugares mais recônditos repletos de vida animal. Flamingos, andorinhas do mar, corvos marinhos e pernilongos são apenas algumas das espécies que pode observar nesta odisseia que dura aproximadamente 2h. A viagem começa junto da "Antiga Lota" e passa por diversos locais como o Esteiro do Gramato, a marginal e base aérea de S. Jacinto e pelo Canal dos Bacalhoeiros. Marque já a sua visita!'    
    },
    {
        "name": "Montanha para Escalar",
        "place": "Onde há montanhas",
        "price": "Free",
        "img": "http://portalaventuras.pt/wp-content/uploads/Encosta_bebabdos.jpg",
        "description": "É uma montanha."
    },
    {
        "name": "Águas do Gerês",
        "place": "Gerês",
        "price": "120€/noite",
        "img" : "https://r-fa.bstatic.com/images/hotel/max1280x900/916/91655231.jpg",
        "description": "Rodeado por montanhas e lagos, o Águas do Gerês Hotel oferece uma piscina Natural no exuberante Parque Nacional Peneda-Gerês. Os quartos incluem casas de banho privada,  room service e acima de tudo uma politica bastante eco-friendly."
    },
    {
        "name": "Caminhada pelo Porto",
        "place": "Porto",
        "price": "Free",
        "img": " https://ecotrilha.pt/website/wp-content/uploads/2017/08/hiking-portugal.jpg",
        "description": "O Porto é o pais perfeito para caminhadas com vistas espantosas. A tranquilidade dos vales do Douro e inigualavel e rica em cores. Encostas ferteís com linhas de videiras verdes e oliveiras envelhecidas a serem refletidas pela água azul do rio. As casas pequenas da região são um marco da terra assim como as Quintas onde se fazem a produção e prova de vinho, experiencia esta partilhada com os turistas mais curiosos."
    },
    {
        "name": "Viagem de Moliceiro + hotel",
        "place": "aveiro",
        "price": "100€/pessoa",
        "img": "http://misericordiamogadouro.com/wp-content/uploads/2015/06/barco-moliceiro-aveiro.jpg",
        "description": 'Neste programa poderá contemplar a magia da nossa ria enquanto descobre os lugares mais recônditos repletos de vida animal. Flamingos, andorinhas do mar, corvos marinhos e pernilongos são apenas algumas das espécies que pode observar nesta odisseia que dura aproximadamente 24h. A viagem começa junto da "Antiga Lota" e passa por diversos locais como o Esteiro do Gramato, a marginal e base aérea de S. Jacinto e pelo Canal dos Bacalhoeiros com uma noite bem passada num hotel local de 4 estrelas, com medidass exo-friendly. Marque já a sua visita!'    
    },

]


$(document).ready( function() {
    $("#payment").hide();
    $("#notif").hide();
    $("#error").hide();

    var name = localStorage.getItem("opcao");
    var login = localStorage.getItem("Login");

    console.log("name passed: " + name);
    var viagem = [];

    for (let i = 0; i<catalogo.length; i++) {
        
        console.log(catalogo[i]["name"]);

        if (name == catalogo[i]["name"]) {
            
            $("#header").attr("src", catalogo[i]["img"]);
            $("#Title").text(catalogo[i]["name"]);
            $("#description").text(catalogo[i]["description"]); 
            $("#PriceTag").text(catalogo[i]["price"])
            break;
        };


    };

    $( function() {
        $( ".datepicker" ).datepicker();
    } );


    $("#booking").click( function(){
        
        if (login == 1) {
            
            if ( $("#ending").val() != ""  && $("#starting").val() != "" ){
                $("#error").hide();
                $("#price").hide();
                $("#payment").show();
            } else {
                $("#error").show();
            }

        } else {
            localStorage.setItem("Login", 2);
            window.location= "../login/login.html";        }

       
        
    });

    $("#backMethod").click( function() {
        $("#price").show();
        $("#payment").hide();
    })

    
    $("#PayMethod").click( function(){
        $("#payment").hide();
        $("#notif").show();

    });

    
    $("#HomeButton").click( function(){
        window.location= "../index.html"

    });

});
