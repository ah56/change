$(document).ready(function() {
  $("button#green").click(function() {
    console.log ("hello");
    $("body").removeClass();
    $("body").addClass("background-green");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
      $("body").addClass("background-yellow");
  });
  $("button#blue").click(function(){
    $("body").addClass("background-blue");
    $("body").removeClass();
    alert("Don't click blue!");

  });

});
