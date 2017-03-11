jQuery.fn.layer = function(options){
  /*VARIABLE DECLARATION*/
  var element = $(this);

  var settings = $.extend({
            // These are the defaults.
            beamheight: 40,
            titles: [],
            scroll: {
              speed: 500,
              offset: 0
            }
              }, options );

	var layerList = [];

  var i = 0;
  //Insert height to list and append classes to divs
	 element.find('.layer').each(function(index){
		$(this).addClass('layer-page-' + index);
		layerList.push($(this).outerHeight()+(layerList[index] = layerList[index] ? layerList[index] : 0));
	});

    /*WINDOW FUNCTIONS*/
    $(window).scroll(function() {
        var distanceFromTop = $(window).scrollTop();
        //Need to get first item in list, therefore i+1
        if (distanceFromTop >= layerList[i+1]-(settings.beamheight*(1+i)))
        {
          var currentLayer = $('.layer-page-' + i);
        	currentLayer.append('<div class="layer-sticker">' + settings.titles[i] + '</div>');
          $('.layer-page-' + i + ' > .layer-sticker').css({
            "top" : (i*settings.beamheight),
            "height" : settings.beamheight,
            "width" :element.outerWidth(true),
            "line-height" : settings.beamheight + 'px'
          });
          currentLayer.attr('onclick','scroll('+'".layer-page-'+i+'","'+ settings.scroll.speed +'","' + settings.scroll.offset +'")');
          i++;
        }
        else if ((distanceFromTop <= (layerList[i]-((i*settings.beamheight)+settings.beamheight))))
       	{
          i--;
       		$('.layer-page-' + (i)).children('.layer-sticker').remove();
       	}
    });
    
    $(window).resize(function() {
      $('.layer-sticker').width(element.outerWidth());
      console.log('here');
    });
};
  /*SCROLL FUNCTION*/
  function scroll(id, scrollspeed){ 
     $('html, body').animate(
    {
    scrollTop: $(id).offset().top
    }, scrollspeed);
  };



    