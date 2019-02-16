var $ = jQuery.noConflict();
$(document).ready(function(){

	"use strict";

    /*-----------------------------------------------------------------------------------*/
    /*  Superfish Menu
    /*-----------------------------------------------------------------------------------*/
    var example = $('ul.sf-menu').superfish({
        delay:       100,
        speed:       'fast',
        autoArrows:  false
    });

    /*-----------------------------------------------------------------------------------*/
    /*  Scroll Top 
    /*-----------------------------------------------------------------------------------*/
    $("a[href='#top']").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
    /*-----------------------------------------------------------------------------------*/
    /*  Slick Nav 
    /*-----------------------------------------------------------------------------------*/
    $('#primary-menu').slicknav({
        prependTo:'#primary-bar',
        label: "MENU"
    });

    /*-----------------------------------------------------------------------------------*/
    /*  owlCarousel
    /*-----------------------------------------------------------------------------------*/
    $("#owl-demo").owlCarousel({
        items : 3,
        itemsDesktop : [939,2],
        itemsDesktopSmall : [479,1]
    });

    /*-----------------------------------------------------------------------------------*/
    /*  bxSlidser
    /*-----------------------------------------------------------------------------------*/
    $('.bxslider').bxSlider();

    /*-----------------------------------------------------------------------------------*/
    /*  Fitvids 
    /*-----------------------------------------------------------------------------------*/
    $(".content-loop .hentry, .widget").fitVids();

    /*-----------------------------------------------------------------------------------*/
    /*  Header Search
    /*-----------------------------------------------------------------------------------*/
    var $searchlink = $('#searchtoggl i');
    var $searchbar  = $('#searchbar');

    $('.header-search a').on('click', function(e){
        e.preventDefault();

        if($(this).attr('id') === 'searchtoggl') {
            if(!$searchbar.is(":visible")) {
            // if invisible we switch the icon to appear collapsable
            $searchlink.removeClass('fa-search').addClass('fa-times');
          } else {
            // if visible we switch the icon to appear as a toggle
            $searchlink.removeClass('fa-times').addClass('fa-search');
          }
          
          $searchbar.slideToggle(100, function(){
            // callback after search bar animation
          });
        }
    });

    /* what is this for? *
    $('#searchform').submit(function(e){
        e.preventDefault(); // stop form submission
    }); */

    /*-----------------------------------------------------------------------------------*/
    /*  Tabs Widget
    /*-----------------------------------------------------------------------------------*/
    var $tabsNav    = $('.tabs-nav'),
        $tabsNavLis = $tabsNav.children('li'),
        $tabContent = $('.tab-content');

    $tabsNav.each(function() {
        var $this = $(this);

        $this.next().children('.tab-content').stop(true,true).hide()
                                             .first().show();

        $this.children('li').first().addClass('active').stop(true,true).show();
    });

    $tabsNavLis.on('click', function(e) {
        var $this = $(this);

        $this.siblings().removeClass('active').end()
             .addClass('active');

        $this.parent().next().children('.tab-content').stop(true,true).hide()
                                                      .siblings( $this.find('a').attr('href') ).fadeIn();

        e.preventDefault();
    });

});