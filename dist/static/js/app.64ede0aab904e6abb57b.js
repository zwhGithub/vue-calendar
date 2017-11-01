webpackJsonp([0],{

/***/ "+zxm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1SN/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"wh_content_all"},[_c('div',{staticClass:"wh_top_changge"},[_c('li',{on:{"click":_vm.PreMonth}},[_c('div',{staticClass:"wh_jiantou1"})]),_vm._v(" "),_c('li',{staticClass:"wh_content_li"},[_vm._v(_vm._s(_vm.date_top))]),_vm._v(" "),_c('li',{on:{"click":_vm.NextMonth}},[_c('div',{staticClass:"wh_jiantou2"})])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"wh_content"},_vm._l((_vm.list),function(item,index){return _c('div',{staticClass:"wh_content_item",on:{"click":function($event){_vm.clickDay(item,index)}}},[_c('div',{class:{ wh_is_today: item.is_today,wh_is_mark:item.is_mark,wh_next_day_show:_vm.is_hide_otherday&&item.next_day_show}},[_vm._v("\n          "+_vm._s(item.id)+"\n        ")])])}))])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wh_content"},[_c('div',{staticClass:"wh_content_item"},[_vm._v("一")]),_vm._v(" "),_c('div',{staticClass:"wh_content_item"},[_vm._v("二")]),_vm._v(" "),_c('div',{staticClass:"wh_content_item"},[_vm._v("三")]),_vm._v(" "),_c('div',{staticClass:"wh_content_item"},[_vm._v("四")]),_vm._v(" "),_c('div',{staticClass:"wh_content_item"},[_vm._v("五")]),_vm._v(" "),_c('div',{staticClass:"wh_content_item"},[_vm._v("六")]),_vm._v(" "),_c('div',{staticClass:"wh_content_item"},[_vm._v("日")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "6DbL":
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

let mydate = new Date();
/**
   * 获取上一个月
   */
function getPreMonth(date) {
  let arr = dateformat(date).split("/");
  let year = arr[0]; //获取当前日期的年份
  let month = arr[1]; //获取当前日期的月份
  let day = arr[2]; //获取当前日期的日
  let days = new Date(year, month, 0);
  days = days.getDate(); //获取当前日期中月的天数
  let year2 = year;
  let month2 = parseInt(month) - 1;
  if (month2 == 0) {
    year2 = parseInt(year2) - 1;
    month2 = 12;
  }
  let day2 = day;
  let days2 = new Date(year2, month2, 0);
  days2 = days2.getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  if (month2 < 10) {
    month2 = "0" + month2;
  }
  let t2 = year2 + "/" + month2 + "/" + day2;
  return new Date(t2);
}
/**
   * 获取下一个月
   */
function getNextMonth(date) {
  let arr = dateformat(date).split("/");
  let year = arr[0]; //获取当前日期的年份
  let month = arr[1]; //获取当前日期的月份
  let day = arr[2]; //获取当前日期的日
  let days = new Date(year, month, 0);
  days = days.getDate(); //获取当前日期中的月的天数
  let year2 = year;
  let month2 = parseInt(month) + 1;
  if (month2 == 13) {
    year2 = parseInt(year2) + 1;
    month2 = 1;
  }
  let day2 = day;
  let days2 = new Date(year2, month2, 0);
  days2 = days2.getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  if (month2 < 10) {
    month2 = "0" + month2;
  }

  let t2 = year2 + "/" + month2 + "/" + day2;
  return new Date(t2);
}

let dateformat = function (mydate) {
  return mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + mydate.getDate();
};
let getDaysInOneMonth = function (mydate) {
  //通过获取下月面0号的日期可以知道这个月有多少天
  let getyear = mydate.getFullYear();
  let getmonth = mydate.getMonth() + 1;
  getmonth = parseInt(getmonth, 10);
  let d = new Date(getyear, getmonth, 0);
  return d.getDate();
};
let getMonthweek = function (mydate) {
  //获取本月第一天是星期几，然后在去向前空几个
  let getyear = mydate.getFullYear();
  let getmonth = mydate.getMonth() + 1;
  let date_one = new Date(getyear + "/" + getmonth + "/1");
  return date_one.getDay() == 0 ? 6 : date_one.getDay() - 1;
};
let getlist = function (mydate, that) {
  //渲染出来当前list
  let mygetMonth = mydate.getMonth() + 1 < 10 ? "0" + (mydate.getMonth() + 1) : mydate.getMonth() + 1;
  that.date_top = mydate.getFullYear() + "年" + mygetMonth + "月";
  let array = [];
  for (let i = 0; i < getDaysInOneMonth(mydate); i++) {
    if (dateformat(new Date()) == dateformat(new Date(mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1)))) {
      array = array.concat({
        //如果当前这天是今天 is_today是true
        id: i + 1,
        date: mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1),
        is_today: true,
        is_mark: that.mark_array.indexOf(i + 1) >= 0,
        next_day_show: new Date(mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1)).getTime() - new Date().getTime() > 0
      });
      that.$emit("is_today", dateformat(new Date(mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1))));
    } else {
      array = array.concat({
        id: i + 1,
        date: mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1),
        is_today: false,
        is_mark: that.mark_array.indexOf(i + 1) >= 0,
        next_day_show: new Date(mydate.getFullYear() + "/" + (mydate.getMonth() + 1) + "/" + (i + 1)).getTime() - new Date().getTime() > 0
      });
    }
  }
  let array2 = [];
  for (let i = 0; i < getMonthweek(mydate); i++) {
    array2 = array2.concat({ has_date: false });
  }
  array = array2.concat(array);
  that.list = array;
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      list: [],
      date_top: ""
    };
  },
  props: {
    mark_array: { default: "[]" },
    is_hide_otherday: { default: false }
  },
  methods: {
    clickDay: function (item, index) {
      if (item.id) {
        if (!(this.is_hide_otherday && item.next_day_show)) {
          this.$emit("chose_day", item.date);
          for (let i = 0; i < this.list.length; i++) {
            if (i == index) {
              this.list[i].is_today = true;
            } else {
              this.list[i].is_today = false;
            }
          }
        }
      }
    },
    PreMonth: function () {
      mydate = getPreMonth(mydate);
      let that = this;
      this.$emit("change_month", dateformat(mydate));
      getlist(mydate, that);
    },
    NextMonth: function () {
      mydate = getNextMonth(mydate);
      let that = this;
      this.$emit("change_month", dateformat(mydate));
      getlist(mydate, that);
    }
  },
  mounted() {
    let that = this;
    getlist(mydate, that);
  },
  watch: {
    mark_array(val, oldVal) {
      let list = this.list;
      for (let i = 0; i < list.length; i++) {
        list[i].is_mark = false;
        for (let n = 0; n < val.length; n++) {
          if (list[i].id == val[n]) {
            list[i].is_mark = true;
          }
        }
      }
      this.list = list;
    }
  }
});

/***/ }),

/***/ "CuTD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "DICR":
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

/***/ "K7pp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('Calendar',{attrs:{"mark_array":[20,21],"is_hide_otherday":false},on:{"chose_day":_vm.clickday,"is_today":_vm.clicktoday,"change_month":_vm.change_date}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('h1',[_vm._v("标记了20号21号")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("DICR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_0a13457a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("CuTD");
function injectStyle (ssrContext) {
  __webpack_require__("+zxm")
}
var normalizeComponent = __webpack_require__("46Yf")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_0a13457a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("MVSX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_calendar_component__ = __webpack_require__("Gtg6");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;


__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3__vue_calendar_component__["a" /* default */]);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "QSyg":
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {};
  },
  methods: {
    clickday(data) {
      console.log(data); //选中某天
      Toast("选中了" + data);
    },
    clicktoday(data) {
      console.log(data); //跳到了本月
    },
    change_date(data) {
      Toast("切换到的月份为" + data, 2000);
      console.log(data); //左右点击切换月份
    }
  }
});

function Toast(text, time) {
  var time = time || 1500;
  var wh_toast = document.createElement("div");
  wh_toast.style = "position: fixed;z-index: 9999;line-height: 17px;left: 50%;transform: translate(-50%, 0);top: 43%;opacity:0";

  var wh_toast_box = document.createElement("div");
  wh_toast_box.style = "font-size: 14px;padding: 12px 16px;text-align: center;color: #fff;border-radius: 6px;background: #323232;opacity: .9;";
  wh_toast_box.innerHTML = text;

  wh_toast.appendChild(wh_toast_box);
  document.body.appendChild(wh_toast);
  var i = 0;
  var n = 1;

  function fade_in() {
    i += 0.25;
    wh_toast.style.opacity = i;
    if (i == 1) {
      window.clearInterval(timer1);
    }
  }
  var timer1 = window.setInterval(fade_in, 100);

  window.setTimeout(function () {
    function fade_out() {
      n -= 0.25;
      wh_toast.style.opacity = n;
      if (n == 0) {
        window.clearInterval(timer2);
        document.body.removeChild(wh_toast);
      }
    }
    var timer2 = window.setInterval(fade_out, 100);
  }, time - 400);
}

/***/ }),

/***/ "VerK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("MVSX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("zO6J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_demo__ = __webpack_require__("eNIl");




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_demo_vue__ = __webpack_require__("QSyg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_7e078648_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_demo_vue__ = __webpack_require__("K7pp");
function injectStyle (ssrContext) {
  __webpack_require__("VerK")
}
var normalizeComponent = __webpack_require__("46Yf")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_demo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_7e078648_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_demo_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_calendar_vue__ = __webpack_require__("6DbL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_b8c0409e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_calendar_vue__ = __webpack_require__("1SN/");
function injectStyle (ssrContext) {
  __webpack_require__("ygqt")
}
var normalizeComponent = __webpack_require__("46Yf")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_calendar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_b8c0409e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ygqt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.64ede0aab904e6abb57b.js.map