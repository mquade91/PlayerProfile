/* global $*/
$(document).ready(function() {
    console.log("scipt connected");

    $("#submit").on("click", function(event) {
        event.preventDefault();

        var newPlayer = {
            firstname: $("#firstname").val().trim(),
            lastname: $("#lastname").val().trim(),
            height: $("#height").val().trim(),
<<<<<<< HEAD
            weight: $("#weight").val().trim(),
            dash: $("#dash").val().trim(),
            school: $("#school").val().trim(),
            position: $("#school").val().trim(),
            positionrating: $("#positionrating").val().trim(),
            overallrank: $("#overallrank").val(),
=======
            // weight: $("#weight").val().trim(),
            dash: $("#dash").val().trim(),
            school: $("#school").val().trim(),
            // position: $("#position").val().trim(),
            // positionrating: $("#positionrating").val().trim(),
            overallrank: $("#overallrank").val().trim(),
>>>>>>> 5dae76a64a263fc633afb5c2885f3121ff425d37
            comments: $("#comments").val().trim(),
        };

        console.log("test" + newPlayer);

        $.ajax({
            url:'/newPlayer',
            method:"POST",
            data:newPlayer
        })
           .then(function(data){
                console.log("_________________");
                if (data) {
                    alert("New Player added to the database");
                }
                else {
                    alert("Fail! Try again!");
                }
                // Clear the form when submitting
                $("#firstname").val().trim();
                $("#lastname").val().trim();
                $("#height").val().trim();
                $("#weight").val().trim();
                $("#dash").val().trim();
                $("#school").val().trim();
<<<<<<< HEAD
                $("#school").val().trim();
=======
                $("#position").val().trim(),
>>>>>>> 5dae76a64a263fc633afb5c2885f3121ff425d37
                $("#positionrating").val().trim();
                $("#overallrank").val().trim();
                $("#comments").val().trim();

            });

    });
});
