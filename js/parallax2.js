$.fn.extend({
  'parallaxMouse': function(){
    var $this = $(this);
    $this.each(function(){
      var $elements = $this.find('.parallax-element'),
          offset = $(this).offset(),
          width = $(this).width(),
          height = $(this).height(),
          axes = {
              x: true,
              y: true
          },
          dataParallaxAxe = $this.data('parallax-axe');
      // if(dataParallaxAxe == 'x'){
      //   axes.y = false;
      // } else if(dataParallaxAxe == 'y'){
      //   axes.x = false;        
      // }
      
      $this.on('mousemove', function(event){
        var mousePos = {
          top: event.pageY - offset.top,
          left: event.pageX - offset.left
        };
        $elements.each(function(){
            var strength = parseInt($(this).data('parallax-strength'));
          
            if(axes.x){
              $(this).css({
                 'left': -(mousePos.left - (width/2)) * strength / width
              });
            }
          
            if(axes.y){
              $(this).css({
                'top': -(mousePos.top - (height/2)) * strength / height
              });
            }
        });
      });
    });
    
    return $this;
  }
});

$(document).ready(function(){
  $('.parallax-mouse').parallaxMouse();
})