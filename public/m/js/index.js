$(function () { 

    //轮播图的自动轮播js代码
    var slide = mui(".slide");
    slide.slider({
        interval: 1000
    });
     
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005//flick 减速系数,系数越大,滚动速度越慢,滚动距离越小
    })
		
		
 })