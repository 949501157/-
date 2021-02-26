$(function (){

    // 请求永生花列表数据
    $.ajax({
    url: '../data/index.json',
    type: 'get',
    dataType: 'json',
    cache: false,
    success: function (json){
        // 永生花类别
        var domStr0 = ''
        $.each(json[0],function (index,item){
        domStr0 += `
            <a href="##">
                <img src="${item.imgurl}" alt="">
                <p>${item.title}</p>
            </a>
        `
        })
        $('.navi_con .drow_cate .box3 .box_r .items_t').html(domStr0)
        //对象
        var domStr1 = ''
        $.each(json[1],function (index,item){
        domStr1 += `
            <a href="##">
                <img src="${item.imgurl}" alt="">
                <p>${item.title}</p>
            </a>
        `
        })
        $('.navi_con .drow_cate .box3 .box_r .items_b').html(domStr1)
        //蛋糕品牌
        var domStr2 = ''
        $.each(json[2],function (index,item){
        domStr2 += `
            <a href="##">
                <img src="${item.imgurl}" alt="">
                <p>${item.title}</p>
            </a>
        `
        })
        $('.navi_con .drow_cate .box4 .box_r .items_t').html(domStr2)
        //对象
        var domStr3 = ''
        $.each(json[3],function (index,item){
        domStr3 += `
            <a href="##">${item.name}</a>
        `
        })
        $('.navi_con .drow_cate .box4 .box_r .items_b').html(domStr3)

        //礼品品牌
        var domStr4 = ''
        $.each(json[4],function (index,item){
        domStr4 += `
            <a href="##">
                <img src="${item.imgurl}" alt="">
                <p>${item.title}</p>
            </a>
        `
        })
        $('.navi_con .drow_cate .box5 .box_r .items_t').html(domStr4)

        //礼品类别
        var domStr5 = ''
        $.each(json[5],function (index,item){
        domStr5 += `
            <a href="##">
                <img src="${item.imgurl}" alt="">
                <p>${item.title}</p>
            </a>
        `
        })
        $('.navi_con .drow_cate .box5 .box_r .items_b').html(domStr5)

        //爱情鲜花
        var domStr6 = ''
        $.each(json[6],function (index,item){
        domStr6 += `
            <a href="##">
                <div class="photo">
                    <img src="${item.imgurl}" alt="">
                </div>
                <div class="product-content">
                    <p class="title">${item.title}</p>
                    <p class="price">¥${item.price}</p>
                    <p class="sell">已售 ${item.sell} 件</p>
                </div>
            </a>
        `
        })
        $('.love_con .bd .hd_r').html(domStr6)

        //送长辈鲜花
        var domStr7 = ''
        $.each(json[7],function (index,item){
        domStr7 += `
            <a href="##">
                <div class="photo">
                    <img src="${item.imgurl}" alt="">
                </div>
                <div class="product-content">
                    <p class="title">${item.title}</p>
                    <p class="price">¥${item.price}</p>
                    <p class="sell">已售 ${item.sell} 件</p>
                </div>
            </a>
        `
        })
        $('.elder_con .bd .hd_r').html(domStr7)

        //永生花
        var domStr8 = ''
        $.each(json[8],function (index,item){
        domStr8 += `
            <a href="##">
                <div class="photo">
                    <img src="${item.imgurl}" alt="">
                </div>
                <div class="product-content">
                    <p class="title">${item.title}</p>
                    <p class="price">¥${item.price}</p>
                    <p class="sell">${item.sell}</p>
                </div>
            </a>
        `
        })
        $('.song_con .bd .hd_r').html(domStr8)

        //蛋糕
        var domStr9 = ''
        $.each(json[9],function (index,item){
        domStr9 += `
            <a href="##">
                    <img src="${item.imgurl}" alt="">
                    <p class="title">${item.title}</p>
                </div>
            </a>
        `
        })
        $('.cake_con .bd .brands').html(domStr9)
        var domStr10 = ''
        $.each(json[10],function (index,item){
        domStr10 += `
            <a href="##">
                <div class="photo">
                    <img src="${item.imgurl}" alt="">
                </div>
                <div class="product-content">
                    <p class="title">${item.title}</p>
                    <p class="price">¥${item.price}</p>
                    <p class="sell">${item.sell}</p>
                </div>
            </a>
        `
        })
        $('.cake_con .bd .shping').html(domStr10)
    }
    })
}
)