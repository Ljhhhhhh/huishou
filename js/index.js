$(function () {

  calHei($(window), $('#product_box'), $('#searchBar'), $('.tabs_box'), $('.weui-tabbar'));
  $("img").lazyload({
    threshold: 1,
    placeholder: '../imgs/product_default.jpg'
  });
  var category_btns = $('#category_btn').find('li');
  var product_box = $('#product_box').find('ul');
  var btns_len = category_btns.length;
  var btns_active_index = $('#category_btn').find('li.active').index();
  category_btns.on('click', function () {
    e = $(this);
    tab(e);
  })

  function tab(e) {
    btns_active_index = e.index();
    e.addClass('active').siblings('li').removeClass('active');
    var cate = e.attr('data-category-target');
    for (var i = 0; i < btns_len; i++) {
      if (cate === product_box.eq(i).attr('data-category')) {
        product_box.eq(i).addClass('active');
      } else {
        product_box.eq(i).removeClass('active');
      }
    }
  }

  function move(direction) {

    if (btns_active_index + direction < 0 || btns_active_index + direction >= btns_len) {
      return;
    }
    btns_active_index += direction;
    category_btns.eq(btns_active_index).stop(true).addClass('active').siblings('li').removeClass('active');
    product_box.eq(btns_active_index).stop(true).addClass('active').siblings('ul').removeClass('active');

  }



  /**
   * 屏幕滑动判断
   */
  var startx, starty;
  //获得角度
  function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
  };

  //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
  function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 50 && Math.abs(angy) < 50) {
      return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
      result = 1;
    } else if (angle > 45 && angle < 135) {
      result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
      result = 3;
    } else if (angle >= -45 && angle <= 45) {
      result = 4;
    }

    return result;
  }
  //手指接触屏幕
  $('#product_box')[0].addEventListener("touchstart", function (e) {
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
  }, false);
  //手指离开屏幕
  $('#product_box')[0].addEventListener("touchend", function (e) {
    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;

    var direction = getDirection(startx, starty, endx, endy);
    switch (direction) {
      case 0:
        console.log('未滑动！')
        break;
      case 1:
        console.log('向上！')
        break;
      case 2:
        console.log('向下！')
        break;
      case 3:
        console.log('向左！')
        move(1);
        break;
      case 4:
        console.log('向右！')
        move(-1);
        break;
      default:
    }
  }, false);





})