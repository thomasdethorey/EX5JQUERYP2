// $(function(){
// $( "#showText" ).click(function() {
//    $( "#secondText" ).empty();
// });
// });
$( "#lastName" ).focus(function() {
$("#lastName").css("border","3px solid green");
});
$( "#firstName" ).focus(function() {
$("#firstName").css("border","3px solid green");
});
$( "#lastName" ).focusout(function() {
$("#lastName").css("border","3px solid red");
});
$( "#firstName" ).focusout(function() {
$("#firstName").css("border","3px solid red");
});
