## vue-calendar-component
* 基于 vue 2.0 开发的轻量，高性能日历组件
* 占用内存小，性能好，样式好看，可扩展性强


## Why
* github上太多一个输入框点击弹出日历选择某个时间的组件，却没有找到适合一个单纯展示日历并且能点击获取时间的组件
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
import 'vue-calendar-component/style.css’;
Vue.use(Calendar)；

 <Calendar v-on:chose_day="clickday"
           v-on:is_today="clicktoday"
           v-on:change_month="change_date"
           mark_array="[1,2]" //选中1号2号
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


chose_day  //点击哪天获取到点击日期
is_today  //左右点击如果到了本月 获取到日期
change_month  //左右点击月份获取到日期
mark_array  //想要这个月哪几天被标记，比如这个月1号、2号，如果不需要可以不传
is_hide_otherday  //是否让超过今天的日期可以点击，默认是false可以点击  true不让点击
