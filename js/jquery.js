$(window).on('load', function () {
  $('#loading').fadeOut(2000)
  $('#status').delay(2200).fadeOut(2000)
})

$('#mobile-nav #navigation ul li a').on('click', function () {
  $(' #mobile-nav #navigation ul li a').removeClass('active')
  $(this).addClass('active')
})
