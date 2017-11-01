<template>
  <div class="content">
    <Calendar v-on:chose_day="clickday"
              v-on:is_today="clicktoday"
              v-on:change_month="change_date"
              :mark_array=[20,21]
              :is_hide_otherday=false
              ></Calendar>
              <br/>
              <h1>标记了20号21号</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickday(data) {
      console.log(data); //选中某天
      Toast("选中了" + data);
    },
    clicktoday(data) {
      console.log(data); //跳到了本月
    },
    change_date(data) {
      Toast("切换到的月份为" + data, 2000);
      console.log(data); //左右点击切换月份
    }
  }
};

function Toast(text, time) {
  var time = time || 1500;
  var wh_toast = document.createElement("div");
  wh_toast.style =
    "position: fixed;z-index: 9999;line-height: 17px;left: 50%;transform: translate(-50%, 0);top: 43%;opacity:0";

  var wh_toast_box = document.createElement("div");
  wh_toast_box.style =
    "font-size: 14px;padding: 12px 16px;text-align: center;color: #fff;border-radius: 6px;background: #323232;opacity: .9;";
  wh_toast_box.innerHTML = text;

  wh_toast.appendChild(wh_toast_box);
  document.body.appendChild(wh_toast);
  var i = 0;
  var n = 1;

  function fade_in() {
    i += 0.25;
    wh_toast.style.opacity = i;
    if (i == 1) {
      window.clearInterval(timer1);
    }
  }
  var timer1 = window.setInterval(fade_in, 100);

  window.setTimeout(function() {
    function fade_out() {
      n -= 0.25;
      wh_toast.style.opacity = n;
      if (n == 0) {
        window.clearInterval(timer2);
        document.body.removeChild(wh_toast);
      }
    }
    var timer2 = window.setInterval(fade_out, 100);
  }, time - 400);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.wh_is_mark {
  background: red;
  border: none;
}
</style>
