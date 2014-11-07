/*
	Author: Junaid Chaudary @ Pixel Art Inc.
	Author URI: http://www.pixelartinc.com/
*/

$(window).load(function() {
    $('.spinner').fadeOut();
});

$(document).ready(function(e) {

    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });


    //Dropdown Navigation
    function open_nav(){
        $(".responsive-nav .open").click(function(e){
            e.preventDefault();
            $(this).children('ul').stop(true, true).slideDown(500);
            $(this).removeClass('open').addClass('close-nav');
            close_nav();
        });
    }
    open_nav();
    function close_nav(){
        $(".responsive-nav .close-nav").click(function(e){
            e.preventDefault();
            $(this).children('ul').stop(true, true).slideUp(500);
            $(this).removeClass('close-nav').addClass('open');
            open_nav();
        });
    }



    // $('.progress-bar').appear(function() {
    //     $('.progress-bar').each(function(){
    //         dataperc = $(this).attr('data-perc'),
    //             $(this).find('.bar').animate({ "width" : dataperc + "%"}, dataperc*10);
    //     });
    // });


    $("nav ul li a, div#hidden_menu ul li a, .logo a, .scroll-to").bind('click',function(event){

        var headerH = $('nav ul').height();

        $("nav ul li a").removeClass('active');
        $(this).addClass('active');
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - (headerH) + "px"
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });

        return false;
        event.preventDefault();
    });


    $('nav ul li a, div#hidden_items ul li a').click(function(){
        var id = $(this).attr("href");
        $('html,body').stop().animate({scrollTop: $("div"+id).offset().top},'slow', function(){
            if ( navigator.userAgent.indexOf('iPad') != -1 ) {
                var yPos = window.pageYOffset;
                var $fixedElement = $('div#hidden_menu');
                $fixedElement.css({ "position": "relative" });
                window.scroll(0,yPos);
                $fixedElement.css({ "position": "fixed" });
            }
        });

        return false;
    });


    $(window).scroll(function(){
        var pagetop = $(this).scrollTop();
        if (pagetop >= 400) {
            $('div#hidden_menu').slideDown();
        }
        if (pagetop <= 400) {
            $('div#hidden_menu').slideUp();
        }
    });


    //HOME SLIDERS
    $(".slider").cycle({
        fx:'scrollRight',
        pager:'.slider-btn'
    });

    $(".header-slider").cycle({
        fx:'scrollRight',
        pager:'.header-btn'
    });

    $(".blog-slider").cycle({
        fx:'scrollRight',
        pager:'.header-nav'
    });

    $(".our-team figure").hover(function(){
        $(this).children('.overlay').stop(true, true).fadeIn(500);
    }, function(){
        $(this).children('.overlay').stop(true, true).fadeOut(500);
    });

    $(".blog-wrap .more").click(function(e){
        e.preventDefault();
        $('.blog-wrap .display').stop(true, true).slideDown(500);
    });

    $(".work-wrap .more").click(function(e){
        e.preventDefault();
        $('.work_item.display').stop(true, true).slideDown(500);
    });


    $(".work_item figure").hover(function(){
        $(this).children('.overlay').stop(true, true).fadeIn(500);
    }, function(){
        $(this).children('.overlay').stop(true, true).fadeOut(500);
    });

    $(".blog article figure").hover(function(){
        $(this).children('.overlay').stop(true, true).fadeIn(500);
    }, function(){
        $(this).children('.overlay').stop(true, true).fadeOut(500);
    });

    $('.work_item div h5').each(function(){
        var $active, $content, $links = $(this).find('a');

        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');
        $content = $($active.attr('href'));

        $links.not($active).each(function () {
            $($(this).attr('href')).hide();
        });

        $('.work_item div h5').on('click', 'a', function(e){
            $active.removeClass('active');
            $content.hide();
            $active = $(this);
            $content = $($(this).attr('href'));

            $active.addClass('active');
            $content.slideDown();

            e.preventDefault();
        });
    });

    $('.blog article h5,.blog .overlay').each(function(){
        var $active, $content, $links = $(this).find('a');

        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');
        $content = $($active.attr('href'));

        $links.not($active).each(function () {
            $($(this).attr('href')).hide();
        });

        $('.blog article h5,.blog .overlay').on('click', 'a', function(e){
            $active.removeClass('active');
            $content.hide();
            $active = $(this);
            $content = $($(this).attr('href'));

            $active.addClass('active');
            $content.slideDown();

            e.preventDefault();
        });
    });

    $(".single .close").click(function(e){
        e.preventDefault();
        $('.single ').stop(true, true).fadeOut('slow');
        $('.blog').stop(true, true).fadeIn('slow');
    });

    $('figure .overlay .social-icon a').hover(
        function(){
            $(this).stop().animate(
                {backgroundPosition: "(0 -37px)"},
                {duration:500}
            )
        },
        function(){
            $(this).stop().animate(
                {backgroundPosition: "(0 0)"},
                {duration:500}
            )
        }
    );

    $('footer .social_icon a ').hover(
        function(){
            $(this).stop().animate(
                {backgroundPosition: "(0 -49px)"},
                {duration:500}
            )
        },
        function(){
            $(this).stop().animate(
                {backgroundPosition: "(0 0)"},
                {duration:500}
            )
        }
    );



    $.extend($.fx.step,{
        backgroundPosition: function(fx) {
            if (fx.pos === 0 && typeof fx.end == 'string') {
                var start = $.css(fx.elem,'backgroundPosition');
                start = toArray(start);
                fx.start = [start[0],start[2]];
                var end = toArray(fx.end);
                fx.end = [end[0],end[2]];
                fx.unit = [end[1],end[3]];
            }
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

            function toArray(strg){
                strg = strg.replace(/left|top/g,'0px');
                strg = strg.replace(/right|bottom/g,'100%');
                strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
                var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
                return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
            }
        }
    });


    $(".work_item div h5").click(function(e){
        e.preventDefault();
        $('#detail ').stop(true, true).fadeIn('slow');
    });

    $( ".close" ).click(function(e) {
        e.preventDefault();
        $( ".work_detail" ).slideUp();
    });

    //Portfolio Filterations
    var $container = $('#project-container,#project-container2,#project-container3,#project-container4');

    $container.isotope({
        itemSelector : '.element'
    });

    var $optionSets = $('.option-set'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function(){
        var $this = $(this);

        if ( $this.hasClass('selected') ) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');


        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');

        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {

            changeLayoutMode( $this, options )
        } else {

            $container.isotope( options );
        }

        return false;
    });


    //about Timeliner
        $().timelinr({
            arrowKeys: 'true'
        });


      $('#slidecaption').css('height', $(window).height());




    //Google-map
   $('#map_canvas').gmap();

        $.supersized({

            // Functionality
            slideshow               :   1,          // Slideshow on/off
            autoplay                :   1,          // Slideshow starts playing automatically
            start_slide             :   1,          // Start slide (0 is random)
            stop_loop               :   0,          // Pauses slideshow on last slide
            random                  :   0,          // Randomize slide order (Ignores start slide)
            slide_interval          :   12000,      // Length between transitions
            transition              :   6,          // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
            transition_speed        :   1000,       // Speed of transition
            new_window              :   1,          // Image links open in new window/tab
            pause_hover             :   0,          // Pause slideshow on hover
            keyboard_nav            :   1,          // Keyboard navigation on/off
            performance             :   1,          // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
            image_protect           :   1,          // Disables image dragging and right click with Javascript

            // Size & Position
            min_width               :   0,          // Min width allowed (in pixels)
            min_height              :   0,          // Min height allowed (in pixels)
            vertical_center         :   1,          // Vertically center background
            horizontal_center       :   1,          // Horizontally center background
            fit_always              :   0,          // Image will never exceed browser width or height (Ignores min. dimensions)
            fit_portrait            :   1,          // Portrait images will not exceed browser height
            fit_landscape           :   0,          // Landscape images will not exceed browser width

            // Components
            slide_links             :   'blank',    // Individual links for each slide (Options: false, 'num', 'name', 'blank')
            thumb_links             :   0,          // Individual thumb links for each slide
            thumbnail_navigation    :   0,          // Thumbnail navigation
            slides                  :   [           // Slideshow Images
                {image : 'images/slider-img.png', title : '<a href="#"><img src="images/label.png" alt=" slider-img"></a>', thumb : '', url : ''},

                {image : 'images/slider-img2.png', title : '<a href="#"><img src="images/label-2.png" alt=" slider-img"></a>', thumb : '', url : ''}

            ],

            // Theme Options
            // progress_bar            :   0,          // Timer for each slide
            mouse_scrub             :   0

        });



});
