<template>
  <div class="content">
    <Calendar v-on:chose_day="clickday" v-on:is_today="clicktoday" v-on:change_month="change_date" :mark_array=[20,21] :is_hide_otherday=false></Calendar>
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
      this.$toast('选中了' + data);
    },
    clicktoday(data) {
      console.log(data); //跳到了本月
    },
    change_date(data) {
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
