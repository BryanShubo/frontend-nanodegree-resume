/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName=HTMLheaderName.replace("%data%","Bryan");
var formattedRole=HTMLheaderRole.replace("%data%","Software Engineer");

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


