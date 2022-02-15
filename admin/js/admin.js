$(document).ready(function () {
  $('#one').on('click', function () {
    $('.users', this).toggleClass('fa-chevron-up')
  })
  $('#two').on('click', function () {
    $('.blogs').toggleClass('fa-chevron-up')
  })
  $('#three').on('click', function () {
    $('.resume').toggleClass('fa-chevron-up')
  })
  $('#four').on('click', function () {
    $('.culib').toggleClass('fa-chevron-up')
  })

  $("#admin-menu-btn").click(function(){
    $("#admin-menu").toggleClass("actived");
  })
})
