$(document).ready(function () {
  $('#menu .items li, #menu .items li i, #menu .items li a').on('click', function () {
    $('#menu .items li, #menu .items li i, #menu .items li a').removeClass('active')
    $(this).addClass('active')
  })

  $('#menu-btn').click(function () {
    $('#menu').toggleClass('actived')
  })
})
