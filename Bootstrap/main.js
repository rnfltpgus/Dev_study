// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'


const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})

new Modal(document.getElementById('#exampleModal'), {
  backdrop: 'static'
})



// 이전 학습 내용
// const emalilInputEl = document.querySelector('#exampleInputEmail1')
// const modalEl = document.querySelector('#exampleModal')

// modalEl.addEventListener('shown.bs.modal', function () {
//   emalilInputEl.focus()
// })

// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })