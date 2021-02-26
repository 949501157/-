$(function (){

  // 请求永生花列表数据
  $.ajax({
  url: '../data/goodslist.json',
  type: 'get',
  dataType: 'json',
  cache: false,
  success: function (json){
      // 永生花类别
      var domStr0 = ''
      $.each(json,function (index,item){
      domStr0 += `
        <div class="goods">
        <a href="##"><img src="${item.imgurl}" alt=""></a>
          <p class="price">￥${item.peice}</p>
          <h3>${item.jianjie}</h3>
          <h4>${item.biaoyu}</h4>
          <div class="operate">
            <div class="xin">
              <span></span>
              <p>收藏</p>
            </div>
            <div class="car" data-id="${item.id}">
              <span></span>
              <p>购物车</p>
            </div>
          </div>
        </div>
      `
      })
      $('.wrapper_con .zhong').html(domStr0)
  }
  })

  // 点击加入购物车
  $('.zhong').on('click','.goods .operate .car',function (){
    // 存储商品id和数量
    // "goods"=>"[{'id':'abc4','num':2},{'id':'abc2','num':1}]"
    var id = $(this).attr('data-id')//当前点击商品的id
    var goodsArr = []//购物车数据的数组
    if (localStorage.getItem('goodslist')) {
      goodsArr = JSON.parse( localStorage.getItem('goodslist') )
    }
    // 标记购物车是否已有该商品
    var flag = false
    // 判断购物车是否已有该商品
    $.each(goodsArr,function (index,item){
      if (item.id === id) {//购物车已该商品
        item.num++//商品数量+1
        flag = true
      }
    })
    if (!flag) {
      // push一个商品对象到goodsArr
      goodsArr.push({"id":id,"num":1})
    }
    // 数据更新到本地存储
    localStorage.setItem('goodslist', JSON.stringify(goodsArr) )
    alert('加入购物车成功！')
  })
}
)