$(function(){
 
    const select_language = $('.select_language');
    const search_container = $('.search-container');
    const h_open_Btn= $('.h_open_search');
    const h_close = $('.sch_close');
    const main =$('#main');
    let winWidth = $(window).width();

    // nav
    const gnb = $('.gnb');//Active
    const gnb_menu_list = $('.nav_d1.d1_Over');//selector
    const sub_menu =$('.sub_menu');//On
    const sub_menu_list= $('.sub_menu>ul>li');//현재 순서값에 Over
    

    //mob_nav1
    const mob_nav_btn = $('.mob_nav_btn');  
    const mob_nav = $('.mob_nav ');
    const m_nav_bg = $('.m_nav_bg');
    const mob_btn =$('.m_nav_list_tit');
    const m_sub_menu =$('.m_nav_list li>dl');


    mob_nav_btn.click(function(){
        mob_nav.addClass('left_move');
        m_nav_bg.delay(500).fadeIn();
    })
    
    
    m_nav_bg.click(function(){
        $(this).fadeOut(0);
        mob_nav.removeClass('left_move');
    })

    mob_btn.click(function(){
        const str = $(this).attr('class');
        const idx = $('.m_nav_list_tit.On');
        console.log(str);

        idx.next(m_sub_menu).slideToggle()
        idx.toggleClass('On');

        if(str=="m_nav_list_tit On"){

        }
        else{
            $(this).toggleClass('On');
            $(this).next(m_sub_menu).slideToggle();

        }
    })




    gnb_menu_list.mouseenter(function(){
        const idx = $(this).index();
        console.log(idx);


        sub_menu_list.removeClass('Over');
        sub_menu.addClass('On');
        sub_menu_list.eq(idx).addClass('Over');
        gnb.addClass('Active');
    })
    
    
    sub_menu_list.mouseleave(function(){
        setTimeout(pc_menu_reset,1000);
    })
    
    function pc_menu_reset(){
        sub_menu_list.removeClass('Over');
        sub_menu.removeClass('On');
        
        gnb.removeClass('Active');
        
     }

    select_language.click(function(){
        $(this).toggleClass('show');
    })


    h_open_Btn.click(function(){
        search_container.addClass('show');
      
            main.addClass('On');
    })
    h_close.click(function(){
        search_container.removeClass('show');
        
    })
    
    
    
    
    
    main.click(function(){
        search_container.removeClass('show');
        main.removeClass('On');
        
    })
    


    // 리사이즈시
    $(window).resize(mobnavReset)
    
    function mobnavReset(){//mobile 화면을 모두 기본값으로 변경
        main.removeClass('On');//blur처리 없애기
        search_container.removeClass('show');//search input 보이지 않기
        mob_nav.removeClass('left_move');//모바일 화면 나오지 않게 하기
        m_nav_bg.fadeOut();//모바일 bg 나오지 않게 하기

    }

})