/* global $*/
$(document).ready(function() {
    console.log("scipt connected");

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

    function getResults() {
        $.getJSON("/athletesInfo", function(data) {
            console.log(data);



            for (var i = 0; i < data.length; i++) {
                $("#allPlayers").prepend("<div class='playerCard'><h1>" + data[i].firstName + " " + data[i].lastName + "</h1><p>" + "Height: " + data[i].height + "</p></div>")
            }
        })
    }
    getResults()



});
});
