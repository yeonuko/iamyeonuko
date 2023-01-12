$(function () {

    $(".select_language").click(function () {
        $(this).toggleClass("show");
    }) //click



    $(".h_open_search").click(function () {
        $(".search_container").addClass("show");
    }) //

    $(".search_close").click(function () {
        $(".search_container").removeClass("show");
    })



    // nav 영역

    $(".sub").hide();

    $(".gnb_menu >li").hover(function () {
        $(this).find(".sub").stop().slideDown();
        $(".gnb_menu").stop().animate({
            height: "62px"
        }, 500)
        // n = $(this).index();
        // console.log("n: ", n)
    }, function () {
        $(this).find(".sub").stop().slideUp();
        $(".gnb_menu").stop().animate({
            height: "50px"
        }, 500)
    }) //


    $(".visual_wrap").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true
    }) //


    // var n = 0; //현재 보여지는 인덱스 넘버
    // var index = $(".visual_wrap li").eq(n);
    // console.log("index :", index)

    // var now = $(".visual_wrap .slick-dots li.slick-active").index();
    // console.log("now :", now);


    // var time = setInterval(slide_Event, 3000);


    // function slide_Event(){
    //     now = $(".visual_wrap .slick-dots li.slick-active").index();
    //     console.log("now :", now)
    // }







    //recommend 영역

    var btn_tab = $(".recomm_tab .btn_tab"); //on
    var recomm_list = $(".recomm_list"); //act

    btn_tab.click(recomm)

    function recomm(e) {
        e.preventDefault(); //e.preventDefault는 고유의 이벤트(#)를 동작하지 않도록 막는다.
        index = $(this).index();
        console.log("index ", index);

        btn_tab.removeClass("on");
        $(this).addClass("on");

        recomm_list.removeClass("act");
        recomm_list.eq(index).addClass("act");

    }



    //flagship
    $(".flag_slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        fade: true
    }) //














    //모바일 네비 영역

    var mob_nav_btn = $(".mob_nav_btn");
    var mob_nav = $(".mob_nav");
    var m_nav_bg = $(".m_nav_bg");

    mob_nav_btn.click(function () {
        mob_nav.addClass("left_move");
        m_nav_bg.delay(500).fadeIn();
    })

    m_nav_bg.click(function(){
        mob_nav.removeClass("left_move");
        m_nav_bg.fadeOut();
    })
$(".m_nav_list>li").hover(function(){
    $(this).find(".m_sub").stop().slideDown();
    $(this).find("a").addClass("on");
},function(){
    $(this).find(".m_sub").stop().slideUp();
    $(this).find("a").removeClass("on");
})

}) //jQuery