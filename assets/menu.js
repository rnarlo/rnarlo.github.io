$('.hamburger-menu').click(function (a) {
  event.preventDefault(a)

  $('.hamburger-list').removeClass('closed')
  $('.hamburger-list').addClass('shown')
  $('.hamburger-menu').removeClass('shown')
  $('.exit-menu').addClass('shown')
})

$('.exit-menu').click(function (a) {
  event.preventDefault(a)

  $('.hamburger-list').removeClass('shown')
  $('.hamburger-list').addClass('closed')
  $('.hamburger-menu').addClass('shown')
  $('.exit-menu').removeClass('shown')
})

function isOnScreen(element) {
  var curPos = element.offset()
  var curTop = curPos.top
  var screenHeight = $(window).height()
  return curTop > screenHeight ? false : true
}
