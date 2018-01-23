/* global $ jQuery */
(function( $ ) {
    'use strict';
    $(function() {
        console.log( 'JavaScript Loaded!' );
    });
})( jQuery );
$(document).ready(function() {
    
    console.log("Scouter");
        
$("#enterScouter").on("click", function(event) {
    event.preventDefault();

$.ajax("/api/scouters" + id, {
    type: "POST",
    data: {
        firstName: $("#firstName").val().trim(),
        // lastName: $("#lastName").val().trim(),
        // email: $("#email").val().trim(),
        // password: $("#password").val().trim(),
        // areaCovered: $("#areaCovered").val(),
        scouterId: $("#scouterId").val()}
})
.done(function(data) {
    console.log(data);
});
});
});