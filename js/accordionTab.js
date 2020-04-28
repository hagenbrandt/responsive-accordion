export function accordion() {

  $('.container').hide()
  $('.container:first').show()

  $("ul.tabs li").click(function() {
    $(".container").hide();

      const activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn(500);

      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

      $(".tab_drawer_heading").removeClass("d_active");

      $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
  })

  $(".tab_drawer_heading").click(function() {
      
    $(".container").hide();
    const d_activeTab = $(this).attr("rel"); 
    $("#"+d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
  });

  $('ul.tabs li').last().addClass("tab_last");
}
