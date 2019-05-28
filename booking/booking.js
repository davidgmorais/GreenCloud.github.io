var viagem = ko.observableArray()

var catalogo = [
    {
        "name": "Viagem de Moliceiro",
        "place": "aveiro",
        "price": "20€/pessoa",
        "img": "http://misericordiamogadouro.com/wp-content/uploads/2015/06/barco-moliceiro-aveiro.jpg"
    },
    {
        "name": "Montanha para Escalar",
        "place": "Onde há montanhas",
        "price": "Free",
        "img": "http://portalaventuras.pt/wp-content/uploads/Encosta_bebabdos.jpg"
    },
    {
        "name": "Viagem de Moliceiro",
        "place": "aveiro",
        "price": "20€/pessoa",
        "img": "http://misericordiamogadouro.com/wp-content/uploads/2015/06/barco-moliceiro-aveiro.jpg"
    },
    {
        "name": "Viagem de Moliceiro",
        "place": "aveiro",
        "price": "20€/pessoa",
        "img": "http://misericordiamogadouro.com/wp-content/uploads/2015/06/barco-moliceiro-aveiro.jpg"
    },
    {
        "name": "Viagem de Moliceiro",
        "place": "aveiro",
        "price": "20€/pessoa",
        "img": "http://misericordiamogadouro.com/wp-content/uploads/2015/06/barco-moliceiro-aveiro.jpg"
    }
    

];

clear = function(A) {
    A.removeAll();
}


$(document).ready( function() {

    localStorage.setItem("name", null); 
    clear(viagem);
    for (let i = 0; i < catalogo.length; i++) {
        viagem.push(catalogo[i]);
    };

    ko.applyBindings(viagem);

    $("#filters").hide();

    $("#custom-search-input").submit( function(event) {
        clear(viagem);
        event.preventDefault()

        if ($("#seachInput").val() == ""){
            for (let i = 0; i < catalogo.length; i++) {
                viagem.push(catalogo[i]);
                $("#filters").hide();
                $("#NotFound").addClass("invisible");
            };
        }else {
            for (let i = 0; i < catalogo.length; i++) {
                if (catalogo[i]["place"] == $("#seachInput").val().toLowerCase()){
                    viagem.push(catalogo[i]);
                
                };
            };
            
            if (viagem().length != 0) {
                $("#filters").show();
                $("#NotFound").addClass("invisible");

            } else {
                $("#NotFound").removeClass("invisible");
            }
        };
        

    });

    $(".image").click( function() {
        var t = $(this).attr("Title");
        localStorage.setItem("name",t); 
        console.log(t);
    });

    





});