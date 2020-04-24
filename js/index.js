import { SPECDT } from './specdt'
import { accordion } from './accordionTab'

let i = 0

$.each(SPECDT, function () {
  $('#spec')
    .append(
      `<h2 class=${this.group} tabindex=${i++}><a class='header-link' href=#${
        i - 1
      } >${this.group}</a></h2>`
    )
    .append(`<dl class='container' id=${i - 1} index=${i - 1}></dl>`)
  $.each(this.items, function () {
    $(`[index=${i - 1}]`)
      .append(`<dt>${this.name}</dt>`)
      .append(`<dd>${this.value}</dd>`)
  })
  $('[index=2]').append(`<span>${this.text}</span>`)
})

// $('h2').addClass('header')

accordion()

// $('h2').delegate('*', 'focus blur', function () {
//   var elem = $(this)
//   setTimeout(function () {
//     elem.toggleClass('focused', elem.is(':focus'))
//   }, 0)
// })
