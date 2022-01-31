$(window).on('load', function () {
  $('#loading').fadeOut(2000);
  $('#status').delay(2200).fadeOut(2000);
  $("#home-heading-1").addClass("animated fadeInLeft");
  $("#home-heading-2").addClass("animated fadeInRight");
  $("#home-text").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animation fadeInDown infinite");
})

$('#mobile-nav #navigation ul li a').on('click', function () {
  $(' #mobile-nav #navigation ul li a').removeClass('active')
  $(this).addClass('active')
})
