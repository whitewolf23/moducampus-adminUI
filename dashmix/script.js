
document.addEventListener('DOMContentLoaded', function () {
  // var menu = document.getElementById('left_menu');
  // var menu = document.getElementsByClassName('left_menu')

  // 크로스 브라우징 에 의해 지원한는 버전만 가능
  // var menu = document.querySelector('#left_menu')

  // console.log(menu)
  // menu.addEventListener('click', function (e) {
  //   e.preventDefault()
  //   console.log(e.target)


  //   // if (e.target.nextElementSibling.classList.contains('visible')) {
  //   //   e.target.nextElementSibling.classList.remove('visible')
  //   // } else {
  //   //   e.target.nextElementSibling.classList.add('visible')
  //   // }
  //   e.target.parentNode.classList.toggle('opend');
  // }, false)

  $('#left_menu').on('click', function (e) {
    console.log(e.target)
    // $().next().addClass('visible')
    $(e.target).parent('.items').toggleClass('opend')
  })

})