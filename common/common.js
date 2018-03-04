$(function(){
  FastClick.attach(document.body);

(function(window){
  /**
   * 计算元素高度
   * @param {*} container 外层容器
   * @param {*} needHDiv  需求得高度的容器
   */
  function calHei(container, needHDiv) {
    var containerHeight = container.outerHeight();
    var removeHeight = 0;
    var argumentsLen = arguments.length;
    for (var i = 2; i < argumentsLen; i++) {
      removeHeight += arguments[i].outerHeight();
    }
    needHDiv.css('overflow-y','scroll');
    var maring = parseInt(needHDiv.css('margin-top')) + parseInt(needHDiv.css('margin-bottom')) + parseInt(needHDiv.css('padding-bottom')) + parseInt(needHDiv.css('padding-top'));
    needHDiv.height(containerHeight - removeHeight-maring);
  }
  window.calHei=calHei;
})(window)
})