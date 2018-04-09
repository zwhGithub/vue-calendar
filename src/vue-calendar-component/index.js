/**
 * Created by ZWH on 2017/6/22.
 */
import CalendarComponent from './calendar.vue';
// 导出组件 这里是重点

export default {
  install(Vue) {
    Vue.component('Calendar', Vue.extend(CalendarComponent));
  }
};

let a = ['2018/4/4', '2018/4/6'];
console.log(a);
