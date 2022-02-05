$(window).on('load', function () {
  $('#loading').fadeOut(1000)
  $('#status').delay(1200).fadeOut(1000)
  $('#home-heading-1').addClass('animated fadeInLeft')
  $('#home-heading-2').addClass('animated fadeInRight')
  $('#home-text').addClass('animated zoomIn')
  $('#arrow-down i').addClass('animation fadeInDown infinite')
})

$('.navigation ul li a, #mobile-nav .navigation ul li a, .username li a').on(
  'click',
  function () {
    $(
      '.navigation ul li a, #mobile-nav .navigation ul li a, .username li a',
    ).removeClass('active')
    $(this).addClass('active')
  },
)

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
        'background-color': 'rgba(255, 255, 255, 0.4)',
        transition: 'ease-in 0.8s;',
      })
    }
  })

  $('.tab-link').click(function () {
    var tabID = $(this).attr('data-tab')

    $(this).addClass('active-resume').siblings().removeClass('active-resume')

    $('#tab-' + tabID)
      .addClass('active-resume')
      .siblings()
      .removeClass('active-resume')
  })

  // Smooth Scrolling
  $(function () {
    $('a.smooth-scroll').click(function (event) {
      event.preventDefault()

      // get section id like #about, #servcies, #work, #team and etc.
      var section_id = $(this).attr('href')

      $('html, body').animate(
        {
          scrollTop: $(section_id).offset().top - 80,
        },
        100,
        'easeInOutExpo',
      )
    })
  })
})
