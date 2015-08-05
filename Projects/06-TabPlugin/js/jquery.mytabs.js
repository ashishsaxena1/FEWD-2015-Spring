(function($) {

        function init($target) {
            //Guard agaisnt re-initialization
            if (!$target.hasClass("mytabs")) {
              $target.addClass("mytabs").on("click", ".tab-nav .tab" ,onclick);
            }
        }

          // event hardler
        function onclick(event) {
            event.preventDefault();
            var $parent = $(event.delegateTarget),
                $target = $(this);
                $tabhandles = $parent.find(".tab-nav .tab"),
                $tabContent = $parent.find(".tab-content .tab"),
                index = $tabhandles.index($target);
           
            $tabhandles.removeClass("active").eq(index).addClass("active");
            $tabContent.removeClass("active").eq(index).addClass("active");
        }


        //Register plugin with jQuery
        $.fn.myTabs = function() {
            //Cache targets
            var $targets = $(this);

            //Loop through all tagets
            for (var i = 0; i < $targets.length; + i++) {
                init( $targets.eq(i) );
            }

            //Maintain chain-ability
            return $targets;

        };
})(jQuery);
