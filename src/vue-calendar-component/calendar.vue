<style>
* {
  margin: 0;
  padding: 0;
}

.wh_content_all {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  background-color: #0fc37c;
  width: 100%;
  overflow: hidden;
  padding-bottom: 8px;
}

.wh_content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 3% 0 3%;
  width: 100%;
}

.wh_content:first-child .wh_content_item {
  color: #ddd;
  font-size: 16px;
  height: 15vw;
  line-height: 15vw;
}

.wh_content_item {
  font-size: 15px;
  height: 10.3vw;
  line-height: 10.3vw;
  width: 13.4vw;
  text-align: center;
  color: #fff;
}

.wh_is_today {
  width: 9vw;
  height: 9vw;
  line-height: 9vw;
  margin: auto;
  margin-top: 0.65vw;
  background-color: #fff;
  color: #0fc37c;
  border-radius: 100px;
  text-align: center;
}
.wh_is_mark {
  width: 9vw;
  height: 9vw;
  line-height: 9vw;
  margin: auto;
  margin-top: 0.65vw;
  border-radius: 100px;
  border: 1px solid red;
  z-index: 2;
}
.wh_top_changge {
  display: flex;
}

.wh_top_changge li {
  display: flex;
  color: #fff;
  font-size: 18px;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 47px;
}

.wh_top_changge .wh_content_li {
  flex: 2.5;
}

.wh_jiantou1 {
  width: 12px;
  height: 12px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  transform: rotate(-45deg);
}

.wh_jiantou1:active,
.wh_jiantou2:active {
  border-color: #ddd;
}

.wh_jiantou2 {
  width: 12px;
  height: 12px;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  transform: rotate(45deg);
}
.wh_next_day_show {
  color: #bbb;
}
</style>
<template>
  <section>
    <div class="wh_content_all">
      <div class="wh_top_changge">
        <li @click="PreMonth">
          <div class="wh_jiantou1"></div>
        </li>
        <li class="wh_content_li">{{date_top}}</li>
        <li @click="NextMonth">
          <div class="wh_jiantou2"></div>
        </li>
      </div>
      <div class="wh_content">
        <div class="wh_content_item">一</div>
        <div class="wh_content_item">二</div>
        <div class="wh_content_item">三</div>
        <div class="wh_content_item">四</div>
        <div class="wh_content_item">五</div>
        <div class="wh_content_item">六</div>
        <div class="wh_content_item">日</div>
      </div>
      <div class="wh_content">
        <div  class="wh_content_item" v-for="(item,index) in list" @click="clickDay(item,index)">
          <div v-bind:class="{ wh_is_today: item.is_today,wh_is_mark:item.is_mark,wh_next_day_show:is_hide_otherday&&item.next_day_show}">
            {{item.id}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
let mydate = new Date();
/**
   * 获取上一个月
   */
function getPreMonth(date) {
  let arr = dateformat(date).split("/");
  let year = arr[0]; //获取当前日期的年份
  let month = arr[1]; //获取当前日期的月份
  let day = arr[2]; //获取当前日期的日
  let days = new Date(year, month, 0);
  days = days.getDate(); //获取当前日期中月的天数
  let year2 = year;
  let month2 = parseInt(month) - 1;
  if (month2 == 0) {
    year2 = parseInt(year2) - 1;
    month2 = 12;
  }
  let day2 = day;
  let days2 = new Date(year2, month2, 0);
  days2 = days2.getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  if (month2 < 10) {
    month2 = "0" + month2;
  }
  let t2 = year2 + "/" + month2 + "/" + day2;
  return new Date(t2);
}
/**
   * 获取下一个月
   */
function getNextMonth(date) {
  let arr = dateformat(date).split("/");
  let year = arr[0]; //获取当前日期的年份
  let month = arr[1]; //获取当前日期的月份
  let day = arr[2]; //获取当前日期的日
  let days = new Date(year, month, 0);
  days = days.getDate(); //获取当前日期中的月的天数
  let year2 = year;
  let month2 = parseInt(month) + 1;
  if (month2 == 13) {
    year2 = parseInt(year2) + 1;
    month2 = 1;
  }
  let day2 = day;
  let days2 = new Date(year2, month2, 0);
  days2 = days2.getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  if (month2 < 10) {
    month2 = "0" + month2;
  }

  let t2 = year2 + "/" + month2 + "/" + day2;
  return new Date(t2);
}

let dateformat = function(mydate) {
  return (
    mydate.getFullYear() +
    "/" +
    (mydate.getMonth() + 1) +
    "/" +
    mydate.getDate()
  );
};
let getDaysInOneMonth = function(mydate) {
  //通过获取下月面0号的日期可以知道这个月有多少天
  let getyear = mydate.getFullYear();
  let getmonth = mydate.getMonth() + 1;
  getmonth = parseInt(getmonth, 10);
  let d = new Date(getyear, getmonth, 0);
  return d.getDate();
};
let getMonthweek = function(mydate) {
  //获取本月第一天是星期几，然后在去向前空几个
  let getyear = mydate.getFullYear();
  let getmonth = mydate.getMonth() + 1;
  let date_one = new Date(getyear + "/" + getmonth + "/1");
  return date_one.getDay() == 0 ? 6 : date_one.getDay() - 1;
};
let getlist = function(mydate, that) {
  //渲染出来当前list
  let mygetMonth =
    mydate.getMonth() + 1 < 10
      ? "0" + (mydate.getMonth() + 1)
      : mydate.getMonth() + 1;
  that.date_top = mydate.getFullYear() + "年" + mygetMonth + "月";
  let array = [];
  for (let i = 0; i < getDaysInOneMonth(mydate); i++) {
    if (
      dateformat(new Date()) ==
      dateformat(
        new Date(
          mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1)
        )
      )
    ) {
      array = array.concat({
        //如果当前这天是今天 is_today是true
        id: i + 1,
        date:
          mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1),
        is_today: true,
        is_mark: that.mark_array.indexOf(i + 1) >= 0,
        next_day_show:
          new Date(
            mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1)
          ).getTime() -
            new Date().getTime() >
          0
      });
      that.$emit(
        "is_today",
        dateformat(
          new Date(
            mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1)
          )
        )
      );
    } else {
      array = array.concat({
        id: i + 1,
        date:
          mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1),
        is_today: false,
        is_mark: that.mark_array.indexOf(i + 1) >= 0,
        next_day_show:
          new Date(
            mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1)
          ).getTime() -
            new Date().getTime() >
          0
      });
    }
  }
  let array2 = [];
  for (let i = 0; i < getMonthweek(mydate); i++) {
    array2 = array2.concat({ has_date: false });
  }
  array = array2.concat(array);
  that.list = array;
};
export default {
  data() {
    return {
      list: [],
      date_top: ""
    };
  },
  props: {
    mark_array: { default: "[]" },
    is_hide_otherday: { default: false }
  },
  methods: {
    clickDay: function(item, index) {
      if (item.id) {
        if (!(this.is_hide_otherday && item.next_day_show)) {
          this.$emit("chose_day", item.date);
          for (let i = 0; i < this.list.length; i++) {
            if (i == index) {
              this.list[i].is_today = true;
            } else {
              this.list[i].is_today = false;
            }
          }
        }
      }
    },
    PreMonth: function() {
      mydate = getPreMonth(mydate);
      let that = this;
      this.$emit("change_month", dateformat(mydate));
      getlist(mydate, that);
    },
    NextMonth: function() {
      mydate = getNextMonth(mydate);
      let that = this;
      this.$emit("change_month", dateformat(mydate));
      getlist(mydate, that);
    }
  },
  mounted() {
    let that = this;
    getlist(mydate, that);
  },
  watch: {
    mark_array(val, oldVal) {
      let list = this.list;
      for (let i = 0; i < list.length; i++) {
        list[i].is_mark = false;
        for (let n = 0; n < val.length; n++) {
          if (list[i].id == val[n]) {
            list[i].is_mark = true;
          }
        }
      }
      this.list = list;
    }
  }
};
</script>
