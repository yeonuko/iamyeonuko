$(function () {









    // ↓ 메인배너 banner_box slick

    $(".banner_slide").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true
    });

    $(".m_banner_slide").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true
    });



        //햄버거 메뉴
        $(".menu_btn").click(function(){
            $(this).toggleClass("on");
            // $(".m_nav").toggle("slow")
            $(".nav").slideToggle();
            
    
        })//


}) //jQuery