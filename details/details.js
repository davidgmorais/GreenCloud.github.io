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
        "description": "É uma montanha, não ha muito que se lhe diga."
    },
    {
        "name": "Batatas cozidas",
        "place": "Onde há montanhas",
        "price": "Free",
        "img": "http://portalaventuras.pt/wp-content/uploads/Encosta_bebabdos.jpg",
        "description": "É uma montanha, não ha muito que se lhe diga."
    }

]


$(document).ready( function() {
    $("#payment").hide();
    $("#notif").hide();

    var name = localStorage.getItem("name");

    console.log("name passed: " + name);
    var viagem = [];

    for (let i = 0; i<catalogo.length; i++) {
        
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
        $("#price").hide();
        $("#payment").show();

    });

    
    $("#PayMethod").click( function(){
        $("#payment").hide();
        $("#notif").show();

    });

    
    $("#HomeButton").click( function(){
        window.location= "../main.html"

    });

});