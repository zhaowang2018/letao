$(function () { 
    mui('.mui-scroll-wrapper').scroll({
        indicators: false,//是否显示滚动条
        deceleration: 0.0005 // 减速系数
    });


     /*1. 分类左侧的动态数据渲染
    	1. 使用ajax请求分类左侧的API接口 /category/queryTopCategory
    	2. 拿到数据 创建数据的模板
    	3. 调用模板方法生成html结构
    	4. 把html放到页面上*/
    $.ajax({
        
        url: "/category/queryTopCategory",
        data: "data",
        
        success: function (data) {
            var html = template('tpl',data);
            $('.mian-title ul').html(html);
           console.log(data);
           
            
        }
    });

    // 1. 给左边的a添加点击事件 移动端使用不延迟tap事件代替click事件
    //异步元素 使用事件委托
    $('.mian-title ul').on('tap','li a',function () { 
        //2.获取当前点击的id
        //zepto使用data获取自定义属性函数
        //var id = $(this).attr('data-id');
        // zepto和jquery专门获取自定义属性的函数不需要带data- 自动做类型转换
        var id = $(this).data('id');
        
        
        
        // 调用请求右侧分类的数据的函数 传入当前点击id
        querySecondCategory(id);
        // 3.切换当前active类名,给当前点击a父元素添加active 其他兄弟删掉
        $(this).parent().addClass('active').siblings().removeClass('active');
     })
     // 默认调用请求数据的函数 传入id为1
     querySecondCategory(1);
     function querySecondCategory (id) { 
         //根据当前点击的id去请求右侧的内容
        $.ajax({
            
            url: "/category/querySecondCategory",
            data: {id:id},
            
            success: function (data) {
                // 4. 调用分类右侧模板
                var html = template('tpl2',data);
                $('.mian-content ul').html(html);
            }
        });
      }


 })