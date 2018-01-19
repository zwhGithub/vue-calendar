<template>
  <div class="content">
    <Calendar ageDayHide='1514937600000' v-on:choseDay="clickDay" v-on:isToday="clickToday" v-on:changeMonth="changeDate" :markArray=[20,21] :isHideOtherday=true></Calendar>
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
    clickDay(data) {
      console.log(data); //选中某天
      this.$toast('选中了' + data);
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    },
    changeDate(data) {
      this.$toast('切换到的月份为' + data);
      console.log(data); //左右点击切换月份
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.wh_is_mark {
  background: red;
  border: none;
}
</style>
