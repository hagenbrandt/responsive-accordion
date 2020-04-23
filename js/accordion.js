export const accordion = $(document).ready(function ($) {
  const panels = $('#spec > dl ').hide()
  panels.first().show()

  $('#spec > h2 > a').click(function () {
    var $this = $(this)

    panels.slideUp()

    $this.parent().next().slideDown()

    return false
  })
})
