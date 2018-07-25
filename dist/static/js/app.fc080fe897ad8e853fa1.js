webpackJsonp([1],{

/***/ "++M6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar__ = __webpack_require__("L+XO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      myDate: [],
      list: [],
      historyChose: [],
      dateTop: ''
    };
  },
  props: {
    markDate: {
      type: Array,
      default: () => []
    },
    markDateMore: {
      type: Array,
      default: () => []
    },
    sundayStart: {
      type: Boolean,
      default: () => false
    },
    agoDayHide: { type: String, default: `0` },
    futureDayHide: { type: String, default: `2554387200` }
  },
  created() {
    this.intStart();
    this.myDate = new Date();
  },
  methods: {
    intStart() {
      if (this.sundayStart) {
        this.textTop = ['日', '一', '二', '三', '四', '五', '六'];
      } else {
        this.textTop = ['一', '二', '三', '四', '五', '六', '日'];
      }
      __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].sundayStart = this.sundayStart;
    },
    setClass(data) {
      let obj = {};
      obj[data.markClassName] = data.markClassName;
      return obj;
    },
    clickDay: function (item, index) {
      if (item.otherMonth === 'nowMonth' && !item.dayHide) {
        this.getList(this.myDate, item.date);
      }
      if (item.otherMonth !== 'nowMonth') {
        item.otherMonth === 'preMonth' ? this.PreMonth(item.date) : this.NextMonth(item.date);
      }
    },
    ChoseMonth: function (date, isChosedDay = true) {
      date = __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].dateFormat(date);
      this.myDate = new Date(date);
      this.$emit('changeMonth', __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    PreMonth: function (date, isChosedDay = true) {
      date = __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].dateFormat(date);
      this.myDate = __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].getOtherMonth(this.myDate, 'preMonth');
      this.$emit('changeMonth', __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    NextMonth: function (date, isChosedDay = true) {
      date = __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].dateFormat(date);
      this.myDate = __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].getOtherMonth(this.myDate, 'nextMonth');
      this.$emit('changeMonth', __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    forMatArgs: function () {
      let markDate = this.markDate;
      let markDateMore = this.markDateMore;
      markDate = markDate.map(k => {
        return __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].dateFormat(k);
      });
      markDateMore = markDateMore.map(k => {
        k.date = __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].dateFormat(k.date);
        return k;
      });
      return [markDate, markDateMore];
    },
    getList: function (date, chooseDay, isChosedDay = true) {
      const [markDate, markDateMore] = this.forMatArgs();
      this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`;
      let arr = __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].getMonthList(this.myDate);
      for (let i = 0; i < arr.length; i++) {
        let markClassName = '';
        let k = arr[i];
        k.chooseDay = false;
        const nowTime = k.date;
        const t = new Date(nowTime).getTime() / 1000;
        //看每一天的class
        for (const c of markDateMore) {
          if (c.date === nowTime) {
            markClassName = c.className || '';
          }
        }
        //标记选中某些天 设置class
        k.markClassName = markClassName;
        k.isMark = markDate.indexOf(nowTime) > -1;
        //无法选中某天
        k.dayHide = t < this.agoDayHide || t > this.futureDayHide;
        if (k.isToday) {
          this.$emit('isToday', nowTime);
        }
        let flag = !k.dayHide && k.otherMonth === 'nowMonth';
        if (chooseDay && chooseDay === nowTime && flag) {
          this.$emit('choseDay', nowTime);
          this.historyChose.push(nowTime);
          k.chooseDay = true;
        } else if (this.historyChose[this.historyChose.length - 1] === nowTime && !chooseDay && flag) {
          k.chooseDay = true;
        }
      }
      this.list = arr;
    }
  },
  mounted() {
    this.getList(this.myDate);
  },
  watch: {
    markDate(val, oldVal) {
      this.getList(this.myDate);
    },
    markDateMore(val, oldVal) {
      this.getList(this.myDate);
    },
    agoDayHide(val, oldVal) {
      this.agoDayHide = parseInt(val);
      this.getList(this.myDate);
    },
    futureDayHide(val, oldVal) {
      this.futureDayHide = parseInt(val);
      this.getList(this.myDate);
    },
    sundayStart(val, oldVal) {
      this.intStart();
      this.getList(this.myDate);
    }
  }
});

/***/ }),

/***/ "2lNz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_calendar_component__ = __webpack_require__("x4uC");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Calendar from '../vue-calendar-component/index';

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      // arr2: ['2018/6/23'],
      arr2: [],
      arr: [{
        date: '2018/6/1',
        className: 'mark1'
      }, {
        date: '2018/6/13',
        className: 'mark2'
      }]
    };
  },
  components: {
    Calendar: __WEBPACK_IMPORTED_MODULE_0_vue_calendar_component__["a" /* default */]
  },
  methods: {
    clickDay(data) {
      console.log('选中了', data); //选中某天
      this.$toast('选中了' + data);
    },
    clickToday(data) {
      console.log('跳到了本月今天', data); //跳到了本月
    },
    changeDate(data) {
      this.$toast('切换到的月份为' + data);
      console.log('左右点击切换月份', data); //左右点击切换月份
    },
    demo() {
      this.$refs.Calendar.ChoseMonth('2018-12-13'); //跳到12月12日选中12月12日
    }
  },
  created() {
    function format(date, index) {
      date = new Date(date);
      return `${date.getFullYear()}/${date.getMonth() + 1}/${index}`;
    }
    this.arr = [{
      date: format(new Date(), 1),
      className: 'mark1'
    }, {
      date: format(new Date(), 13),
      className: 'mark2'
    }];
  }
});

/***/ }),

/***/ "3XWV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_calendar_vue__ = __webpack_require__("++M6");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_20b77c60_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_calendar_vue__ = __webpack_require__("abpX");
function injectStyle (ssrContext) {
  __webpack_require__("VQ9v")
}
var normalizeComponent = __webpack_require__("VU/8")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_calendar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_20b77c60_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "40c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_800fa6de_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("40c4");
function injectStyle (ssrContext) {
  __webpack_require__("Q+oy")
}
var normalizeComponent = __webpack_require__("VU/8")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_800fa6de_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_toast_component__ = __webpack_require__("lmBj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_toast_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_toast_component__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_toast_component___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "Q+oy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QIG2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('Calendar',{ref:"Calendar",attrs:{"sundayStart":true,"markDateMore":_vm.arr,"markDate":_vm.arr2,"agoDayHide":"1530115200"},on:{"isToday":_vm.clickToday,"choseDay":_vm.clickDay,"changeMonth":_vm.changeDate}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('h3',{on:{"click":_vm.demo}},[_vm._v("markDateMore标记不同风格：：1号2号一种风格====13号另一种风格")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h3',[_vm._v("markDate 标记23号 单一风格 更简单")]),_vm._v(" "),_c('div',{staticClass:"div",on:{"click":_vm.demo}},[_vm._v("\n    点击跳到2018-12-12\n  ")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "VQ9v":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
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

/***/ "abpX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"wh_container"},[_c('div',{staticClass:"wh_content_all"},[_c('div',{staticClass:"wh_top_changge"},[_c('li',{on:{"click":function($event){_vm.PreMonth(_vm.myDate,false)}}},[_c('div',{staticClass:"wh_jiantou1"})]),_vm._v(" "),_c('li',{staticClass:"wh_content_li"},[_vm._v(_vm._s(_vm.dateTop))]),_vm._v(" "),_c('li',{on:{"click":function($event){_vm.NextMonth(_vm.myDate,false)}}},[_c('div',{staticClass:"wh_jiantou2"})])]),_vm._v(" "),_c('div',{staticClass:"wh_content"},_vm._l((_vm.textTop),function(tag){return _c('div',{staticClass:"wh_content_item"},[_c('div',{staticClass:"wh_top_tag"},[_vm._v("\n          "+_vm._s(tag)+"\n        ")])])})),_vm._v(" "),_c('div',{staticClass:"wh_content"},_vm._l((_vm.list),function(item,index){return _c('div',{staticClass:"wh_content_item",on:{"click":function($event){_vm.clickDay(item,index)}}},[_c('div',{staticClass:"wh_item_date",class:[{ wh_isMark: item.isMark},{wh_other_dayhide:item.otherMonth!=='nowMonth'},{wh_want_dayhide:item.dayHide},{wh_isToday:item.isToday},{wh_chose_day:item.chooseDay},_vm.setClass(item)]},[_vm._v("\n          "+_vm._s(item.id)+"\n        ")])])}))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "e3Km":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eNIl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_demo_vue__ = __webpack_require__("2lNz");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_218b265c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_demo_vue__ = __webpack_require__("QIG2");
function injectStyle (ssrContext) {
  __webpack_require__("e3Km")
}
var normalizeComponent = __webpack_require__("VU/8")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_demo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_218b265c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_demo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "xJD8":
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

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.fc080fe897ad8e853fa1.js.map