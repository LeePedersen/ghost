$(document).ready(function() {
  $(".clickable").click(function() {
    $("#ghost-showing").toggle();
    $("#ghost-hidden").toggle();
  });
  $(".quote-click").click(function() {
    $("#ghost-quotes").slideDown().delay( 1400 ).slideUp();
  });
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
  $("button#orange").click(function() {
    $("body").removeClass();
    $("body").addClass("orange-background");
  });
  $("button#default").click(function() {
    $("body").removeClass();
    $("body").addClass("default-background");
  });
});
