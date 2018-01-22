/* global $*/
$(document).ready(function() {
    console.log("scipt connected");

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

    $("#submit").on("click", function(event) {
        event.preventDefault();
        console.log("NewPlayer");
        //Save the data
        firstname = $("#firstname").val().trim();
        lastname = $("#lastname").val().trim();
        height = $("#height").val().trim();
        weight = $("weight").val().trim();
        dash = $("#dash").val().trim();
        school = $("#school").val().trim();
        positionrating = $("#positionrating").val().trim();
        overallrank = $("#overallrank").val().trim();
        comments = $("#comments").val().trim();
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
