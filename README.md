## vue-calendar-component
* 基于 vue 2.0 开发的轻量，高性能日历组件
* 占用内存小，性能好，样式好看，可扩展性强

## Why
* Github上太多一个输入框点击弹出日历选择某个时间的组件，却没有找到适合一个单纯展示日历并且能点击获取时间的组件
* 少部分日历组件的占用内存过于大，对于日历这样简单的功能来说显然不够合理

## 效果
![效果](https://qiniu.epipe.cn/5465939501580804096?imageView2/1/w/320/h/568)


## Install
```javascript
npm i vue-calendar-component --save
cnpm i vue-calendar-component --save  //国内镜像
```

##  Usage
```javascript
//main.js中引入

import Calendar from 'vue-calendar-component'；
import 'vue-calendar-component/style.css';
Vue.use(Calendar)；

 <Calendar v-on:chose_day="clickday"
           v-on:is_today="clicktoday"
           v-on:change_month="change_date"
           mark_array="[1,2]" //标记1号2号
           :is_hide_otherday=true
           ></Calendar>

      clickday(data){
        console.log(data) //选中某天
      },
      clicktoday(data){
        console.log(data)  //跳到了本月
      },
      change_date(data){
        console.log(data)  //左右点击切换月份
      }

```

### API
* 属性说明
    |属性|说明|默认值|是否必传|
    |---|----|---|-----|-------|
    |chose_day|选中某天调用的方法，返回选中的日期YY-MM-DD|无|   否   |
    |change_month|切换月份调用的方法，返回切换到某月的日期YY-MM-DD|无|否|
    |is_today|切换月份的时候，如果切到当前月份，调用这个方法，返回当前月今天|无| 否 |
    |mark_array|如果需要某月的几天被标注，传当月的日期数组。如[2,6,8]当月2号6号8号被会标注|空数组|否|
    |is_hide_otherday|超过今天的日期是否可以被点击，true是不可以点击，false是可以点击|false|否|

## Other
* src下面的App.vue 有demo可以参考.
* 如果有其他问题或者版本上, 功能上不兼容的 邮件沟通 452216418@qq.com