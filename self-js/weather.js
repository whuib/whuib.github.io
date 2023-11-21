WIDGET = {
  "CONFIG": {
    "modules": "12043", // 0：温度 1：城市 2：图像 3：预警 4：空气质量。分顺序
    "background": "5",
    "tmpColor": "000000",
    "tmpSize": "16",
    "cityColor": "000000",
    "citySize": "16",
    "aqiColor": "000000",
    "aqiSize": "16",
    "weatherIconSize": "24",
    "alertIconSize": "18",
    "padding": "10px 10px 10px 10px", // 上右下左
    "shadow": "0",
    "language": "auto",
    "borderRadius": "5",
    "fixed": "false",
    "vertical": "center",
    "horizontal": "left", // 左对齐
    "key": "d35d7cc97d5341fc8588399bcb0773a0"
  }
}

function insertAfter() {
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
}
insertAfter();
