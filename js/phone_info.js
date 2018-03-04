$(function(){
  calHei($(window), $('.phone_info'), $('.weui-tabbar'));
  $('.change_option_btn').on('click',function(e){
    e.preventDefault();
    $('ul.option').removeClass('active');
    $(this).find('.weui-cell__bd').find('ul.option').addClass('active');
  });
  $('.option').on('click','li',function(e){
    e.stopPropagation();
    var val=$(this).text();
    $(this).parent('ul').siblings('h3').find('strong').text(val);
    $(this).parent('ul').siblings('h3').find('span').css('display','inline-block');
    $(this).parent('ul').eq(0).removeClass('active');
  });
})