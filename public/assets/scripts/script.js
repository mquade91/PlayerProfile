/* global $*/
$(document).ready(function() {
    console.log("script connected");

    $("#submit").on("click", function(event) {
        event.preventDefault();
        let ratingHolder = []
        $("input:radio").each(function() {
            if ($(this).is(':checked') === true) {
                ratingHolder.push(($(this).val()));
            }
        });
        console.log(ratingHolder)

        let rating = parseInt(ratingHolder[0])

        console.log("rating" + rating)

        var newPlayer = {
            firstName: $("#firstname").val().trim(),
            lastName: $("#lastname").val().trim(),
            height: $("#height").val().trim(),
            weight: $("#weight").val().trim(),
            fortyTime: $("#dash").val().trim(),
            school: $("#school").val().trim(),
            position: $("#position").val().trim(),
            positionRating: rating,
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
        $.getJSON("/athletesInfo/", function(data) {
            console.log(data);



            for (var i = 0; i < data.length; i++) {
                $("#allPlayers").prepend("<div  class='col-md-3'><div><br><img src='./assets/images/logo.png' height='25px' width='45px'><h1>" + data[i].firstName + " " + data[i].lastName + "</h1><p>" + "Height: " + data[i].height + " ft" + "</p><p>" + "Weight: " + data[i].weight + " lbs" + "</p><p>" + "Dash: " + data[i].fortyTime + " s" + "</p><p>" + data[i].school + "</p><p>" + "" + data[i].position + "</p><p>" + "<div class='commentScroll'>" +
                    data[i].comment + "</div></div>")
            }
        });
    }
    getResults()

    $("#positionSelect").change(function() {
        let position = $("#positionSelect option:selected").text()
        console.log(position)
        $.getJSON("/athletesInfo/position/" + position, function(data) {
            $("#allPlayers").empty()
            for (var i = 0; i < data.length; i++) {
                $("#allPlayers").prepend("<div  class='col-md-3'><div><br><img src='./assets/images/logo.png' height='25px' width='45px'><h1>" + data[i].firstName + " " + data[i].lastName + "</h1><p>" + "Height: " + data[i].height + " ft" + "</p><p>" + "Weight: " + data[i].weight + " lbs" + "</p><p>" + "Dash: " + data[i].fortyTime + " s" + "</p><p>" + data[i].school + "</p><p>" + "" + data[i].position + "</p><p>" + "<div class='commentScroll'>" +
                    data[i].comment + "</div></div>")
            }
        })
    })
});
