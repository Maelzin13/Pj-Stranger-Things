$(".option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");

  var audio = document.getElementById("myAudio");
  audio.play();
});