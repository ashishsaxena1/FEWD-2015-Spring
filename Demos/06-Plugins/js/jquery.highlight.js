(function($) {

   
  function init ($target) {
    // grand against re-initialization
    if(! $target.hasClass("highlighted")){
   		$target.addClass("highlighted").click(onClick);
    }
  }
  
  // Event handler
  function onClick(event) {
    //Cache target elemtn
    var $target = $(this);

    //Check for active class
    if ($target.hasClass("active")) {
        //If it exists, remove it
        $target.removeClass("active");
    } else {
        // If not, add it
        $target.addClass("active");
    }
  }

   // register plugin with jquery
  $.fn.highlight = function() {
    // chche targets
    var $targets = $(this);
   
    for (var i = 0; i < $targets.length; i++){
   	  init($targets.eq(i));
    }

    //maintain chain-ability
    return $targets;
  };

})(jQuery);