/*slide*/

function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',2);
      $active.fadeOut(1500,function(){
	  $active.css('z-index',1).show().removeClass('active');
          $next.css('z-index',3).addClass('active');
      });
    }

$(document).ready(function(){

setInterval('cycleImages()', 5000);
});

/*scroll*/

$(document).ready(function(){

  $('[data-toggle="tooltip"]').tooltip();
  

  $("a, .navbar a, footer a[href='#myPage']").on('click', function(event) {


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
})

/*pic fade in*/

$(document).ready(
function(){
	
	 $('#one img').hide().fadeIn(7000);
	
	
}
);






/*fancyBox*/

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});
