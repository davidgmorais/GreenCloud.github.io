profiles = [
    {
        "name" : "Admin",
        "lname" : "",
        "profile": "",
        "header": "",
        "bio": "Admin user of green cloud website."
    }
]


$(document).ready( function(){

    let name = localStorage.getItem("name");

    for ( var i = 0; i < profiles.length; i++) {
        if (profiles[i]["name"] == name) {
            $("#NameBox").text( name + profiles[i]["lname"]);
            $("#BioBox").text( profiles[i]["bio"]);

            if (profiles[i]["profile"] == "") {
                $("#ProfileBox").attr("src", "./defaultProfile.png");
                $("#HeaderBox").attr("src", "./defaultHeader.png");
                
            } else {
                $("#ProfileBox").attr("src", profiles[i]["profile"] );
                $("#HeaderBox").attr("src", profiles[i]["header"] );
            }

        }
    }


})