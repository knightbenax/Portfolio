
$(document).ready(function() {
  console.log("Hi there! Say hello on Twitter - @knightbenax")
  var $nav = $(".menu");
  if ($nav.css("display") != 'none'){
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  }
});

$(document).scroll(function () {
    var $nav = $(".menu");
    if ($nav.css("display") != 'none'){
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    }
});
