$(window).on('load', function () {
  $('#loading').fadeOut(1000)
  $('#status').delay(1200).fadeOut(1000)
  $('#home-heading-1').addClass('animated fadeInLeft')
  $('#home-heading-2').addClass('animated fadeInRight')
  $('#home-text').addClass('animated zoomIn')
  $('#arrow-down i').addClass('animation fadeInDown infinite')
})

$('.username li').on('click', function () {
  $('.username li').removeClass('active')
  $(this).addClass('active')
})

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

  $('.tab-link').on('click', function () {
    // get and save clicked tab ID
    var tabID = $(this).attr('data-tab')
    // remove active menu status from tab bar
    $('.tab-link').removeClass('active-menu')
    // add active menu status to clicked tab
    $(this).addClass('active-menu')
    // fade out slide over .3s
    $('.active-tab').fadeOut(300)
    // wait and then slide in the correct slide
    setTimeout(function () {
      // removes the active (animation) class from all slides
      $('.slide').removeClass('active-tab')
      // add active (animation) class to the right slide
      $('#' + tabID)
        .show()
        .addClass('active-tab')
    }, 300) // timeout is .3s longs, which matches the fade out
  })
})
