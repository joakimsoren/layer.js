jQuery.fn.layer = function(options){
  
  var element = $(this);
  var settings = $.extend({
            // These are the defaults.
            beamheight: 40,
            titles: ["hej","då"]
              }, options );

	var layerList = [];

	 element.find('.layer').each(function(index){
		$(this).addClass('layer-page-' + index);
		layerList.push($(this).height()+(layerList[index] = layerList[index] ? layerList[index] : 0));
	});
  
  var i = 0;

    $(window).scroll(function() {

        var distanceFromTop = $(window).scrollTop();

        if ((distanceFromTop >= (layerList[i+1]-((i*settings.beamheight)+settings.beamheight))))
        {
          var currentLayer = $('.layer-page-' + i);
        	currentLayer.append('<div class="layer-sticker" style="top:' + (i*settings.beamheight) + 'px;height:' + settings.beamheight + 'px;width:' + element.width() + 'px;"></div>');
          currentLayer.attr('onclick','scroll('+'".layer-page-'+i+'")');
          i++;
        }
        else if ((distanceFromTop <= (layerList[i]-((i*settings.beamheight)+settings.beamheight))))
       	{
          i--;
       		$('.layer-page-' + (i)).children('.layer-sticker').remove();
       	}
    });
};

  function scroll(id){ 
     $('html, body').animate(
    {
    scrollTop: $(id).offset().top
    }, 500);
  };



    