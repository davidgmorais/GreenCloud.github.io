var viagem = ko.observableArray()

var catalogo = [
    {
        "name": "Viagem de Moliceiro",
        "place": "aveiro",
        "price": 20,
        "img": "http://misericordiamogadouro.com/wp-content/uploads/2015/06/barco-moliceiro-aveiro.jpg",
        "activity": ["BoatRide"],
        "biom": "City"  
    },
    {
        "name": "Montanha para Escalar",
        "place": "Onde há montanhas",
        "price": 0,
        "img": "http://portalaventuras.pt/wp-content/uploads/Encosta_bebabdos.jpg",
        "activity": ["Hiking"],
        "biom": "Mountain"  


    },
    {
        "name": "Águas do Gerês",
        "place": "gerês",
        "price": 120,
        "img": "https://r-fa.bstatic.com/images/hotel/max1280x900/916/91655231.jpg",
        "activity": ["Hotel"],
        "biom": "Mountain"  


    },
    {
        "name": "Caminhada pelo Porto",
        "place": "porto",
        "price": 0,
        "img": "https://ecotrilha.pt/website/wp-content/uploads/2017/08/hiking-portugal.jpg",
        "activity": ["Tourist Guide", "Hiking"],
        "biom": "City"  
    },
    {
        "name": "Viagem de Moliceiro + hotel",
        "place": "aveiro",
        "price": 100,
        "img": "http://misericordiamogadouro.com/wp-content/uploads/2015/06/barco-moliceiro-aveiro.jpg",
        "activity": ["BoatRide", "Hotel"],
        "biom": "City"  

    }
    

];



clear = function(A) {
    A.removeAll();
}

searchTerm = function() {
    clear(viagem);

        if ($("#seachInput").val() == ""){
            for (let i = 0; i < catalogo.length; i++) {
                viagem.push(catalogo[i]);
                $("#filters").hide();
                $("#NotFound").addClass("invisible");
            };
        }else {

            for (let i = 0; i < catalogo.length; i++) {
                if (catalogo[i]["place"]  == ($("#seachInput").val().toLowerCase())){
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
};

let clicker = function() {
    $(".image").click( function() {
        var t = $(this).attr("Title");
        localStorage.setItem("opcao",t); 
        console.log(t);
    });
}


$(document).ready( function() {



    localStorage.setItem("opcao", null); 
    clear(viagem);
    $("#filters").hide();
    $("#clearBtn").hide();
    searchTerm();    
    
    $("#custom-search-input").submit( function(event) {
        event.preventDefault()
        clear(viagem);

        searchTerm();
        clicker();

    });    

    
    $("#filterBtn").click( function (e) {
        e.preventDefault();
        let searchPrice = $("#priceState").val();
        let searchBiom = $("#biomState").val();
        let searchActivity = $("#activityState").val();

        clear(viagem);


        for (let i=0; i<catalogo.length;i++){
            for (let j=0; j<catalogo.length;j++){

                if (catalogo[i]["place"] == $("#seachInput").val().toLowerCase()){

                    if (catalogo[i]["biom"] == searchBiom && catalogo[j]["activity"] == searchActivity) {
                        viagem.push(catalogo[i]);
                    } 


                }

            }

        }

        if (searchPrice == "0"){

            for (let i = 0; i< viagem().length; i++) {
               if (viagem()[i]["price"] != 0 ) {
                   viagem.pop(catalogo[i]);
               }
            }
        } else if (searchPrice == "1,40") {
            
            for (let i = 0; i< viagem().length; i++) {
                if (viagem()[i]["price"] = 0  || viagem()[i]["price"] > 40 ) {
                    viagem.pop(catalogo[i]);
                }
             }
        } else if (searchPrice == "41,100") {
            
            for (let i = 0; i< viagem().length; i++) {

                if (viagem()[i]["price"] <= 40  || viagem()[i]["price"] > 100 ) {
                    viagem.pop(catalogo[i]);
                }
             }

        } else if(searchPrice == "100+") {
            for (let i = 0; i< viagem().length; i++) {
                if (catalogo[i]["price"] <= 100) {
                    viagem.push(catalogo[i]);
                }
             }
        }

        $("#clearBtn").show()
        $("#filterBtn").css("width","50%")
        clicker();


    })


    $("#clearBtn").click( function(e) {
        e.preventDefault();
        $("#priceState").val("Price");
        $("#biomState").val("Biom");
        $("#activityState").val("Activity");
        $("#clearBtn").hide()
        $("#filterBtn").css("width","100%")


        clear(viagem);
        searchTerm();

        clicker();


    });
   



    ko.applyBindings(viagem);

    clicker();



});
