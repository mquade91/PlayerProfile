/* global $*/
$(document).ready(function() {
    console.log("script connected");

    $("#submit").on("click", function(event) {
        event.preventDefault();

        var newPlayer = {
            firstName: $("#firstname").val().trim(),
            lastName: $("#lastname").val().trim(),
            height: $("#height").val().trim(),
            weight: $("#weight").val().trim(),
            fortyTime: $("#dash").val().trim(),
            school: $("#school").val().trim(),
            position: $("#position").val().trim(),
            positionRating: $("#positionRating").val().trim(),
            overallRank: $("#overallRank").val().trim(),
            comment: $("#comments").val().trim(),
        };
        console.log("test");
        console.log(newPlayer);

        $.ajax({
            url: '/newPlayer',
            method: "POST",
            data: newPlayer
        }).then(function(data) {
            console.log(data);
            if (data) {
                alert("New Player added to the database");
            }
            else {
                alert("Fail! Try again!");
            }

            // Clear the form when submitting

            $("#firstname").val("");
            $("#lastname").val("");
            $("#height").val("");
            $("#weight").val("");
            $("#dash").val("");
            $("#school").val("");

            $("#position").val("");
            $("#positionRating").val("");
            $("#overallRank").val("");
            $("#comments").val("");

        });
    });

    //Populating data from Mongo Database to allPlayers div on profile.html page

    function getResults() {
        $.getJSON("/athletesInfo", function(data) {
            console.log(data);



            for (var i = 0; i < data.length; i++) {
<<<<<<< HEAD
<<<<<<< HEAD
                $("#allPlayers").prepend("<div  class='col-md-3'><div class='playerCard'><div></div><img src='./assets/images/logo.png' height='25px' width='45px'><h1>" + data[i].firstName + " " + data[i].lastName + "</h1><p>" + "Height: " + data[i].height + " ft" + "</p><p>" + "Weight: " + data[i].weight + " lbs" + "</p><p>" + "Dash: " + data[i].fortyTime + " s" + "</p><p>" + data[i].school + "</p><p>" + "" + data[i].position + "</p><p>" + data[i].comment + "</div></div>")
=======

                $("#allPlayers").prepend("<div  class='col-md-3'><div class='playerCard'><div></div><img src='./assets/images/logo.png' height='25px' width='45px'><h1>" + data[i].firstName + " " + data[i].lastName + "</h1><p>" + "Height: " + data[i].height + " ft" + "</p><p>" + "Weight: " + data[i].weight + " lbs" + "</p><p>" + "Dash: " + data[i].fortyTime + " s" + "</p><p>" + data[i].school + "</p><p>" + "" + data[i].position + "" + "</p></div></div>")
>>>>>>> dff64692fcbef453d510a9757f38a1edecbf4bcc
=======

                $("#allPlayers").prepend("<div  class='col-md-3'><div class='playerCard'><div></div><img src='./assets/images/logo.png' height='25px' width='45px'><h1>" + data[i].firstName + " " + data[i].lastName + "</h1><p>" + "Height: " + data[i].height + " ft" + "</p><p>" + "Weight: " + data[i].weight + " lbs" + "</p><p>" + "Dash: " + data[i].fortyTime + " s" + "</p><p>" + data[i].school + "</p><p>" + "" + data[i].position + "</p><p>" + data[i].comment + "</div></div>")

>>>>>>> 00fc7a635e0d0a6759a70f6d093710e95afefe18
            }
        });
    }
    getResults()
});
