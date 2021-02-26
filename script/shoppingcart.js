$(function (){
  if (localStorage.getItem('goodslist')) {
    // 获取购物车数据
    var goodsArr = JSON.parse( localStorage.getItem('goodslist') )

    // 获取所有数据
    $.ajax({
      url: '../data/goodslist.json',
      type: 'get',
      dataType: 'json',
      success: function (json){
        var domStr = ''
        $.each(json,function (index,item){
          $.each(goodsArr,function (i,obj){
            if (item.id === obj.id) {
              domStr += `
              <li>
                <input type="checkbox" class="jdcheck">
                <img src="${item.imgurl}" alt="">
                <h3>${item.jianjie}</h3>
                <p>${item.peice}</p>
                <span>
                  <div class="jian">-</div>
                  <input type="text" min='1' max='200' class="cart-input" value="${obj.num}">
                  <div class="jia">+</div>
                </span>
                <em data-id="${item.id}">删除</em>
              </li>
              `
            }
          })
        })
        $('.list').html(domStr)
      }
    })

    // 删除商品
    $('.list').on('click','li em',function (){
      // 当前点击的商品id
      var id = $(this).attr('data-id')
      $.each(goodsArr,function (index,item){
        if (item.id === id) {
          goodsArr.splice(index,1)
          return false
        }
      })
      // 删除dom结构
      $(this).parent().remove()
      // 更新本地存储的数据
      localStorage.setItem('goodslist',JSON.stringify(goodsArr))
      if (goodsArr.length <= 0) {
        localStorage.removeItem('goodslist')
        var newLi = '<li>购物车暂无数据！</li>'
        $('.list').html(newLi)
      }
    })

  } else {
    var newLi = '<li>购物车暂无数据！</li>'
    $('.list').html(newLi)
  }

  //减
  $('.list').on('click','li span .jian',function (){
    // 获取购物车数据
    var goodsArr = JSON.parse( localStorage.getItem('goodslist') )
    var click_id = $(this).parent().next().attr('data-id')//点击商品的id
    var sh_num = null
    $.each(goodsArr,function (index,item){
      if (item.id === click_id) {//是数量要加的商品
        item.num--//商品数量-1
        sh_num = item.num
        // 更新本地存储的数据
        localStorage.setItem('goodslist',JSON.stringify(goodsArr))
      }
    })
    $(this).next().attr('value',sh_num)  // 更新输入框的数据    
  })

  //加
  $('.list').on('click','li span .jia',function (){
    // 获取购物车数据
    var goodsArr = JSON.parse( localStorage.getItem('goodslist') )
    var click_id = $(this).parent().next().attr('data-id')//点击商品的id
    var sh_num = null
    $.each(goodsArr,function (index,item){
      if (item.id === click_id) {//是数量要加的商品
        item.num++//商品数量+1
        sh_num = item.num
        // 更新本地存储的数据
        localStorage.setItem('goodslist',JSON.stringify(goodsArr))
      }
    })
    $(this).prev().attr('value',sh_num)  // 更新输入框的数据    
  })

  //输入数量
  $('.list').on('blur','li span .cart-input',function (){ 
    // 获取购物车数据
    var goodsArr = JSON.parse( localStorage.getItem('goodslist') )
    var click_id = $(this).parent().next().attr('data-id')//操作的商品的id
    var sh_num = $(this).attr('value')  //获取输入框的数据  
    // console.log(sh_num);
    $.each(goodsArr,function (index,item){
      if (item.id === click_id) {//是数量改变的商品
        item.num = sh_num 
        // 更新本地存储的数据
        localStorage.setItem('goodslist',JSON.stringify(goodsArr))
      }
    })
  })

  // 勾选结算
  // $('.list').on('click','li .jdcheck',function (){
  //   var sum_jine = $('.close_f .priceShow em').text()
  //   // console.log(sum_jine);
  //   if($(this).prop("checked")){
  //     var price = $(this).siblings('p').text()//获取价格
  //     var num_shul = $(this).siblings('span').children('.cart-input').attr('value')//获取数量
  //     sum_jine = parseFloat(price) * parseFloat(num_shul)
  //     console.log(sum_jine);
  //     $('.close_f .priceShow em').text(sum_jine)
  //     $('.close_f .amount-sum em').text(num_shul)
  //   }
  // })


  // toFixed

  // 勾选结算
  $('.list').on('click','li .jdcheck',function (){
    var sum_jine = parseFloat($('.close_f .priceShow em').text())
    var cart_shoop = parseInt($('.close_f .amount-sum em').text())
    // console.log(sum_jine);
    if($(this).prop("checked")){
      var price = $(this).siblings('p').text()//获取价格
      var num_shul = parseInt($(this).siblings('span').children('.cart-input').attr('value'))//获取数量
      cart_shoop += num_shul;
      sum_jine += parseFloat(price) * parseFloat(num_shul);
      console.log(sum_jine);
      $('.close_f .priceShow em').text(sum_jine)
      $('.close_f .amount-sum em').text(cart_shoop)
    } else{
      var price = $(this).siblings('p').text()//获取价格
      var num_shul = parseInt($(this).siblings('span').children('.cart-input').attr('value'))//获取数量
      cart_shoop -= num_shul;
      sum_jine -= parseFloat(price) * parseFloat(num_shul);
      console.log(sum_jine);
      $('.close_f .priceShow em').text(sum_jine)
      $('.close_f .amount-sum em').text(cart_shoop)
    }

  })



})