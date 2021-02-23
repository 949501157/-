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
    }
    })
}
)