/*
 * @Description: 这里输入文件功能
 * @Author: zhoupeng
 * @Date: 2020-02-26 17:55:38
 * @LastEditTime: 2020-06-21 09:25:30
 */

//首页
if (window.location.href.search("index.html") !== -1) {
  document.getElementsByClassName("item-index")[0].classList.add("active");
} else if (window.location.href.search("aboutUs.html") !== -1) {
  //关于我们
  document.getElementsByClassName("item-aboutUs")[0].classList.add("active");
} else if (window.location.href.search("businessScope.html") !== -1) {
  //业务范围
  document
    .getElementsByClassName("item-businessScope")[0]
    .classList.add("active");
} else if (window.location.href.search("successfulCase.html") !== -1) {
  //运营项目
  document
    .getElementsByClassName("item-successfulCase")[0]
    .classList.add("active");
} else if (window.location.href.search("contactUs.html") !== -1) {
  //联系我们
  document.getElementsByClassName("item-contactUs")[0].classList.add("active");
}
$(".item-index").click(function () {
  window.location.href = "./../pages/index.html";
});
$(".item-aboutUs").click(function () {
  window.location.href = "./../pages/aboutUs.html";
});
$(".item-businessScope").click(function () {
  window.location.href = "./../pages/businessScope.html";
});
$(".item-successfulCase").click(function () {
  window.location.href = "./../pages/successfulCase.html";
});
$(".item-contactUs").click(function () {
  window.location.href = "./../pages/contactUs.html";
});

$(".item-language").click(function () {
  var text = $(this, ".languageText").text();
  if (text === "ENGLISH") {
    $(this, ".languageText").text("中文");
  } else {
    $(this, ".languageText").text("ENGLISH");
  }
});

var timer = null;
$(".top").click(function () {
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(function fn() {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
      timer = requestAnimationFrame(fn);
    } else {
      cancelAnimationFrame(timer);
    }
  });
});
