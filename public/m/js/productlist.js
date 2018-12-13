$(function () {  

    // 1.商品搜索
    //     1.拿到搜索页面传递过来的参数
    //     2.调用查询商品列表的API查询商品列表数据
    //     3.创建商品列表的模板 传入数据
    //     4.把模板渲染到页面

        //1.拿到参数
        var search = decodeURI(location.search.split('=')[1]);
        console.log(search);

        //调用商品列表是APi
        $.ajax({
            
            url: "/product/queryProduct",
            //传过去查询条件文档上有
            data: {page:1,pageSize:4,proName:search},
            success: function (data) {
                // console.log(data);
                
                //创建模板
                var html = template('tpl3',data);
                $('.product-list .content ul').html(html);
            }
        });
        

 })