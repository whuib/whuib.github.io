// 本js用于nav的布局


var weather = document.createElement('div');
weather.id = 'he-plugin-simple'; // weather元素，用来显示天气

var null_mid = document.createElement('div');
null_mid.id = 'null_mid'; // 空元素，用来扩展位置
var null_left = document.createElement('div');
null_left.id = 'null_left'; // 空元素，占位
var null_right = document.createElement('div');
null_right.id = 'null_right'; // 空元素，占位

var search = document.createElement('div');
search.id = 'search'; // search元素，用来装搜索button

var currentElement = document.getElementById('blog-info');
var parent = currentElement.parentNode;

parent.insertBefore(search, currentElement.nextSibling);
parent.insertBefore(null_mid, currentElement.nextSibling);
parent.insertBefore(weather, currentElement.nextSibling);
search.appendChild(document.getElementById('search-button'));

parent.insertBefore(null_left, parent.firstChild);
parent.appendChild(null_right);
