export function accordion() {
  $(document).ready(function ($) {
    const panels = $('#spec > dl ').hide()
    panels.first().show()

    $('#spec > h2 > a').click(function () {
      var $this = $(this)

      if (document.documentElement.clientWidth < 768) {
        panels.slideUp()
        $this.parent().next().slideDown()
      } else {
        panels.hide()
        $this.parent().next().show()
      }

      return false
    })
  })
}
