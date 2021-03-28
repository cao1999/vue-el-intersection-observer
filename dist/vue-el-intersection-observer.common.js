module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {} // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ) // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      })
      /******/
    }
    /******/
  } // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      })
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true })
    /******/
  } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    })
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key]
          }.bind(null, key)
        )
    /******/ return ns
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"]
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, "a", getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "" // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = "fb15"))
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ 8875: /***/ function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__,
        __WEBPACK_AMD_DEFINE_ARRAY__,
        __WEBPACK_AMD_DEFINE_RESULT__ // addapted from the document.currentScript polyfill by Adam Miller
      // MIT license
      // source: https://github.com/amiller-gh/currentScript-polyfill

      // added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

      ;(function (root, factory) {
        if (true) {
          !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
          (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
          (__WEBPACK_AMD_DEFINE_RESULT__ =
            typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
              ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                  exports,
                  __WEBPACK_AMD_DEFINE_ARRAY__
                )
              : __WEBPACK_AMD_DEFINE_FACTORY__),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        } else {
        }
      })(typeof self !== "undefined" ? self : this, function () {
        function getCurrentScript() {
          var descriptor = Object.getOwnPropertyDescriptor(
            document,
            "currentScript"
          )
          // for chrome
          if (
            !descriptor &&
            "currentScript" in document &&
            document.currentScript
          ) {
            return document.currentScript
          }

          // for other browsers with native support for currentScript
          if (
            descriptor &&
            descriptor.get !== getCurrentScript &&
            document.currentScript
          ) {
            return document.currentScript
          }

          // IE 8-10 support script readyState
          // IE 11+ & Firefox support stack trace
          try {
            throw new Error()
          } catch (err) {
            // Find the second match for the "at" string to get file src url from stack.
            var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
              ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/gi,
              stackDetails =
                ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
              scriptLocation = (stackDetails && stackDetails[1]) || false,
              line = (stackDetails && stackDetails[2]) || false,
              currentLocation = document.location.href.replace(
                document.location.hash,
                ""
              ),
              pageSource,
              inlineScriptSourceRegExp,
              inlineScriptSource,
              scripts = document.getElementsByTagName("script") // Live NodeList collection

            if (scriptLocation === currentLocation) {
              pageSource = document.documentElement.outerHTML
              inlineScriptSourceRegExp = new RegExp(
                "(?:[^\\n]+?\\n){0," +
                  (line - 2) +
                  "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                "i"
              )
              inlineScriptSource = pageSource
                .replace(inlineScriptSourceRegExp, "$1")
                .trim()
            }

            for (var i = 0; i < scripts.length; i++) {
              // If ready state is interactive, return the script tag
              if (scripts[i].readyState === "interactive") {
                return scripts[i]
              }

              // If src matches, return the script tag
              if (scripts[i].src === scriptLocation) {
                return scripts[i]
              }

              // If inline source matches, return the script tag
              if (
                scriptLocation === currentLocation &&
                scripts[i].innerHTML &&
                scripts[i].innerHTML.trim() === inlineScriptSource
              ) {
                return scripts[i]
              }
            }

            // If no match, return null
            return null
          }
        }

        return getCurrentScript
      })

      /***/
    },

    /***/ "8bbf": /***/ function (module, exports) {
      module.exports = require("vue")

      /***/
    },

    /***/ fb15: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict"
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__)

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, "InView", function () {
        return /* reexport */ inView
      })

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
      // This file is imported into lib/wc client bundles.

      if (typeof window !== "undefined") {
        var currentScript = window.document.currentScript
        if (true) {
          var getCurrentScript = __webpack_require__("8875")
          currentScript = getCurrentScript()

          // for backward compatibility, because previously we directly included the polyfill
          if (!("currentScript" in document)) {
            Object.defineProperty(document, "currentScript", {
              get: getCurrentScript,
            })
          }
        }

        var src =
          currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
        if (src) {
          __webpack_require__.p = src[1] // eslint-disable-line
        }
      }

      // Indicate to webpack that this file can be concatenated
      /* harmony default export */ var setPublicPath = null

      // CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
      /* global Reflect, Promise */

      var extendStatics = function (d, b) {
        extendStatics =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (d, b) {
              d.__proto__ = b
            }) ||
          function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
          }
        return extendStatics(d, b)
      }

      function __extends(d, b) {
        extendStatics(d, b)
        function __() {
          this.constructor = d
        }
        d.prototype =
          b === null
            ? Object.create(b)
            : ((__.prototype = b.prototype), new __())
      }

      var __assign = function () {
        __assign =
          Object.assign ||
          function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i]
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
            }
            return t
          }
        return __assign.apply(this, arguments)
      }

      function __rest(s, e) {
        var t = {}
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (
            var i = 0, p = Object.getOwnPropertySymbols(s);
            i < p.length;
            i++
          ) {
            if (
              e.indexOf(p[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(s, p[i])
            )
              t[p[i]] = s[p[i]]
          }
        return t
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
          r =
            c < 3
              ? target
              : desc === null
              ? (desc = Object.getOwnPropertyDescriptor(target, key))
              : desc,
          d
        if (
          typeof Reflect === "object" &&
          typeof Reflect.decorate === "function"
        )
          r = Reflect.decorate(decorators, target, key, desc)
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
              r =
                (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
        return c > 3 && r && Object.defineProperty(target, key, r), r
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex)
        }
      }

      function __metadata(metadataKey, metadataValue) {
        if (
          typeof Reflect === "object" &&
          typeof Reflect.metadata === "function"
        )
          return Reflect.metadata(metadataKey, metadataValue)
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value)
              })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }

      function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function () {
              if (t[0] & 1) throw t[1]
              return t[1]
            },
            trys: [],
            ops: [],
          },
          f,
          y,
          t,
          g
        return (
          (g = { next: verb(0), throw: verb(1), return: verb(2) }),
          typeof Symbol === "function" &&
            (g[Symbol.iterator] = function () {
              return this
            }),
          g
        )
        function verb(n) {
          return function (v) {
            return step([n, v])
          }
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.")
          while (_)
            try {
              if (
                ((f = 1),
                y &&
                  (t =
                    op[0] & 2
                      ? y["return"]
                      : op[0]
                      ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                      : y.next) &&
                  !(t = t.call(y, op[1])).done)
              )
                return t
              if (((y = 0), t)) op = [op[0] & 2, t.value]
              switch (op[0]) {
                case 0:
                case 1:
                  t = op
                  break
                case 4:
                  _.label++
                  return { value: op[1], done: false }
                case 5:
                  _.label++
                  y = op[1]
                  op = [0]
                  continue
                case 7:
                  op = _.ops.pop()
                  _.trys.pop()
                  continue
                default:
                  if (
                    !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                    (op[0] === 6 || op[0] === 2)
                  ) {
                    _ = 0
                    continue
                  }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                    _.label = op[1]
                    break
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1]
                    t = op
                    break
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2]
                    _.ops.push(op)
                    break
                  }
                  if (t[2]) _.ops.pop()
                  _.trys.pop()
                  continue
              }
              op = body.call(thisArg, _)
            } catch (e) {
              op = [6, e]
              y = 0
            } finally {
              f = t = 0
            }
          if (op[0] & 5) throw op[1]
          return { value: op[0] ? op[1] : void 0, done: true }
        }
      }

      function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      }

      function __exportStar(m, exports) {
        for (var p in m)
          if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p]
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0
        if (m) return m.call(o)
        if (o && typeof o.length === "number")
          return {
            next: function () {
              if (o && i >= o.length) o = void 0
              return { value: o && o[i++], done: !o }
            },
          }
        throw new TypeError(
          s ? "Object is not iterable." : "Symbol.iterator is not defined."
        )
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator]
        if (!m) return o
        var i = m.call(o),
          r,
          ar = [],
          e
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value)
        } catch (error) {
          e = { error: error }
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i)
          } finally {
            if (e) throw e.error
          }
        }
        return ar
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]))
        return ar
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j]
        return r
      }

      function __await(v) {
        return this instanceof __await ? ((this.v = v), this) : new __await(v)
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.")
        var g = generator.apply(thisArg, _arguments || []),
          i,
          q = []
        return (
          (i = {}),
          verb("next"),
          verb("throw"),
          verb("return"),
          (i[Symbol.asyncIterator] = function () {
            return this
          }),
          i
        )
        function verb(n) {
          if (g[n])
            i[n] = function (v) {
              return new Promise(function (a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v)
              })
            }
        }
        function resume(n, v) {
          try {
            step(g[n](v))
          } catch (e) {
            settle(q[0][3], e)
          }
        }
        function step(r) {
          r.value instanceof __await
            ? Promise.resolve(r.value.v).then(fulfill, reject)
            : settle(q[0][2], r)
        }
        function fulfill(value) {
          resume("next", value)
        }
        function reject(value) {
          resume("throw", value)
        }
        function settle(f, v) {
          if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1])
        }
      }

      function __asyncDelegator(o) {
        var i, p
        return (
          (i = {}),
          verb("next"),
          verb("throw", function (e) {
            throw e
          }),
          verb("return"),
          (i[Symbol.iterator] = function () {
            return this
          }),
          i
        )
        function verb(n, f) {
          i[n] = o[n]
            ? function (v) {
                return (p = !p)
                  ? { value: __await(o[n](v)), done: n === "return" }
                  : f
                  ? f(v)
                  : v
              }
            : f
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.")
        var m = o[Symbol.asyncIterator],
          i
        return m
          ? m.call(o)
          : ((o =
              typeof __values === "function"
                ? __values(o)
                : o[Symbol.iterator]()),
            (i = {}),
            verb("next"),
            verb("throw"),
            verb("return"),
            (i[Symbol.asyncIterator] = function () {
              return this
            }),
            i)
        function verb(n) {
          i[n] =
            o[n] &&
            function (v) {
              return new Promise(function (resolve, reject) {
                ;(v = o[n](v)), settle(resolve, reject, v.done, v.value)
              })
            }
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({ value: v, done: d })
          }, reject)
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw })
        } else {
          cooked.raw = raw
        }
        return cooked
      }

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
        result.default = mod
        return result
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : { default: mod }
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance")
        }
        return privateMap.get(receiver)
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance")
        }
        privateMap.set(receiver, value)
        return value
      }

      // EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
      var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(
        "8bbf"
      )
      var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/ __webpack_require__.n(
        external_commonjs_vue_commonjs2_vue_root_Vue_
      )

      // CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
      /**
       * vue-class-component v7.2.6
       * (c) 2015-present Evan You
       * @license MIT
       */

      function _typeof(obj) {
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function (obj) {
            return typeof obj
          }
        } else {
          _typeof = function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj
          }
        }

        return _typeof(obj)
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          })
        } else {
          obj[key] = value
        }

        return obj
      }

      function _toConsumableArray(arr) {
        return (
          _arrayWithoutHoles(arr) ||
          _iterableToArray(arr) ||
          _nonIterableSpread()
        )
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)
            arr2[i] = arr[i]

          return arr2
        }
      }

      function _iterableToArray(iter) {
        if (
          Symbol.iterator in Object(iter) ||
          Object.prototype.toString.call(iter) === "[object Arguments]"
        )
          return Array.from(iter)
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      // The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
      // which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
      // Without this check consumers will encounter hard to track down runtime errors.
      function reflectionIsSupported() {
        return (
          typeof Reflect !== "undefined" &&
          Reflect.defineMetadata &&
          Reflect.getOwnMetadataKeys
        )
      }
      function copyReflectionMetadata(to, from) {
        forwardMetadata(to, from)
        Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
          forwardMetadata(to.prototype, from.prototype, key)
        })
        Object.getOwnPropertyNames(from).forEach(function (key) {
          forwardMetadata(to, from, key)
        })
      }

      function forwardMetadata(to, from, propertyKey) {
        var metaKeys = propertyKey
          ? Reflect.getOwnMetadataKeys(from, propertyKey)
          : Reflect.getOwnMetadataKeys(from)
        metaKeys.forEach(function (metaKey) {
          var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from)

          if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey)
          } else {
            Reflect.defineMetadata(metaKey, metadata, to)
          }
        })
      }

      var fakeArray = {
        __proto__: [],
      }
      var hasProto = fakeArray instanceof Array
      function createDecorator(factory) {
        return function (target, key, index) {
          var Ctor = typeof target === "function" ? target : target.constructor

          if (!Ctor.__decorators__) {
            Ctor.__decorators__ = []
          }

          if (typeof index !== "number") {
            index = undefined
          }

          Ctor.__decorators__.push(function (options) {
            return factory(options, key, index)
          })
        }
      }
      function mixins() {
        for (
          var _len = arguments.length, Ctors = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          Ctors[_key] = arguments[_key]
        }

        return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
          mixins: Ctors,
        })
      }
      function isPrimitive(value) {
        var type = _typeof(value)

        return value == null || (type !== "object" && type !== "function")
      }
      function warn(message) {
        if (typeof console !== "undefined") {
          console.warn("[vue-class-component] " + message)
        }
      }

      function collectDataFromConstructor(vm, Component) {
        // override _init to prevent to init as Vue instance
        var originalInit = Component.prototype._init

        Component.prototype._init = function () {
          var _this = this

          // proxy to actual vm
          var keys = Object.getOwnPropertyNames(vm) // 2.2.0 compat (props are no longer exposed as self properties)

          if (vm.$options.props) {
            for (var key in vm.$options.props) {
              if (!vm.hasOwnProperty(key)) {
                keys.push(key)
              }
            }
          }

          keys.forEach(function (key) {
            Object.defineProperty(_this, key, {
              get: function get() {
                return vm[key]
              },
              set: function set(value) {
                vm[key] = value
              },
              configurable: true,
            })
          })
        } // should be acquired class property values

        var data = new Component() // restore original _init to avoid memory leak (#209)

        Component.prototype._init = originalInit // create plain data object

        var plainData = {}
        Object.keys(data).forEach(function (key) {
          if (data[key] !== undefined) {
            plainData[key] = data[key]
          }
        })

        if (false) {
        }

        return plainData
      }

      var $internalHooks = [
        "data",
        "beforeCreate",
        "created",
        "beforeMount",
        "mounted",
        "beforeDestroy",
        "destroyed",
        "beforeUpdate",
        "updated",
        "activated",
        "deactivated",
        "render",
        "errorCaptured",
        "serverPrefetch", // 2.6
      ]
      function componentFactory(Component) {
        var options =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        options.name = options.name || Component._componentTag || Component.name // prototype props.

        var proto = Component.prototype
        Object.getOwnPropertyNames(proto).forEach(function (key) {
          if (key === "constructor") {
            return
          } // hooks

          if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key]
            return
          }

          var descriptor = Object.getOwnPropertyDescriptor(proto, key)

          if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === "function") {
              ;(options.methods || (options.methods = {}))[key] =
                descriptor.value
            } else {
              // typescript decorated data
              ;(options.mixins || (options.mixins = [])).push({
                data: function data() {
                  return _defineProperty({}, key, descriptor.value)
                },
              })
            }
          } else if (descriptor.get || descriptor.set) {
            // computed properties
            ;(options.computed || (options.computed = {}))[key] = {
              get: descriptor.get,
              set: descriptor.set,
            }
          }
        })
        ;(options.mixins || (options.mixins = [])).push({
          data: function data() {
            return collectDataFromConstructor(this, Component)
          },
        }) // decorate options

        var decorators = Component.__decorators__

        if (decorators) {
          decorators.forEach(function (fn) {
            return fn(options)
          })
          delete Component.__decorators__
        } // find super

        var superProto = Object.getPrototypeOf(Component.prototype)
        var Super =
          superProto instanceof
          external_commonjs_vue_commonjs2_vue_root_Vue_default.a
            ? superProto.constructor
            : external_commonjs_vue_commonjs2_vue_root_Vue_default.a
        var Extended = Super.extend(options)
        forwardStaticMembers(Extended, Component, Super)

        if (reflectionIsSupported()) {
          copyReflectionMetadata(Extended, Component)
        }

        return Extended
      }
      var reservedPropertyNames = [
        // Unique id
        "cid", // Super Vue constructor
        "super", // Component options that will be used by the component
        "options",
        "superOptions",
        "extendOptions",
        "sealedOptions", // Private assets
        "component",
        "directive",
        "filter",
      ]
      var shouldIgnore = {
        prototype: true,
        arguments: true,
        callee: true,
        caller: true,
      }

      function forwardStaticMembers(Extended, Original, Super) {
        // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
        Object.getOwnPropertyNames(Original).forEach(function (key) {
          // Skip the properties that should not be overwritten
          if (shouldIgnore[key]) {
            return
          } // Some browsers does not allow reconfigure built-in properties

          var extendedDescriptor = Object.getOwnPropertyDescriptor(
            Extended,
            key
          )

          if (extendedDescriptor && !extendedDescriptor.configurable) {
            return
          }

          var descriptor = Object.getOwnPropertyDescriptor(Original, key) // If the user agent does not support `__proto__` or its family (IE <= 10),
          // the sub class properties may be inherited properties from the super class in TypeScript.
          // We need to exclude such properties to prevent to overwrite
          // the component options object which stored on the extended constructor (See #192).
          // If the value is a referenced value (object or function),
          // we can check equality of them and exclude it if they have the same reference.
          // If it is a primitive value, it will be forwarded for safety.

          if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === "cid") {
              return
            }

            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key)

            if (
              !isPrimitive(descriptor.value) &&
              superDescriptor &&
              superDescriptor.value === descriptor.value
            ) {
              return
            }
          } // Warn if the users manually declare reserved properties

          if (false) {
          }

          Object.defineProperty(Extended, key, descriptor)
        })
      }

      function vue_class_component_esm_Component(options) {
        if (typeof options === "function") {
          return componentFactory(options)
        }

        return function (Component) {
          return componentFactory(Component, options)
        }
      }

      vue_class_component_esm_Component.registerHooks = function registerHooks(
        keys
      ) {
        $internalHooks.push.apply($internalHooks, _toConsumableArray(keys))
      }

      /* harmony default export */ var vue_class_component_esm = vue_class_component_esm_Component

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Emit.js
      var Emit_spreadArrays =
        (undefined && undefined.__spreadArrays) ||
        function () {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j]
          return r
        }
      // Code copied from Vue/src/shared/util.js
      var hyphenateRE = /\B([A-Z])/g
      var hyphenate = function (str) {
        return str.replace(hyphenateRE, "-$1").toLowerCase()
      }
      /**
       * decorator of an event-emitter function
       * @param  event The name of the event
       * @return MethodDecorator
       */
      function Emit(event) {
        return function (_target, propertyKey, descriptor) {
          var key = hyphenate(propertyKey)
          var original = descriptor.value
          descriptor.value = function emitter() {
            var _this = this
            var args = []
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i]
            }
            var emit = function (returnValue) {
              var emitName = event || key
              if (returnValue === undefined) {
                if (args.length === 0) {
                  _this.$emit(emitName)
                } else if (args.length === 1) {
                  _this.$emit(emitName, args[0])
                } else {
                  _this.$emit.apply(_this, Emit_spreadArrays([emitName], args))
                }
              } else {
                args.unshift(returnValue)
                _this.$emit.apply(_this, Emit_spreadArrays([emitName], args))
              }
            }
            var returnValue = original.apply(this, args)
            if (isPromise(returnValue)) {
              returnValue.then(emit)
            } else {
              emit(returnValue)
            }
            return returnValue
          }
        }
      }
      function isPromise(obj) {
        return obj instanceof Promise || (obj && typeof obj.then === "function")
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Inject.js

      /**
       * decorator of an inject
       * @param from key
       * @return PropertyDecorator
       */
      function Inject(options) {
        return createDecorator(function (componentOptions, key) {
          if (typeof componentOptions.inject === "undefined") {
            componentOptions.inject = {}
          }
          if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key
          }
        })
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/helpers/provideInject.js
      function needToProduceProvide(original) {
        return (
          typeof original !== "function" ||
          (!original.managed && !original.managedReactive)
        )
      }
      function produceProvide(original) {
        var provide = function () {
          var _this = this
          var rv =
            typeof original === "function" ? original.call(this) : original
          rv = Object.create(rv || null)
          // set reactive services (propagates previous services if necessary)
          rv[reactiveInjectKey] = Object.create(this[reactiveInjectKey] || {})
          for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i]
          }
          var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i] // Duplicates the behavior of `@Provide`
            Object.defineProperty(
              rv[reactiveInjectKey],
              provide.managedReactive[i],
              {
                enumerable: true,
                configurable: true,
                get: function () {
                  return _this[i]
                },
              }
            )
          }
          var this_1 = this
          for (var i in provide.managedReactive) {
            _loop_1(i)
          }
          return rv
        }
        provide.managed = {}
        provide.managedReactive = {}
        return provide
      }
      /** Used for keying reactive provide/inject properties */
      var reactiveInjectKey = "__reactiveInject__"
      function inheritInjected(componentOptions) {
        // inject parent reactive services (if any)
        if (!Array.isArray(componentOptions.inject)) {
          componentOptions.inject = componentOptions.inject || {}
          componentOptions.inject[reactiveInjectKey] = {
            from: reactiveInjectKey,
            default: {},
          }
        }
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/InjectReactive.js

      /**
       * decorator of a reactive inject
       * @param from key
       * @return PropertyDecorator
       */
      function InjectReactive(options) {
        return createDecorator(function (componentOptions, key) {
          if (typeof componentOptions.inject === "undefined") {
            componentOptions.inject = {}
          }
          if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key
            var defaultVal_1 = (!!options && options.default) || undefined
            if (!componentOptions.computed) componentOptions.computed = {}
            componentOptions.computed[key] = function () {
              var obj = this[reactiveInjectKey]
              return obj ? obj[fromKey_1] : defaultVal_1
            }
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey
          }
        })
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/helpers/metadata.js
      /** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
      var reflectMetadataIsSupported =
        typeof Reflect !== "undefined" &&
        typeof Reflect.getMetadata !== "undefined"
      function applyMetadata(options, target, key) {
        if (reflectMetadataIsSupported) {
          if (
            !Array.isArray(options) &&
            typeof options !== "function" &&
            !options.hasOwnProperty("type") &&
            typeof options.type === "undefined"
          ) {
            var type = Reflect.getMetadata("design:type", target, key)
            if (type !== Object) {
              options.type = type
            }
          }
        }
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Model.js

      /**
       * decorator of model
       * @param  event event name
       * @param options options
       * @return PropertyDecorator
       */
      function Model(event, options) {
        if (options === void 0) {
          options = {}
        }
        return function (target, key) {
          applyMetadata(options, target, key)
          createDecorator(function (componentOptions, k) {
            ;(componentOptions.props || (componentOptions.props = {}))[
              k
            ] = options
            componentOptions.model = { prop: k, event: event || k }
          })(target, key)
        }
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/ModelSync.js

      /**
       * decorator of synced model and prop
       * @param propName the name to interface with from outside, must be different from decorated property
       * @param  event event name
       * @param options options
       * @return PropertyDecorator
       */
      function ModelSync(propName, event, options) {
        if (options === void 0) {
          options = {}
        }
        return function (target, key) {
          applyMetadata(options, target, key)
          createDecorator(function (componentOptions, k) {
            ;(componentOptions.props || (componentOptions.props = {}))[
              propName
            ] = options
            componentOptions.model = { prop: propName, event: event || k }
            ;(componentOptions.computed || (componentOptions.computed = {}))[
              k
            ] = {
              get: function () {
                return this[propName]
              },
              set: function (value) {
                // @ts-ignore
                this.$emit(event, value)
              },
            }
          })(target, key)
        }
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Prop.js

      /**
       * decorator of a prop
       * @param  options the options for the prop
       * @return PropertyDecorator | void
       */
      function Prop(options) {
        if (options === void 0) {
          options = {}
        }
        return function (target, key) {
          applyMetadata(options, target, key)
          createDecorator(function (componentOptions, k) {
            ;(componentOptions.props || (componentOptions.props = {}))[
              k
            ] = options
          })(target, key)
        }
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/PropSync.js

      /**
       * decorator of a synced prop
       * @param propName the name to interface with from outside, must be different from decorated property
       * @param options the options for the synced prop
       * @return PropertyDecorator | void
       */
      function PropSync(propName, options) {
        if (options === void 0) {
          options = {}
        }
        return function (target, key) {
          applyMetadata(options, target, key)
          createDecorator(function (componentOptions, k) {
            ;(componentOptions.props || (componentOptions.props = {}))[
              propName
            ] = options
            ;(componentOptions.computed || (componentOptions.computed = {}))[
              k
            ] = {
              get: function () {
                return this[propName]
              },
              set: function (value) {
                this.$emit("update:" + propName, value)
              },
            }
          })(target, key)
        }
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Provide.js

      /**
       * decorator of a provide
       * @param key key
       * @return PropertyDecorator | void
       */
      function Provide(key) {
        return createDecorator(function (componentOptions, k) {
          var provide = componentOptions.provide
          inheritInjected(componentOptions)
          if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide)
          }
          provide.managed[k] = key || k
        })
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/ProvideReactive.js

      /**
       * decorator of a reactive provide
       * @param key key
       * @return PropertyDecorator | void
       */
      function ProvideReactive(key) {
        return createDecorator(function (componentOptions, k) {
          var provide = componentOptions.provide
          inheritInjected(componentOptions)
          if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide)
          }
          provide.managedReactive[k] = key || k
        })
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Ref.js

      /**
       * decorator of a ref prop
       * @param refKey the ref key defined in template
       */
      function Ref(refKey) {
        return createDecorator(function (options, key) {
          options.computed = options.computed || {}
          options.computed[key] = {
            cache: false,
            get: function () {
              return this.$refs[refKey || key]
            },
          }
        })
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/VModel.js

      /**
       * decorator for capturings v-model binding to component
       * @param options the options for the prop
       */
      function VModel(options) {
        if (options === void 0) {
          options = {}
        }
        var valueKey = "value"
        return createDecorator(function (componentOptions, key) {
          ;(componentOptions.props || (componentOptions.props = {}))[
            valueKey
          ] = options
          ;(componentOptions.computed || (componentOptions.computed = {}))[
            key
          ] = {
            get: function () {
              return this[valueKey]
            },
            set: function (value) {
              this.$emit("input", value)
            },
          }
        })
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Watch.js

      /**
       * decorator of a watch function
       * @param  path the path or the expression to observe
       * @param  WatchOption
       * @return MethodDecorator
       */
      function Watch(path, options) {
        if (options === void 0) {
          options = {}
        }
        var _a = options.deep,
          deep = _a === void 0 ? false : _a,
          _b = options.immediate,
          immediate = _b === void 0 ? false : _b
        return createDecorator(function (componentOptions, handler) {
          if (typeof componentOptions.watch !== "object") {
            componentOptions.watch = Object.create(null)
          }
          var watch = componentOptions.watch
          if (typeof watch[path] === "object" && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]]
          } else if (typeof watch[path] === "undefined") {
            watch[path] = []
          }
          watch[path].push({
            handler: handler,
            deep: deep,
            immediate: immediate,
          })
        })
      }

      // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/index.js
      /** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
      /// <reference types='reflect-metadata'/>

      // CONCATENATED MODULE: ./src/core/observe.ts
      // 创建一个map用来存储每一个observer和相关信息
      var ObserverMap = new Map()
      // id map，节点当做key，value是节点的id
      var NodeIdMap = new Map()
      var nodeId = 1
      /**
       * 创建IntersectionObserver实例
       * @param callback 当元素的插入状态发生变化执行，不管是隐藏还是显示，参数inView表示元素当前是否显示在视口
       * @param options
       */
      function createObserver(callback, options) {
        return new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            var intersectionRatio = entry.intersectionRatio,
              isIntersecting = entry.isIntersecting
            var _a = options.threshold,
              threshold = _a === void 0 ? 0 : _a
            var inView
            if (intersectionRatio >= threshold && isIntersecting) {
              inView = true
            } else {
              inView = false
            }
            callback(inView)
          })
        }, options)
      }
      /**
       * 监听节点的插入事件
       * @param options
       */
      function observe(options) {
        var $target = options.$target,
          threshold = options.threshold,
          root = options.root,
          rootMargin = options.rootMargin,
          onChange = options.onChange
        // 判断当前节点是否已经被监听了
        if (isObserved($target)) {
          return
        }
        // 获取节点的id
        var id = getNodeId($target)
        // 创建实例
        var observer = createObserver(onChange, {
          root: root,
          rootMargin: rootMargin,
          threshold: threshold,
        })
        var observerInfo = {
          id: id,
          observer: observer,
          $target: $target,
        }
        // 存储节点相关信息到map中
        ObserverMap.set(id, observerInfo)
        // 开始监听
        observer.observe($target)
      }
      /**
       * 移除监听
       * @param $target 要移除监听的元素
       */
      function unObserve($target) {
        var id = NodeIdMap.get($target)
        if (!id) {
          return
        }
        var observer = ObserverMap.get(id).observer
        observer.unobserve($target)
      }
      /**
       * 判断目标元素是否已经被observe了
       * @param $target
       */
      function isObserved($target) {
        return NodeIdMap.has($target)
      }
      /**
       * 获取节点的id
       * @param $el
       */
      function getNodeId($el) {
        var id = nodeId
        // 存到map中
        NodeIdMap.set($el, id)
        nodeId++
        return id
      }

      // CONCATENATED MODULE: ./src/core/validator.ts
      /**
       * props 校验函数
       */
      function delayValidator(value) {
        return value >= 0
      }
      function thresholdValidator(value) {
        return value >= 0 && value <= 1
      }

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--13-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/core/inView.vue?vue&type=script&lang=ts&

      var inViewvue_type_script_lang_ts_InView = /** @class */ (function (
        _super
      ) {
        __extends(InView, _super)
        function InView() {
          return (_super !== null && _super.apply(this, arguments)) || this
        }
        InView.prototype.mounted = function () {
          this.startObserve()
        }
        // 开始监听intersection事件
        InView.prototype.startObserve = function () {
          var _this = this
          observe({
            $target: this.$el,
            onChange: function (inView) {
              // 执行回调
              setTimeout(function () {
                _this.onChange(inView)
              }, _this.delay)
              // 当元素出现过一次并且triggerOnce为true时，取消监听
              if (_this.triggerOnce && inView) {
                _this.unmountObserve()
              }
            },
            threshold: this.threshold,
            root: this.root,
            rootMargin: this.rootMargin,
          })
        }
        // TODO:  组件unmount的时候吧所有intersection监听删掉
        // 卸载intersection事件的监听
        InView.prototype.unmountObserve = function () {
          unObserve(this.$el)
        }
        InView.prototype.render = function (createElement) {
          return createElement(
            this.tagName,
            {
              on: {
                click: this.onClick,
              },
            },
            this.$slots.default
          )
        }
        __decorate(
          [Prop({ type: String, default: "div" })],
          InView.prototype,
          "tagName",
          void 0
        )
        __decorate(
          [Prop({ type: Boolean, default: false })],
          InView.prototype,
          "triggerOnce",
          void 0
        )
        __decorate(
          [Prop({ type: Number, default: 0, validator: thresholdValidator })],
          InView.prototype,
          "threshold",
          void 0
        )
        __decorate(
          [Prop({ type: Element, default: null })],
          InView.prototype,
          "root",
          void 0
        )
        __decorate(
          [Prop({ type: String, default: "0px" })],
          InView.prototype,
          "rootMargin",
          void 0
        )
        __decorate(
          [Prop({ type: Number, default: 0, validator: delayValidator })],
          InView.prototype,
          "delay",
          void 0
        )
        __decorate(
          [Prop({ type: Function, default: function () {} })],
          InView.prototype,
          "onChange",
          void 0
        )
        __decorate(
          [Prop({ type: Function, default: function () {} })],
          InView.prototype,
          "onClick",
          void 0
        )
        InView = __decorate([vue_class_component_esm], InView)
        return InView
      })(external_commonjs_vue_commonjs2_vue_root_Vue_default.a)
      /* harmony default export */ var inViewvue_type_script_lang_ts_ = inViewvue_type_script_lang_ts_InView

      // CONCATENATED MODULE: ./src/core/inView.vue?vue&type=script&lang=ts&
      /* harmony default export */ var core_inViewvue_type_script_lang_ts_ = inViewvue_type_script_lang_ts_
      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent(
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier /* server only */,
        shadowMode /* vue-cli only */
      ) {
        // Vue.extend constructor export interop
        var options =
          typeof scriptExports === "function"
            ? scriptExports.options
            : scriptExports

        // render functions
        if (render) {
          options.render = render
          options.staticRenderFns = staticRenderFns
          options._compiled = true
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true
        }

        // scopedId
        if (scopeId) {
          options._scopeId = "data-v-" + scopeId
        }

        var hook
        if (moduleIdentifier) {
          // server build
          hook = function (context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent &&
                this.parent.$vnode &&
                this.parent.$vnode.ssrContext) // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
              context = __VUE_SSR_CONTEXT__
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context)
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier)
            }
          }
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook
        } else if (injectStyles) {
          hook = shadowMode
            ? function () {
                injectStyles.call(
                  this,
                  (options.functional ? this.parent : this).$root.$options
                    .shadowRoot
                )
              }
            : injectStyles
        }

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook
            // register for functional component in vue file
            var originalRender = options.render
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context)
              return originalRender(h, context)
            }
          } else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
          }
        }

        return {
          exports: scriptExports,
          options: options,
        }
      }

      // CONCATENATED MODULE: ./src/core/inView.vue
      var render, staticRenderFns

      /* normalize component */

      var component = normalizeComponent(
        core_inViewvue_type_script_lang_ts_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        null
      )

      /* harmony default export */ var inView = component.exports
      // CONCATENATED MODULE: ./src/main.ts

      /* harmony default export */ var main = inView

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

      /* harmony default export */ var entry_lib = (__webpack_exports__[
        "default"
      ] = main)

      /***/
    },

    /******/
  }
)
//# sourceMappingURL=vue-el-intersection-observer.common.js.map
