var btn = document.querySelectorAll(".btns a");
var items = document.querySelectorAll(".prizes .item");
var container = document.querySelector(".container");
console.log(items);
var timer = null; //定时器
btn[0].onclick = function () {
  clearInterval(timer);
  var randomNum = Math.floor(Math.random() * 100);
  console.log(randomNum);
  var i = 0;
  let count = 0;
  timer = setInterval(() => {
    // 让转盘转起来
    for (let j = 0; j < items.length; j++) {
      items[j].classList.remove("active");
    }
    if (i == 13) {
      items[i].classList.add("active");
      i = 0;
    } else {
      items[i].classList.add("active");
      i++;
      count++;
    }
    // 停止转动
    if (count == randomNum) {
      clearInterval(timer);
      var div = document.createElement("div");
      div.className = "prize";
      div.innerHTML = "恭喜你获得了" + items[i - 1].children[1].innerHTML;
      container.appendChild(div);
    }
    console.log(count);
  }, 200);
};
btn[1].onclick = function () {
  alert("该功能仍在开发,敬请期待");
};
