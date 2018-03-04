$(function () {

  /**
   * init传入参数依次是：正确密码(传空时不对比输入是否正确),密码键盘背景，标题，副标题
   * */
  PwdBox.init('', '', '设置提现密码', '');
  /**
   *res格式：{status:'true或false',password:'用户输入的密码'}
   *
   */
  PwdBox.show(function (res) {
    console.log(res);
    if (res.status) {
      //重置输入
      alert('在控制台查看密码');
      console.log(res.password);
      //关闭并重置密码输入
      $('.input-box').hide();
      $('.inner-box').css('background', 'url("./imgs/pwd_keyboard_ok.png") center top / 100% 35% no-repeat');
      $('.notice').hide();
      $('#to_cash_btn_ok').show();
      // PwdBox.reset();
    } else {
      alert(JSON.stringify(arguments));
    }
  });
  $('.password-box').css('background-color', 'transparent');
  $('h1.title').css({
    'color': '#c4c4c4',
    'font-size': '14px',
    'font-weight': '300',
  })
  $('.icon-guanbi').hide();
  $('.inner-box').css('background', 'url(./imgs/pwd_keyboard.png) center bottom / 100% 100%');
  $('.notice ').text('');
  $('#to_cash_btn_ok').on('click',function(e){
    e.preventDefault();
    console.log('123');
    $('#pwd_check_modal').fadeIn();
    $('#pwd_check_modal_bg').fadeIn();
    calTime();
  })
  function calTime(){//倒计时
    var t = 3;
    var time = setInterval(function () {
      if (t > 0) {
        t -= 1;
        if (t < 10) {
          t = '0' + t;
        };
        $('#time').text(t + 's')
      } else {
        clearInterval(time);
        $('#time').text('重新发送');
        $('#time').addClass('active')
      }
    }, 1000);
  }
  $('#time').on('click',function(){
    if($(this).hasClass('active')){
      alert('重新发送按钮被点击');
    }
  });
  $('#submit').on('click',function(){
    alert('请配置ajax或修改此函数');
    $('#pwd_check_modal').hide();
    $('#pwd_check_modal_bg').hide();
    $.ajax({

    })
  });
  $('#cancel').on('click', function () {
    window.location.reload();
  })
})