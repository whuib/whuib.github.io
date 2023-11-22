// 本js用于各种hover事件目前包括：
// 1. nav的hover事件


// // 鼠标移入事件
// document.querySelector('.test').onmouseover = function() {
//   document.querySelector('.test').style.color = 'blue'
// }

// // 鼠标移出事件
// document.querySelector('.test').onmouseout  = function() {
//   document.querySelector('.test').style.color = 'unset'
// }
// document.querySelector("#menus > div.menus_items > div:nth-child(4)")


// 获取 DOM 元素列表
var elements = document.querySelectorAll("#menus > div.menus_items > *, #search-button, #nav .menus_items .menus_item .menus_item_child li");

// 为每个元素添加事件监听器
elements.forEach(function(element) {
  // 鼠标移入事件
  element.addEventListener('mouseover', function() {
    // element.children[0].children[1].style.color = 'red';
    element.children[0].children[0].style.fontSize = '20px'; // iconfont
    element.children[0].children[1].style.fontSize = '20px'; // text
  });

  // 鼠标移出事件
  element.addEventListener('mouseout', function() {
    // element.children[0].children[1].style.color = 'unset';
    element.children[0].children[0].style.fontSize = 'inherit'; // iconfont
    element.children[0].children[1].style.fontSize = 'inherit'; // text
  });
});