import { SPECDT } from './specdt'
import { accordion } from './accordionTab'
import { calculator } from './calculator'

let i = 0

$('#spec').append('<ul class="tabs"></ul>').append("<div class='tab_container'></div>")
$.each(SPECDT, function () {

    $('ul').append(
      `<li tabindex=${i++} rel=tabs-${i-1}>${this.group}</li>`
    )

    $('.tab_container')
    .append(`<h3 class="d_active tab_drawer_heading" container_id=${i-1} rel=tabs-${i-1}>${this.group}</h3>`)
    .append(`<dl class='container' id=tabs-${i - 1} index=${i - 1}></dl>`)

  $.each(this.items, function () {
    $(`[index=${i - 1}]`)
      .append(`<dt>${this.name}</dt>`)
      .append(`<dd>${this.value}</dd>`)
  })

  $('[index=2]').append(`<span>${this.text}</span>`)
})

$('<section class="calculator"></section>')
.insertAfter('#spec')
.append('<input type="number" id="num-of-items" value="1">')
.append('<button id="calculate">Calculate</button>')
.append('<span id="price">17.95 €</span>')

accordion()
calculator()