$(document).ready(function() {
    if (Modernizr.mq('(min-width: 1200px)')) {
        jQuery(function($) {
            $('body').panelSnap({
              menuSelector: 'a',
              $menu: $('#header #menu #menubar li')
            });
        });
    }
    if (Modernizr.mq('(min-width:992px) and (max-width: 1199px)')) {
        jQuery(function($) {
            $('body').panelSnap({
              menuSelector: 'a',
              $menu: $('#header #menu #menubar li')
            });
        });
    }
    if (Modernizr.mq('(min-width:768px) and (max-width: 991px)')) {
        
    }
    if (Modernizr.mq('(max-width: 767px)')) {}
});