//public/assets/scripts.js

/*global $*/

$(document).ready(function() {

    $.getJSON("/users", function (userData){
    for(var i=0; i<userData.length;i++){
        $("#userDataDiv").prepend(
        "<div class='col-sm-6'><div class='well'><h3><span class='fa fa-user'></span> Employee: " + userData[i].info.firstName +" "+ userData[i].info.lastName 
        + "</h3><p><strong>ID</strong>: " 
        + userData[i]._id + "<br>"
        + "<strong>Password</strong>: " 
        + userData[i].local.password + "<br>"
        + "<strong>Email</strong>: " 
        + userData[i].local.email + "<br>"
        + "<strong>Contact</strong>: "
        + userData[i].info.contact + "<br>"
        + "<strong>Area Covered </strong>: "
        + userData[i].info.areaCovered + "<br>"
        +"</p></div></div>");
    }
        
        
    });
    
});