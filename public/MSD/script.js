$(document).ready(function () {
            
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

        
    function scrollNav() {
  $('.navbar-nav a').click(function(){  
    //Toggle Class
    $(".active").not('.item').removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    },400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
    scrollNav();
});