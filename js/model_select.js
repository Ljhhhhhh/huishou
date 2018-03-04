$(function () {
  calHei($(window), $('.weui-cells'), $('#searchBar'), $('.select_year'), $('.weui-tabbar'));
  $("#select_year").picker({
    title: "选择年份",
    cols: [{
      textAlign: 'center',
      values: ['2013', '2014', '2015', '2016', '2017', '2018'],
    }],
    toolbarCloseText: '确定'
  });
})