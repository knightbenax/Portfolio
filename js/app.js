
$(document).ready(function() {
  console.log("Hi there! Say hello on Twitter - @knightbenax")
  var $nav = $(".menu");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

$(document).scroll(function () {
    var $nav = $(".menu");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
