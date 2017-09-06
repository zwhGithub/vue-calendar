/**
 * Created by ZWH on 2017/6/22.
 */
import CalendarComponent from './calendar.vue'
// 导出组件 这里是重点

export default {
  install (Vue) {
    Vue.component('Calendar', Vue.extend(CalendarComponent));
  }
}

