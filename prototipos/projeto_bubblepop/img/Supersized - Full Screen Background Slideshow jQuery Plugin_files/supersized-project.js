(function($){

	$(document).ready(function(){
	
		/* Circle Expansion
		-----------------------*/		
		$('.circle-wrap').hover(
			function(){
				$('.circle',this)
					.stop()
					.animate({width : '150px', height : '150px', 'margin-top' : '-75px', 'margin-left' : '-75px'  }, 200);
			},
			function(){
				$('.circle',this)
					.stop()
					.animate({width : '100px', height : '100px', 'margin-top' : '-50px', 'margin-left' : '-50px'  }, 100);
			}
		);
 
		$(window).scroll(function(){  
		  if($(window).scrollTop() > 1000){
		    $('#back-top').stop().animate({opacity: 1}, 100);
		  }else{
		    $('#back-top').stop().animate({opacity: 0}, 100);
		  }
		});
		
		/* Smooth Scrolling (from CSS-Tricks)
		--------------------------------------*/
		function filterPath(string) {
		return string
		  .replace(/^\//,'')
		  .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		  .replace(/\/$/,'');
		}
		var locationPath = filterPath(location.pathname);
		var scrollElem = scrollableElement('html', 'body');
		
		$('p > a[href*=#], a#back-top[href*=#], li > a[href*=#]').each(function() {
			if (!$(this).hasClass('tab-nav')){
			  var thisPath = filterPath(this.pathname) || locationPath;
			  if (  locationPath == thisPath
			  && (location.hostname == this.hostname || !this.hostname)
			  && this.hash.replace(/#/,'') ) {
			    var $target = $(this.hash), target = this.hash;
			    if (target) {
			      var targetOffset = $target.offset().top;
			      $(this).click(function(event) {
			        event.preventDefault();
			        $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
			          location.hash = target;
			        });
			      });
			    }
			  }
		   }
		});
		
		// use the first element that is "scrollable"
		function scrollableElement(els) {
		  for (var i = 0, argLength = arguments.length; i <argLength; i++) {
		    var el = arguments[i],
		        $scrollElement = $(el);
		    if ($scrollElement.scrollTop()> 0) {
		      return el;
		    } else {
		      $scrollElement.scrollTop(1);
		      var isScrollable = $scrollElement.scrollTop()> 0;
		      $scrollElement.scrollTop(0);
		      if (isScrollable) {
		        return el;
		      }
		    }
		  }
		  return [];
		}


	});
		
})(jQuery);