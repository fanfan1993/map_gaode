var deviceWidth = document.documentElement.clientWidth;
var deviceHeight = document.documentElement.clientHeight;
if (deviceWidth > 750) deviceWidth = 750;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
//alert(deviceWidth +"-"+ deviceHeight);
document.body.style.height = (7.5/deviceWidth)*deviceHeight + "rem";
document.documentElement.style.webkitTouchCallout = "none"; //禁止弹出菜单
document.documentElement.style.webkitUserSelect = "none";//禁止选中