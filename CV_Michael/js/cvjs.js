
/*cs.js*/

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
    $('div.hiddenone    ').fadeIn(7000).removeClass('hiddenone');
  });

  $(document).ready(function(){
    $('div.hiddentwo').fadeIn(7000).removeClass('hiddentwo');
  });
