(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productComponent/Product.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productComponent/Product.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductService_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductService.ts */ "./resources/js/components/productComponent/ProductService.ts");
/* harmony import */ var _cartComponent_CartService_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cartComponent/CartService.ts */ "./resources/js/components/cartComponent/CartService.ts");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      product: {},
      notification: {}
    };
  },
  methods: {
    notify: function notify(message, color) {
      this.notification = {
        notify: true,
        message: message,
        color: color
      };
    },
    getProduct: function getProduct() {
      var _this = this;

      _ProductService_ts__WEBPACK_IMPORTED_MODULE_0__["default"].getProduct(this.$route.params.id).then(function (response) {
        console.log("get", response);
        _this.product = response.data;
        _this.product.quantity = 1;
      })["catch"](function (error) {
        console.log("error", error.response.data);
      });
    },
    addToCart: function addToCart() {
      console.log(this.product);
      _cartComponent_CartService_ts__WEBPACK_IMPORTED_MODULE_1__["default"].addToCart(this.product);
      this.notify("Product added to cart", "success");
    }
  },
  created: function created() {
    this.getProduct();
  },
  watch: {
    "$route.params": {
      handler: function handler() {
        this.getProduct();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productComponent/Product.vue?vue&type=template&id=d298f64e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productComponent/Product.vue?vue&type=template&id=d298f64e& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "pt-10" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "7" } },
            [
              _c("v-img", {
                attrs: {
                  "aspect-ratio": 16 / 12,
                  src: "/img/" + _vm.product.large_image
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "5" } },
            [
              _c("v-img", {
                attrs: {
                  "aspect-ratio": 16 / 9,
                  src: "/img/" + _vm.product.image
                }
              }),
              _vm._v(" "),
              _c(
                "v-card-title",
                {
                  staticClass: "px-0 h2 font-weight-medium display-1",
                  attrs: { "primary-title": "" }
                },
                [_vm._v("\n        " + _vm._s(_vm.product.name) + "\n      ")]
              ),
              _vm._v(" "),
              _c("v-card-subtitle", { staticClass: "px-0 h1 title" }, [
                _vm._v(
                  "\n        Price: " +
                    _vm._s(_vm.product.price + " " + _vm.product.currency) +
                    "\n      "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-btn-toggle",
                { attrs: { small: "", mandatory: "" } },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "white--text",
                      attrs: { color: "purple" },
                      on: { click: _vm.addToCart }
                    },
                    [
                      _c(
                        "v-icon",
                        { staticClass: "yellow--text", attrs: { left: "" } },
                        [_vm._v(" shopping_cart ")]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "hidden-sm-and-down" }, [
                        _vm._v("Add to cart")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      flat: "",
                      name: "name",
                      solo: "",
                      label: "Quantity",
                      id: "id"
                    },
                    model: {
                      value: _vm.product.quantity,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "quantity", $$v)
                      },
                      expression: "product.quantity"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { color: _vm.notification.color },
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function(ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        attrs: { text: "" },
                        on: {
                          click: function($event) {
                            _vm.notification.notify = false
                          }
                        }
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_vm._v("\n        Close\n      ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.notification.notify,
            callback: function($$v) {
              _vm.$set(_vm.notification, "notify", $$v)
            },
            expression: "notification.notify"
          }
        },
        [_vm._v("\n    " + _vm._s(_vm.notification.message) + "\n\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/productComponent/Product.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/productComponent/Product.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_d298f64e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=d298f64e& */ "./resources/js/components/productComponent/Product.vue?vue&type=template&id=d298f64e&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/productComponent/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_d298f64e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_d298f64e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/productComponent/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/productComponent/Product.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/productComponent/Product.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productComponent/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/productComponent/Product.vue?vue&type=template&id=d298f64e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/productComponent/Product.vue?vue&type=template&id=d298f64e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_d298f64e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=d298f64e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productComponent/Product.vue?vue&type=template&id=d298f64e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_d298f64e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_d298f64e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);