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
            dash: $("#dash").val().trim(),
            school: $("#school").val().trim(),
            position: $("#position").val().trim(),
            positionrating: $("#positionrating").val().trim(),
            overallrank: $("#overallrank").val().trim(),
            comments: $("#comments").val().trim(),
        };

        console.log("test" + newPlayer);

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
});
