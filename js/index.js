import { SPECDT } from './specdt'
import { accordion } from './accordionTab'

let i = 0

$.each(SPECDT, function () {
  $('#spec')
    .append(
      `<h2 class=${this.group} tabindex=${i++}><a class='header' href=#${
        i - 1
      } >${this.group}</a></h2>`
    )
    .append(`<dl class='accordion' id=${i - 1} index=${i - 1}></dl>`)
  $.each(this.items, function () {
    $(`[index=${i - 1}]`)
      .append(`<dt>${this.name}</dt>`)
      .append(`<dd>${this.value}</dd>`)
  })
  $('[index=2]').append(`<span>${this.text}</span>`)
})

accordion()
