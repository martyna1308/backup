$(document).ready(function(){
 
  $("a").on('click', function(event) {

    
    if (this.hash !== "") {
  
      event.preventDefault();

      var hash = this.hash;


      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
   

        window.location.hash = hash;
      });
    } 
  });
    
    let heightView = $(window).height() /2;
    
    let positionHeader = $("header").offset().top;
    let positionAbout = $("#about").offset().top;
    let positionPortfolio = $("#portfolio").offset().top; 
    let positionContact = $("#contact").offset().top;

    
    $(window).scroll(function(){
        if($(this).scrollTop() > positionHeader+heightView && $(this).scrollTop() < positionHeader+(heightView*2)  ) {
            $('html, body').animate({
        scrollTop: positionHeader
      }, 600);
       }
    })

    
   

    
});

    