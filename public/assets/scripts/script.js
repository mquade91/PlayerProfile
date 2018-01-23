/* global $*/
$(document).ready(function() {
    console.log("scipt connected");

    $("#submit").on("click", function(event) {
        event.preventDefault();

        var newPlayer = {
<<<<<<< HEAD
            firstname: $("#firstname").val().trim(),
            lastname: $("#lastname").val().trim(),
=======
            firstName: $("#firstname").val().trim(),
            lastName: $("#lastname").val().trim(),
>>>>>>> 5dae76a64a263fc633afb5c2885f3121ff425d37
            height: $("#height").val().trim(),
            weight: $("#weight").val().trim(),
            dash: $("#dash").val().trim(),
            school: $("#school").val().trim(),
<<<<<<< HEAD
            position: $("#school").val().trim(),
            positionrating: $("#positionrating").val().trim(),
=======
            position: $("#position").val().trim(),
            // positionrating: $("#positionrating").val().trim(),
>>>>>>> 5dae76a64a263fc633afb5c2885f3121ff425d37
            overallrank: $("#overallrank").val().trim(),
            comments: $("#comments").val().trim(),
        };

<<<<<<< HEAD
        console.log(newPlayer);

        $.post("/newPlayer", newPlayer,
            function(data) {
=======
        console.log("test" + newPlayer);

        $.ajax({
            url:'/newPlayer',
            method:"POST",
            data:newPlayer
        }).then(function(data){
                console.log(data);
>>>>>>> 5dae76a64a263fc633afb5c2885f3121ff425d37
                if (data) {
                    alert("New Player added to the database");
                }
                else {
                    alert("Fail! Try again!");
                }
                // Clear the form when submitting
<<<<<<< HEAD
                $("#firstname").val().trim();
                $("#lastname").val().trim();
                $("#height").val().trim();
                $("#weight").val().trim();
                $("#dash").val().trim();
                $("#school").val().trim();
                $("#school").val().trim();
                $("#positionrating").val().trim();
                $("#overallrank").val().trim();
                $("#comments").val().trim();
=======
                $("#firstname").val("");
                $("#lastname").val("");
                $("#height").val("");
                $("#weight").val("");
                $("#dash").val("");
                $("#school").val("");
                $("#position").val(""),
                $("#positionrating").val("");
                $("#overallrank").val("");
                $("#comments").val("");
>>>>>>> 5dae76a64a263fc633afb5c2885f3121ff425d37

            });

    });
});
