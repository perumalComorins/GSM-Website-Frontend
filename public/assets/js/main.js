$(document).ready(function(){
    $(".site-navigation .dropdown").hover(
        function () {
            $(this).addClass("show");
            $(this).find(".dropdown-menu").addClass("show");
        },
        function () {
            $(this).removeClass("show");
            $(this).find(".dropdown-menu").removeClass("show");
        }
    );
    
    var boxHeight = $("#contactfaq-nav li").height();
    $("#contactfaq-nav li").mouseenter(function(){
        $(this).animate({
            height: "380"
        });
    }).mouseleave(function(){
        $(this).animate({
            height: boxHeight
        });
    });
    
    
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});



$(document).ready(function(){
    
    $('#publishModal').modal('show');
    $('#draftModal').modal('show');

    
    
});


    function resizeBannerOverlays(){
        
            /** Home banner image **/
            
            $('.home-banner-resizer #banner-overlay').each(function(){
                $banner_h = $('.home-banner-resizer .banner-view').height();
                $banner_w = $('.home-banner-resizer .banner-view').width();
                
                $(this).width($banner_w);
            });
            // $('.home-banner-content').each(function(){
            //     $banner_inner_h = $('.home-banner-resizer .banner-view').height();
            //     $(this).height($banner_inner_h);
            // });
        
        /*** Organization banner content ****/
        $(".organization-banner-content").closest("#banner-overlay").each(function(){
            
            $h = $('.banner-view img').height();
            $w = $('.banner-view img').width();
            $(this).width($w).height($h);
        });
        $('.organization-banner-content').each(function(){
            $h = $('.banner-view img').height();
            $(this).height($h);
        });


       /***  Contact faq banner content ***/
        $(".threebyfour-banner-cover").closest(".threebyfour-banner-cover-overlay").each(function(){
            $h = $('.banner-view img').height();
            $w = $('.banner-view img').width();
            $(this).width($w).height($h);
        });

        $('.threebyfour-banner-cover').each(function(){
            $h = $('.banner-view img').height();
            $(this).height($h);
        });

        /**  Banner cover image **/
        $('.banner-cover,.threebyfour-banner-cover').each(function(){
            $h = $('.banner-view.smallsize-banner img, .banner-view.threebyfourth-size-banner img').height();
            $w = $('.banner-view.smallsize-banner img, .banner-view.threebyfourth-size-banner img').width();
            $(this).width($w).height($h);
        });

        $('.testimonials_overlay').each(function(){
            $h = $('.testimonial_box').height();
            $w = $('.testimonial_box').width();
            $(this).width($w).height($h);
        });

        /*** Indicators banner ***/
        
        $(".twobyfour-banner-cover-overlay").each(function(){
            let $twofourth_h = $('.twofourth-size-banner').height();
            let $twofourth_w = $('.twofourth-size-banner').width();
            $(this).width($twofourth_w).height($twofourth_h);
        });

     }

resizeBannerOverlays();
$(window).resize(function(){ 
    resizeBannerOverlays();
});
$(document).ready(function(){
    resizeBannerOverlays();
});



  
  