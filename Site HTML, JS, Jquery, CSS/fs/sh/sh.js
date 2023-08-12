(function ($) {
  $(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });
})(jQuery);
var ss = document.querySelectorAll(".btn").length;
for(var i = 0; i<ss; i++){
  document.querySelectorAll(".btn")[i].addEventListener("click", function(){
    var audio = new Audio ('sound/sound.mp3');
    audio.play();
  });
};