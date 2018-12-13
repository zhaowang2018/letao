$(function () {  

    //1.添加搜索记录
        // 1.1点击搜索按钮获取当前的值
        // 1.2 对输入内容进行非空判断
        // 1.3 获取之前存储的记录,如果有值就把之前记录转成数组来使用,如果没有值就使用空数组
        // 1.4 添加值之前进行判断 如果值已经在数组中存在了先把存在的值删掉 添加在数组的最前面
        // 1.5 添加完成后吧数组重新保存到本地存储里面
    //1.给搜索按钮添加事件
    $('.btn-search').on('tap',function () {
        //2.获取输入框的内容
        var search = $('.input-search').val();
        //3.对输入内容进行非空判断;trim()方法实现去掉两端的空格
        if(!search.trim()){
            alert('请输入要搜索的商品');
            return;
        }
        //4.获取之前本地存储存储的值,如果有值使用默认值,没有值使用空数组
        var historyData = JSON.parse(localStorage.getItem('searchHistory')) || [];
        //5.添加进数组,放在第一位
            //5.1 添加之前要进行判定是否重复
            if(historyData.indexOf(search) != -1 ){
                //如果indexOf不等于-1表示输入内容在数组中存在
                //存在就删除
                historyData.splice(historyData.indexOf(search),1);

            }
            console.log(search);
        historyData.unshift(search);
        //6.把数组存储到本地存储中
        localStorage.setItem('searchHistory',JSON.stringify(historyData))

        //7.刷新页面
        query();

        //8.加完了要跳转页面到商品页面
        location = 'productlist.html?search='+search;
        //9.清空input 
        $('.input-search').val("");
        
      })

        query();
   function query () { 
        //2 查询搜索记录
      //1获取本地存储的数据
      var historyData = JSON.parse(localStorage.getItem('searchHistory')) || [];

      //2.创建一个模板去生成
      historyData = {rows : historyData};
    //   console.log(historyData); 本地存储的数组
      
      //3.渲染到搜索引擎列表
      var html = template('searchListTpl',historyData);

      //4.把html渲染到ul里面
      $('.search-history .mui-table-view').html(html);
    }
     

      


      //3.删除搜索记录
        //1.删除事件 ,用自己取的类名,防止出以后的更改, 委托事件
        $('.search-history .mui-table-view').on('tap','.btn-delete',function () { 
            
            //获取当前点击的索引
            var index = $(this).data('index');
            
            //3获取整个记录 删掉当前索引元素
            var historyData = JSON.parse(localStorage.getItem('searchHistory')) || [];
            console.log(historyData);
            
            //4删除完重新加入到本地数组中
                historyData.splice(index,1);
                localStorage.setItem('searchHistory',JSON.stringify(historyData));
            //5重新刷新页面
            query();
         })
        
         //点击下面的记录会自己搜索
        //  $('.search-history .mui-table-view').on('click','.mui-table-view-cell',function () { 
             
        //     var content =  $('.mui-table-view-cell').innerHTML;
            
        //     console.log(content);
            
        //   })
        


        //4.清空
        //给清空按钮点击事件
        $('.btn-clear').on('tap',function () { 

            //删掉整个键
            localStorage.removeItem('searchHistory');
            //调用函数刷新页面
            query();
         })
})