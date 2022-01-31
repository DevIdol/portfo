$(window).on('load', function () {
  $('#loading').fadeOut(2000)
  $('#status').delay(2200).fadeOut(2000)
  $('#home-heading-1').addClass('animated fadeInLeft')
  $('#home-heading-2').addClass('animated fadeInRight')
  $('#home-text').addClass('animated zoomIn')
  $('#arrow-down i').addClass('animation fadeInDown infinite')
})

// $('.username li a').on('click', function () {
//   $('.username li a').removeClass('active')
//   $(this).addClass('active')
// })

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('#main-nav, #mobile-nav').css({
        'background-color': '#fff',
        transition: 'ease-in-out 0.8s;',
        'box-shadow': '0 1px 1px -1px gray',
      })
    } else {
      $('#main-nav, #mobile-nav').css({
        'background-color': 'rgba(255, 255, 255, 0.6)',
        transition: 'ease-in 0.8s;',
      })
    }
  })
})
