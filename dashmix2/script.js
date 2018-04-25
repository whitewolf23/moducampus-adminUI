
// 문서 전체를 dom 내용을 다불러오고 난 뒤에 실행
document.addEventListener('DOMContentLoaded', function () {
  var menu = document.getElementsByClassName('main_item_link_submenu')



  // click 리스너를 추가한 후에 e.target을 통해 추적, 같은 레벨에 있는 다음 태그를 찾아 classlist 에 넣은다음 toggle기능을 구현
  menu[0].addEventListener('click', function (e) {
    console.log(e.target.nextElementSibling.classList)
    // e.target.nextElementSibling.classList.toggle('visible')
  })

  // // click 리스너를 추가한 후에 e.target을 통해 추적, 같은 레벨에 있는 다음 태그를 찾아 classlist 에 넣은다음 toggle기능을 구현
  // menu1.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   console.log(e.target.nextElementSibling.classList)
  //   e.target.nextElementSibling.classList.toggle('visible')
  // })

  // // click 리스너를 추가한 후에 e.target을 통해 추적, 같은 레벨에 있는 다음 태그를 찾아 classlist 에 넣은다음 toggle기능을 구현
  // menu2.addEventListener('click', function (e) {
  //   console.log(e.target.nextElementSibling.classList)
  //   e.target.nextElementSibling.classList.toggle('visible')
  // })
})