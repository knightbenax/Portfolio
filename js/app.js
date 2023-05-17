
$(document).ready(function() {
    

  console.log("Hi there! Say hello on Twitter or Origin - @knightbenax")
  var $nav = $(".menu");
  if ($nav.css("display") != 'none'){
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  }
//   var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );
});

$(document).scroll(function () {
    var $nav = $(".menu");
    if ($nav.css("display") != 'none'){
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    }
});

function doResize(){
    if ($(window).width() > 768){
        const avatarWidth = $(".avatar").outerWidth(true);
        $(".sectiontag").width(avatarWidth);
    }
}

window.onload = (event) => {
    doResize();
};
