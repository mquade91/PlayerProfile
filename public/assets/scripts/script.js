/* global $*/

$(document).ready(function() {
    console.log("scipt connected");

    $("#submit").on("click", function(event) {
        var firstname;
        var lastname;
        var height;
        var weight;
        var dash;
        var school;
        var positionrating;
        var overallrank;
        var comments;
        var listData = [];

        //Save the data
        firstname = $("#firstname").val();
        lastname = $("#lastname").val();
        height = $("#height").val();
        weight = $("weight").val();
        dash = $("#dash").val();
        school = $("#school").val();
        positionrating = $("#positionrating").val();
        overallrank = $("#overallrank").val();
        comments = $("#comments").val();
        listData = [
            firstname,
            lastname,
            height,
            weight,
            dash,
            school,
            positionrating,
            overallrank,
            comments
        ];
        console.log(listData);
    });


});
