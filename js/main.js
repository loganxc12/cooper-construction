$( document ).ready(function() {
    
    $(".hamburger").on("click", function() {
        console.log('clicked it!')
        $(".mobile-menu").css("display", "flex");
    })
    
     $(".close-btn").on("click", function() {
        $(".mobile-menu").css("display", "none");
    })
     
    $(".main-nav [href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
    
});
    
