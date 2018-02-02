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

        });
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

    //Populating data from Mongo Database to allPlayers div on profile.html page

    function getResults() {
        $.getJSON("/athletesInfo/", function(data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                $("#allPlayers").prepend("<div  class='col-md-3'><div><br><img src='./assets/images/logo.png' height='25px' width='45px'><h1>" + data[i].firstName + " " + data[i].lastName + "</h1><p><strong>Height: </strong>" + data[i].height + "</p><p><strong>Weight:</strong> " + data[i].weight + " lbs" + "</p><p><strong> 40 yd Dash:</strong> " + data[i].fortyTime + " s" + "</p><p><strong>Postion Rating: </strong> " + data[i].positionRating + "</p><p>" 
                + "<strong>Overall Rank:</strong> " + data[i].overallRank + "</p><p><strong>Postion: </strong>" + data[i].position + "</p><p><strong>School: </strong>" + data[i].school + "</p><div class='commentScroll'>" +
                    data[i].comment + "</div></div>");
            }
        });
    }
    getResults();

    $("#positionSelect").change(function() {
        let position = $("#positionSelect option:selected").text();
        console.log(position);

        $.getJSON("/athletesInfo/position/" + position, function(data) {
            $("#allPlayers").empty();
            for (var i = 0; i < data.length; i++) {
                $("#allPlayers").prepend("<div  class='col-md-3'><div><br><img src='./assets/images/logo.png' height='25px' width='45px'><h1>" + data[i].firstName + " " + data[i].lastName + "</h1><p><strong>Height:</strong> " + data[i].height + " ft" + "</p><p>" + "<strong>Weight:</strong> " + data[i].weight + " lbs" + "</p><p>" + "<strong> 40 yd Dash:</strong> " + data[i].fortyTime + " s" + "</p><p>" + "<strong>Postion Rating:</strong> " + data[i].positionRating + "</p><p>" + "<strong>Overall Rank:</strong> " + data[i].overallRank + "</p>" + "<strong> Position: </strong>" + data[i].position + "</p><p><strong>School: </strong>" + data[i].school + "</p><div class='commentScroll'>" +
                    data[i].comment + "</div></div>");
            }
        });
    });

    // //FOR RANKING SORTING
    // function getRankings() {
    //     $.getJSON("/athletesInfo/worstToBest", function(data) {
    //         console.log(data);

    //         for (var i = 0; i < data.length; i++) {
    //             $("#allPlayers").prepend("<div  class='col-md-3'><div><br><img src='./assets/images/logo.png' height='25px' width='45px'><h1>" + data[i].firstName + " " + data[i].lastName + "</h1><p>" + "<strong>Height:</strong> " + data[i].height + "</p><p>" + "<strong>Weight:</strong> " + data[i].weight + " lbs" + "</p><p>" + "<strong> Dash:</strong> " + data[i].fortyTime + " s" + "</p><p>" + "<strong>Postion Rating:</strong> " + data[i].positionRating + "</p><p>" + "<strong>Overall Rank:</strong> " + data[i].overallRank + "</p>" + "" + data[i].position + "</p><p>" + data[i].school + "</p><div class='commentScroll'>" +
    //                 data[i].comment + "</div></div>")
    //         }
    //     });
    // }
    // getRankings()

    // $("#rankingSelect").change(function() {
    //     let ranking = $("#rankingSelect option:selected").text()
    //     console.log(ranking)

    //     $.getJSON("/athletesInfo/worstToBest/" + ranking, function(data) {
    //         $("#allPlayers").empty()
    //         for (var i = 0; i < data.length; i++) {
    //             $("#allPlayers").prepend("<div  class='col-md-3'><div><br><img src='./assets/images/logo.png' height='25px' width='45px'><h1>" + data[i].firstName + " " + data[i].lastName + "</h1><p>" + "<strong>Height:</strong> " + data[i].height + "</p><p>" + "<strong>Weight:</strong> " + data[i].weight + " lbs" + "</p><p>" + "<strong> Dash:</strong> " + data[i].fortyTime + " s" + "</p><p>" + "<strong>Postion Rating:</strong> " + data[i].positionRating + "</p><p>" + "<strong>Overall Rank:</strong> " + data[i].overallRank + "</p>" + "" + data[i].position + "</p><p>" + data[i].school + "</p><div class='commentScroll'>" +
    //                 data[i].comment + "</div></div>")
    //         }
    //     })
    // })

});
