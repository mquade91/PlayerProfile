/*global $*/

$(document).ready(function() {

    $.getJSON("/users", function (userData){
    for(var i=0; i<userData.length;i++){
        $("#userDataDiv").prepend(
        "<div class='col-sm-6'><div class='well'><h3><span class='fa fa-user'></span>Local(ScoutName)</h3><p><strong>ID</strong>: " 
        + userData[i]._id + "<br>"
        + "<strong>Email</strong>: " 
        + userData[i].local.email + "<br>"
        + "<strong>First Name </strong>: "
        + userData[i].info.firstName + "<br>"
        + "<strong>Last Name </strong>: "
        + userData[i].info.lastName + "<br>"
        + "<strong>Area Covered </strong>: "
        + userData[i].info.areaCovered + "<br>"
        +"</p></div></div>");
    }
        
        
    });
    
});