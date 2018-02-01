webpackJsonp([1],{

/***/ "4AlO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      text_top: ['一', '二', '三', '四', '五', '六', '日'],
      my_data: [],
      list: [],
      date_top: ''
    };
  },
  props: {
    markArray: { default: '[]' },
    agoDayHide: { default: '0' },
    isHideOtherday: { default: false }
  },
  created() {
    this.my_data = new Date();
  },
  methods: {
    clickDay: function (item, index) {
      if (item.other_month) {
        item.other_month < 0 ? this.PreMonth() : this.NextMonth();
      } else {
        if (!(this.isHideOtherday && item.next_day_show) && !item.agoDayHide) {
          this.$emit('choseDay', item.date);
          for (var i = 0; i < this.list.length; i++) {
            if (i == index) {
              this.list[i].is_today = true;
            } else {
              this.list[i].is_today = false;
            }
          }
        }
      }
    },
    ChoseMonth: function (date) {
      this.my_data = new Date(date);
      this.$emit('changeMonth', this.dateformat(this.my_data));
      this.getlist(this.my_data);
    },
    PreMonth: function () {
      this.my_data = this.getPreMonth(this.my_data);
      this.$emit('changeMonth', this.dateformat(this.my_data));
      this.getlist(this.my_data);
    },
    NextMonth: function () {
      this.my_data = this.getNextMonth(this.my_data);
      this.$emit('changeMonth', this.dateformat(this.my_data));
      this.getlist(this.my_data);
    },
    /**
     * 获取上一个月
     */
    getPreMonth: function (date) {
      var time_array = this.dateformat(date).split('/');
      var year = time_array[0]; //获取当前日期的年份
      var month = time_array[1]; //获取当前日期的月份
      var day = time_array[2]; //获取当前日期的日
      var days = new Date(year, month, 0);
      days = days.getDate(); //获取当前日期中月的天数
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
    /**
     * 获取下一个月
     */
    getNextMonth: function (date) {
      var arr = this.dateformat(date).split('/');
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
      //通过获取下月面0号的日期可以知道这个月有多少天
      var getyear = date.getFullYear();
      var getmonth = date.getMonth() + 1;
      getmonth = parseInt(getmonth, 10);
      var d = new Date(getyear, getmonth, 0);
      return d.getDate();
    },
    getMonthweek: function (date) {
      //获取本月第一天是星期几，然后在去向前空几个
      var getyear = date.getFullYear();
      var getmonth = date.getMonth() + 1;
      var date_one = new Date(getyear + '/' + getmonth + '/1');
      return date_one.getDay() == 0 ? 6 : date_one.getDay() - 1;
    },
    getlist: function (date) {
      //渲染出来当前list
      var mygetMonth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      this.date_top = date.getFullYear() + '年' + mygetMonth + '月';
      var array = [];
      for (var i = 0; i < this.getDaysInOneMonth(date); i++) {
        if (this.dateformat(new Date()) == this.dateformat(new Date(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (i + 1)))) {
          array = array.concat({
            //如果当前这天是今天 is_today是true
            id: i + 1,
            date: date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (i + 1),
            is_today: true,
            is_mark: this.markArray.indexOf(i + 1) >= 0,
            agoDayHide: new Date(`${date.getFullYear()}-${mygetMonth}-${i + 1}`).getTime() < this.agoDayHide * 1,
            next_day_show: new Date(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (i + 1)).getTime() - new Date().getTime() > 0
          });
          this.$emit('isToday', this.dateformat(new Date(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (i + 1))));
        } else {
          array = array.concat({
            id: i + 1,
            date: date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (i + 1),
            is_today: false,
            is_mark: this.markArray.indexOf(i + 1) >= 0,
            agoDayHide: new Date(`${date.getFullYear()}-${mygetMonth}-${i + 1}`).getTime() < this.agoDayHide * 1,
            next_day_show: new Date(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (i + 1)).getTime() - new Date().getTime() > 0
          });
        }
      }
      var array2 = [];
      var num = this.getDaysInOneMonth(this.getPreMonth(date)) - this.getMonthweek(date) + 1;
      for (var i = 0; i < this.getMonthweek(date); i++) {
        array2 = array2.concat({ other_month: -1, id: num + i });
      }
      array = array2.concat(array);
      var length_ = 7 - array.length % 7;
      if (length_ < 7) {
        for (let i = 0; i < length_; i++) {
          array.push({ other_month: 1, id: i + 1 });
        }
      }
      this.list = array;
    },
    dateformat: function (date) {
      return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    }
  },
  mounted() {
    this.getlist(this.my_data);
  },
  watch: {
    markArray(val, oldVal) {
      var list = this.list;
      for (var i = 0; i < list.length; i++) {
        list[i].is_mark = false;
        if (list[i].date) {
          for (var n = 0; n < val.length; n++) {
            if (list[i].id == val[n]) {
              list[i].is_mark = true;
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

/***/ "eNIl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_demo_vue__ = __webpack_require__("tH/I");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_4e4a0cdb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_demo_vue__ = __webpack_require__("lHdV");
function injectStyle (ssrContext) {
  __webpack_require__("4AlO")
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_4e4a0cdb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_demo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "f47t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"wh_container"},[_c('div',{staticClass:"wh_content_all"},[_c('div',{staticClass:"wh_top_changge"},[_c('li',{on:{"click":_vm.PreMonth}},[_c('div',{staticClass:"wh_jiantou1"})]),_vm._v(" "),_c('li',{staticClass:"wh_content_li"},[_vm._v(_vm._s(_vm.date_top))]),_vm._v(" "),_c('li',{on:{"click":_vm.NextMonth}},[_c('div',{staticClass:"wh_jiantou2"})])]),_vm._v(" "),_c('div',{staticClass:"wh_content"},_vm._l((_vm.text_top),function(tag){return _c('div',{staticClass:"wh_content_item"},[_c('div',[_vm._v("\n          "+_vm._s(tag)+"\n        ")])])})),_vm._v(" "),_c('div',{staticClass:"wh_content"},_vm._l((_vm.list),function(item,index){return _c('div',{staticClass:"wh_content_item",on:{"click":function($event){_vm.clickDay(item,index)}}},[_c('div',[_c('li',{class:{ wh_is_today: item.is_today,
                                      wh_is_mark:item.is_mark,
                                      wh_next_day_show:(_vm.isHideOtherday&&item.next_day_show)||item.other_month||item.agoDayHide}},[_vm._v("\n            "+_vm._s(item.id))])])])}))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "fdn2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_calendar_vue__ = __webpack_require__("KUkg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_adc6576a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_calendar_vue__ = __webpack_require__("f47t");
function injectStyle (ssrContext) {
  __webpack_require__("zFg3")
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_adc6576a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "lHdV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('Calendar',{ref:"Calendar",attrs:{"markArray":[20,21]},on:{"choseDay":_vm.clickDay,"isToday":_vm.clickToday,"changeMonth":_vm.changeDate}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('h1',{on:{"click":_vm.demo}},[_vm._v("标记了20号21号")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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

/* harmony default export */ __webpack_exports__["a"] = ({
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
        },
        demo() {
            //this.$refs.Calendar.ChoseMonth('2017-01');
        }
    }
});

/***/ }),

/***/ "zFg3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.c45cddc717c41c833592.js.map