<template>
  <div class="hello">
    <Calendar :mark_array=array
              v-on:chose_day="clickday"
              v-on:is_today="clicktoday"
              v-on:change_month="change_date"
              :is_hide_otherday=false
              ></Calendar>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      array: [1, 2, 3]
    };
  },
  mounted() {
    this.array = [3]; //被中选的日期 3号
  },
  methods: {
    //选中某天
    clickday(data) {
      console.log(data);
    },
    //跳到了本月
    clicktoday(data) {
      console.log(data);
    },
    //左右切换月份
    change_date(data) {
      console.log(data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
