$(function(){
    const fl_slider = $('.flag_slider li');
    const fl_btm_List =$('.flag_btm_wrap li');
    const fl_left_btn= $('.flagside.left');
    const fl_right_btn= $('.flagside.right');


    first();

    function first(){

        fl_slider.eq(0).addClass('On');
        fl_btm_List.eq(0).addClass('Act');
        
    }
    
    
    fl_right_btn.click(right_Event);
    fl_left_btn.click(left_Event);
    fl_btm_List.click(fl_btm_Event)
    

    function fl_btm_Event(e){
        e.preventDefault();

        const idx = $(this).index();
        reset();
        fl_slider.eq(idx).addClass('On');
        fl_btm_List.eq(idx).addClass('Act');
    }

    function left_Event(e){
        e.preventDefault();
        let idx = $('.flag_slider li.On').index();
        reset();
    
    
        if(idx>0){
            fl_slider.eq(idx-1).addClass('On');
            fl_btm_List.eq(idx-1).addClass('Act');
            
        }
        if(idx==0){
            idx=3;
            fl_slider.eq(idx).addClass('On');
            fl_btm_List.eq(idx).addClass('Act');
    
        }
        
    }
    function right_Event(e){
        e.preventDefault();
        let idx = $('.flag_slider li.On').index();
        reset();
    
    
        if(idx<3){
            fl_slider.eq(idx+1).addClass('On');
            fl_btm_List.eq(idx+1).addClass('Act');
            
        }
        if(idx==3){
            idx=0;
            fl_slider.eq(idx).addClass('On');
            fl_btm_List.eq(idx).addClass('Act');
    
        }
        
    }


    function reset(){
        fl_slider.removeClass('On');
        fl_btm_List.removeClass('Act');

    }

})