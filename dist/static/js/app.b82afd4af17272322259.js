webpackJsonp([1],{

/***/ "FWHs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('Calendar',{ref:"Calendar",attrs:{"markArray":[20,21]},on:{"choseDay":_vm.clickDay,"isToday":_vm.clickToday,"changeMonth":_vm.changeDate}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('h1',{on:{"click":_vm.demo}},[_vm._v("标记了20号21号")]),_vm._v(" "),_c('div',{staticClass:"div",on:{"click":_vm.demo}},[_vm._v("\n        点击跳到2017-12-12\n    ")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "GOh3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "GQ+4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Gtg6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_vue__ = __webpack_require__("fdn2");
/**
 * Created by ZWH on 2017/6/22.
 */

// 导出组件 这里是重点

/* harmony default export */ __webpack_exports__["a"] = ({
  install(Vue) {
    Vue.component('Calendar', Vue.extend(__WEBPACK_IMPORTED_MODULE_0__calendar_vue__["a" /* default */]));
  }
});

/***/ }),

/***/ "KUkg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      textTop: ['一', '二', '三', '四', '五', '六', '日'],
      myData: [],
      list: [],
      dateTop: ''
    };
  },
  props: {
    markArray: { default: '[]' },
    agoDayHide: { default: '0' },
    futureDayHide: { default: '15181550670000' },
    isHideOtherday: { default: false }
  },
  created() {
    this.myData = new Date();
  },
  methods: {
    clickDay: function (item, index) {
      if (!(this.isHideOtherday && item.nextDayShow) && !item.dayHide) {
        this.$emit('choseDay', item.date);
      }
      if (item.otherMonth) {
        item.otherMonth < 0 ? this.PreMonth(item.date) : this.NextMonth(item.date);
      } else {
        if (!(this.isHideOtherday && item.nextDayShow) && !item.dayHide) {
          for (var i = 0; i < this.list.length; i++) {
            if (i == index) {
              this.list[i].isToday = true;
            } else {
              this.list[i].isToday = false;
            }
          }
        }
      }
    },
    ChoseMonth: function (date, isChosedDay = true) {
      date = this.dateFormat(date);
      this.myData = new Date(date);
      this.$emit('changeMonth', this.dateFormat(this.myData));
      this.getList(this.myData, date, isChosedDay);
    },
    PreMonth: function (date, isChosedDay = true) {
      date = this.dateFormat(date);
      this.myData = this.getPreMonth(this.myData);
      this.$emit('changeMonth', this.dateFormat(this.myData));
      this.getList(this.myData, date, isChosedDay);
    },
    NextMonth: function (date, isChosedDay = true) {
      date = this.dateFormat(date);
      this.myData = this.getNextMonth(this.myData);
      this.$emit('changeMonth', this.dateFormat(this.myData));
      this.getList(this.myData, date, isChosedDay);
    },
    getPreMonth: function (date) {
      var timeArray = this.dateFormat(date).split('/');
      var year = timeArray[0];
      var month = timeArray[1];
      var day = timeArray[2];
      var days = new Date(year, month, 0);
      days = days.getDate();
      var year2 = year;
      var month2 = parseInt(month) - 1;
      if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
      }
      var day2 = day;
      var days2 = new Date(year2, month2, 0);
      days2 = days2.getDate();
      if (day2 > days2) {
        day2 = days2;
      }
      if (month2 < 10) {
        month2 = '0' + month2;
      }
      var t2 = year2 + '/' + month2 + '/' + day2;
      return new Date(t2);
    },
    getNextMonth: function (date) {
      var arr = this.dateFormat(date).split('/');
      var year = arr[0]; //获取当前日期的年份
      var month = arr[1]; //获取当前日期的月份
      var day = arr[2]; //获取当前日期的日
      var days = new Date(year, month, 0);
      days = days.getDate(); //获取当前日期中的月的天数
      var year2 = year;
      var month2 = parseInt(month) + 1;
      if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
      }
      var day2 = day;
      var days2 = new Date(year2, month2, 0);
      days2 = days2.getDate();
      if (day2 > days2) {
        day2 = days2;
      }
      if (month2 < 10) {
        month2 = '0' + month2;
      }

      var t2 = year2 + '/' + month2 + '/' + day2;
      return new Date(t2);
    },
    getDaysInOneMonth: function (date) {
      //天数
      var getyear = date.getFullYear();
      var getmonth = date.getMonth() + 1;
      getmonth = parseInt(getmonth, 10);
      var d = new Date(getyear, getmonth, 0);
      return d.getDate();
    },
    getMonthweek: function (date) {
      var getyear = date.getFullYear();
      var getmonth = date.getMonth() + 1;
      var dateOne = new Date(getyear + '/' + getmonth + '/1');
      return dateOne.getDay() == 0 ? 6 : dateOne.getDay() - 1;
    },
    getList: function (date, chooseDay, isChosedDay = true) {
      var mygetMonth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      this.dateTop = date.getFullYear() + '年' + mygetMonth + '月';
      var array = [];
      for (var i = 0; i < this.getDaysInOneMonth(date); i++) {
        var nowTime = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (i + 1);
        if (this.dateFormat(new Date()) == this.dateFormat(new Date(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (i + 1))) && !chooseDay) {
          array = array.concat({
            id: i + 1,
            date: nowTime,
            isToday: true,
            isMark: this.markArray.indexOf(i + 1) >= 0,
            dayHide: new Date(nowTime).getTime() < parseInt(this.agoDayHide) || new Date(nowTime).getTime() > parseInt(this.futureDayHide),
            nextDayShow: new Date(nowTime).getTime() > new Date().getTime()
          });
          this.$emit('isToday', this.dateFormat(new Date(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (i + 1))));
        } else {
          array = array.concat({
            id: i + 1,
            date: nowTime,
            isToday: chooseDay == nowTime && isChosedDay,
            isMark: this.markArray.indexOf(i + 1) >= 0,
            dayHide: new Date(nowTime).getTime() < parseInt(this.agoDayHide) || new Date(nowTime).getTime() > parseInt(this.futureDayHide),
            nextDayShow: new Date(nowTime).getTime() > new Date().getTime()
          });
        }
      }
      var array2 = [];
      var num = this.getDaysInOneMonth(this.getPreMonth(date)) - this.getMonthweek(date) + 1;
      var preDate = this.getPreMonth(date);
      var nextDate = this.getNextMonth(date);
      //上个月多少开始
      for (var i = 0; i < this.getMonthweek(date); i++) {
        var nowTime = preDate.getFullYear() + '/' + (preDate.getMonth() + 1) + '/' + (num + i);
        array2 = array2.concat({
          id: num + i,
          date: nowTime,
          dayHide: new Date(nowTime).getTime() < parseInt(this.agoDayHide) || new Date(nowTime).getTime() > parseInt(this.futureDayHide),
          nextDayShow: new Date(nowTime).getTime() > new Date().getTime(),
          otherMonth: -1
        });
      }
      array = array2.concat(array);
      var _length = 7 - array.length % 7;
      if (_length < 7) {
        var nowTime = nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1) + '/' + (i + 1);
        for (let i = 0; i < _length; i++) {
          array.push({
            id: i + 1,
            date: nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1) + '/' + (i + 1),
            dayHide: new Date(nowTime).getTime() < parseInt(this.agoDayHide) || new Date(nowTime).getTime() > parseInt(this.futureDayHide),
            nextDayShow: new Date(nowTime).getTime() > new Date().getTime(),
            otherMonth: 1
          });
        }
      }
      this.list = array;
    },
    dateFormat: function (date) {
      date = new Date(date);
      return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    }
  },
  mounted() {
    this.getList(this.myData);
  },
  watch: {
    markArray(val, oldVal) {
      var list = this.list;
      for (var i = 0; i < list.length; i++) {
        list[i].isMark = false;
        if (list[i].date) {
          for (var n = 0; n < val.length; n++) {
            if (list[i].id == val[n]) {
              list[i].isMark = true;
            }
          }
        }
      }
      this.list = list;
    }
  }
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("NZSx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_715809ed_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("GOh3");
function injectStyle (ssrContext) {
  __webpack_require__("GQ+4")
}
var normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_715809ed_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("0tSy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_toast_component__ = __webpack_require__("kqZI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_toast_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_toast_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vue_calendar_component_index__ = __webpack_require__("Gtg6");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_toast_component___default.a);

// import Calendar from 'vue-calendar-component';

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4__vue_calendar_component_index__["a" /* default */]);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "NZSx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "app"
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("0tSy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("zO6J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_demo__ = __webpack_require__("eNIl");




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: [{
        path: '/',
        name: 'Hello',
        component: __WEBPACK_IMPORTED_MODULE_2__demo_demo__["a" /* default */]
    }]
}));

/***/ }),

/***/ "YtfN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eNIl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_demo_vue__ = __webpack_require__("tH/I");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_25ac6e86_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_demo_vue__ = __webpack_require__("FWHs");
function injectStyle (ssrContext) {
  __webpack_require__("YtfN")
}
var normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_demo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_25ac6e86_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_demo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "fdn2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_calendar_vue__ = __webpack_require__("KUkg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_18967135_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_calendar_vue__ = __webpack_require__("unZs");
function injectStyle (ssrContext) {
  __webpack_require__("tZx8")
}
var normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_calendar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_18967135_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "tH/I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {};
    },
    methods: {
        clickDay(data) {
            console.log('选中了', data); //选中某天
            this.$toast('选中了' + data);
        },
        clickToday(data) {
            console.log('跳到了本月', data); //跳到了本月
        },
        changeDate(data) {
            this.$toast('切换到的月份为' + data);
            console.log('左右点击切换月份', data); //左右点击切换月份
        },
        demo() {
            // this.$refs.Calendar.ChoseMonth('2017-12-12',false); //跳到12月12日 但是不选中12月12日
            this.$refs.Calendar.ChoseMonth('2017-12-12'); //跳到12月12日
        }
    }
});

/***/ }),

/***/ "tZx8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "unZs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"wh_container"},[_c('div',{staticClass:"wh_content_all"},[_c('div',{staticClass:"wh_top_changge"},[_c('li',{on:{"click":function($event){_vm.PreMonth()}}},[_c('div',{staticClass:"wh_jiantou1"})]),_vm._v(" "),_c('li',{staticClass:"wh_content_li"},[_vm._v(_vm._s(_vm.dateTop))]),_vm._v(" "),_c('li',{on:{"click":function($event){_vm.NextMonth()}}},[_c('div',{staticClass:"wh_jiantou2"})])]),_vm._v(" "),_c('div',{staticClass:"wh_content"},_vm._l((_vm.textTop),function(tag){return _c('div',{staticClass:"wh_content_item"},[_c('div',[_vm._v("\n          "+_vm._s(tag)+"\n        ")])])})),_vm._v(" "),_c('div',{staticClass:"wh_content"},_vm._l((_vm.list),function(item,index){return _c('div',{staticClass:"wh_content_item",on:{"click":function($event){_vm.clickDay(item,index)}}},[_c('div',[((_vm.isHideOtherday&&item.nextDayShow)||item.otherMonth||item.dayHide)?_c('li',{staticClass:"wh_nextDayShow"},[_vm._v("\n            "+_vm._s(item.id)+"\n          ")]):_c('li',{class:{ wh_isToday: item.isToday,
                                      wh_isMark:item.isMark}},[_vm._v("\n            "+_vm._s(item.id)+"\n          ")])])])}))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.b82afd4af17272322259.js.map