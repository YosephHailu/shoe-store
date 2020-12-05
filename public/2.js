(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productComponent/AddProduct.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productComponent/AddProduct.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    registerProduct: function registerProduct() {
      var _this = this;

      _ProductService_ts__WEBPACK_IMPORTED_MODULE_0__["default"].registerProduct(this.product).then(function (response) {
        _this.clearForm();

        _this.notify("Product added", "success");
      })["catch"](function (error) {});
    },
    clearForm: function clearForm() {
      this.product = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productComponent/AddProduct.vue?vue&type=template&id=2ab68294&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/productComponent/AddProduct.vue?vue&type=template&id=2ab68294& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "v-flex",
    {
      staticClass: "center-content py-5",
      attrs: { xs12: "", md8: "", lg8: "" }
    },
    [
      _c(
        "v-card",
        { staticClass: "text-center pb-5", attrs: { "grid-list-xs": "" } },
        [
          _c(
            "v-card-title",
            { staticClass: "text-center py-3 title purple darken-2" },
            [
              _c(
                "v-list-item-title",
                { staticClass: "white--text py-0 my-0" },
                [_vm._v("\n        Product registration form")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pb-0 mb-0" },
            [
              _c("v-text-field", {
                attrs: {
                  rules: [
                    function(v) {
                      return !!v || "Name is required"
                    }
                  ],
                  label: "Product name",
                  required: ""
                },
                model: {
                  value: _vm.product.name,
                  callback: function($$v) {
                    _vm.$set(_vm.product, "name", $$v)
                  },
                  expression: "product.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "px-3" },
            [
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: {
                      type: "number",
                      rules: [
                        function(v) {
                          return !!v || "product price is required"
                        }
                      ],
                      label: "Product price",
                      required: ""
                    },
                    model: {
                      value: _vm.product.price,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "price", $$v)
                      },
                      expression: "product.price"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: {
                      rules: [
                        function(v) {
                          return !!v || "Currency is required"
                        }
                      ],
                      label: "Product currency",
                      required: ""
                    },
                    model: {
                      value: _vm.product.currency,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "currency", $$v)
                      },
                      expression: "product.currency"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pb-0 mb-0" },
            [
              _c("v-file-input", {
                attrs: {
                  rules: [
                    function(value) {
                      return (
                        !value ||
                        value.size < 2000000 ||
                        "Image size should be less than 2 MB!"
                      )
                    }
                  ],
                  accept: "image/*",
                  label: "Image"
                },
                model: {
                  value: _vm.product.image,
                  callback: function($$v) {
                    _vm.$set(_vm.product, "image", $$v)
                  },
                  expression: "product.image"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "purple", outlined: "", light: "" },
              on: { click: _vm.registerProduct }
            },
            [
              _c("v-icon", { attrs: { left: "" } }, [_vm._v("add")]),
              _vm._v("\n      Save")
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
                        [_vm._v("\n          Close\n        ")]
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
            [
              _vm._v(
                "\n      " + _vm._s(_vm.notification.message) + "\n\n      "
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/productComponent/AddProduct.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/productComponent/AddProduct.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProduct_vue_vue_type_template_id_2ab68294___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=template&id=2ab68294& */ "./resources/js/components/productComponent/AddProduct.vue?vue&type=template&id=2ab68294&");
/* harmony import */ var _AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/productComponent/AddProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddProduct_vue_vue_type_template_id_2ab68294___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddProduct_vue_vue_type_template_id_2ab68294___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/productComponent/AddProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/productComponent/AddProduct.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/productComponent/AddProduct.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productComponent/AddProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/productComponent/AddProduct.vue?vue&type=template&id=2ab68294&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/productComponent/AddProduct.vue?vue&type=template&id=2ab68294& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_2ab68294___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProduct.vue?vue&type=template&id=2ab68294& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/productComponent/AddProduct.vue?vue&type=template&id=2ab68294&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_2ab68294___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_2ab68294___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);