export function accordion() {

  $('.container').hide()

  if (localStorage) {
    $(`[tabindex=${localStorage.selectedTab}]`).addClass('active')
    $(`[index=${localStorage.selectedTab}]`).show()
  } else {
    $('.container:first').show()
  }

  $("ul.tabs li").click(function() {
    $(".container").hide();
    localStorage.selectedTab = $(this).index()
    
      const activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn(500);

      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

      $(".tab_drawer_heading").removeClass("d_active");
  })

  $(".tab_drawer_heading").click(function() {
    
    localStorage.selectedTab = ($(this).index() / 2)
    
    $(".container").hide();
    
    const d_activeTab = $(this).attr("rel"); 
    $("#"+d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
  });

}
