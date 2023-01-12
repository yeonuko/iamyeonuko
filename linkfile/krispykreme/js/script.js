$(function () {

    $("a").click(function (e) { // a태그 클릭할때마다 e태그 가져와
        console.log(e);
        if ($("a").attr("href") == "#" || $("a").has("")) { //a태그가 href속성값 #을 가지고 >있거나(|| or)< a태그가 공백 비어있을때
            e.preventDefault(); //클릭 이벤트 발생 시키지 마
        } //if
    }) //$("a").click




    // ↓ 메인배너 banner_box slick

    $(".banner_slide").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true
    });


    // ↓ 모바일 메인배너 m_banner_box slick

    $(".m_banner_slide").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false
    });




    $(".me_list").hide();


    $(".nav_list > li").hover(function () {
        $(".me_list").stop().slideDown();
    }, function () {
        $(".me_list").stop().slideUp();
    }) //





    $(".new_slide").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false
    });


    $(".event_slide").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false
    });

    $(".month_slide").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false
    });

    $(".m_month_slide").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false
    });




    //모바일 햄버거 메뉴
    $(".m_gnb").click(function () {
        $(this).toggleClass("on");
        $(".m_nav").toggleClass("act")
        $(".overlay").toggleClass("act")
    }) //

    /* ↓ nav_menu 영역 */

    $(".m_me_list").hide();

    $(".m_nav_list >li").hover(function () {
        $(this).find(".m_me_list").stop().slideDown();
    }, function () {
        $(".m_me_list").stop().slideUp();
    }) //


}) //jQuery