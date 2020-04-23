import { SPECDT } from './specdt'

let i = 0

$.each(SPECDT, function () {
  $('#spec')
    .append(`<h2 class=${this.group} tabindex=${i++}>${this.group}</h2>`)
    .append(`<dl index=${i - 1}></dl>`)
  $.each(this.items, function () {
    $(`[index=${i - 1}]`)
      .append(`<dt>${this.name}</dt>`)
      .append(`<dd>${this.value}</dd>`)
  })
  $(`<span>${this.text}</span>`).insertAfter('[index=2]')
})
