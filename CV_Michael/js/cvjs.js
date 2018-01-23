

  $(document).ready(function(){
 
    $("a").on('click', function(event) {

      if (this.hash !== "") {

        event.preventDefault();


        var hash = this.hash;

 
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
       
          window.location.hash = hash;
        });
      } 
    });
  });

  $(document).ready(function(){
    $('div.hidden').fadeIn(3000).removeClass('hidden');
  });

  $(document).ready(function(){
    $('nav.hidden').fadeIn(4000).removeClass('hidden');
  });
