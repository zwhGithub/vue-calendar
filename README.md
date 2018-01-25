## vue-calendar-component
* 基于 vue 2.0 开发的轻量，高性能日历组件
* 占用内存小，性能好，样式好看，可扩展性强

## Why
* Github上太多一个输入框点击弹出日历选择某个时间的组件，却没有找到适合一个单纯展示日历并且能点击获取时间的组件
* 少部分日历组件的占用内存过于大，对于日历这样简单的功能来说显然不够合理

## Demo

![效果](https://zwhgithub.github.io/vue-calendar/dist/1510652959.png)                 [或者请用浏览器的手机模式查看](https://zwhgithub.github.io/vue-calendar/dist/#/)

## 效果
 ![效果](https://qiniu.epipe.cn/5465939501580804096?imageView2/1/w/290/h/470)
- 觉得好用给一个star哦 ~~~


## Install
```javascript
npm i vue-calendar-component --save
cnpm i vue-calendar-component --save  //国内镜像
```

##  Usage
```javascript
//main.js中引入

import Calendar from 'vue-calendar-component';
Vue.use(Calendar);

    <Calendar
      v-on:choseDay="clickDay"
      v-on:isToday="clickToday"
      v-on:changeMonth="changeDate"
      :markArray=[20,21] //标记的日期
      // :isHideOtherday=false  //超过今天也不允许点击
      // :agoDayHide='1514937600000' //某个时间戳以前的不允许点击
    ></Calendar>


    clickDay(data) {
      console.log(data); //选中某天
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    }


 在 <Calendar> 标签上添加 ref 属性, 例如: <Calendar ref="Calendar"></Calendar>
暴露出三个方法可以  直接切换月份
this.$refs.Calendar.PreMonth(); //调用方法实现转到上个月
this.$refs.Calendar.NextMonth(); //调用方法实现转到下个月
this.$refs.Calendar.ChoseMonth('2017-01-01'); //调用方法实现转到某个月

```

### API
| 属性               | 说明                                       |  默认   | 是否必传 |
| :--------------- | :--------------------------------------- | :---: | :--: |
| choseDay        | 选中某天调用的方法，返回选中的日期YY-MM-DD                |   无   |  否   |
| changeMonth     | 切换月份调用的方法，返回切换到某月的日期YY-MM-DD             |   无   |  否   |
| isToday         | 切换月份的时候，如果切到当前月份，调用这个方法，返回当前月今天          |   无   |  否   |
| markArray       | 如果需要某月的几天被标注，传当月的日期数组。如[2,6,8]当月2号6号8号被会标注 |  空数组  |  否   |
| isHideOtherday | 超过今天的日期是否可以被点击，true是不可以点击，false是可以点击     | false |  否   |
| agoDayHide | 某个时间戳以前不允许点击  时间戳长度是13位   | 0 |  否   |


## Other
* src下面的App.vue 有demo可以参考.
* 如果有其他问题或者版本上, 功能上不兼容的 邮件沟通 452216418@qq.com
