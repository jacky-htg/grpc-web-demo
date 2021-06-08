(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module2, desc) => {
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
      for (let key of __getOwnPropNames(module2))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module2) => {
    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
  };

  // node_modules/google-protobuf/google-protobuf.js
  var require_google_protobuf = __commonJS({
    "node_modules/google-protobuf/google-protobuf.js"(exports, module) {
      var $jscomp = $jscomp || {};
      $jscomp.scope = {};
      $jscomp.findInternal = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
          var f = a[e];
          if (b.call(c, f, e, a))
            return { i: e, v: f };
        }
        return { i: -1, v: void 0 };
      };
      $jscomp.ASSUME_ES5 = false;
      $jscomp.ASSUME_NO_NATIVE_MAP = false;
      $jscomp.ASSUME_NO_NATIVE_SET = false;
      $jscomp.SIMPLE_FROUND_POLYFILL = false;
      $jscomp.defineProperty = $jscomp.ASSUME_ES5 || typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value);
      };
      $jscomp.getGlobal = function(a) {
        return typeof window != "undefined" && window === a ? a : typeof global != "undefined" && global != null ? global : a;
      };
      $jscomp.global = $jscomp.getGlobal(exports);
      $jscomp.polyfill = function(a, b, c, d) {
        if (b) {
          c = $jscomp.global;
          a = a.split(".");
          for (d = 0; d < a.length - 1; d++) {
            var e = a[d];
            e in c || (c[e] = {});
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d && b != null && $jscomp.defineProperty(c, a, { configurable: true, writable: true, value: b });
        }
      };
      $jscomp.polyfill("Array.prototype.findIndex", function(a) {
        return a ? a : function(a2, c) {
          return $jscomp.findInternal(this, a2, c).i;
        };
      }, "es6", "es3");
      $jscomp.checkStringArgs = function(a, b, c) {
        if (a == null)
          throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
          throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + "";
      };
      $jscomp.polyfill("String.prototype.endsWith", function(a) {
        return a ? a : function(a2, c) {
          var b = $jscomp.checkStringArgs(this, a2, "endsWith");
          a2 += "";
          c === void 0 && (c = b.length);
          c = Math.max(0, Math.min(c | 0, b.length));
          for (var e = a2.length; 0 < e && 0 < c; )
            if (b[--c] != a2[--e])
              return false;
          return 0 >= e;
        };
      }, "es6", "es3");
      $jscomp.polyfill("Array.prototype.find", function(a) {
        return a ? a : function(a2, c) {
          return $jscomp.findInternal(this, a2, c).v;
        };
      }, "es6", "es3");
      $jscomp.polyfill("String.prototype.startsWith", function(a) {
        return a ? a : function(a2, c) {
          var b = $jscomp.checkStringArgs(this, a2, "startsWith");
          a2 += "";
          var e = b.length, f = a2.length;
          c = Math.max(0, Math.min(c | 0, b.length));
          for (var g = 0; g < f && c < e; )
            if (b[c++] != a2[g++])
              return false;
          return g >= f;
        };
      }, "es6", "es3");
      $jscomp.polyfill("String.prototype.repeat", function(a) {
        return a ? a : function(a2) {
          var b = $jscomp.checkStringArgs(this, null, "repeat");
          if (0 > a2 || 1342177279 < a2)
            throw new RangeError("Invalid count value");
          a2 |= 0;
          for (var d = ""; a2; )
            if (a2 & 1 && (d += b), a2 >>>= 1)
              b += b;
          return d;
        };
      }, "es6", "es3");
      var COMPILED = true;
      var goog = goog || {};
      goog.global = exports || self;
      goog.isDef = function(a) {
        return a !== void 0;
      };
      goog.isString = function(a) {
        return typeof a == "string";
      };
      goog.isBoolean = function(a) {
        return typeof a == "boolean";
      };
      goog.isNumber = function(a) {
        return typeof a == "number";
      };
      goog.exportPath_ = function(a, b, c) {
        a = a.split(".");
        c = c || goog.global;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
          !a.length && goog.isDef(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {};
      };
      goog.define = function(a, b) {
        if (!COMPILED) {
          var c = goog.global.CLOSURE_UNCOMPILED_DEFINES, d = goog.global.CLOSURE_DEFINES;
          c && c.nodeType === void 0 && Object.prototype.hasOwnProperty.call(c, a) ? b = c[a] : d && d.nodeType === void 0 && Object.prototype.hasOwnProperty.call(d, a) && (b = d[a]);
        }
        return b;
      };
      goog.FEATURESET_YEAR = 2012;
      goog.DEBUG = true;
      goog.LOCALE = "en";
      goog.TRUSTED_SITE = true;
      goog.STRICT_MODE_COMPATIBLE = false;
      goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
      goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = false;
      goog.provide = function(a) {
        if (goog.isInModuleLoader_())
          throw Error("goog.provide cannot be used within a module.");
        if (!COMPILED && goog.isProvided_(a))
          throw Error('Namespace "' + a + '" already declared.');
        goog.constructNamespace_(a);
      };
      goog.constructNamespace_ = function(a, b) {
        if (!COMPILED) {
          delete goog.implicitNamespaces_[a];
          for (var c = a; (c = c.substring(0, c.lastIndexOf("."))) && !goog.getObjectByName(c); )
            goog.implicitNamespaces_[c] = true;
        }
        goog.exportPath_(a, b);
      };
      goog.getScriptNonce = function(a) {
        if (a && a != goog.global)
          return goog.getScriptNonce_(a.document);
        goog.cspNonce_ === null && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
        return goog.cspNonce_;
      };
      goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
      goog.cspNonce_ = null;
      goog.getScriptNonce_ = function(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a) ? a : "";
      };
      goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
      goog.module = function(a) {
        if (!goog.isString(a) || !a || a.search(goog.VALID_MODULE_RE_) == -1)
          throw Error("Invalid module identifier");
        if (!goog.isInGoogModuleLoader_())
          throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
        if (goog.moduleLoaderState_.moduleName)
          throw Error("goog.module may only be called once per module.");
        goog.moduleLoaderState_.moduleName = a;
        if (!COMPILED) {
          if (goog.isProvided_(a))
            throw Error('Namespace "' + a + '" already declared.');
          delete goog.implicitNamespaces_[a];
        }
      };
      goog.module.get = function(a) {
        return goog.module.getInternal_(a);
      };
      goog.module.getInternal_ = function(a) {
        if (!COMPILED) {
          if (a in goog.loadedModules_)
            return goog.loadedModules_[a].exports;
          if (!goog.implicitNamespaces_[a])
            return a = goog.getObjectByName(a), a != null ? a : null;
        }
        return null;
      };
      goog.ModuleType = { ES6: "es6", GOOG: "goog" };
      goog.moduleLoaderState_ = null;
      goog.isInModuleLoader_ = function() {
        return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
      };
      goog.isInGoogModuleLoader_ = function() {
        return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
      };
      goog.isInEs6ModuleLoader_ = function() {
        if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6)
          return true;
        var a = goog.global.$jscomp;
        return a ? typeof a.getCurrentModulePath != "function" ? false : !!a.getCurrentModulePath() : false;
      };
      goog.module.declareLegacyNamespace = function() {
        if (!COMPILED && !goog.isInGoogModuleLoader_())
          throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
        if (!COMPILED && !goog.moduleLoaderState_.moduleName)
          throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
        goog.moduleLoaderState_.declareLegacyNamespace = true;
      };
      goog.declareModuleId = function(a) {
        if (!COMPILED) {
          if (!goog.isInEs6ModuleLoader_())
            throw Error("goog.declareModuleId may only be called from within an ES6 module");
          if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
            throw Error("goog.declareModuleId may only be called once per module.");
          if (a in goog.loadedModules_)
            throw Error('Module with namespace "' + a + '" already exists.');
        }
        if (goog.moduleLoaderState_)
          goog.moduleLoaderState_.moduleName = a;
        else {
          var b = goog.global.$jscomp;
          if (!b || typeof b.getCurrentModulePath != "function")
            throw Error('Module with namespace "' + a + '" has been loaded incorrectly.');
          b = b.require(b.getCurrentModulePath());
          goog.loadedModules_[a] = { exports: b, type: goog.ModuleType.ES6, moduleId: a };
        }
      };
      goog.setTestOnly = function(a) {
        if (goog.DISALLOW_TEST_ONLY_CODE)
          throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
      };
      goog.forwardDeclare = function(a) {
      };
      COMPILED || (goog.isProvided_ = function(a) {
        return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));
      }, goog.implicitNamespaces_ = { "goog.module": true });
      goog.getObjectByName = function(a, b) {
        a = a.split(".");
        b = b || goog.global;
        for (var c = 0; c < a.length; c++)
          if (b = b[a[c]], !goog.isDefAndNotNull(b))
            return null;
        return b;
      };
      goog.globalize = function(a, b) {
        b = b || goog.global;
        for (var c in a)
          b[c] = a[c];
      };
      goog.addDependency = function(a, b, c, d) {
        !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a, b, c, d);
      };
      goog.ENABLE_DEBUG_LOADER = true;
      goog.logToConsole_ = function(a) {
        goog.global.console && goog.global.console.error(a);
      };
      goog.require = function(a) {
        if (!COMPILED) {
          goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a);
          if (goog.isProvided_(a)) {
            if (goog.isInModuleLoader_())
              return goog.module.getInternal_(a);
          } else if (goog.ENABLE_DEBUG_LOADER) {
            var b = goog.moduleLoaderState_;
            goog.moduleLoaderState_ = null;
            try {
              goog.debugLoader_.load_(a);
            } finally {
              goog.moduleLoaderState_ = b;
            }
          }
          return null;
        }
      };
      goog.requireType = function(a) {
        return {};
      };
      goog.basePath = "";
      goog.nullFunction = function() {
      };
      goog.abstractMethod = function() {
        throw Error("unimplemented abstract method");
      };
      goog.addSingletonGetter = function(a) {
        a.instance_ = void 0;
        a.getInstance = function() {
          if (a.instance_)
            return a.instance_;
          goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
          return a.instance_ = new a();
        };
      };
      goog.instantiatedSingletons_ = [];
      goog.LOAD_MODULE_USING_EVAL = true;
      goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
      goog.loadedModules_ = {};
      goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
      goog.TRANSPILE = "detect";
      goog.ASSUME_ES_MODULES_TRANSPILED = false;
      goog.TRANSPILE_TO_LANGUAGE = "";
      goog.TRANSPILER = "transpile.js";
      goog.hasBadLetScoping = null;
      goog.useSafari10Workaround = function() {
        if (goog.hasBadLetScoping == null) {
          try {
            var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
          } catch (b) {
            a = false;
          }
          goog.hasBadLetScoping = a;
        }
        return goog.hasBadLetScoping;
      };
      goog.workaroundSafari10EvalBug = function(a) {
        return "(function(){" + a + "\n;})();\n";
      };
      goog.loadModule = function(a) {
        var b = goog.moduleLoaderState_;
        try {
          goog.moduleLoaderState_ = { moduleName: "", declareLegacyNamespace: false, type: goog.ModuleType.GOOG };
          if (goog.isFunction(a))
            var c = a.call(void 0, {});
          else if (goog.isString(a))
            goog.useSafari10Workaround() && (a = goog.workaroundSafari10EvalBug(a)), c = goog.loadModuleFromSource_.call(void 0, a);
          else
            throw Error("Invalid module definition");
          var d = goog.moduleLoaderState_.moduleName;
          if (goog.isString(d) && d)
            goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d, c) : goog.SEAL_MODULE_EXPORTS && Object.seal && typeof c == "object" && c != null && Object.seal(c), goog.loadedModules_[d] = { exports: c, type: goog.ModuleType.GOOG, moduleId: goog.moduleLoaderState_.moduleName };
          else
            throw Error('Invalid module name "' + d + '"');
        } finally {
          goog.moduleLoaderState_ = b;
        }
      };
      goog.loadModuleFromSource_ = function(a) {
        eval(a);
        return {};
      };
      goog.normalizePath_ = function(a) {
        a = a.split("/");
        for (var b = 0; b < a.length; )
          a[b] == "." ? a.splice(b, 1) : b && a[b] == ".." && a[b - 1] && a[b - 1] != ".." ? a.splice(--b, 2) : b++;
        return a.join("/");
      };
      goog.loadFileSync_ = function(a) {
        if (goog.global.CLOSURE_LOAD_FILE_SYNC)
          return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
        try {
          var b = new goog.global.XMLHttpRequest();
          b.open("get", a, false);
          b.send();
          return b.status == 0 || b.status == 200 ? b.responseText : null;
        } catch (c) {
          return null;
        }
      };
      goog.transpile_ = function(a, b, c) {
        var d = goog.global.$jscomp;
        d || (goog.global.$jscomp = d = {});
        var e = d.transpile;
        if (!e) {
          var f = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f);
          if (g) {
            (function() {
              (0, eval)(g + "\n//# sourceURL=" + f);
            }).call(goog.global);
            if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile)
              throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
            goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
            d = goog.global.$jscomp;
            e = d.transpile;
          }
        }
        e || (e = d.transpile = function(a2, b2) {
          goog.logToConsole_(b2 + " requires transpilation but no transpiler was found.");
          return a2;
        });
        return e(a, b, c);
      };
      goog.typeOf = function(a) {
        var b = typeof a;
        if (b == "object")
          if (a) {
            if (a instanceof Array)
              return "array";
            if (a instanceof Object)
              return b;
            var c = Object.prototype.toString.call(a);
            if (c == "[object Window]")
              return "object";
            if (c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice"))
              return "array";
            if (c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call"))
              return "function";
          } else
            return "null";
        else if (b == "function" && typeof a.call == "undefined")
          return "object";
        return b;
      };
      goog.isNull = function(a) {
        return a === null;
      };
      goog.isDefAndNotNull = function(a) {
        return a != null;
      };
      goog.isArray = function(a) {
        return goog.typeOf(a) == "array";
      };
      goog.isArrayLike = function(a) {
        var b = goog.typeOf(a);
        return b == "array" || b == "object" && typeof a.length == "number";
      };
      goog.isDateLike = function(a) {
        return goog.isObject(a) && typeof a.getFullYear == "function";
      };
      goog.isFunction = function(a) {
        return goog.typeOf(a) == "function";
      };
      goog.isObject = function(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function";
      };
      goog.getUid = function(a) {
        return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
      };
      goog.hasUid = function(a) {
        return !!a[goog.UID_PROPERTY_];
      };
      goog.removeUid = function(a) {
        a !== null && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
        try {
          delete a[goog.UID_PROPERTY_];
        } catch (b) {
        }
      };
      goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
      goog.uidCounter_ = 0;
      goog.getHashCode = goog.getUid;
      goog.removeHashCode = goog.removeUid;
      goog.cloneObject = function(a) {
        var b = goog.typeOf(a);
        if (b == "object" || b == "array") {
          if (typeof a.clone === "function")
            return a.clone();
          b = b == "array" ? [] : {};
          for (var c in a)
            b[c] = goog.cloneObject(a[c]);
          return b;
        }
        return a;
      };
      goog.bindNative_ = function(a, b, c) {
        return a.call.apply(a.bind, arguments);
      };
      goog.bindJs_ = function(a, b, c) {
        if (!a)
          throw Error();
        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function() {
            var c2 = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c2, d);
            return a.apply(b, c2);
          };
        }
        return function() {
          return a.apply(b, arguments);
        };
      };
      goog.bind = function(a, b, c) {
        Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
        return goog.bind.apply(null, arguments);
      };
      goog.partial = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
          var b2 = c.slice();
          b2.push.apply(b2, arguments);
          return a.apply(this, b2);
        };
      };
      goog.mixin = function(a, b) {
        for (var c in b)
          a[c] = b[c];
      };
      goog.now = goog.TRUSTED_SITE && Date.now || function() {
        return +new Date();
      };
      goog.globalEval = function(a) {
        if (goog.global.execScript)
          goog.global.execScript(a, "JavaScript");
        else if (goog.global.eval) {
          if (goog.evalWorksForGlobals_ == null) {
            try {
              goog.global.eval("var _evalTest_ = 1;");
            } catch (d) {
            }
            if (typeof goog.global._evalTest_ != "undefined") {
              try {
                delete goog.global._evalTest_;
              } catch (d) {
              }
              goog.evalWorksForGlobals_ = true;
            } else
              goog.evalWorksForGlobals_ = false;
          }
          if (goog.evalWorksForGlobals_)
            goog.global.eval(a);
          else {
            var b = goog.global.document, c = b.createElement("SCRIPT");
            c.type = "text/javascript";
            c.defer = false;
            c.appendChild(b.createTextNode(a));
            b.head.appendChild(c);
            b.head.removeChild(c);
          }
        } else
          throw Error("goog.globalEval not available");
      };
      goog.evalWorksForGlobals_ = null;
      goog.getCssName = function(a, b) {
        if (String(a).charAt(0) == ".")
          throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
        var c = function(a2) {
          return goog.cssNameMapping_[a2] || a2;
        }, d = function(a2) {
          a2 = a2.split("-");
          for (var b2 = [], d2 = 0; d2 < a2.length; d2++)
            b2.push(c(a2[d2]));
          return b2.join("-");
        };
        d = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? c : d : function(a2) {
          return a2;
        };
        a = b ? a + "-" + d(b) : d(a);
        return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a) : a;
      };
      goog.setCssNameMapping = function(a, b) {
        goog.cssNameMapping_ = a;
        goog.cssNameMappingStyle_ = b;
      };
      !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
      goog.getMsg = function(a, b, c) {
        c && c.html && (a = a.replace(/</g, "&lt;"));
        b && (a = a.replace(/\{\$([^}]+)}/g, function(a2, c2) {
          return b != null && c2 in b ? b[c2] : a2;
        }));
        return a;
      };
      goog.getMsgWithFallback = function(a, b) {
        return a;
      };
      goog.exportSymbol = function(a, b, c) {
        goog.exportPath_(a, b, c);
      };
      goog.exportProperty = function(a, b, c) {
        a[b] = c;
      };
      goog.inherits = function(a, b) {
        function c() {
        }
        c.prototype = b.prototype;
        a.superClass_ = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
        a.base = function(a2, c2, f) {
          for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
            d[e - 2] = arguments[e];
          return b.prototype[c2].apply(a2, d);
        };
      };
      goog.base = function(a, b, c) {
        var d = arguments.callee.caller;
        if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d)
          throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if (typeof d.superClass_ !== "undefined") {
          for (var e = Array(arguments.length - 1), f = 1; f < arguments.length; f++)
            e[f - 1] = arguments[f];
          return d.superClass_.constructor.apply(a, e);
        }
        if (typeof b != "string" && typeof b != "symbol")
          throw Error("method names provided to goog.base must be a string or a symbol");
        e = Array(arguments.length - 2);
        for (f = 2; f < arguments.length; f++)
          e[f - 2] = arguments[f];
        f = false;
        for (var g = a.constructor.prototype; g; g = Object.getPrototypeOf(g))
          if (g[b] === d)
            f = true;
          else if (f)
            return g[b].apply(a, e);
        if (a[b] === d)
          return a.constructor.prototype[b].apply(a, e);
        throw Error("goog.base called from a method of one name to a method of a different name");
      };
      goog.scope = function(a) {
        if (goog.isInModuleLoader_())
          throw Error("goog.scope is not supported within a module.");
        a.call(goog.global);
      };
      COMPILED || (goog.global.COMPILED = COMPILED);
      goog.defineClass = function(a, b) {
        var c = b.constructor, d = b.statics;
        c && c != Object.prototype.constructor || (c = function() {
          throw Error("cannot instantiate an interface (no constructor defined).");
        });
        c = goog.defineClass.createSealingConstructor_(c, a);
        a && goog.inherits(c, a);
        delete b.constructor;
        delete b.statics;
        goog.defineClass.applyProperties_(c.prototype, b);
        d != null && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
        return c;
      };
      goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
      goog.defineClass.createSealingConstructor_ = function(a, b) {
        if (!goog.defineClass.SEAL_CLASS_INSTANCES)
          return a;
        var c = !goog.defineClass.isUnsealable_(b), d = function() {
          var b2 = a.apply(this, arguments) || this;
          b2[goog.UID_PROPERTY_] = b2[goog.UID_PROPERTY_];
          this.constructor === d && c && Object.seal instanceof Function && Object.seal(b2);
          return b2;
        };
        return d;
      };
      goog.defineClass.isUnsealable_ = function(a) {
        return a && a.prototype && a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
      };
      goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      goog.defineClass.applyProperties_ = function(a, b) {
        for (var c in b)
          Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
        for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++)
          c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
      };
      goog.tagUnsealableClass = function(a) {
        !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = true);
      };
      goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
      !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
        var a = goog.global.document;
        return a != null && "write" in a;
      }, goog.isDocumentLoading_ = function() {
        var a = goog.global.document;
        return a.attachEvent ? a.readyState != "complete" : a.readyState == "loading";
      }, goog.findBasePath_ = function() {
        if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH))
          goog.basePath = goog.global.CLOSURE_BASE_PATH;
        else if (goog.inHtmlDocument_()) {
          var a = goog.global.document, b = a.currentScript;
          a = b ? [b] : a.getElementsByTagName("SCRIPT");
          for (b = a.length - 1; 0 <= b; --b) {
            var c = a[b].src, d = c.lastIndexOf("?");
            d = d == -1 ? c.length : d;
            if (c.substr(d - 7, 7) == "base.js") {
              goog.basePath = c.substr(0, d - 7);
              break;
            }
          }
        }
      }, goog.findBasePath_(), goog.Transpiler = function() {
        this.requiresTranspilation_ = null;
        this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
      }, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
        function a(a, b) {
          e ? d[a] = true : b() ? (c = a, d[a] = false) : e = d[a] = true;
        }
        function b(a) {
          try {
            return !!eval(a);
          } catch (h) {
            return false;
          }
        }
        var c = "es3", d = { es3: false }, e = false, f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
        a("es5", function() {
          return b("[1,].length==1");
        });
        a("es6", function() {
          return f.match(/Edge\/(\d+)(\.\d)*/i) ? false : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
        });
        a("es7", function() {
          return b("2 ** 2 == 4");
        });
        a("es8", function() {
          return b("async () => 1, true");
        });
        a("es9", function() {
          return b("({...rest} = {}), true");
        });
        a("es_next", function() {
          return false;
        });
        return { target: c, map: d };
      }, goog.Transpiler.prototype.needsTranspile = function(a, b) {
        if (goog.TRANSPILE == "always")
          return true;
        if (goog.TRANSPILE == "never")
          return false;
        if (!this.requiresTranspilation_) {
          var c = this.createRequiresTranspilation_();
          this.requiresTranspilation_ = c.map;
          this.transpilationTarget_ = this.transpilationTarget_ || c.target;
        }
        if (a in this.requiresTranspilation_)
          return this.requiresTranspilation_[a] ? true : !goog.inHtmlDocument_() || b != "es6" || "noModule" in goog.global.document.createElement("script") ? false : true;
        throw Error("Unknown language mode: " + a);
      }, goog.Transpiler.prototype.transpile = function(a, b) {
        return goog.transpile_(a, b, this.transpilationTarget_);
      }, goog.transpiler_ = new goog.Transpiler(), goog.protectScriptTag_ = function(a) {
        return a.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
      }, goog.DebugLoader_ = function() {
        this.dependencies_ = {};
        this.idToPath_ = {};
        this.written_ = {};
        this.loadingDeps_ = [];
        this.depsToLoad_ = [];
        this.paused_ = false;
        this.factory_ = new goog.DependencyFactory(goog.transpiler_);
        this.deferredCallbacks_ = {};
        this.deferredQueue_ = [];
      }, goog.DebugLoader_.prototype.bootstrap = function(a, b) {
        function c() {
          d && (goog.global.setTimeout(d, 0), d = null);
        }
        var d = b;
        if (a.length) {
          b = [];
          for (var e = 0; e < a.length; e++) {
            var f = this.getPathFromDeps_(a[e]);
            if (!f)
              throw Error("Unregonized namespace: " + a[e]);
            b.push(this.dependencies_[f]);
          }
          f = goog.require;
          var g = 0;
          for (e = 0; e < a.length; e++)
            f(a[e]), b[e].onLoad(function() {
              ++g == a.length && c();
            });
        } else
          c();
      }, goog.DebugLoader_.prototype.loadClosureDeps = function() {
        this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, false));
        this.loadDeps_();
      }, goog.DebugLoader_.prototype.requested = function(a, b) {
        (a = this.getPathFromDeps_(a)) && (b || this.areDepsLoaded_(this.dependencies_[a].requires)) && (b = this.deferredCallbacks_[a]) && (delete this.deferredCallbacks_[a], b());
      }, goog.DebugLoader_.prototype.setDependencyFactory = function(a) {
        this.factory_ = a;
      }, goog.DebugLoader_.prototype.load_ = function(a) {
        if (this.getPathFromDeps_(a)) {
          var b = this, c = [], d = function(a2) {
            var e = b.getPathFromDeps_(a2);
            if (!e)
              throw Error("Bad dependency path or symbol: " + a2);
            if (!b.written_[e]) {
              b.written_[e] = true;
              a2 = b.dependencies_[e];
              for (e = 0; e < a2.requires.length; e++)
                goog.isProvided_(a2.requires[e]) || d(a2.requires[e]);
              c.push(a2);
            }
          };
          d(a);
          a = !!this.depsToLoad_.length;
          this.depsToLoad_ = this.depsToLoad_.concat(c);
          this.paused_ || a || this.loadDeps_();
        } else
          throw a = "goog.require could not find: " + a, goog.logToConsole_(a), Error(a);
      }, goog.DebugLoader_.prototype.loadDeps_ = function() {
        for (var a = this, b = this.paused_; this.depsToLoad_.length && !b; )
          (function() {
            var c = false, d = a.depsToLoad_.shift(), e = false;
            a.loading_(d);
            var f = { pause: function() {
              if (c)
                throw Error("Cannot call pause after the call to load.");
              b = true;
            }, resume: function() {
              c ? a.resume_() : b = false;
            }, loaded: function() {
              if (e)
                throw Error("Double call to loaded.");
              e = true;
              a.loaded_(d);
            }, pending: function() {
              for (var b2 = [], c2 = 0; c2 < a.loadingDeps_.length; c2++)
                b2.push(a.loadingDeps_[c2]);
              return b2;
            }, setModuleState: function(a2) {
              goog.moduleLoaderState_ = { type: a2, moduleName: "", declareLegacyNamespace: false };
            }, registerEs6ModuleExports: function(a2, b2, c2) {
              c2 && (goog.loadedModules_[c2] = { exports: b2, type: goog.ModuleType.ES6, moduleId: c2 || "" });
            }, registerGoogModuleExports: function(a2, b2) {
              goog.loadedModules_[a2] = { exports: b2, type: goog.ModuleType.GOOG, moduleId: a2 };
            }, clearModuleState: function() {
              goog.moduleLoaderState_ = null;
            }, defer: function(b2) {
              if (c)
                throw Error("Cannot register with defer after the call to load.");
              a.defer_(d, b2);
            }, areDepsLoaded: function() {
              return a.areDepsLoaded_(d.requires);
            } };
            try {
              d.load(f);
            } finally {
              c = true;
            }
          })();
        b && this.pause_();
      }, goog.DebugLoader_.prototype.pause_ = function() {
        this.paused_ = true;
      }, goog.DebugLoader_.prototype.resume_ = function() {
        this.paused_ && (this.paused_ = false, this.loadDeps_());
      }, goog.DebugLoader_.prototype.loading_ = function(a) {
        this.loadingDeps_.push(a);
      }, goog.DebugLoader_.prototype.loaded_ = function(a) {
        for (var b = 0; b < this.loadingDeps_.length; b++)
          if (this.loadingDeps_[b] == a) {
            this.loadingDeps_.splice(b, 1);
            break;
          }
        for (b = 0; b < this.deferredQueue_.length; b++)
          if (this.deferredQueue_[b] == a.path) {
            this.deferredQueue_.splice(b, 1);
            break;
          }
        if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
          for (; this.deferredQueue_.length; )
            this.requested(this.deferredQueue_.shift(), true);
        a.loaded();
      }, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a) {
        for (var b = 0; b < a.length; b++) {
          var c = this.getPathFromDeps_(a[b]);
          if (!c || !(c in this.deferredCallbacks_ || goog.isProvided_(a[b])))
            return false;
        }
        return true;
      }, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a) {
        return a in this.idToPath_ ? this.idToPath_[a] : a in this.dependencies_ ? a : null;
      }, goog.DebugLoader_.prototype.defer_ = function(a, b) {
        this.deferredCallbacks_[a.path] = b;
        this.deferredQueue_.push(a.path);
      }, goog.LoadController = function() {
      }, goog.LoadController.prototype.pause = function() {
      }, goog.LoadController.prototype.resume = function() {
      }, goog.LoadController.prototype.loaded = function() {
      }, goog.LoadController.prototype.pending = function() {
      }, goog.LoadController.prototype.registerEs6ModuleExports = function(a, b, c) {
      }, goog.LoadController.prototype.setModuleState = function(a) {
      }, goog.LoadController.prototype.clearModuleState = function() {
      }, goog.LoadController.prototype.defer = function(a) {
      }, goog.LoadController.prototype.areDepsLoaded = function() {
      }, goog.Dependency = function(a, b, c, d, e) {
        this.path = a;
        this.relativePath = b;
        this.provides = c;
        this.requires = d;
        this.loadFlags = e;
        this.loaded_ = false;
        this.loadCallbacks_ = [];
      }, goog.Dependency.prototype.getPathName = function() {
        var a = this.path, b = a.indexOf("://");
        0 <= b && (a = a.substring(b + 3), b = a.indexOf("/"), 0 <= b && (a = a.substring(b + 1)));
        return a;
      }, goog.Dependency.prototype.onLoad = function(a) {
        this.loaded_ ? a() : this.loadCallbacks_.push(a);
      }, goog.Dependency.prototype.loaded = function() {
        this.loaded_ = true;
        var a = this.loadCallbacks_;
        this.loadCallbacks_ = [];
        for (var b = 0; b < a.length; b++)
          a[b]();
      }, goog.Dependency.defer_ = false, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(a) {
        var b = Math.random().toString(32);
        goog.Dependency.callbackMap_[b] = a;
        return b;
      }, goog.Dependency.unregisterCallback_ = function(a) {
        delete goog.Dependency.callbackMap_[a];
      }, goog.Dependency.callback_ = function(a, b) {
        if (a in goog.Dependency.callbackMap_) {
          for (var c = goog.Dependency.callbackMap_[a], d = [], e = 1; e < arguments.length; e++)
            d.push(arguments[e]);
          c.apply(void 0, d);
        } else
          throw Error("Callback key " + a + " does not exist (was base.js loaded more than once?).");
      }, goog.Dependency.prototype.load = function(a) {
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
        else if (goog.inHtmlDocument_()) {
          var b = goog.global.document;
          if (b.readyState == "complete" && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
            if (/\bdeps.js$/.test(this.path)) {
              a.loaded();
              return;
            }
            throw Error('Cannot write "' + this.path + '" after document load');
          }
          if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
            var c = goog.Dependency.registerCallback_(function(b2) {
              goog.DebugLoader_.IS_OLD_IE_ && b2.readyState != "complete" || (goog.Dependency.unregisterCallback_(c), a.loaded());
            }), d = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
            d = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + `="goog.Dependency.callback_('` + c + `', this)" type="text/javascript" ` + (goog.Dependency.defer_ ? "defer" : "") + d + "><\/script>";
            b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d) : d);
          } else {
            var e = b.createElement("script");
            e.defer = goog.Dependency.defer_;
            e.async = false;
            e.type = "text/javascript";
            (d = goog.getScriptNonce()) && e.setAttribute("nonce", d);
            goog.DebugLoader_.IS_OLD_IE_ ? (a.pause(), e.onreadystatechange = function() {
              if (e.readyState == "loaded" || e.readyState == "complete")
                a.loaded(), a.resume();
            }) : e.onload = function() {
              e.onload = null;
              a.loaded();
            };
            e.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
            b.head.appendChild(e);
          }
        } else
          goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), this.relativePath == "deps.js" ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a.loaded()) : a.pause();
      }, goog.Es6ModuleDependency = function(a, b, c, d, e) {
        goog.Dependency.call(this, a, b, c, d, e);
      }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a) {
        function b(a2, b2) {
          a2 = b2 ? '<script type="module" crossorigin>' + b2 + "<\/script>" : '<script type="module" crossorigin src="' + a2 + '"><\/script>';
          d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(a2) : a2);
        }
        function c(a2, b2) {
          var c2 = d.createElement("script");
          c2.defer = true;
          c2.async = false;
          c2.type = "module";
          c2.setAttribute("crossorigin", true);
          var e2 = goog.getScriptNonce();
          e2 && c2.setAttribute("nonce", e2);
          b2 ? c2.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(b2) : b2 : c2.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(a2) : a2;
          d.head.appendChild(c2);
        }
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
        else if (goog.inHtmlDocument_()) {
          var d = goog.global.document, e = this;
          if (goog.isDocumentLoading_()) {
            var f = b;
            goog.Dependency.defer_ = true;
          } else
            f = c;
          var g = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(g);
            a.setModuleState(goog.ModuleType.ES6);
          });
          f(void 0, 'goog.Dependency.callback_("' + g + '")');
          f(this.path, void 0);
          var h = goog.Dependency.registerCallback_(function(b2) {
            goog.Dependency.unregisterCallback_(h);
            a.registerEs6ModuleExports(e.path, b2, goog.moduleLoaderState_.moduleName);
          });
          f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
          var k = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(k);
            a.clearModuleState();
            a.loaded();
          });
          f(void 0, 'goog.Dependency.callback_("' + k + '")');
        } else
          goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a.pause();
      }, goog.TransformedDependency = function(a, b, c, d, e) {
        goog.Dependency.call(this, a, b, c, d, e);
        this.contents_ = null;
        this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
      }, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(a) {
        function b() {
          e.contents_ = goog.loadFileSync_(e.path);
          e.contents_ && (e.contents_ = e.transform(e.contents_), e.contents_ && (e.contents_ += "\n//# sourceURL=" + e.path));
        }
        function c() {
          e.lazyFetch_ && b();
          if (e.contents_) {
            f && a.setModuleState(goog.ModuleType.ES6);
            try {
              var c2 = e.contents_;
              e.contents_ = null;
              goog.globalEval(c2);
              if (f)
                var d2 = goog.moduleLoaderState_.moduleName;
            } finally {
              f && a.clearModuleState();
            }
            f && goog.global.$jscomp.require.ensure([e.getPathName()], function() {
              a.registerEs6ModuleExports(e.path, goog.global.$jscomp.require(e.getPathName()), d2);
            });
            a.loaded();
          }
        }
        function d() {
          var a2 = goog.global.document, b2 = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(b2);
            c();
          }), d2 = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + b2 + '");') + "<\/script>";
          a2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d2) : d2);
        }
        var e = this;
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          b(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a.loaded()) : a.pause();
        else {
          var f = this.loadFlags.module == goog.ModuleType.ES6;
          this.lazyFetch_ || b();
          var g = 1 < a.pending().length, h = g && goog.DebugLoader_.IS_OLD_IE_;
          g = goog.Dependency.defer_ && (g || goog.isDocumentLoading_());
          if (h || g)
            a.defer(function() {
              c();
            });
          else {
            var k = goog.global.document;
            h = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
            if (f && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !h) {
              goog.Dependency.defer_ = true;
              a.pause();
              var l = k.onreadystatechange;
              k.onreadystatechange = function() {
                k.readyState == "interactive" && (k.onreadystatechange = l, c(), a.resume());
                goog.isFunction(l) && l.apply(void 0, arguments);
              };
            } else
              !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d() : c();
          }
        }
      }, goog.TransformedDependency.prototype.transform = function(a) {
      }, goog.TranspiledDependency = function(a, b, c, d, e, f) {
        goog.TransformedDependency.call(this, a, b, c, d, e);
        this.transpiler = f;
      }, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(a) {
        return this.transpiler.transpile(a, this.getPathName());
      }, goog.PreTranspiledEs6ModuleDependency = function(a, b, c, d, e) {
        goog.TransformedDependency.call(this, a, b, c, d, e);
      }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a) {
        return a;
      }, goog.GoogModuleDependency = function(a, b, c, d, e, f, g) {
        goog.TransformedDependency.call(this, a, b, c, d, e);
        this.needsTranspile_ = f;
        this.transpiler_ = g;
      }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a) {
        this.needsTranspile_ && (a = this.transpiler_.transpile(a, this.getPathName()));
        return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(a + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
      }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(a, b, c, d) {
        b = b || [];
        a = a.replace(/\\/g, "/");
        var e = goog.normalizePath_(goog.basePath + a);
        d && typeof d !== "boolean" || (d = d ? { module: goog.ModuleType.GOOG } : {});
        c = this.factory_.createDependency(e, a, b, c, d, goog.transpiler_.needsTranspile(d.lang || "es3", d.module));
        this.dependencies_[e] = c;
        for (c = 0; c < b.length; c++)
          this.idToPath_[b[c]] = e;
        this.idToPath_[a] = e;
      }, goog.DependencyFactory = function(a) {
        this.transpiler = a;
      }, goog.DependencyFactory.prototype.createDependency = function(a, b, c, d, e, f) {
        return e.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(a, b, c, d, e, f, this.transpiler) : f ? new goog.TranspiledDependency(a, b, c, d, e, this.transpiler) : e.module == goog.ModuleType.ES6 ? goog.TRANSPILE == "never" && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a, b, c, d, e) : new goog.Es6ModuleDependency(a, b, c, d, e) : new goog.Dependency(a, b, c, d, e);
      }, goog.debugLoader_ = new goog.DebugLoader_(), goog.loadClosureDeps = function() {
        goog.debugLoader_.loadClosureDeps();
      }, goog.setDependencyFactory = function(a) {
        goog.debugLoader_.setDependencyFactory(a);
      }, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(a, b) {
        goog.debugLoader_.bootstrap(a, b);
      });
      goog.TRUSTED_TYPES_POLICY_NAME = "";
      goog.identity_ = function(a) {
        return a;
      };
      goog.createTrustedTypesPolicy = function(a) {
        var b = null;
        if (typeof TrustedTypes === "undefined" || !TrustedTypes.createPolicy)
          return b;
        try {
          b = TrustedTypes.createPolicy(a, { createHTML: goog.identity_, createScript: goog.identity_, createScriptURL: goog.identity_, createURL: goog.identity_ });
        } catch (c) {
          goog.logToConsole_(c.message);
        }
        return b;
      };
      goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
      var jspb = { BinaryConstants: {}, ConstBinaryMessage: function() {
      }, BinaryMessage: function() {
      } };
      jspb.BinaryConstants.FieldType = { INVALID: -1, DOUBLE: 1, FLOAT: 2, INT64: 3, UINT64: 4, INT32: 5, FIXED64: 6, FIXED32: 7, BOOL: 8, STRING: 9, GROUP: 10, MESSAGE: 11, BYTES: 12, UINT32: 13, ENUM: 14, SFIXED32: 15, SFIXED64: 16, SINT32: 17, SINT64: 18, FHASH64: 30, VHASH64: 31 };
      jspb.BinaryConstants.WireType = { INVALID: -1, VARINT: 0, FIXED64: 1, DELIMITED: 2, START_GROUP: 3, END_GROUP: 4, FIXED32: 5 };
      jspb.BinaryConstants.FieldTypeToWireType = function(a) {
        var b = jspb.BinaryConstants.FieldType, c = jspb.BinaryConstants.WireType;
        switch (a) {
          case b.INT32:
          case b.INT64:
          case b.UINT32:
          case b.UINT64:
          case b.SINT32:
          case b.SINT64:
          case b.BOOL:
          case b.ENUM:
          case b.VHASH64:
            return c.VARINT;
          case b.DOUBLE:
          case b.FIXED64:
          case b.SFIXED64:
          case b.FHASH64:
            return c.FIXED64;
          case b.STRING:
          case b.MESSAGE:
          case b.BYTES:
            return c.DELIMITED;
          case b.FLOAT:
          case b.FIXED32:
          case b.SFIXED32:
            return c.FIXED32;
          default:
            return c.INVALID;
        }
      };
      jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1;
      jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60;
      jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54;
      jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22;
      jspb.BinaryConstants.FLOAT64_EPS = 5e-324;
      jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324;
      jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292;
      jspb.BinaryConstants.TWO_TO_20 = 1048576;
      jspb.BinaryConstants.TWO_TO_23 = 8388608;
      jspb.BinaryConstants.TWO_TO_31 = 2147483648;
      jspb.BinaryConstants.TWO_TO_32 = 4294967296;
      jspb.BinaryConstants.TWO_TO_52 = 4503599627370496;
      jspb.BinaryConstants.TWO_TO_63 = 9223372036854776e3;
      jspb.BinaryConstants.TWO_TO_64 = 18446744073709552e3;
      jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0";
      goog.dom = {};
      goog.dom.NodeType = { ELEMENT: 1, ATTRIBUTE: 2, TEXT: 3, CDATA_SECTION: 4, ENTITY_REFERENCE: 5, ENTITY: 6, PROCESSING_INSTRUCTION: 7, COMMENT: 8, DOCUMENT: 9, DOCUMENT_TYPE: 10, DOCUMENT_FRAGMENT: 11, NOTATION: 12 };
      goog.debug = {};
      goog.debug.Error = function(a) {
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, goog.debug.Error);
        else {
          var b = Error().stack;
          b && (this.stack = b);
        }
        a && (this.message = String(a));
        this.reportErrorToServer = true;
      };
      goog.inherits(goog.debug.Error, Error);
      goog.debug.Error.prototype.name = "CustomError";
      goog.asserts = {};
      goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
      goog.asserts.AssertionError = function(a, b) {
        goog.debug.Error.call(this, goog.asserts.subs_(a, b));
        this.messagePattern = a;
      };
      goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
      goog.asserts.AssertionError.prototype.name = "AssertionError";
      goog.asserts.DEFAULT_ERROR_HANDLER = function(a) {
        throw a;
      };
      goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
      goog.asserts.subs_ = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
          c += a[e] + (e < b.length ? b[e] : "%s");
        return c + a[d];
      };
      goog.asserts.doAssertFailure_ = function(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
          e += ": " + c;
          var f = d;
        } else
          a && (e += ": " + a, f = b);
        a = new goog.asserts.AssertionError("" + e, f || []);
        goog.asserts.errorHandler_(a);
      };
      goog.asserts.setErrorHandler = function(a) {
        goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a);
      };
      goog.asserts.assert = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
        return a;
      };
      goog.asserts.assertExists = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && a == null && goog.asserts.doAssertFailure_("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
        return a;
      };
      goog.asserts.fail = function(a, b) {
        goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
      };
      goog.asserts.assertNumber = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a;
      };
      goog.asserts.assertString = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a;
      };
      goog.asserts.assertFunction = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a;
      };
      goog.asserts.assertObject = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a;
      };
      goog.asserts.assertArray = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a;
      };
      goog.asserts.assertBoolean = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a;
      };
      goog.asserts.assertElement = function(a, b, c) {
        !goog.asserts.ENABLE_ASSERTS || goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a;
      };
      goog.asserts.assertInstanceof = function(a, b, c, d) {
        !goog.asserts.ENABLE_ASSERTS || a instanceof b || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b), goog.asserts.getType_(a)], c, Array.prototype.slice.call(arguments, 3));
        return a;
      };
      goog.asserts.assertFinite = function(a, b, c) {
        !goog.asserts.ENABLE_ASSERTS || typeof a == "number" && isFinite(a) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a], b, Array.prototype.slice.call(arguments, 2));
        return a;
      };
      goog.asserts.assertObjectPrototypeIsIntact = function() {
        for (var a in Object.prototype)
          goog.asserts.fail(a + " should not be enumerable in Object.prototype.");
      };
      goog.asserts.getType_ = function(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : a === null ? "null" : typeof a;
      };
      goog.array = {};
      goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
      goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
      goog.array.peek = function(a) {
        return a[a.length - 1];
      };
      goog.array.last = goog.array.peek;
      goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(a, b, c) {
        goog.asserts.assert(a.length != null);
        return Array.prototype.indexOf.call(a, b, c);
      } : function(a, b, c) {
        c = c == null ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (goog.isString(a))
          return goog.isString(b) && b.length == 1 ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
          if (c in a && a[c] === b)
            return c;
        return -1;
      };
      goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(a, b, c) {
        goog.asserts.assert(a.length != null);
        return Array.prototype.lastIndexOf.call(a, b, c == null ? a.length - 1 : c);
      } : function(a, b, c) {
        c = c == null ? a.length - 1 : c;
        0 > c && (c = Math.max(0, a.length + c));
        if (goog.isString(a))
          return goog.isString(b) && b.length == 1 ? a.lastIndexOf(b, c) : -1;
        for (; 0 <= c; c--)
          if (c in a && a[c] === b)
            return c;
        return -1;
      };
      goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(a, b, c) {
        goog.asserts.assert(a.length != null);
        Array.prototype.forEach.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)
          f in e && b.call(c, e[f], f, a);
      };
      goog.array.forEachRight = function(a, b, c) {
        var d = a.length, e = goog.isString(a) ? a.split("") : a;
        for (--d; 0 <= d; --d)
          d in e && b.call(c, e[d], d, a);
      };
      goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(a, b, c) {
        goog.asserts.assert(a.length != null);
        return Array.prototype.filter.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, g = goog.isString(a) ? a.split("") : a, h = 0; h < d; h++)
          if (h in g) {
            var k = g[h];
            b.call(c, k, h, a) && (e[f++] = k);
          }
        return e;
      };
      goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(a, b, c) {
        goog.asserts.assert(a.length != null);
        return Array.prototype.map.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = goog.isString(a) ? a.split("") : a, g = 0; g < d; g++)
          g in f && (e[g] = b.call(c, f[g], g, a));
        return e;
      };
      goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(a, b, c, d) {
        goog.asserts.assert(a.length != null);
        d && (b = goog.bind(b, d));
        return Array.prototype.reduce.call(a, b, c);
      } : function(a, b, c, d) {
        var e = c;
        goog.array.forEach(a, function(c2, g) {
          e = b.call(d, e, c2, g, a);
        });
        return e;
      };
      goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(a, b, c, d) {
        goog.asserts.assert(a.length != null);
        goog.asserts.assert(b != null);
        d && (b = goog.bind(b, d));
        return Array.prototype.reduceRight.call(a, b, c);
      } : function(a, b, c, d) {
        var e = c;
        goog.array.forEachRight(a, function(c2, g) {
          e = b.call(d, e, c2, g, a);
        });
        return e;
      };
      goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(a, b, c) {
        goog.asserts.assert(a.length != null);
        return Array.prototype.some.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)
          if (f in e && b.call(c, e[f], f, a))
            return true;
        return false;
      };
      goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(a, b, c) {
        goog.asserts.assert(a.length != null);
        return Array.prototype.every.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)
          if (f in e && !b.call(c, e[f], f, a))
            return false;
        return true;
      };
      goog.array.count = function(a, b, c) {
        var d = 0;
        goog.array.forEach(a, function(a2, f, g) {
          b.call(c, a2, f, g) && ++d;
        }, c);
        return d;
      };
      goog.array.find = function(a, b, c) {
        b = goog.array.findIndex(a, b, c);
        return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
      };
      goog.array.findIndex = function(a, b, c) {
        for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)
          if (f in e && b.call(c, e[f], f, a))
            return f;
        return -1;
      };
      goog.array.findRight = function(a, b, c) {
        b = goog.array.findIndexRight(a, b, c);
        return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
      };
      goog.array.findIndexRight = function(a, b, c) {
        var d = a.length, e = goog.isString(a) ? a.split("") : a;
        for (--d; 0 <= d; d--)
          if (d in e && b.call(c, e[d], d, a))
            return d;
        return -1;
      };
      goog.array.contains = function(a, b) {
        return 0 <= goog.array.indexOf(a, b);
      };
      goog.array.isEmpty = function(a) {
        return a.length == 0;
      };
      goog.array.clear = function(a) {
        if (!goog.isArray(a))
          for (var b = a.length - 1; 0 <= b; b--)
            delete a[b];
        a.length = 0;
      };
      goog.array.insert = function(a, b) {
        goog.array.contains(a, b) || a.push(b);
      };
      goog.array.insertAt = function(a, b, c) {
        goog.array.splice(a, c, 0, b);
      };
      goog.array.insertArrayAt = function(a, b, c) {
        goog.partial(goog.array.splice, a, c, 0).apply(null, b);
      };
      goog.array.insertBefore = function(a, b, c) {
        var d;
        arguments.length == 2 || 0 > (d = goog.array.indexOf(a, c)) ? a.push(b) : goog.array.insertAt(a, b, d);
      };
      goog.array.remove = function(a, b) {
        b = goog.array.indexOf(a, b);
        var c;
        (c = 0 <= b) && goog.array.removeAt(a, b);
        return c;
      };
      goog.array.removeLast = function(a, b) {
        b = goog.array.lastIndexOf(a, b);
        return 0 <= b ? (goog.array.removeAt(a, b), true) : false;
      };
      goog.array.removeAt = function(a, b) {
        goog.asserts.assert(a.length != null);
        return Array.prototype.splice.call(a, b, 1).length == 1;
      };
      goog.array.removeIf = function(a, b, c) {
        b = goog.array.findIndex(a, b, c);
        return 0 <= b ? (goog.array.removeAt(a, b), true) : false;
      };
      goog.array.removeAllIf = function(a, b, c) {
        var d = 0;
        goog.array.forEachRight(a, function(e, f) {
          b.call(c, e, f, a) && goog.array.removeAt(a, f) && d++;
        });
        return d;
      };
      goog.array.concat = function(a) {
        return Array.prototype.concat.apply([], arguments);
      };
      goog.array.join = function(a) {
        return Array.prototype.concat.apply([], arguments);
      };
      goog.array.toArray = function(a) {
        var b = a.length;
        if (0 < b) {
          for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
          return c;
        }
        return [];
      };
      goog.array.clone = goog.array.toArray;
      goog.array.extend = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
          var d = arguments[c];
          if (goog.isArrayLike(d)) {
            var e = a.length || 0, f = d.length || 0;
            a.length = e + f;
            for (var g = 0; g < f; g++)
              a[e + g] = d[g];
          } else
            a.push(d);
        }
      };
      goog.array.splice = function(a, b, c, d) {
        goog.asserts.assert(a.length != null);
        return Array.prototype.splice.apply(a, goog.array.slice(arguments, 1));
      };
      goog.array.slice = function(a, b, c) {
        goog.asserts.assert(a.length != null);
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
      };
      goog.array.removeDuplicates = function(a, b, c) {
        b = b || a;
        var d = function(a2) {
          return goog.isObject(a2) ? "o" + goog.getUid(a2) : (typeof a2).charAt(0) + a2;
        };
        c = c || d;
        d = {};
        for (var e = 0, f = 0; f < a.length; ) {
          var g = a[f++], h = c(g);
          Object.prototype.hasOwnProperty.call(d, h) || (d[h] = true, b[e++] = g);
        }
        b.length = e;
      };
      goog.array.binarySearch = function(a, b, c) {
        return goog.array.binarySearch_(a, c || goog.array.defaultCompare, false, b);
      };
      goog.array.binarySelect = function(a, b, c) {
        return goog.array.binarySearch_(a, b, true, void 0, c);
      };
      goog.array.binarySearch_ = function(a, b, c, d, e) {
        for (var f = 0, g = a.length, h; f < g; ) {
          var k = f + g >> 1;
          var l = c ? b.call(e, a[k], k, a) : b(d, a[k]);
          0 < l ? f = k + 1 : (g = k, h = !l);
        }
        return h ? f : ~f;
      };
      goog.array.sort = function(a, b) {
        a.sort(b || goog.array.defaultCompare);
      };
      goog.array.stableSort = function(a, b) {
        for (var c = Array(a.length), d = 0; d < a.length; d++)
          c[d] = { index: d, value: a[d] };
        var e = b || goog.array.defaultCompare;
        goog.array.sort(c, function(a2, b2) {
          return e(a2.value, b2.value) || a2.index - b2.index;
        });
        for (d = 0; d < a.length; d++)
          a[d] = c[d].value;
      };
      goog.array.sortByKey = function(a, b, c) {
        var d = c || goog.array.defaultCompare;
        goog.array.sort(a, function(a2, c2) {
          return d(b(a2), b(c2));
        });
      };
      goog.array.sortObjectsByKey = function(a, b, c) {
        goog.array.sortByKey(a, function(a2) {
          return a2[b];
        }, c);
      };
      goog.array.isSorted = function(a, b, c) {
        b = b || goog.array.defaultCompare;
        for (var d = 1; d < a.length; d++) {
          var e = b(a[d - 1], a[d]);
          if (0 < e || e == 0 && c)
            return false;
        }
        return true;
      };
      goog.array.equals = function(a, b, c) {
        if (!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length)
          return false;
        var d = a.length;
        c = c || goog.array.defaultCompareEquality;
        for (var e = 0; e < d; e++)
          if (!c(a[e], b[e]))
            return false;
        return true;
      };
      goog.array.compare3 = function(a, b, c) {
        c = c || goog.array.defaultCompare;
        for (var d = Math.min(a.length, b.length), e = 0; e < d; e++) {
          var f = c(a[e], b[e]);
          if (f != 0)
            return f;
        }
        return goog.array.defaultCompare(a.length, b.length);
      };
      goog.array.defaultCompare = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
      };
      goog.array.inverseDefaultCompare = function(a, b) {
        return -goog.array.defaultCompare(a, b);
      };
      goog.array.defaultCompareEquality = function(a, b) {
        return a === b;
      };
      goog.array.binaryInsert = function(a, b, c) {
        c = goog.array.binarySearch(a, b, c);
        return 0 > c ? (goog.array.insertAt(a, b, -(c + 1)), true) : false;
      };
      goog.array.binaryRemove = function(a, b, c) {
        b = goog.array.binarySearch(a, b, c);
        return 0 <= b ? goog.array.removeAt(a, b) : false;
      };
      goog.array.bucket = function(a, b, c) {
        for (var d = {}, e = 0; e < a.length; e++) {
          var f = a[e], g = b.call(c, f, e, a);
          goog.isDef(g) && (d[g] || (d[g] = [])).push(f);
        }
        return d;
      };
      goog.array.toObject = function(a, b, c) {
        var d = {};
        goog.array.forEach(a, function(e, f) {
          d[b.call(c, e, f, a)] = e;
        });
        return d;
      };
      goog.array.range = function(a, b, c) {
        var d = [], e = 0, f = a;
        c = c || 1;
        b !== void 0 && (e = a, f = b);
        if (0 > c * (f - e))
          return [];
        if (0 < c)
          for (a = e; a < f; a += c)
            d.push(a);
        else
          for (a = e; a > f; a += c)
            d.push(a);
        return d;
      };
      goog.array.repeat = function(a, b) {
        for (var c = [], d = 0; d < b; d++)
          c[d] = a;
        return c;
      };
      goog.array.flatten = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
          var d = arguments[c];
          if (goog.isArray(d))
            for (var e = 0; e < d.length; e += 8192) {
              var f = goog.array.slice(d, e, e + 8192);
              f = goog.array.flatten.apply(null, f);
              for (var g = 0; g < f.length; g++)
                b.push(f[g]);
            }
          else
            b.push(d);
        }
        return b;
      };
      goog.array.rotate = function(a, b) {
        goog.asserts.assert(a.length != null);
        a.length && (b %= a.length, 0 < b ? Array.prototype.unshift.apply(a, a.splice(-b, b)) : 0 > b && Array.prototype.push.apply(a, a.splice(0, -b)));
        return a;
      };
      goog.array.moveItem = function(a, b, c) {
        goog.asserts.assert(0 <= b && b < a.length);
        goog.asserts.assert(0 <= c && c < a.length);
        b = Array.prototype.splice.call(a, b, 1);
        Array.prototype.splice.call(a, c, 0, b[0]);
      };
      goog.array.zip = function(a) {
        if (!arguments.length)
          return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
          arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
          for (var e = [], f = 0; f < arguments.length; f++)
            e.push(arguments[f][d]);
          b.push(e);
        }
        return b;
      };
      goog.array.shuffle = function(a, b) {
        b = b || Math.random;
        for (var c = a.length - 1; 0 < c; c--) {
          var d = Math.floor(b() * (c + 1)), e = a[c];
          a[c] = a[d];
          a[d] = e;
        }
      };
      goog.array.copyByIndex = function(a, b) {
        var c = [];
        goog.array.forEach(b, function(b2) {
          c.push(a[b2]);
        });
        return c;
      };
      goog.array.concatMap = function(a, b, c) {
        return goog.array.concat.apply([], goog.array.map(a, b, c));
      };
      goog.crypt = {};
      goog.crypt.stringToByteArray = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          255 < e && (b[c++] = e & 255, e >>= 8);
          b[c++] = e;
        }
        return b;
      };
      goog.crypt.byteArrayToString = function(a) {
        if (8192 >= a.length)
          return String.fromCharCode.apply(null, a);
        for (var b = "", c = 0; c < a.length; c += 8192) {
          var d = goog.array.slice(a, c, c + 8192);
          b += String.fromCharCode.apply(null, d);
        }
        return b;
      };
      goog.crypt.byteArrayToHex = function(a, b) {
        return goog.array.map(a, function(a2) {
          a2 = a2.toString(16);
          return 1 < a2.length ? a2 : "0" + a2;
        }).join(b || "");
      };
      goog.crypt.hexToByteArray = function(a) {
        goog.asserts.assert(a.length % 2 == 0, "Key string length must be multiple of 2");
        for (var b = [], c = 0; c < a.length; c += 2)
          b.push(parseInt(a.substring(c, c + 2), 16));
        return b;
      };
      goog.crypt.stringToUtf8ByteArray = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
        }
        return b;
      };
      goog.crypt.utf8ByteArrayToString = function(a) {
        for (var b = [], c = 0, d = 0; c < a.length; ) {
          var e = a[c++];
          if (128 > e)
            b[d++] = String.fromCharCode(e);
          else if (191 < e && 224 > e) {
            var f = a[c++];
            b[d++] = String.fromCharCode((e & 31) << 6 | f & 63);
          } else if (239 < e && 365 > e) {
            f = a[c++];
            var g = a[c++], h = a[c++];
            e = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
            b[d++] = String.fromCharCode(55296 + (e >> 10));
            b[d++] = String.fromCharCode(56320 + (e & 1023));
          } else
            f = a[c++], g = a[c++], b[d++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63);
        }
        return b.join("");
      };
      goog.crypt.xorByteArray = function(a, b) {
        goog.asserts.assert(a.length == b.length, "XOR array lengths must match");
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] ^ b[d]);
        return c;
      };
      goog.string = {};
      goog.string.internal = {};
      goog.string.internal.startsWith = function(a, b) {
        return a.lastIndexOf(b, 0) == 0;
      };
      goog.string.internal.endsWith = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c;
      };
      goog.string.internal.caseInsensitiveStartsWith = function(a, b) {
        return goog.string.internal.caseInsensitiveCompare(b, a.substr(0, b.length)) == 0;
      };
      goog.string.internal.caseInsensitiveEndsWith = function(a, b) {
        return goog.string.internal.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length)) == 0;
      };
      goog.string.internal.caseInsensitiveEquals = function(a, b) {
        return a.toLowerCase() == b.toLowerCase();
      };
      goog.string.internal.isEmptyOrWhitespace = function(a) {
        return /^[\s\xa0]*$/.test(a);
      };
      goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a) {
        return a.trim();
      } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
      goog.string.internal.caseInsensitiveCompare = function(a, b) {
        a = String(a).toLowerCase();
        b = String(b).toLowerCase();
        return a < b ? -1 : a == b ? 0 : 1;
      };
      goog.string.internal.newLineToBr = function(a, b) {
        return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>");
      };
      goog.string.internal.htmlEscape = function(a, b) {
        if (b)
          a = a.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
        else {
          if (!goog.string.internal.ALL_RE_.test(a))
            return a;
          a.indexOf("&") != -1 && (a = a.replace(goog.string.internal.AMP_RE_, "&amp;"));
          a.indexOf("<") != -1 && (a = a.replace(goog.string.internal.LT_RE_, "&lt;"));
          a.indexOf(">") != -1 && (a = a.replace(goog.string.internal.GT_RE_, "&gt;"));
          a.indexOf('"') != -1 && (a = a.replace(goog.string.internal.QUOT_RE_, "&quot;"));
          a.indexOf("'") != -1 && (a = a.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
          a.indexOf("\0") != -1 && (a = a.replace(goog.string.internal.NULL_RE_, "&#0;"));
        }
        return a;
      };
      goog.string.internal.AMP_RE_ = /&/g;
      goog.string.internal.LT_RE_ = /</g;
      goog.string.internal.GT_RE_ = />/g;
      goog.string.internal.QUOT_RE_ = /"/g;
      goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
      goog.string.internal.NULL_RE_ = /\x00/g;
      goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
      goog.string.internal.whitespaceEscape = function(a, b) {
        return goog.string.internal.newLineToBr(a.replace(/  /g, " &#160;"), b);
      };
      goog.string.internal.contains = function(a, b) {
        return a.indexOf(b) != -1;
      };
      goog.string.internal.caseInsensitiveContains = function(a, b) {
        return goog.string.internal.contains(a.toLowerCase(), b.toLowerCase());
      };
      goog.string.internal.compareVersions = function(a, b) {
        var c = 0;
        a = goog.string.internal.trim(String(a)).split(".");
        b = goog.string.internal.trim(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
          var f = a[e] || "", g = b[e] || "";
          do {
            f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            if (f[0].length == 0 && g[0].length == 0)
              break;
            c = f[1].length == 0 ? 0 : parseInt(f[1], 10);
            var h = g[1].length == 0 ? 0 : parseInt(g[1], 10);
            c = goog.string.internal.compareElements_(c, h) || goog.string.internal.compareElements_(f[2].length == 0, g[2].length == 0) || goog.string.internal.compareElements_(f[2], g[2]);
            f = f[3];
            g = g[3];
          } while (c == 0);
        }
        return c;
      };
      goog.string.internal.compareElements_ = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
      };
      goog.string.TypedString = function() {
      };
      goog.string.Const = function(a, b) {
        this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && b || "";
        this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
      };
      goog.string.Const.prototype.implementsGoogStringTypedString = true;
      goog.string.Const.prototype.getTypedStringValue = function() {
        return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
      };
      goog.string.Const.prototype.toString = function() {
        return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
      };
      goog.string.Const.unwrap = function(a) {
        if (a instanceof goog.string.Const && a.constructor === goog.string.Const && a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_)
          return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
        goog.asserts.fail("expected object of type Const, got '" + a + "'");
        return "type_error:Const";
      };
      goog.string.Const.from = function(a) {
        return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a);
      };
      goog.string.Const.TYPE_MARKER_ = {};
      goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
      goog.string.Const.EMPTY = goog.string.Const.from("");
      goog.fs = {};
      goog.fs.url = {};
      goog.fs.url.createObjectUrl = function(a) {
        return goog.fs.url.getUrlObject_().createObjectURL(a);
      };
      goog.fs.url.revokeObjectUrl = function(a) {
        goog.fs.url.getUrlObject_().revokeObjectURL(a);
      };
      goog.fs.url.getUrlObject_ = function() {
        var a = goog.fs.url.findUrlObject_();
        if (a != null)
          return a;
        throw Error("This browser doesn't seem to support blob URLs");
      };
      goog.fs.url.findUrlObject_ = function() {
        return goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL) ? goog.global.URL : goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL) ? goog.global.webkitURL : goog.isDef(goog.global.createObjectURL) ? goog.global : null;
      };
      goog.fs.url.browserSupportsObjectUrls = function() {
        return goog.fs.url.findUrlObject_() != null;
      };
      goog.html = {};
      goog.html.trustedtypes = {};
      goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null;
      goog.i18n = {};
      goog.i18n.bidi = {};
      goog.i18n.bidi.FORCE_RTL = false;
      goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || (goog.LOCALE.substring(0, 2).toLowerCase() == "ar" || goog.LOCALE.substring(0, 2).toLowerCase() == "fa" || goog.LOCALE.substring(0, 2).toLowerCase() == "he" || goog.LOCALE.substring(0, 2).toLowerCase() == "iw" || goog.LOCALE.substring(0, 2).toLowerCase() == "ps" || goog.LOCALE.substring(0, 2).toLowerCase() == "sd" || goog.LOCALE.substring(0, 2).toLowerCase() == "ug" || goog.LOCALE.substring(0, 2).toLowerCase() == "ur" || goog.LOCALE.substring(0, 2).toLowerCase() == "yi") && (goog.LOCALE.length == 2 || goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") || 3 <= goog.LOCALE.length && goog.LOCALE.substring(0, 3).toLowerCase() == "ckb" && (goog.LOCALE.length == 3 || goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") || 7 <= goog.LOCALE.length && (goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") && (goog.LOCALE.substring(3, 7).toLowerCase() == "adlm" || goog.LOCALE.substring(3, 7).toLowerCase() == "arab" || goog.LOCALE.substring(3, 7).toLowerCase() == "hebr" || goog.LOCALE.substring(3, 7).toLowerCase() == "nkoo" || goog.LOCALE.substring(3, 7).toLowerCase() == "rohg" || goog.LOCALE.substring(3, 7).toLowerCase() == "thaa") || 8 <= goog.LOCALE.length && (goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") && (goog.LOCALE.substring(4, 8).toLowerCase() == "adlm" || goog.LOCALE.substring(4, 8).toLowerCase() == "arab" || goog.LOCALE.substring(4, 8).toLowerCase() == "hebr" || goog.LOCALE.substring(4, 8).toLowerCase() == "nkoo" || goog.LOCALE.substring(4, 8).toLowerCase() == "rohg" || goog.LOCALE.substring(4, 8).toLowerCase() == "thaa");
      goog.i18n.bidi.Format = { LRE: "\u202A", RLE: "\u202B", PDF: "\u202C", LRM: "\u200E", RLM: "\u200F" };
      goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 };
      goog.i18n.bidi.RIGHT = "right";
      goog.i18n.bidi.LEFT = "left";
      goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
      goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
      goog.i18n.bidi.toDir = function(a, b) {
        return typeof a == "number" ? 0 < a ? goog.i18n.bidi.Dir.LTR : 0 > a ? goog.i18n.bidi.Dir.RTL : b ? null : goog.i18n.bidi.Dir.NEUTRAL : a == null ? null : a ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
      };
      goog.i18n.bidi.ltrChars_ = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0900-\u1FFF\u200E\u2C00-\uD801\uD804-\uD839\uD83C-\uDBFF\uF900-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
      goog.i18n.bidi.rtlChars_ = "\u0591-\u06EF\u06FA-\u08FF\u200F\uD802-\uD803\uD83A-\uD83B\uFB1D-\uFDFF\uFE70-\uFEFC";
      goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
      goog.i18n.bidi.stripHtmlIfNeeded_ = function(a, b) {
        return b ? a.replace(goog.i18n.bidi.htmlSkipReg_, "") : a;
      };
      goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.hasAnyRtl = function(a, b) {
        return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
      };
      goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
      goog.i18n.bidi.hasAnyLtr = function(a, b) {
        return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
      };
      goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.isRtlChar = function(a) {
        return goog.i18n.bidi.rtlRe_.test(a);
      };
      goog.i18n.bidi.isLtrChar = function(a) {
        return goog.i18n.bidi.ltrRe_.test(a);
      };
      goog.i18n.bidi.isNeutralChar = function(a) {
        return !goog.i18n.bidi.isLtrChar(a) && !goog.i18n.bidi.isRtlChar(a);
      };
      goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.startsWithRtl = function(a, b) {
        return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
      };
      goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
      goog.i18n.bidi.startsWithLtr = function(a, b) {
        return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
      };
      goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
      goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
      goog.i18n.bidi.isNeutralText = function(a, b) {
        a = goog.i18n.bidi.stripHtmlIfNeeded_(a, b);
        return goog.i18n.bidi.isRequiredLtrRe_.test(a) || !goog.i18n.bidi.hasAnyLtr(a) && !goog.i18n.bidi.hasAnyRtl(a);
      };
      goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
      goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
      goog.i18n.bidi.endsWithLtr = function(a, b) {
        return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
      };
      goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
      goog.i18n.bidi.endsWithRtl = function(a, b) {
        return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b));
      };
      goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
      goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
      goog.i18n.bidi.isRtlLanguage = function(a) {
        return goog.i18n.bidi.rtlLocalesRe_.test(a);
      };
      goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
      goog.i18n.bidi.guardBracketInText = function(a, b) {
        b = (b === void 0 ? goog.i18n.bidi.hasAnyRtl(a) : b) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
        return a.replace(goog.i18n.bidi.bracketGuardTextRe_, b + "$&" + b);
      };
      goog.i18n.bidi.enforceRtlInHtml = function(a) {
        return a.charAt(0) == "<" ? a.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a + "</span>";
      };
      goog.i18n.bidi.enforceRtlInText = function(a) {
        return goog.i18n.bidi.Format.RLE + a + goog.i18n.bidi.Format.PDF;
      };
      goog.i18n.bidi.enforceLtrInHtml = function(a) {
        return a.charAt(0) == "<" ? a.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a + "</span>";
      };
      goog.i18n.bidi.enforceLtrInText = function(a) {
        return goog.i18n.bidi.Format.LRE + a + goog.i18n.bidi.Format.PDF;
      };
      goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
      goog.i18n.bidi.leftRe_ = /left/gi;
      goog.i18n.bidi.rightRe_ = /right/gi;
      goog.i18n.bidi.tempRe_ = /%%%%/g;
      goog.i18n.bidi.mirrorCSS = function(a) {
        return a.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
      };
      goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
      goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
      goog.i18n.bidi.normalizeHebrewQuote = function(a) {
        return a.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05F4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05F3");
      };
      goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
      goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
      goog.i18n.bidi.rtlDetectionThreshold_ = 0.4;
      goog.i18n.bidi.estimateDirection = function(a, b) {
        var c = 0, d = 0, e = false;
        a = goog.i18n.bidi.stripHtmlIfNeeded_(a, b).split(goog.i18n.bidi.wordSeparatorRe_);
        for (b = 0; b < a.length; b++) {
          var f = a[b];
          goog.i18n.bidi.startsWithRtl(f) ? (c++, d++) : goog.i18n.bidi.isRequiredLtrRe_.test(f) ? e = true : goog.i18n.bidi.hasAnyLtr(f) ? d++ : goog.i18n.bidi.hasNumeralsRe_.test(f) && (e = true);
        }
        return d == 0 ? e ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : c / d > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
      };
      goog.i18n.bidi.detectRtlDirectionality = function(a, b) {
        return goog.i18n.bidi.estimateDirection(a, b) == goog.i18n.bidi.Dir.RTL;
      };
      goog.i18n.bidi.setElementDirAndAlign = function(a, b) {
        a && (b = goog.i18n.bidi.toDir(b)) && (a.style.textAlign = b == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, a.dir = b == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
      };
      goog.i18n.bidi.setElementDirByTextDirectionality = function(a, b) {
        switch (goog.i18n.bidi.estimateDirection(b)) {
          case goog.i18n.bidi.Dir.LTR:
            a.dir = "ltr";
            break;
          case goog.i18n.bidi.Dir.RTL:
            a.dir = "rtl";
            break;
          default:
            a.removeAttribute("dir");
        }
      };
      goog.i18n.bidi.DirectionalString = function() {
      };
      goog.html.TrustedResourceUrl = function() {
        this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "";
        this.trustedURL_ = null;
        this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
      goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
      };
      goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.TrustedResourceUrl.prototype.getDirection = function() {
        return goog.i18n.bidi.Dir.LTR;
      };
      goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(a, b) {
        var c = goog.html.TrustedResourceUrl.unwrap(this);
        c = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c);
        var d = c[3] || "";
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", c[2] || "", a) + goog.html.TrustedResourceUrl.stringifyParams_("#", d, b));
      };
      goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
      });
      goog.html.TrustedResourceUrl.unwrap = function(a) {
        return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a).toString();
      };
      goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(a) {
        if (a instanceof goog.html.TrustedResourceUrl && a.constructor === goog.html.TrustedResourceUrl && a.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
        goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a + "' of type " + goog.typeOf(a));
        return "type_error:TrustedResourceUrl";
      };
      goog.html.TrustedResourceUrl.unwrapTrustedURL = function(a) {
        return a.trustedURL_ ? a.trustedURL_ : goog.html.TrustedResourceUrl.unwrap(a);
      };
      goog.html.TrustedResourceUrl.format = function(a, b) {
        var c = goog.string.Const.unwrap(a);
        if (!goog.html.TrustedResourceUrl.BASE_URL_.test(c))
          throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(a2, e) {
          if (!Object.prototype.hasOwnProperty.call(b, e))
            throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
          a2 = b[e];
          return a2 instanceof goog.string.Const ? goog.string.Const.unwrap(a2) : encodeURIComponent(String(a2));
        });
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
      goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
      goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
      goog.html.TrustedResourceUrl.formatWithParams = function(a, b, c, d) {
        return goog.html.TrustedResourceUrl.format(a, b).cloneWithParams(c, d);
      };
      goog.html.TrustedResourceUrl.fromConstant = function(a) {
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a));
      };
      goog.html.TrustedResourceUrl.fromConstants = function(a) {
        for (var b = "", c = 0; c < a.length; c++)
          b += goog.string.Const.unwrap(a[c]);
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b);
      };
      goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(a) {
        var b = new goog.html.TrustedResourceUrl();
        b.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a) : a;
        goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY && (b.trustedURL_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a));
        return b;
      };
      goog.html.TrustedResourceUrl.stringifyParams_ = function(a, b, c) {
        if (c == null)
          return b;
        if (goog.isString(c))
          return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
          var e = c[d];
          e = goog.isArray(e) ? e : [e];
          for (var f = 0; f < e.length; f++) {
            var g = e[f];
            g != null && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)));
          }
        }
        return b;
      };
      goog.html.SafeUrl = function() {
        this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = "";
        this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
      goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
      };
      goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.SafeUrl.prototype.getDirection = function() {
        return goog.i18n.bidi.Dir.LTR;
      };
      goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
        return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}";
      });
      goog.html.SafeUrl.unwrap = function(a) {
        return goog.html.SafeUrl.unwrapTrustedURL(a).toString();
      };
      goog.html.SafeUrl.unwrapTrustedURL = function(a) {
        if (a instanceof goog.html.SafeUrl && a.constructor === goog.html.SafeUrl && a.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a.privateDoNotAccessOrElseSafeUrlWrappedValue_;
        goog.asserts.fail("expected object of type SafeUrl, got '" + a + "' of type " + goog.typeOf(a));
        return "type_error:SafeUrl";
      };
      goog.html.SafeUrl.fromConstant = function(a) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a));
      };
      goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i;
      goog.html.SafeUrl.isSafeMimeType = function(a) {
        return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a);
      };
      goog.html.SafeUrl.fromBlob = function(a) {
        a = goog.html.SAFE_MIME_TYPE_PATTERN_.test(a.type) ? goog.fs.url.createObjectUrl(a) : goog.html.SafeUrl.INNOCUOUS_STRING;
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.DATA_URL_PATTERN_ = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i;
      goog.html.SafeUrl.fromDataUrl = function(a) {
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(goog.html.DATA_URL_PATTERN_);
        b = b && goog.html.SAFE_MIME_TYPE_PATTERN_.test(b[1]);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b ? a : goog.html.SafeUrl.INNOCUOUS_STRING);
      };
      goog.html.SafeUrl.fromTelUrl = function(a) {
        goog.string.internal.caseInsensitiveStartsWith(a, "tel:") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
      goog.html.SafeUrl.fromSipUrl = function(a) {
        goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a)) || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SafeUrl.fromFacebookMessengerUrl = function(a) {
        goog.string.internal.caseInsensitiveStartsWith(a, "fb-messenger://share") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SafeUrl.fromWhatsAppUrl = function(a) {
        goog.string.internal.caseInsensitiveStartsWith(a, "whatsapp://send") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SafeUrl.fromSmsUrl = function(a) {
        goog.string.internal.caseInsensitiveStartsWith(a, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(a) || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SafeUrl.isSmsUrlBodyValid_ = function(a) {
        var b = a.indexOf("#");
        0 < b && (a = a.substring(0, b));
        b = a.match(/[?&]body=/gi);
        if (!b)
          return true;
        if (1 < b.length)
          return false;
        a = a.match(/[?&]body=([^&]*)/)[1];
        if (!a)
          return true;
        try {
          decodeURIComponent(a);
        } catch (c) {
          return false;
        }
        return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a);
      };
      goog.html.SafeUrl.fromSshUrl = function(a) {
        goog.string.internal.caseInsensitiveStartsWith(a, "ssh://") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(a, b) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a, b);
      };
      goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(a, b) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a, b);
      };
      goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(a, b) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a, b);
      };
      goog.html.SafeUrl.sanitizeExtensionUrl_ = function(a, b, c) {
        (a = a.exec(b)) ? (a = a[1], (c instanceof goog.string.Const ? [goog.string.Const.unwrap(c)] : c.map(function(a2) {
          return goog.string.Const.unwrap(a2);
        })).indexOf(a) == -1 && (b = goog.html.SafeUrl.INNOCUOUS_STRING)) : b = goog.html.SafeUrl.INNOCUOUS_STRING;
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b);
      };
      goog.html.SafeUrl.fromTrustedResourceUrl = function(a) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a));
      };
      goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
      goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
      goog.html.SafeUrl.sanitize = function(a) {
        if (a instanceof goog.html.SafeUrl)
          return a;
        a = typeof a == "object" && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
        goog.html.SAFE_URL_PATTERN_.test(a) || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SafeUrl.sanitizeAssertUnchanged = function(a, b) {
        if (a instanceof goog.html.SafeUrl)
          return a;
        a = typeof a == "object" && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
        if (b && /^data:/i.test(a) && (b = goog.html.SafeUrl.fromDataUrl(a), b.getTypedStringValue() == a))
          return b;
        goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a), "%s does not match the safe URL pattern", a) || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(a) {
        var b = new goog.html.SafeUrl();
        b.privateDoNotAccessOrElseSafeUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a) : a;
        return b;
      };
      goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
      goog.html.SafeStyle = function() {
        this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
        this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeStyle.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeStyle.fromConstant = function(a) {
        a = goog.string.Const.unwrap(a);
        if (a.length === 0)
          return goog.html.SafeStyle.EMPTY;
        goog.asserts.assert(goog.string.internal.endsWith(a, ";"), "Last character of style string is not ';': " + a);
        goog.asserts.assert(goog.string.internal.contains(a, ":"), `Style string must contain at least one ':', to specify a "name: value" pair: ` + a);
        return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SafeStyle.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
      };
      goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
        return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}";
      });
      goog.html.SafeStyle.unwrap = function(a) {
        if (a instanceof goog.html.SafeStyle && a.constructor === goog.html.SafeStyle && a.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a.privateDoNotAccessOrElseSafeStyleWrappedValue_;
        goog.asserts.fail("expected object of type SafeStyle, got '" + a + "' of type " + goog.typeOf(a));
        return "type_error:SafeStyle";
      };
      goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(a) {
        return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(a);
      };
      goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a) {
        this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = a;
        return this;
      };
      goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
      goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
      goog.html.SafeStyle.create = function(a) {
        var b = "", c;
        for (c in a) {
          if (!/^[-_a-zA-Z0-9]+$/.test(c))
            throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
          var d = a[c];
          d != null && (d = goog.isArray(d) ? goog.array.map(d, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(d), b += c + ":" + d + ";");
        }
        return b ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b) : goog.html.SafeStyle.EMPTY;
      };
      goog.html.SafeStyle.sanitizePropertyValue_ = function(a) {
        if (a instanceof goog.html.SafeUrl)
          return 'url("' + goog.html.SafeUrl.unwrap(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        a = a instanceof goog.string.Const ? goog.string.Const.unwrap(a) : goog.html.SafeStyle.sanitizePropertyValueString_(String(a));
        if (/[{;}]/.test(a))
          throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [a]);
        return a;
      };
      goog.html.SafeStyle.sanitizePropertyValueString_ = function(a) {
        var b = a.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
        if (goog.html.SafeStyle.VALUE_RE_.test(b)) {
          if (goog.html.SafeStyle.COMMENT_RE_.test(a))
            return goog.asserts.fail("String value disallows comments, got: " + a), goog.html.SafeStyle.INNOCUOUS_STRING;
          if (!goog.html.SafeStyle.hasBalancedQuotes_(a))
            return goog.asserts.fail("String value requires balanced quotes, got: " + a), goog.html.SafeStyle.INNOCUOUS_STRING;
          if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(a))
            return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), goog.html.SafeStyle.INNOCUOUS_STRING;
        } else
          return goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + a), goog.html.SafeStyle.INNOCUOUS_STRING;
        return goog.html.SafeStyle.sanitizeUrl_(a);
      };
      goog.html.SafeStyle.hasBalancedQuotes_ = function(a) {
        for (var b = true, c = true, d = 0; d < a.length; d++) {
          var e = a.charAt(d);
          e == "'" && c ? b = !b : e == '"' && b && (c = !c);
        }
        return b && c;
      };
      goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(a) {
        for (var b = true, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
          var e = a.charAt(d);
          if (e == "]") {
            if (b)
              return false;
            b = true;
          } else if (e == "[") {
            if (!b)
              return false;
            b = false;
          } else if (!b && !c.test(e))
            return false;
        }
        return b;
      };
      goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = `[-,."'%_!# a-zA-Z0-9\\[\\]]`;
      goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
      goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
      goog.html.SafeStyle.FUNCTIONS_RE_ = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
      goog.html.SafeStyle.COMMENT_RE_ = /\/\*/;
      goog.html.SafeStyle.sanitizeUrl_ = function(a) {
        return a.replace(goog.html.SafeStyle.URL_RE_, function(a2, c, d, e) {
          var b = "";
          d = d.replace(/^(['"])(.*)\1$/, function(a3, c2, d2) {
            b = c2;
            return d2;
          });
          a2 = goog.html.SafeUrl.sanitize(d).getTypedStringValue();
          return c + b + a2 + b + e;
        });
      };
      goog.html.SafeStyle.concat = function(a) {
        var b = "", c = function(a2) {
          goog.isArray(a2) ? goog.array.forEach(a2, c) : b += goog.html.SafeStyle.unwrap(a2);
        };
        goog.array.forEach(arguments, c);
        return b ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b) : goog.html.SafeStyle.EMPTY;
      };
      goog.html.SafeScript = function() {
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
        this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeScript.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeScript.fromConstant = function(a) {
        a = goog.string.Const.unwrap(a);
        return a.length === 0 ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SafeScript.fromConstantAndArgs = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; d++)
          c.push(goog.html.SafeScript.stringify_(arguments[d]));
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(a) + ")(" + c.join(", ") + ");");
      };
      goog.html.SafeScript.fromJson = function(a) {
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(a));
      };
      goog.html.SafeScript.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
      };
      goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
        return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
      });
      goog.html.SafeScript.unwrap = function(a) {
        return goog.html.SafeScript.unwrapTrustedScript(a).toString();
      };
      goog.html.SafeScript.unwrapTrustedScript = function(a) {
        if (a instanceof goog.html.SafeScript && a.constructor === goog.html.SafeScript && a.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a.privateDoNotAccessOrElseSafeScriptWrappedValue_;
        goog.asserts.fail("expected object of type SafeScript, got '" + a + "' of type " + goog.typeOf(a));
        return "type_error:SafeScript";
      };
      goog.html.SafeScript.stringify_ = function(a) {
        return JSON.stringify(a).replace(/</g, "\\x3c");
      };
      goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(a) {
        return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(a);
      };
      goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a) {
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a) : a;
        return this;
      };
      goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
      goog.object = {};
      goog.object.is = function(a, b) {
        return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
      };
      goog.object.forEach = function(a, b, c) {
        for (var d in a)
          b.call(c, a[d], d, a);
      };
      goog.object.filter = function(a, b, c) {
        var d = {}, e;
        for (e in a)
          b.call(c, a[e], e, a) && (d[e] = a[e]);
        return d;
      };
      goog.object.map = function(a, b, c) {
        var d = {}, e;
        for (e in a)
          d[e] = b.call(c, a[e], e, a);
        return d;
      };
      goog.object.some = function(a, b, c) {
        for (var d in a)
          if (b.call(c, a[d], d, a))
            return true;
        return false;
      };
      goog.object.every = function(a, b, c) {
        for (var d in a)
          if (!b.call(c, a[d], d, a))
            return false;
        return true;
      };
      goog.object.getCount = function(a) {
        var b = 0, c;
        for (c in a)
          b++;
        return b;
      };
      goog.object.getAnyKey = function(a) {
        for (var b in a)
          return b;
      };
      goog.object.getAnyValue = function(a) {
        for (var b in a)
          return a[b];
      };
      goog.object.contains = function(a, b) {
        return goog.object.containsValue(a, b);
      };
      goog.object.getValues = function(a) {
        var b = [], c = 0, d;
        for (d in a)
          b[c++] = a[d];
        return b;
      };
      goog.object.getKeys = function(a) {
        var b = [], c = 0, d;
        for (d in a)
          b[c++] = d;
        return b;
      };
      goog.object.getValueByKeys = function(a, b) {
        var c = goog.isArrayLike(b), d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
          if (a == null)
            return;
          a = a[d[c]];
        }
        return a;
      };
      goog.object.containsKey = function(a, b) {
        return a !== null && b in a;
      };
      goog.object.containsValue = function(a, b) {
        for (var c in a)
          if (a[c] == b)
            return true;
        return false;
      };
      goog.object.findKey = function(a, b, c) {
        for (var d in a)
          if (b.call(c, a[d], d, a))
            return d;
      };
      goog.object.findValue = function(a, b, c) {
        return (b = goog.object.findKey(a, b, c)) && a[b];
      };
      goog.object.isEmpty = function(a) {
        for (var b in a)
          return false;
        return true;
      };
      goog.object.clear = function(a) {
        for (var b in a)
          delete a[b];
      };
      goog.object.remove = function(a, b) {
        var c;
        (c = b in a) && delete a[b];
        return c;
      };
      goog.object.add = function(a, b, c) {
        if (a !== null && b in a)
          throw Error('The object already contains the key "' + b + '"');
        goog.object.set(a, b, c);
      };
      goog.object.get = function(a, b, c) {
        return a !== null && b in a ? a[b] : c;
      };
      goog.object.set = function(a, b, c) {
        a[b] = c;
      };
      goog.object.setIfUndefined = function(a, b, c) {
        return b in a ? a[b] : a[b] = c;
      };
      goog.object.setWithReturnValueIfNotSet = function(a, b, c) {
        if (b in a)
          return a[b];
        c = c();
        return a[b] = c;
      };
      goog.object.equals = function(a, b) {
        for (var c in a)
          if (!(c in b) || a[c] !== b[c])
            return false;
        for (var d in b)
          if (!(d in a))
            return false;
        return true;
      };
      goog.object.clone = function(a) {
        var b = {}, c;
        for (c in a)
          b[c] = a[c];
        return b;
      };
      goog.object.unsafeClone = function(a) {
        var b = goog.typeOf(a);
        if (b == "object" || b == "array") {
          if (goog.isFunction(a.clone))
            return a.clone();
          b = b == "array" ? [] : {};
          for (var c in a)
            b[c] = goog.object.unsafeClone(a[c]);
          return b;
        }
        return a;
      };
      goog.object.transpose = function(a) {
        var b = {}, c;
        for (c in a)
          b[a[c]] = c;
        return b;
      };
      goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      goog.object.extend = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
          d = arguments[e];
          for (c in d)
            a[c] = d[c];
          for (var f = 0; f < goog.object.PROTOTYPE_FIELDS_.length; f++)
            c = goog.object.PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      };
      goog.object.create = function(a) {
        var b = arguments.length;
        if (b == 1 && goog.isArray(arguments[0]))
          return goog.object.create.apply(null, arguments[0]);
        if (b % 2)
          throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2)
          c[arguments[d]] = arguments[d + 1];
        return c;
      };
      goog.object.createSet = function(a) {
        var b = arguments.length;
        if (b == 1 && goog.isArray(arguments[0]))
          return goog.object.createSet.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
          c[arguments[d]] = true;
        return c;
      };
      goog.object.createImmutableView = function(a) {
        var b = a;
        Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b));
        return b;
      };
      goog.object.isImmutableView = function(a) {
        return !!Object.isFrozen && Object.isFrozen(a);
      };
      goog.object.getAllPropertyNames = function(a, b, c) {
        if (!a)
          return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
          return goog.object.getKeys(a);
        for (var d = {}; a && (a !== Object.prototype || b) && (a !== Function.prototype || c); ) {
          for (var e = Object.getOwnPropertyNames(a), f = 0; f < e.length; f++)
            d[e[f]] = true;
          a = Object.getPrototypeOf(a);
        }
        return goog.object.getKeys(d);
      };
      goog.object.getSuperClass = function(a) {
        return (a = Object.getPrototypeOf(a.prototype)) && a.constructor;
      };
      goog.html.SafeStyleSheet = function() {
        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
        this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeStyleSheet.createRule = function(a, b) {
        if (goog.string.internal.contains(a, "<"))
          throw Error("Selector does not allow '<', got: " + a);
        var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))
          throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
        if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(c))
          throw Error("() and [] in selector must be balanced, got: " + a);
        b instanceof goog.html.SafeStyle || (b = goog.html.SafeStyle.create(b));
        a = a + "{" + goog.html.SafeStyle.unwrap(b).replace(/</g, "\\3C ") + "}";
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(a) {
        for (var b = { "(": ")", "[": "]" }, c = [], d = 0; d < a.length; d++) {
          var e = a[d];
          if (b[e])
            c.push(b[e]);
          else if (goog.object.contains(b, e) && c.pop() != e)
            return false;
        }
        return c.length == 0;
      };
      goog.html.SafeStyleSheet.concat = function(a) {
        var b = "", c = function(a2) {
          goog.isArray(a2) ? goog.array.forEach(a2, c) : b += goog.html.SafeStyleSheet.unwrap(a2);
        };
        goog.array.forEach(arguments, c);
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b);
      };
      goog.html.SafeStyleSheet.fromConstant = function(a) {
        a = goog.string.Const.unwrap(a);
        if (a.length === 0)
          return goog.html.SafeStyleSheet.EMPTY;
        goog.asserts.assert(!goog.string.internal.contains(a, "<"), "Forbidden '<' character in style sheet string: " + a);
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a);
      };
      goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
      };
      goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
        return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
      });
      goog.html.SafeStyleSheet.unwrap = function(a) {
        if (a instanceof goog.html.SafeStyleSheet && a.constructor === goog.html.SafeStyleSheet && a.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
        goog.asserts.fail("expected object of type SafeStyleSheet, got '" + a + "' of type " + goog.typeOf(a));
        return "type_error:SafeStyleSheet";
      };
      goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(a) {
        return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(a);
      };
      goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a) {
        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = a;
        return this;
      };
      goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
      goog.dom.tags = {};
      goog.dom.tags.VOID_TAGS_ = { area: true, base: true, br: true, col: true, command: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
      goog.dom.tags.isVoidTag = function(a) {
        return goog.dom.tags.VOID_TAGS_[a] === true;
      };
      goog.dom.HtmlElement = function() {
      };
      goog.dom.TagName = function(a) {
        this.tagName_ = a;
      };
      goog.dom.TagName.prototype.toString = function() {
        return this.tagName_;
      };
      goog.dom.TagName.A = new goog.dom.TagName("A");
      goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
      goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
      goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
      goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
      goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
      goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
      goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
      goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
      goog.dom.TagName.B = new goog.dom.TagName("B");
      goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
      goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
      goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
      goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
      goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
      goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
      goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
      goog.dom.TagName.BR = new goog.dom.TagName("BR");
      goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON");
      goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS");
      goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION");
      goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER");
      goog.dom.TagName.CITE = new goog.dom.TagName("CITE");
      goog.dom.TagName.CODE = new goog.dom.TagName("CODE");
      goog.dom.TagName.COL = new goog.dom.TagName("COL");
      goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP");
      goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND");
      goog.dom.TagName.DATA = new goog.dom.TagName("DATA");
      goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST");
      goog.dom.TagName.DD = new goog.dom.TagName("DD");
      goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
      goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
      goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
      goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
      goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
      goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
      goog.dom.TagName.DL = new goog.dom.TagName("DL");
      goog.dom.TagName.DT = new goog.dom.TagName("DT");
      goog.dom.TagName.EM = new goog.dom.TagName("EM");
      goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
      goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
      goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
      goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
      goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
      goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
      goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
      goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
      goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
      goog.dom.TagName.H1 = new goog.dom.TagName("H1");
      goog.dom.TagName.H2 = new goog.dom.TagName("H2");
      goog.dom.TagName.H3 = new goog.dom.TagName("H3");
      goog.dom.TagName.H4 = new goog.dom.TagName("H4");
      goog.dom.TagName.H5 = new goog.dom.TagName("H5");
      goog.dom.TagName.H6 = new goog.dom.TagName("H6");
      goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
      goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
      goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
      goog.dom.TagName.HR = new goog.dom.TagName("HR");
      goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
      goog.dom.TagName.I = new goog.dom.TagName("I");
      goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
      goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
      goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
      goog.dom.TagName.INS = new goog.dom.TagName("INS");
      goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
      goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
      goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
      goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
      goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
      goog.dom.TagName.LI = new goog.dom.TagName("LI");
      goog.dom.TagName.LINK = new goog.dom.TagName("LINK");
      goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN");
      goog.dom.TagName.MAP = new goog.dom.TagName("MAP");
      goog.dom.TagName.MARK = new goog.dom.TagName("MARK");
      goog.dom.TagName.MATH = new goog.dom.TagName("MATH");
      goog.dom.TagName.MENU = new goog.dom.TagName("MENU");
      goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM");
      goog.dom.TagName.META = new goog.dom.TagName("META");
      goog.dom.TagName.METER = new goog.dom.TagName("METER");
      goog.dom.TagName.NAV = new goog.dom.TagName("NAV");
      goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES");
      goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT");
      goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT");
      goog.dom.TagName.OL = new goog.dom.TagName("OL");
      goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
      goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
      goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
      goog.dom.TagName.P = new goog.dom.TagName("P");
      goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
      goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE");
      goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
      goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
      goog.dom.TagName.Q = new goog.dom.TagName("Q");
      goog.dom.TagName.RP = new goog.dom.TagName("RP");
      goog.dom.TagName.RT = new goog.dom.TagName("RT");
      goog.dom.TagName.RTC = new goog.dom.TagName("RTC");
      goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
      goog.dom.TagName.S = new goog.dom.TagName("S");
      goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP");
      goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT");
      goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION");
      goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT");
      goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL");
      goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE");
      goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN");
      goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE");
      goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG");
      goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE");
      goog.dom.TagName.SUB = new goog.dom.TagName("SUB");
      goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY");
      goog.dom.TagName.SUP = new goog.dom.TagName("SUP");
      goog.dom.TagName.SVG = new goog.dom.TagName("SVG");
      goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE");
      goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY");
      goog.dom.TagName.TD = new goog.dom.TagName("TD");
      goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
      goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
      goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
      goog.dom.TagName.TH = new goog.dom.TagName("TH");
      goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
      goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
      goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
      goog.dom.TagName.TR = new goog.dom.TagName("TR");
      goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
      goog.dom.TagName.TT = new goog.dom.TagName("TT");
      goog.dom.TagName.U = new goog.dom.TagName("U");
      goog.dom.TagName.UL = new goog.dom.TagName("UL");
      goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
      goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
      goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
      goog.labs = {};
      goog.labs.userAgent = {};
      goog.labs.userAgent.util = {};
      goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
        var a = goog.labs.userAgent.util.getNavigator_();
        return a && (a = a.userAgent) ? a : "";
      };
      goog.labs.userAgent.util.getNavigator_ = function() {
        return goog.global.navigator;
      };
      goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
      goog.labs.userAgent.util.setUserAgent = function(a) {
        goog.labs.userAgent.util.userAgent_ = a || goog.labs.userAgent.util.getNativeUserAgentString_();
      };
      goog.labs.userAgent.util.getUserAgent = function() {
        return goog.labs.userAgent.util.userAgent_;
      };
      goog.labs.userAgent.util.matchUserAgent = function(a) {
        var b = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.contains(b, a);
      };
      goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(a) {
        var b = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.caseInsensitiveContains(b, a);
      };
      goog.labs.userAgent.util.extractVersionTuples = function(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
          c.push([d[1], d[2], d[3] || void 0]);
        return c;
      };
      goog.labs.userAgent.browser = {};
      goog.labs.userAgent.browser.matchOpera_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Opera");
      };
      goog.labs.userAgent.browser.matchIE_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
      };
      goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edge");
      };
      goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edg/");
      };
      goog.labs.userAgent.browser.matchOperaChromium_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("OPR");
      };
      goog.labs.userAgent.browser.matchFirefox_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS");
      };
      goog.labs.userAgent.browser.matchSafari_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
      };
      goog.labs.userAgent.browser.matchCoast_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Coast");
      };
      goog.labs.userAgent.browser.matchIosWebview_ = function() {
        return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
      };
      goog.labs.userAgent.browser.matchChrome_ = function() {
        return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_();
      };
      goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
      };
      goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
      goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
      goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_;
      goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_;
      goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_;
      goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
      goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
      goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
      goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
      goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
      goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
      goog.labs.userAgent.browser.isSilk = function() {
        return goog.labs.userAgent.util.matchUserAgent("Silk");
      };
      goog.labs.userAgent.browser.getVersion = function() {
        function a(a2) {
          a2 = goog.array.find(a2, d);
          return c[a2] || "";
        }
        var b = goog.labs.userAgent.util.getUserAgent();
        if (goog.labs.userAgent.browser.isIE())
          return goog.labs.userAgent.browser.getIEVersion_(b);
        b = goog.labs.userAgent.util.extractVersionTuples(b);
        var c = {};
        goog.array.forEach(b, function(a2) {
          c[a2[0]] = a2[1];
        });
        var d = goog.partial(goog.object.containsKey, c);
        return goog.labs.userAgent.browser.isOpera() ? a(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? a(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? a(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || "";
      };
      goog.labs.userAgent.browser.isVersionOrHigher = function(a) {
        return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), a);
      };
      goog.labs.userAgent.browser.getIEVersion_ = function(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1])
          return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
          if (a = /Trident\/(\d.\d)/.exec(a), c[1] == "7.0")
            if (a && a[1])
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            else
              b = "7.0";
          else
            b = c[1];
        return b;
      };
      goog.html.SafeHtml = function() {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
        this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
        this.dir_ = null;
      };
      goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.SafeHtml.prototype.getDirection = function() {
        return this.dir_;
      };
      goog.html.SafeHtml.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeHtml.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
      };
      goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
        return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
      });
      goog.html.SafeHtml.unwrap = function(a) {
        return goog.html.SafeHtml.unwrapTrustedHTML(a).toString();
      };
      goog.html.SafeHtml.unwrapTrustedHTML = function(a) {
        if (a instanceof goog.html.SafeHtml && a.constructor === goog.html.SafeHtml && a.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
        goog.asserts.fail("expected object of type SafeHtml, got '" + a + "' of type " + goog.typeOf(a));
        return "type_error:SafeHtml";
      };
      goog.html.SafeHtml.htmlEscape = function(a) {
        if (a instanceof goog.html.SafeHtml)
          return a;
        var b = typeof a == "object", c = null;
        b && a.implementsGoogI18nBidiDirectionalString && (c = a.getDirection());
        a = b && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a), c);
      };
      goog.html.SafeHtml.htmlEscapePreservingNewlines = function(a) {
        if (a instanceof goog.html.SafeHtml)
          return a;
        a = goog.html.SafeHtml.htmlEscape(a);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a)), a.getDirection());
      };
      goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(a) {
        if (a instanceof goog.html.SafeHtml)
          return a;
        a = goog.html.SafeHtml.htmlEscape(a);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a)), a.getDirection());
      };
      goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
      goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
      goog.html.SafeHtml.URL_ATTRIBUTES_ = { action: true, cite: true, data: true, formaction: true, href: true, manifest: true, poster: true, src: true };
      goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = { APPLET: true, BASE: true, EMBED: true, IFRAME: true, LINK: true, MATH: true, META: true, OBJECT: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
      goog.html.SafeHtml.create = function(a, b, c) {
        goog.html.SafeHtml.verifyTagName(String(a));
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a), b, c);
      };
      goog.html.SafeHtml.verifyTagName = function(a) {
        if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a))
          throw Error("Invalid tag name <" + a + ">.");
        if (a.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
          throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
      };
      goog.html.SafeHtml.createIframe = function(a, b, c, d) {
        a && goog.html.TrustedResourceUrl.unwrap(a);
        var e = {};
        e.src = a || null;
        e.srcdoc = b && goog.html.SafeHtml.unwrap(b);
        a = goog.html.SafeHtml.combineAttributes(e, { sandbox: "" }, c);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a, d);
      };
      goog.html.SafeHtml.createSandboxIframe = function(a, b, c, d) {
        if (!goog.html.SafeHtml.canUseSandboxIframe())
          throw Error("The browser does not support sandboxed iframes.");
        var e = {};
        e.src = a ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a)) : null;
        e.srcdoc = b || null;
        e.sandbox = "";
        a = goog.html.SafeHtml.combineAttributes(e, {}, c);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a, d);
      };
      goog.html.SafeHtml.canUseSandboxIframe = function() {
        return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
      };
      goog.html.SafeHtml.createScriptSrc = function(a, b) {
        goog.html.TrustedResourceUrl.unwrap(a);
        a = goog.html.SafeHtml.combineAttributes({ src: a }, {}, b);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a);
      };
      goog.html.SafeHtml.createScript = function(a, b) {
        for (var c in b) {
          var d = c.toLowerCase();
          if (d == "language" || d == "src" || d == "text" || d == "type")
            throw Error('Cannot set "' + d + '" attribute');
        }
        c = "";
        a = goog.array.concat(a);
        for (d = 0; d < a.length; d++)
          c += goog.html.SafeScript.unwrap(a[d]);
        a = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c, goog.i18n.bidi.Dir.NEUTRAL);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", b, a);
      };
      goog.html.SafeHtml.createStyle = function(a, b) {
        b = goog.html.SafeHtml.combineAttributes({ type: "text/css" }, {}, b);
        var c = "";
        a = goog.array.concat(a);
        for (var d = 0; d < a.length; d++)
          c += goog.html.SafeStyleSheet.unwrap(a[d]);
        a = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c, goog.i18n.bidi.Dir.NEUTRAL);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", b, a);
      };
      goog.html.SafeHtml.createMetaRefresh = function(a, b) {
        a = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a));
        (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'");
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", { "http-equiv": "refresh", content: (b || 0) + "; url=" + a });
      };
      goog.html.SafeHtml.getAttrNameAndValue_ = function(a, b, c) {
        if (c instanceof goog.string.Const)
          c = goog.string.Const.unwrap(c);
        else if (b.toLowerCase() == "style")
          c = goog.html.SafeHtml.getStyleValue_(c);
        else {
          if (/^on/i.test(b))
            throw Error('Attribute "' + b + '" requires goog.string.Const value, "' + c + '" given.');
          if (b.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
            if (c instanceof goog.html.TrustedResourceUrl)
              c = goog.html.TrustedResourceUrl.unwrap(c);
            else if (c instanceof goog.html.SafeUrl)
              c = goog.html.SafeUrl.unwrap(c);
            else if (goog.isString(c))
              c = goog.html.SafeUrl.sanitize(c).getTypedStringValue();
            else
              throw Error('Attribute "' + b + '" on tag "' + a + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + c + '" given.');
        }
        c.implementsGoogStringTypedString && (c = c.getTypedStringValue());
        goog.asserts.assert(goog.isString(c) || goog.isNumber(c), "String or number value expected, got " + typeof c + " with value: " + c);
        return b + '="' + goog.string.internal.htmlEscape(String(c)) + '"';
      };
      goog.html.SafeHtml.getStyleValue_ = function(a) {
        if (!goog.isObject(a))
          throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a);
        a instanceof goog.html.SafeStyle || (a = goog.html.SafeStyle.create(a));
        return goog.html.SafeStyle.unwrap(a);
      };
      goog.html.SafeHtml.createWithDir = function(a, b, c, d) {
        b = goog.html.SafeHtml.create(b, c, d);
        b.dir_ = a;
        return b;
      };
      goog.html.SafeHtml.join = function(a, b) {
        a = goog.html.SafeHtml.htmlEscape(a);
        var c = a.getDirection(), d = [], e = function(a2) {
          goog.isArray(a2) ? goog.array.forEach(a2, e) : (a2 = goog.html.SafeHtml.htmlEscape(a2), d.push(goog.html.SafeHtml.unwrap(a2)), a2 = a2.getDirection(), c == goog.i18n.bidi.Dir.NEUTRAL ? c = a2 : a2 != goog.i18n.bidi.Dir.NEUTRAL && c != a2 && (c = null));
        };
        goog.array.forEach(b, e);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d.join(goog.html.SafeHtml.unwrap(a)), c);
      };
      goog.html.SafeHtml.concat = function(a) {
        return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
      };
      goog.html.SafeHtml.concatWithDir = function(a, b) {
        var c = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
        c.dir_ = a;
        return c;
      };
      goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(a, b) {
        return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(a, b);
      };
      goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a, b) {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a) : a;
        this.dir_ = b;
        return this;
      };
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(a, b, c) {
        var d = null;
        var e = "<" + a + goog.html.SafeHtml.stringifyAttributes(a, b);
        goog.isDefAndNotNull(c) ? goog.isArray(c) || (c = [c]) : c = [];
        goog.dom.tags.isVoidTag(a.toLowerCase()) ? (goog.asserts.assert(!c.length, "Void tag <" + a + "> does not allow content."), e += ">") : (d = goog.html.SafeHtml.concat(c), e += ">" + goog.html.SafeHtml.unwrap(d) + "</" + a + ">", d = d.getDirection());
        (a = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(a) ? goog.i18n.bidi.Dir.NEUTRAL : null);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e, d);
      };
      goog.html.SafeHtml.stringifyAttributes = function(a, b) {
        var c = "";
        if (b)
          for (var d in b) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d))
              throw Error('Invalid attribute name "' + d + '".');
            var e = b[d];
            goog.isDefAndNotNull(e) && (c += " " + goog.html.SafeHtml.getAttrNameAndValue_(a, d, e));
          }
        return c;
      };
      goog.html.SafeHtml.combineAttributes = function(a, b, c) {
        var d = {}, e;
        for (e in a)
          goog.asserts.assert(e.toLowerCase() == e, "Must be lower case"), d[e] = a[e];
        for (e in b)
          goog.asserts.assert(e.toLowerCase() == e, "Must be lower case"), d[e] = b[e];
        for (e in c) {
          var f = e.toLowerCase();
          if (f in a)
            throw Error('Cannot override "' + f + '" attribute, got "' + e + '" with value "' + c[e] + '"');
          f in b && delete d[f];
          d[e] = c[e];
        }
        return d;
      };
      goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.uncheckedconversions = {};
      goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(a, b, c) {
        goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b, c || null);
      };
      goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(a, b) {
        goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b);
      };
      goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(a, b) {
        goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
        return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b);
      };
      goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(a, b) {
        goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b);
      };
      goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(a, b) {
        goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b);
      };
      goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(a, b) {
        goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b);
      };
      goog.dom.asserts = {};
      goog.dom.asserts.assertIsLocation = function(a) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var b = goog.dom.asserts.getWindow_(a);
          b && (!a || !(a instanceof b.Location) && a instanceof b.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(a));
        }
        return a;
      };
      goog.dom.asserts.assertIsElementType_ = function(a, b) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var c = goog.dom.asserts.getWindow_(a);
          c && typeof c[b] != "undefined" && (a && (a instanceof c[b] || !(a instanceof c.Location || a instanceof c.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, goog.dom.asserts.debugStringForType_(a)));
        }
        return a;
      };
      goog.dom.asserts.assertIsHTMLAnchorElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLAnchorElement");
      };
      goog.dom.asserts.assertIsHTMLButtonElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLButtonElement");
      };
      goog.dom.asserts.assertIsHTMLLinkElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLLinkElement");
      };
      goog.dom.asserts.assertIsHTMLImageElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLImageElement");
      };
      goog.dom.asserts.assertIsHTMLAudioElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLAudioElement");
      };
      goog.dom.asserts.assertIsHTMLVideoElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLVideoElement");
      };
      goog.dom.asserts.assertIsHTMLInputElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLInputElement");
      };
      goog.dom.asserts.assertIsHTMLTextAreaElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLTextAreaElement");
      };
      goog.dom.asserts.assertIsHTMLCanvasElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLCanvasElement");
      };
      goog.dom.asserts.assertIsHTMLEmbedElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLEmbedElement");
      };
      goog.dom.asserts.assertIsHTMLFormElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLFormElement");
      };
      goog.dom.asserts.assertIsHTMLFrameElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLFrameElement");
      };
      goog.dom.asserts.assertIsHTMLIFrameElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLIFrameElement");
      };
      goog.dom.asserts.assertIsHTMLObjectElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLObjectElement");
      };
      goog.dom.asserts.assertIsHTMLScriptElement = function(a) {
        return goog.dom.asserts.assertIsElementType_(a, "HTMLScriptElement");
      };
      goog.dom.asserts.debugStringForType_ = function(a) {
        if (goog.isObject(a))
          try {
            return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
          } catch (b) {
            return "<object could not be stringified>";
          }
        else
          return a === void 0 ? "undefined" : a === null ? "null" : typeof a;
      };
      goog.dom.asserts.getWindow_ = function(a) {
        try {
          var b = a && a.ownerDocument, c = b && (b.defaultView || b.parentWindow);
          c = c || goog.global;
          if (c.Element && c.Location)
            return c;
        } catch (d) {
        }
        return null;
      };
      goog.functions = {};
      goog.functions.constant = function(a) {
        return function() {
          return a;
        };
      };
      goog.functions.FALSE = function() {
        return false;
      };
      goog.functions.TRUE = function() {
        return true;
      };
      goog.functions.NULL = function() {
        return null;
      };
      goog.functions.identity = function(a, b) {
        return a;
      };
      goog.functions.error = function(a) {
        return function() {
          throw Error(a);
        };
      };
      goog.functions.fail = function(a) {
        return function() {
          throw a;
        };
      };
      goog.functions.lock = function(a, b) {
        b = b || 0;
        return function() {
          return a.apply(this, Array.prototype.slice.call(arguments, 0, b));
        };
      };
      goog.functions.nth = function(a) {
        return function() {
          return arguments[a];
        };
      };
      goog.functions.partialRight = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
          var b2 = Array.prototype.slice.call(arguments);
          b2.push.apply(b2, c);
          return a.apply(this, b2);
        };
      };
      goog.functions.withReturnValue = function(a, b) {
        return goog.functions.sequence(a, goog.functions.constant(b));
      };
      goog.functions.equalTo = function(a, b) {
        return function(c) {
          return b ? a == c : a === c;
        };
      };
      goog.functions.compose = function(a, b) {
        var c = arguments, d = c.length;
        return function() {
          var a2;
          d && (a2 = c[d - 1].apply(this, arguments));
          for (var b2 = d - 2; 0 <= b2; b2--)
            a2 = c[b2].call(this, a2);
          return a2;
        };
      };
      goog.functions.sequence = function(a) {
        var b = arguments, c = b.length;
        return function() {
          for (var a2, e = 0; e < c; e++)
            a2 = b[e].apply(this, arguments);
          return a2;
        };
      };
      goog.functions.and = function(a) {
        var b = arguments, c = b.length;
        return function() {
          for (var a2 = 0; a2 < c; a2++)
            if (!b[a2].apply(this, arguments))
              return false;
          return true;
        };
      };
      goog.functions.or = function(a) {
        var b = arguments, c = b.length;
        return function() {
          for (var a2 = 0; a2 < c; a2++)
            if (b[a2].apply(this, arguments))
              return true;
          return false;
        };
      };
      goog.functions.not = function(a) {
        return function() {
          return !a.apply(this, arguments);
        };
      };
      goog.functions.create = function(a, b) {
        var c = function() {
        };
        c.prototype = a.prototype;
        c = new c();
        a.apply(c, Array.prototype.slice.call(arguments, 1));
        return c;
      };
      goog.functions.CACHE_RETURN_VALUE = true;
      goog.functions.cacheReturnValue = function(a) {
        var b = false, c;
        return function() {
          if (!goog.functions.CACHE_RETURN_VALUE)
            return a();
          b || (c = a(), b = true);
          return c;
        };
      };
      goog.functions.once = function(a) {
        var b = a;
        return function() {
          if (b) {
            var a2 = b;
            b = null;
            a2();
          }
        };
      };
      goog.functions.debounce = function(a, b, c) {
        var d = 0;
        return function(e) {
          goog.global.clearTimeout(d);
          var f = arguments;
          d = goog.global.setTimeout(function() {
            a.apply(c, f);
          }, b);
        };
      };
      goog.functions.throttle = function(a, b, c) {
        var d = 0, e = false, f = [], g = function() {
          d = 0;
          e && (e = false, h());
        }, h = function() {
          d = goog.global.setTimeout(g, b);
          a.apply(c, f);
        };
        return function(a2) {
          f = arguments;
          d ? e = true : h();
        };
      };
      goog.functions.rateLimit = function(a, b, c) {
        var d = 0, e = function() {
          d = 0;
        };
        return function(f) {
          d || (d = goog.global.setTimeout(e, b), a.apply(c, arguments));
        };
      };
      goog.dom.safe = {};
      goog.dom.safe.InsertAdjacentHtmlPosition = { AFTERBEGIN: "afterbegin", AFTEREND: "afterend", BEFOREBEGIN: "beforebegin", BEFOREEND: "beforeend" };
      goog.dom.safe.insertAdjacentHtml = function(a, b, c) {
        a.insertAdjacentHTML(b, goog.html.SafeHtml.unwrapTrustedHTML(c));
      };
      goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = { MATH: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
      goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
        if (goog.DEBUG && typeof document === "undefined")
          return false;
        var a = document.createElement("div"), b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (goog.DEBUG && !a.firstChild)
          return false;
        b = a.firstChild.firstChild;
        a.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);
        return !b.parentElement;
      });
      goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(a, b) {
        if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
          for (; a.lastChild; )
            a.removeChild(a.lastChild);
        a.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b);
      };
      goog.dom.safe.setInnerHtml = function(a, b) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var c = a.tagName.toUpperCase();
          if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c])
            throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
        }
        goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a, b);
      };
      goog.dom.safe.setOuterHtml = function(a, b) {
        a.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b);
      };
      goog.dom.safe.setFormElementAction = function(a, b) {
        b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
        goog.dom.asserts.assertIsHTMLFormElement(a).action = goog.html.SafeUrl.unwrapTrustedURL(b);
      };
      goog.dom.safe.setButtonFormAction = function(a, b) {
        b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
        goog.dom.asserts.assertIsHTMLButtonElement(a).formAction = goog.html.SafeUrl.unwrapTrustedURL(b);
      };
      goog.dom.safe.setInputFormAction = function(a, b) {
        b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
        goog.dom.asserts.assertIsHTMLInputElement(a).formAction = goog.html.SafeUrl.unwrapTrustedURL(b);
      };
      goog.dom.safe.setStyle = function(a, b) {
        a.style.cssText = goog.html.SafeStyle.unwrap(b);
      };
      goog.dom.safe.documentWrite = function(a, b) {
        a.write(goog.html.SafeHtml.unwrapTrustedHTML(b));
      };
      goog.dom.safe.setAnchorHref = function(a, b) {
        goog.dom.asserts.assertIsHTMLAnchorElement(a);
        b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
        a.href = goog.html.SafeUrl.unwrapTrustedURL(b);
      };
      goog.dom.safe.setImageSrc = function(a, b) {
        goog.dom.asserts.assertIsHTMLImageElement(a);
        if (!(b instanceof goog.html.SafeUrl)) {
          var c = /^data:image\//i.test(b);
          b = goog.html.SafeUrl.sanitizeAssertUnchanged(b, c);
        }
        a.src = goog.html.SafeUrl.unwrapTrustedURL(b);
      };
      goog.dom.safe.setAudioSrc = function(a, b) {
        goog.dom.asserts.assertIsHTMLAudioElement(a);
        if (!(b instanceof goog.html.SafeUrl)) {
          var c = /^data:audio\//i.test(b);
          b = goog.html.SafeUrl.sanitizeAssertUnchanged(b, c);
        }
        a.src = goog.html.SafeUrl.unwrapTrustedURL(b);
      };
      goog.dom.safe.setVideoSrc = function(a, b) {
        goog.dom.asserts.assertIsHTMLVideoElement(a);
        if (!(b instanceof goog.html.SafeUrl)) {
          var c = /^data:video\//i.test(b);
          b = goog.html.SafeUrl.sanitizeAssertUnchanged(b, c);
        }
        a.src = goog.html.SafeUrl.unwrapTrustedURL(b);
      };
      goog.dom.safe.setEmbedSrc = function(a, b) {
        goog.dom.asserts.assertIsHTMLEmbedElement(a);
        a.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
      };
      goog.dom.safe.setFrameSrc = function(a, b) {
        goog.dom.asserts.assertIsHTMLFrameElement(a);
        a.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(b);
      };
      goog.dom.safe.setIframeSrc = function(a, b) {
        goog.dom.asserts.assertIsHTMLIFrameElement(a);
        a.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(b);
      };
      goog.dom.safe.setIframeSrcdoc = function(a, b) {
        goog.dom.asserts.assertIsHTMLIFrameElement(a);
        a.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(b);
      };
      goog.dom.safe.setLinkHrefAndRel = function(a, b, c) {
        goog.dom.asserts.assertIsHTMLLinkElement(a);
        a.rel = c;
        goog.string.internal.caseInsensitiveContains(c, "stylesheet") ? (goog.asserts.assert(b instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), a.href = goog.html.TrustedResourceUrl.unwrapTrustedURL(b)) : a.href = b instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrapTrustedURL(b) : b instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrapTrustedURL(b) : goog.html.SafeUrl.unwrapTrustedURL(goog.html.SafeUrl.sanitizeAssertUnchanged(b));
      };
      goog.dom.safe.setObjectData = function(a, b) {
        goog.dom.asserts.assertIsHTMLObjectElement(a);
        a.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
      };
      goog.dom.safe.setScriptSrc = function(a, b) {
        goog.dom.asserts.assertIsHTMLScriptElement(a);
        a.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
        (b = goog.getScriptNonce()) && a.setAttribute("nonce", b);
      };
      goog.dom.safe.setScriptContent = function(a, b) {
        goog.dom.asserts.assertIsHTMLScriptElement(a);
        a.text = goog.html.SafeScript.unwrapTrustedScript(b);
        (b = goog.getScriptNonce()) && a.setAttribute("nonce", b);
      };
      goog.dom.safe.setLocationHref = function(a, b) {
        goog.dom.asserts.assertIsLocation(a);
        b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
        a.href = goog.html.SafeUrl.unwrapTrustedURL(b);
      };
      goog.dom.safe.assignLocation = function(a, b) {
        goog.dom.asserts.assertIsLocation(a);
        b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
        a.assign(goog.html.SafeUrl.unwrapTrustedURL(b));
      };
      goog.dom.safe.replaceLocation = function(a, b) {
        goog.dom.asserts.assertIsLocation(a);
        b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
        a.replace(goog.html.SafeUrl.unwrapTrustedURL(b));
      };
      goog.dom.safe.openInWindow = function(a, b, c, d, e) {
        a = a instanceof goog.html.SafeUrl ? a : goog.html.SafeUrl.sanitizeAssertUnchanged(a);
        return (b || goog.global).open(goog.html.SafeUrl.unwrapTrustedURL(a), c ? goog.string.Const.unwrap(c) : "", d, e);
      };
      goog.dom.safe.parseFromStringHtml = function(a, b) {
        return goog.dom.safe.parseFromString(a, b, "text/html");
      };
      goog.dom.safe.parseFromString = function(a, b, c) {
        return a.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b), c);
      };
      goog.dom.safe.createImageFromBlob = function(a) {
        if (!/^image\/.*/g.test(a.type))
          throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
        var b = goog.global.URL.createObjectURL(a);
        a = new goog.global.Image();
        a.onload = function() {
          goog.global.URL.revokeObjectURL(b);
        };
        goog.dom.safe.setImageSrc(a, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), b));
        return a;
      };
      goog.string.DETECT_DOUBLE_ESCAPING = false;
      goog.string.FORCE_NON_DOM_HTML_UNESCAPING = false;
      goog.string.Unicode = { NBSP: "\xA0" };
      goog.string.startsWith = goog.string.internal.startsWith;
      goog.string.endsWith = goog.string.internal.endsWith;
      goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
      goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
      goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
      goog.string.subs = function(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
          d += c.shift() + e.shift();
        return d + c.join("%s");
      };
      goog.string.collapseWhitespace = function(a) {
        return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
      };
      goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
      goog.string.isEmptyString = function(a) {
        return a.length == 0;
      };
      goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
      goog.string.isEmptyOrWhitespaceSafe = function(a) {
        return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a));
      };
      goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
      goog.string.isBreakingWhitespace = function(a) {
        return !/[^\t\n\r ]/.test(a);
      };
      goog.string.isAlpha = function(a) {
        return !/[^a-zA-Z]/.test(a);
      };
      goog.string.isNumeric = function(a) {
        return !/[^0-9]/.test(a);
      };
      goog.string.isAlphaNumeric = function(a) {
        return !/[^a-zA-Z0-9]/.test(a);
      };
      goog.string.isSpace = function(a) {
        return a == " ";
      };
      goog.string.isUnicodeChar = function(a) {
        return a.length == 1 && " " <= a && "~" >= a || "\x80" <= a && "\uFFFD" >= a;
      };
      goog.string.stripNewlines = function(a) {
        return a.replace(/(\r\n|\r|\n)+/g, " ");
      };
      goog.string.canonicalizeNewlines = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, "\n");
      };
      goog.string.normalizeWhitespace = function(a) {
        return a.replace(/\xa0|\s/g, " ");
      };
      goog.string.normalizeSpaces = function(a) {
        return a.replace(/\xa0|[ \t]+/g, " ");
      };
      goog.string.collapseBreakingSpaces = function(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
      };
      goog.string.trim = goog.string.internal.trim;
      goog.string.trimLeft = function(a) {
        return a.replace(/^[\s\xa0]+/, "");
      };
      goog.string.trimRight = function(a) {
        return a.replace(/[\s\xa0]+$/, "");
      };
      goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
      goog.string.numberAwareCompare_ = function(a, b, c) {
        if (a == b)
          return 0;
        if (!a)
          return -1;
        if (!b)
          return 1;
        for (var d = a.toLowerCase().match(c), e = b.toLowerCase().match(c), f = Math.min(d.length, e.length), g = 0; g < f; g++) {
          c = d[g];
          var h = e[g];
          if (c != h)
            return a = parseInt(c, 10), !isNaN(a) && (b = parseInt(h, 10), !isNaN(b) && a - b) ? a - b : c < h ? -1 : 1;
        }
        return d.length != e.length ? d.length - e.length : a < b ? -1 : 1;
      };
      goog.string.intAwareCompare = function(a, b) {
        return goog.string.numberAwareCompare_(a, b, /\d+|\D+/g);
      };
      goog.string.floatAwareCompare = function(a, b) {
        return goog.string.numberAwareCompare_(a, b, /\d+|\.\d+|\D+/g);
      };
      goog.string.numerateCompare = goog.string.floatAwareCompare;
      goog.string.urlEncode = function(a) {
        return encodeURIComponent(String(a));
      };
      goog.string.urlDecode = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "));
      };
      goog.string.newLineToBr = goog.string.internal.newLineToBr;
      goog.string.htmlEscape = function(a, b) {
        a = goog.string.internal.htmlEscape(a, b);
        goog.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(goog.string.E_RE_, "&#101;"));
        return a;
      };
      goog.string.E_RE_ = /e/g;
      goog.string.unescapeEntities = function(a) {
        return goog.string.contains(a, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a;
      };
      goog.string.unescapeEntitiesWithDocument = function(a, b) {
        return goog.string.contains(a, "&") ? goog.string.unescapeEntitiesUsingDom_(a, b) : a;
      };
      goog.string.unescapeEntitiesUsingDom_ = function(a, b) {
        var c = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
        var d = b ? b.createElement("div") : goog.global.document.createElement("div");
        return a.replace(goog.string.HTML_ENTITY_PATTERN_, function(a2, b2) {
          var e = c[a2];
          if (e)
            return e;
          b2.charAt(0) == "#" && (b2 = Number("0" + b2.substr(1)), isNaN(b2) || (e = String.fromCharCode(b2)));
          e || (goog.dom.safe.setInnerHtml(d, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), a2 + " ")), e = d.firstChild.nodeValue.slice(0, -1));
          return c[a2] = e;
        });
      };
      goog.string.unescapePureXmlEntities_ = function(a) {
        return a.replace(/&([^;]+);/g, function(a2, c) {
          switch (c) {
            case "amp":
              return "&";
            case "lt":
              return "<";
            case "gt":
              return ">";
            case "quot":
              return '"';
            default:
              return c.charAt(0) != "#" || (c = Number("0" + c.substr(1)), isNaN(c)) ? a2 : String.fromCharCode(c);
          }
        });
      };
      goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
      goog.string.whitespaceEscape = function(a, b) {
        return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b);
      };
      goog.string.preserveSpaces = function(a) {
        return a.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
      };
      goog.string.stripQuotes = function(a, b) {
        for (var c = b.length, d = 0; d < c; d++) {
          var e = c == 1 ? b : b.charAt(d);
          if (a.charAt(0) == e && a.charAt(a.length - 1) == e)
            return a.substring(1, a.length - 1);
        }
        return a;
      };
      goog.string.truncate = function(a, b, c) {
        c && (a = goog.string.unescapeEntities(a));
        a.length > b && (a = a.substring(0, b - 3) + "...");
        c && (a = goog.string.htmlEscape(a));
        return a;
      };
      goog.string.truncateMiddle = function(a, b, c, d) {
        c && (a = goog.string.unescapeEntities(a));
        if (d && a.length > b) {
          d > b && (d = b);
          var e = a.length - d;
          a = a.substring(0, b - d) + "..." + a.substring(e);
        } else
          a.length > b && (d = Math.floor(b / 2), e = a.length - d, a = a.substring(0, d + b % 2) + "..." + a.substring(e));
        c && (a = goog.string.htmlEscape(a));
        return a;
      };
      goog.string.specialEscapeChars_ = { "\0": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" };
      goog.string.jsEscapeCache_ = { "'": "\\'" };
      goog.string.quote = function(a) {
        a = String(a);
        for (var b = ['"'], c = 0; c < a.length; c++) {
          var d = a.charAt(c), e = d.charCodeAt(0);
          b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d));
        }
        b.push('"');
        return b.join("");
      };
      goog.string.escapeString = function(a) {
        for (var b = [], c = 0; c < a.length; c++)
          b[c] = goog.string.escapeChar(a.charAt(c));
        return b.join("");
      };
      goog.string.escapeChar = function(a) {
        if (a in goog.string.jsEscapeCache_)
          return goog.string.jsEscapeCache_[a];
        if (a in goog.string.specialEscapeChars_)
          return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a];
        var b = a.charCodeAt(0);
        if (31 < b && 127 > b)
          var c = a;
        else {
          if (256 > b) {
            if (c = "\\x", 16 > b || 256 < b)
              c += "0";
          } else
            c = "\\u", 4096 > b && (c += "0");
          c += b.toString(16).toUpperCase();
        }
        return goog.string.jsEscapeCache_[a] = c;
      };
      goog.string.contains = goog.string.internal.contains;
      goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
      goog.string.countOf = function(a, b) {
        return a && b ? a.split(b).length - 1 : 0;
      };
      goog.string.removeAt = function(a, b, c) {
        var d = a;
        0 <= b && b < a.length && 0 < c && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c));
        return d;
      };
      goog.string.remove = function(a, b) {
        return a.replace(b, "");
      };
      goog.string.removeAll = function(a, b) {
        b = new RegExp(goog.string.regExpEscape(b), "g");
        return a.replace(b, "");
      };
      goog.string.replaceAll = function(a, b, c) {
        b = new RegExp(goog.string.regExpEscape(b), "g");
        return a.replace(b, c.replace(/\$/g, "$$$$"));
      };
      goog.string.regExpEscape = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
      };
      goog.string.repeat = String.prototype.repeat ? function(a, b) {
        return a.repeat(b);
      } : function(a, b) {
        return Array(b + 1).join(a);
      };
      goog.string.padNumber = function(a, b, c) {
        a = goog.isDef(c) ? a.toFixed(c) : String(a);
        c = a.indexOf(".");
        c == -1 && (c = a.length);
        return goog.string.repeat("0", Math.max(0, b - c)) + a;
      };
      goog.string.makeSafe = function(a) {
        return a == null ? "" : String(a);
      };
      goog.string.buildString = function(a) {
        return Array.prototype.join.call(arguments, "");
      };
      goog.string.getRandomString = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
      };
      goog.string.compareVersions = goog.string.internal.compareVersions;
      goog.string.hashCode = function(a) {
        for (var b = 0, c = 0; c < a.length; ++c)
          b = 31 * b + a.charCodeAt(c) >>> 0;
        return b;
      };
      goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
      goog.string.createUniqueString = function() {
        return "goog_" + goog.string.uniqueStringCounter_++;
      };
      goog.string.toNumber = function(a) {
        var b = Number(a);
        return b == 0 && goog.string.isEmptyOrWhitespace(a) ? NaN : b;
      };
      goog.string.isLowerCamelCase = function(a) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
      };
      goog.string.isUpperCamelCase = function(a) {
        return /^([A-Z][a-z]*)+$/.test(a);
      };
      goog.string.toCamelCase = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a2, c) {
          return c.toUpperCase();
        });
      };
      goog.string.toSelectorCase = function(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
      };
      goog.string.toTitleCase = function(a, b) {
        b = goog.isString(b) ? goog.string.regExpEscape(b) : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a2, b2, e) {
          return b2 + e.toUpperCase();
        });
      };
      goog.string.capitalize = function(a) {
        return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
      };
      goog.string.parseInt = function(a) {
        isFinite(a) && (a = String(a));
        return goog.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
      };
      goog.string.splitLimit = function(a, b, c) {
        a = a.split(b);
        for (var d = []; 0 < c && a.length; )
          d.push(a.shift()), c--;
        a.length && d.push(a.join(b));
        return d;
      };
      goog.string.lastComponent = function(a, b) {
        if (b)
          typeof b == "string" && (b = [b]);
        else
          return a;
        for (var c = -1, d = 0; d < b.length; d++)
          if (b[d] != "") {
            var e = a.lastIndexOf(b[d]);
            e > c && (c = e);
          }
        return c == -1 ? a : a.slice(c + 1);
      };
      goog.string.editDistance = function(a, b) {
        var c = [], d = [];
        if (a == b)
          return 0;
        if (!a.length || !b.length)
          return Math.max(a.length, b.length);
        for (var e = 0; e < b.length + 1; e++)
          c[e] = e;
        for (e = 0; e < a.length; e++) {
          d[0] = e + 1;
          for (var f = 0; f < b.length; f++)
            d[f + 1] = Math.min(d[f] + 1, c[f + 1] + 1, c[f] + Number(a[e] != b[f]));
          for (f = 0; f < c.length; f++)
            c[f] = d[f];
        }
        return d[b.length];
      };
      goog.labs.userAgent.platform = {};
      goog.labs.userAgent.platform.isAndroid = function() {
        return goog.labs.userAgent.util.matchUserAgent("Android");
      };
      goog.labs.userAgent.platform.isIpod = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPod");
      };
      goog.labs.userAgent.platform.isIphone = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
      };
      goog.labs.userAgent.platform.isIpad = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPad");
      };
      goog.labs.userAgent.platform.isIos = function() {
        return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
      };
      goog.labs.userAgent.platform.isMacintosh = function() {
        return goog.labs.userAgent.util.matchUserAgent("Macintosh");
      };
      goog.labs.userAgent.platform.isLinux = function() {
        return goog.labs.userAgent.util.matchUserAgent("Linux");
      };
      goog.labs.userAgent.platform.isWindows = function() {
        return goog.labs.userAgent.util.matchUserAgent("Windows");
      };
      goog.labs.userAgent.platform.isChromeOS = function() {
        return goog.labs.userAgent.util.matchUserAgent("CrOS");
      };
      goog.labs.userAgent.platform.isChromecast = function() {
        return goog.labs.userAgent.util.matchUserAgent("CrKey");
      };
      goog.labs.userAgent.platform.isKaiOS = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
      };
      goog.labs.userAgent.platform.isGo2Phone = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP");
      };
      goog.labs.userAgent.platform.getVersion = function() {
        var a = goog.labs.userAgent.util.getUserAgent(), b = "";
        goog.labs.userAgent.platform.isWindows() ? (b = /Windows (?:NT|Phone) ([0-9.]+)/, b = (a = b.exec(a)) ? a[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b = (a = b.exec(a)) && a[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? (b = /Mac OS X ([0-9_.]+)/, b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isKaiOS() ? (b = /(?:KaiOS)\/(\S+)/i, b = (a = b.exec(a)) && a[1]) : goog.labs.userAgent.platform.isAndroid() ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) && a[1]) : goog.labs.userAgent.platform.isChromeOS() && (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b = (a = b.exec(a)) && a[1]);
        return b || "";
      };
      goog.labs.userAgent.platform.isVersionOrHigher = function(a) {
        return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), a);
      };
      goog.reflect = {};
      goog.reflect.object = function(a, b) {
        return b;
      };
      goog.reflect.objectProperty = function(a, b) {
        return a;
      };
      goog.reflect.sinkValue = function(a) {
        goog.reflect.sinkValue[" "](a);
        return a;
      };
      goog.reflect.sinkValue[" "] = goog.nullFunction;
      goog.reflect.canAccessProperty = function(a, b) {
        try {
          return goog.reflect.sinkValue(a[b]), true;
        } catch (c) {
        }
        return false;
      };
      goog.reflect.cache = function(a, b, c, d) {
        d = d ? d(b) : b;
        return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b);
      };
      goog.labs.userAgent.engine = {};
      goog.labs.userAgent.engine.isPresto = function() {
        return goog.labs.userAgent.util.matchUserAgent("Presto");
      };
      goog.labs.userAgent.engine.isTrident = function() {
        return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
      };
      goog.labs.userAgent.engine.isEdge = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edge");
      };
      goog.labs.userAgent.engine.isWebKit = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
      };
      goog.labs.userAgent.engine.isGecko = function() {
        return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
      };
      goog.labs.userAgent.engine.getVersion = function() {
        var a = goog.labs.userAgent.util.getUserAgent();
        if (a) {
          a = goog.labs.userAgent.util.extractVersionTuples(a);
          var b = goog.labs.userAgent.engine.getEngineTuple_(a);
          if (b)
            return b[0] == "Gecko" ? goog.labs.userAgent.engine.getVersionForKey_(a, "Firefox") : b[1];
          a = a[0];
          var c;
          if (a && (c = a[2]) && (c = /Trident\/([^\s;]+)/.exec(c)))
            return c[1];
        }
        return "";
      };
      goog.labs.userAgent.engine.getEngineTuple_ = function(a) {
        if (!goog.labs.userAgent.engine.isEdge())
          return a[1];
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          if (c[0] == "Edge")
            return c;
        }
      };
      goog.labs.userAgent.engine.isVersionOrHigher = function(a) {
        return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), a);
      };
      goog.labs.userAgent.engine.getVersionForKey_ = function(a, b) {
        return (a = goog.array.find(a, function(a2) {
          return b == a2[0];
        })) && a[1] || "";
      };
      goog.userAgent = {};
      goog.userAgent.ASSUME_IE = false;
      goog.userAgent.ASSUME_EDGE = false;
      goog.userAgent.ASSUME_GECKO = false;
      goog.userAgent.ASSUME_WEBKIT = false;
      goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
      goog.userAgent.ASSUME_OPERA = false;
      goog.userAgent.ASSUME_ANY_VERSION = false;
      goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
      goog.userAgent.getUserAgentString = function() {
        return goog.labs.userAgent.util.getUserAgent();
      };
      goog.userAgent.getNavigatorTyped = function() {
        return goog.global.navigator || null;
      };
      goog.userAgent.getNavigator = function() {
        return goog.userAgent.getNavigatorTyped();
      };
      goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
      goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
      goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
      goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
      goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
      goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
      goog.userAgent.isMobile_ = function() {
        return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
      };
      goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
      goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
      goog.userAgent.determinePlatform_ = function() {
        var a = goog.userAgent.getNavigatorTyped();
        return a && a.platform || "";
      };
      goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
      goog.userAgent.ASSUME_MAC = false;
      goog.userAgent.ASSUME_WINDOWS = false;
      goog.userAgent.ASSUME_LINUX = false;
      goog.userAgent.ASSUME_X11 = false;
      goog.userAgent.ASSUME_ANDROID = false;
      goog.userAgent.ASSUME_IPHONE = false;
      goog.userAgent.ASSUME_IPAD = false;
      goog.userAgent.ASSUME_IPOD = false;
      goog.userAgent.ASSUME_KAIOS = false;
      goog.userAgent.ASSUME_GO2PHONE = false;
      goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
      goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
      goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
      goog.userAgent.isLegacyLinux_ = function() {
        return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
      };
      goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
      goog.userAgent.isX11_ = function() {
        var a = goog.userAgent.getNavigatorTyped();
        return !!a && goog.string.contains(a.appVersion || "", "X11");
      };
      goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
      goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
      goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
      goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
      goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
      goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
      goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
      goog.userAgent.GO2PHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_GO2PHONE : goog.labs.userAgent.platform.isGo2Phone();
      goog.userAgent.determineVersion_ = function() {
        var a = "", b = goog.userAgent.getVersionRegexResult_();
        b && (a = b ? b[1] : "");
        return goog.userAgent.IE && (b = goog.userAgent.getDocumentMode_(), b != null && b > parseFloat(a)) ? String(b) : a;
      };
      goog.userAgent.getVersionRegexResult_ = function() {
        var a = goog.userAgent.getUserAgentString();
        if (goog.userAgent.GECKO)
          return /rv:([^\);]+)(\)|;)/.exec(a);
        if (goog.userAgent.EDGE)
          return /Edge\/([\d\.]+)/.exec(a);
        if (goog.userAgent.IE)
          return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (goog.userAgent.WEBKIT)
          return /WebKit\/(\S+)/.exec(a);
        if (goog.userAgent.OPERA)
          return /(?:Version)[ \/]?(\S+)/.exec(a);
      };
      goog.userAgent.getDocumentMode_ = function() {
        var a = goog.global.document;
        return a ? a.documentMode : void 0;
      };
      goog.userAgent.VERSION = goog.userAgent.determineVersion_();
      goog.userAgent.compare = function(a, b) {
        return goog.string.compareVersions(a, b);
      };
      goog.userAgent.isVersionOrHigherCache_ = {};
      goog.userAgent.isVersionOrHigher = function(a) {
        return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, a, function() {
          return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a);
        });
      };
      goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
      goog.userAgent.isDocumentModeOrHigher = function(a) {
        return Number(goog.userAgent.DOCUMENT_MODE) >= a;
      };
      goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
      goog.userAgent.DOCUMENT_MODE = function() {
        if (goog.global.document && goog.userAgent.IE)
          return goog.userAgent.getDocumentMode_();
      }();
      goog.userAgent.product = {};
      goog.userAgent.product.ASSUME_FIREFOX = false;
      goog.userAgent.product.ASSUME_IPHONE = false;
      goog.userAgent.product.ASSUME_IPAD = false;
      goog.userAgent.product.ASSUME_ANDROID = false;
      goog.userAgent.product.ASSUME_CHROME = false;
      goog.userAgent.product.ASSUME_SAFARI = false;
      goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
      goog.userAgent.product.OPERA = goog.userAgent.OPERA;
      goog.userAgent.product.IE = goog.userAgent.IE;
      goog.userAgent.product.EDGE = goog.userAgent.EDGE;
      goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
      goog.userAgent.product.isIphoneOrIpod_ = function() {
        return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
      };
      goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
      goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
      goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
      goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
      goog.userAgent.product.isSafariDesktop_ = function() {
        return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
      };
      goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
      goog.crypt.base64 = {};
      goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=";
      goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
      goog.crypt.base64.Alphabet = { DEFAULT: 0, NO_PADDING: 1, WEBSAFE: 2, WEBSAFE_DOT_PADDING: 3, WEBSAFE_NO_PADDING: 4 };
      goog.crypt.base64.paddingChars_ = "=.";
      goog.crypt.base64.isPadding_ = function(a) {
        return goog.string.contains(goog.crypt.base64.paddingChars_, a);
      };
      goog.crypt.base64.byteToCharMaps_ = {};
      goog.crypt.base64.charToByteMap_ = null;
      goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA;
      goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || typeof goog.global.btoa == "function";
      goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && typeof goog.global.atob == "function";
      goog.crypt.base64.encodeByteArray = function(a, b) {
        goog.asserts.assert(goog.isArrayLike(a), "encodeByteArray takes an array as a parameter");
        b === void 0 && (b = goog.crypt.base64.Alphabet.DEFAULT);
        goog.crypt.base64.init_();
        b = goog.crypt.base64.byteToCharMaps_[b];
        for (var c = [], d = 0; d < a.length; d += 3) {
          var e = a[d], f = d + 1 < a.length, g = f ? a[d + 1] : 0, h = d + 2 < a.length, k = h ? a[d + 2] : 0, l = e >> 2;
          e = (e & 3) << 4 | g >> 4;
          g = (g & 15) << 2 | k >> 6;
          k &= 63;
          h || (k = 64, f || (g = 64));
          c.push(b[l], b[e], b[g] || "", b[k] || "");
        }
        return c.join("");
      };
      goog.crypt.base64.encodeString = function(a, b) {
        return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !b ? goog.global.btoa(a) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a), b);
      };
      goog.crypt.base64.decodeString = function(a, b) {
        if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !b)
          return goog.global.atob(a);
        var c = "";
        goog.crypt.base64.decodeStringInternal_(a, function(a2) {
          c += String.fromCharCode(a2);
        });
        return c;
      };
      goog.crypt.base64.decodeStringToByteArray = function(a, b) {
        var c = [];
        goog.crypt.base64.decodeStringInternal_(a, function(a2) {
          c.push(a2);
        });
        return c;
      };
      goog.crypt.base64.decodeStringToUint8Array = function(a) {
        goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
        var b = a.length, c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : goog.crypt.base64.isPadding_(a[b - 1]) && (c = goog.crypt.base64.isPadding_(a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c), e = 0;
        goog.crypt.base64.decodeStringInternal_(a, function(a2) {
          d[e++] = a2;
        });
        return d.subarray(0, e);
      };
      goog.crypt.base64.decodeStringInternal_ = function(a, b) {
        function c(b2) {
          for (; d < a.length; ) {
            var c2 = a.charAt(d++), e2 = goog.crypt.base64.charToByteMap_[c2];
            if (e2 != null)
              return e2;
            if (!goog.string.isEmptyOrWhitespace(c2))
              throw Error("Unknown base64 encoding at char: " + c2);
          }
          return b2;
        }
        goog.crypt.base64.init_();
        for (var d = 0; ; ) {
          var e = c(-1), f = c(0), g = c(64), h = c(64);
          if (h === 64 && e === -1)
            break;
          b(e << 2 | f >> 4);
          g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h));
        }
      };
      goog.crypt.base64.init_ = function() {
        if (!goog.crypt.base64.charToByteMap_) {
          goog.crypt.base64.charToByteMap_ = {};
          for (var a = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            goog.crypt.base64.byteToCharMaps_[c] = d;
            for (var e = 0; e < d.length; e++) {
              var f = d[e], g = goog.crypt.base64.charToByteMap_[f];
              g === void 0 ? goog.crypt.base64.charToByteMap_[f] = e : goog.asserts.assert(g === e);
            }
          }
        }
      };
      jspb.utils = {};
      jspb.utils.split64Low = 0;
      jspb.utils.split64High = 0;
      jspb.utils.splitUint64 = function(a) {
        var b = a >>> 0;
        a = Math.floor((a - b) / jspb.BinaryConstants.TWO_TO_32) >>> 0;
        jspb.utils.split64Low = b;
        jspb.utils.split64High = a;
      };
      jspb.utils.splitInt64 = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / jspb.BinaryConstants.TWO_TO_32);
        a >>>= 0;
        b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
        jspb.utils.split64Low = c;
        jspb.utils.split64High = a;
      };
      jspb.utils.splitZigzag64 = function(a) {
        var b = 0 > a;
        a = 2 * Math.abs(a);
        jspb.utils.splitUint64(a);
        a = jspb.utils.split64Low;
        var c = jspb.utils.split64High;
        b && (a == 0 ? c == 0 ? c = a = 4294967295 : (c--, a = 4294967295) : a--);
        jspb.utils.split64Low = a;
        jspb.utils.split64High = c;
      };
      jspb.utils.splitFloat32 = function(a) {
        var b = 0 > a ? 1 : 0;
        a = b ? -a : a;
        if (a === 0)
          0 < 1 / a ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648);
        else if (isNaN(a))
          jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647;
        else if (a > jspb.BinaryConstants.FLOAT32_MAX)
          jspb.utils.split64High = 0, jspb.utils.split64Low = (b << 31 | 2139095040) >>> 0;
        else if (a < jspb.BinaryConstants.FLOAT32_MIN)
          a = Math.round(a / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (b << 31 | a) >>> 0;
        else {
          var c = Math.floor(Math.log(a) / Math.LN2);
          a *= Math.pow(2, -c);
          a = Math.round(a * jspb.BinaryConstants.TWO_TO_23) & 8388607;
          jspb.utils.split64High = 0;
          jspb.utils.split64Low = (b << 31 | c + 127 << 23 | a) >>> 0;
        }
      };
      jspb.utils.splitFloat64 = function(a) {
        var b = 0 > a ? 1 : 0;
        a = b ? -a : a;
        if (a === 0)
          jspb.utils.split64High = 0 < 1 / a ? 0 : 2147483648, jspb.utils.split64Low = 0;
        else if (isNaN(a))
          jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295;
        else if (a > jspb.BinaryConstants.FLOAT64_MAX)
          jspb.utils.split64High = (b << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0;
        else if (a < jspb.BinaryConstants.FLOAT64_MIN) {
          var c = a / Math.pow(2, -1074);
          a = c / jspb.BinaryConstants.TWO_TO_32;
          jspb.utils.split64High = (b << 31 | a) >>> 0;
          jspb.utils.split64Low = c >>> 0;
        } else {
          c = a;
          var d = 0;
          if (2 <= c)
            for (; 2 <= c && 1023 > d; )
              d++, c /= 2;
          else
            for (; 1 > c && -1022 < d; )
              c *= 2, d--;
          c = a * Math.pow(2, -d);
          a = c * jspb.BinaryConstants.TWO_TO_20 & 1048575;
          c = c * jspb.BinaryConstants.TWO_TO_52 >>> 0;
          jspb.utils.split64High = (b << 31 | d + 1023 << 20 | a) >>> 0;
          jspb.utils.split64Low = c;
        }
      };
      jspb.utils.splitHash64 = function(a) {
        var b = a.charCodeAt(0), c = a.charCodeAt(1), d = a.charCodeAt(2), e = a.charCodeAt(3), f = a.charCodeAt(4), g = a.charCodeAt(5), h = a.charCodeAt(6);
        a = a.charCodeAt(7);
        jspb.utils.split64Low = b + (c << 8) + (d << 16) + (e << 24) >>> 0;
        jspb.utils.split64High = f + (g << 8) + (h << 16) + (a << 24) >>> 0;
      };
      jspb.utils.joinUint64 = function(a, b) {
        return b * jspb.BinaryConstants.TWO_TO_32 + (a >>> 0);
      };
      jspb.utils.joinInt64 = function(a, b) {
        var c = b & 2147483648;
        c && (a = ~a + 1 >>> 0, b = ~b >>> 0, a == 0 && (b = b + 1 >>> 0));
        a = jspb.utils.joinUint64(a, b);
        return c ? -a : a;
      };
      jspb.utils.toZigzag64 = function(a, b, c) {
        var d = b >> 31;
        return c(a << 1 ^ d, (b << 1 | a >>> 31) ^ d);
      };
      jspb.utils.joinZigzag64 = function(a, b) {
        return jspb.utils.fromZigzag64(a, b, jspb.utils.joinInt64);
      };
      jspb.utils.fromZigzag64 = function(a, b, c) {
        var d = -(a & 1);
        return c((a >>> 1 | b << 31) ^ d, b >>> 1 ^ d);
      };
      jspb.utils.joinFloat32 = function(a, b) {
        b = 2 * (a >> 31) + 1;
        var c = a >>> 23 & 255;
        a &= 8388607;
        return c == 255 ? a ? NaN : Infinity * b : c == 0 ? b * Math.pow(2, -149) * a : b * Math.pow(2, c - 150) * (a + Math.pow(2, 23));
      };
      jspb.utils.joinFloat64 = function(a, b) {
        var c = 2 * (b >> 31) + 1, d = b >>> 20 & 2047;
        a = jspb.BinaryConstants.TWO_TO_32 * (b & 1048575) + a;
        return d == 2047 ? a ? NaN : Infinity * c : d == 0 ? c * Math.pow(2, -1074) * a : c * Math.pow(2, d - 1075) * (a + jspb.BinaryConstants.TWO_TO_52);
      };
      jspb.utils.joinHash64 = function(a, b) {
        return String.fromCharCode(a >>> 0 & 255, a >>> 8 & 255, a >>> 16 & 255, a >>> 24 & 255, b >>> 0 & 255, b >>> 8 & 255, b >>> 16 & 255, b >>> 24 & 255);
      };
      jspb.utils.DIGITS = "0123456789abcdef".split("");
      jspb.utils.ZERO_CHAR_CODE_ = 48;
      jspb.utils.A_CHAR_CODE_ = 97;
      jspb.utils.joinUnsignedDecimalString = function(a, b) {
        function c(a2, b2) {
          a2 = a2 ? String(a2) : "";
          return b2 ? "0000000".slice(a2.length) + a2 : a2;
        }
        if (2097151 >= b)
          return "" + jspb.utils.joinUint64(a, b);
        var d = (a >>> 24 | b << 8) >>> 0 & 16777215;
        b = b >> 16 & 65535;
        a = (a & 16777215) + 6777216 * d + 6710656 * b;
        d += 8147497 * b;
        b *= 2;
        1e7 <= a && (d += Math.floor(a / 1e7), a %= 1e7);
        1e7 <= d && (b += Math.floor(d / 1e7), d %= 1e7);
        return c(b, 0) + c(d, b) + c(a, 1);
      };
      jspb.utils.joinSignedDecimalString = function(a, b) {
        var c = b & 2147483648;
        c && (a = ~a + 1 >>> 0, b = ~b + (a == 0 ? 1 : 0) >>> 0);
        a = jspb.utils.joinUnsignedDecimalString(a, b);
        return c ? "-" + a : a;
      };
      jspb.utils.hash64ToDecimalString = function(a, b) {
        jspb.utils.splitHash64(a);
        a = jspb.utils.split64Low;
        var c = jspb.utils.split64High;
        return b ? jspb.utils.joinSignedDecimalString(a, c) : jspb.utils.joinUnsignedDecimalString(a, c);
      };
      jspb.utils.hash64ArrayToDecimalStrings = function(a, b) {
        for (var c = Array(a.length), d = 0; d < a.length; d++)
          c[d] = jspb.utils.hash64ToDecimalString(a[d], b);
        return c;
      };
      jspb.utils.decimalStringToHash64 = function(a) {
        function b(a2, b2) {
          for (var c2 = 0; 8 > c2 && (a2 !== 1 || 0 < b2); c2++)
            b2 = a2 * e[c2] + b2, e[c2] = b2 & 255, b2 >>>= 8;
        }
        function c() {
          for (var a2 = 0; 8 > a2; a2++)
            e[a2] = ~e[a2] & 255;
        }
        goog.asserts.assert(0 < a.length);
        var d = false;
        a[0] === "-" && (d = true, a = a.slice(1));
        for (var e = [0, 0, 0, 0, 0, 0, 0, 0], f = 0; f < a.length; f++)
          b(10, a.charCodeAt(f) - jspb.utils.ZERO_CHAR_CODE_);
        d && (c(), b(1, 1));
        return goog.crypt.byteArrayToString(e);
      };
      jspb.utils.splitDecimalString = function(a) {
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a));
      };
      jspb.utils.toHexDigit_ = function(a) {
        return String.fromCharCode(10 > a ? jspb.utils.ZERO_CHAR_CODE_ + a : jspb.utils.A_CHAR_CODE_ - 10 + a);
      };
      jspb.utils.fromHexCharCode_ = function(a) {
        return a >= jspb.utils.A_CHAR_CODE_ ? a - jspb.utils.A_CHAR_CODE_ + 10 : a - jspb.utils.ZERO_CHAR_CODE_;
      };
      jspb.utils.hash64ToHexString = function(a) {
        var b = Array(18);
        b[0] = "0";
        b[1] = "x";
        for (var c = 0; 8 > c; c++) {
          var d = a.charCodeAt(7 - c);
          b[2 * c + 2] = jspb.utils.toHexDigit_(d >> 4);
          b[2 * c + 3] = jspb.utils.toHexDigit_(d & 15);
        }
        return b.join("");
      };
      jspb.utils.hexStringToHash64 = function(a) {
        a = a.toLowerCase();
        goog.asserts.assert(a.length == 18);
        goog.asserts.assert(a[0] == "0");
        goog.asserts.assert(a[1] == "x");
        for (var b = "", c = 0; 8 > c; c++) {
          var d = jspb.utils.fromHexCharCode_(a.charCodeAt(2 * c + 2)), e = jspb.utils.fromHexCharCode_(a.charCodeAt(2 * c + 3));
          b = String.fromCharCode(16 * d + e) + b;
        }
        return b;
      };
      jspb.utils.hash64ToNumber = function(a, b) {
        jspb.utils.splitHash64(a);
        a = jspb.utils.split64Low;
        var c = jspb.utils.split64High;
        return b ? jspb.utils.joinInt64(a, c) : jspb.utils.joinUint64(a, c);
      };
      jspb.utils.numberToHash64 = function(a) {
        jspb.utils.splitInt64(a);
        return jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.utils.countVarints = function(a, b, c) {
        for (var d = 0, e = b; e < c; e++)
          d += a[e] >> 7;
        return c - b - d;
      };
      jspb.utils.countVarintFields = function(a, b, c, d) {
        var e = 0;
        d = 8 * d + jspb.BinaryConstants.WireType.VARINT;
        if (128 > d)
          for (; b < c && a[b++] == d; )
            for (e++; ; ) {
              var f = a[b++];
              if ((f & 128) == 0)
                break;
            }
        else
          for (; b < c; ) {
            for (f = d; 128 < f; ) {
              if (a[b] != (f & 127 | 128))
                return e;
              b++;
              f >>= 7;
            }
            if (a[b++] != f)
              break;
            for (e++; f = a[b++], (f & 128) != 0; )
              ;
          }
        return e;
      };
      jspb.utils.countFixedFields_ = function(a, b, c, d, e) {
        var f = 0;
        if (128 > d)
          for (; b < c && a[b++] == d; )
            f++, b += e;
        else
          for (; b < c; ) {
            for (var g = d; 128 < g; ) {
              if (a[b++] != (g & 127 | 128))
                return f;
              g >>= 7;
            }
            if (a[b++] != g)
              break;
            f++;
            b += e;
          }
        return f;
      };
      jspb.utils.countFixed32Fields = function(a, b, c, d) {
        return jspb.utils.countFixedFields_(a, b, c, 8 * d + jspb.BinaryConstants.WireType.FIXED32, 4);
      };
      jspb.utils.countFixed64Fields = function(a, b, c, d) {
        return jspb.utils.countFixedFields_(a, b, c, 8 * d + jspb.BinaryConstants.WireType.FIXED64, 8);
      };
      jspb.utils.countDelimitedFields = function(a, b, c, d) {
        var e = 0;
        for (d = 8 * d + jspb.BinaryConstants.WireType.DELIMITED; b < c; ) {
          for (var f = d; 128 < f; ) {
            if (a[b++] != (f & 127 | 128))
              return e;
            f >>= 7;
          }
          if (a[b++] != f)
            break;
          e++;
          for (var g = 0, h = 1; f = a[b++], g += (f & 127) * h, h *= 128, (f & 128) != 0; )
            ;
          b += g;
        }
        return e;
      };
      jspb.utils.debugBytesToTextFormat = function(a) {
        var b = '"';
        if (a) {
          a = jspb.utils.byteSourceToUint8Array(a);
          for (var c = 0; c < a.length; c++)
            b += "\\x", 16 > a[c] && (b += "0"), b += a[c].toString(16);
        }
        return b + '"';
      };
      jspb.utils.debugScalarToTextFormat = function(a) {
        return typeof a === "string" ? goog.string.quote(a) : a.toString();
      };
      jspb.utils.stringToByteArray = function(a) {
        for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
          var d = a.charCodeAt(c);
          if (255 < d)
            throw Error("Conversion error: string contains codepoint outside of byte range");
          b[c] = d;
        }
        return b;
      };
      jspb.utils.byteSourceToUint8Array = function(a) {
        if (a.constructor === Uint8Array)
          return a;
        if (a.constructor === ArrayBuffer || typeof Buffer != "undefined" && a.constructor === Buffer || a.constructor === Array)
          return new Uint8Array(a);
        if (a.constructor === String)
          return goog.crypt.base64.decodeStringToUint8Array(a);
        goog.asserts.fail("Type not convertible to Uint8Array.");
        return new Uint8Array(0);
      };
      jspb.BinaryDecoder = function(a, b, c) {
        this.bytes_ = null;
        this.cursor_ = this.end_ = this.start_ = 0;
        this.error_ = false;
        a && this.setBlock(a, b, c);
      };
      jspb.BinaryDecoder.instanceCache_ = [];
      jspb.BinaryDecoder.alloc = function(a, b, c) {
        if (jspb.BinaryDecoder.instanceCache_.length) {
          var d = jspb.BinaryDecoder.instanceCache_.pop();
          a && d.setBlock(a, b, c);
          return d;
        }
        return new jspb.BinaryDecoder(a, b, c);
      };
      jspb.BinaryDecoder.prototype.free = function() {
        this.clear();
        100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this);
      };
      jspb.BinaryDecoder.prototype.clone = function() {
        return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_);
      };
      jspb.BinaryDecoder.prototype.clear = function() {
        this.bytes_ = null;
        this.cursor_ = this.end_ = this.start_ = 0;
        this.error_ = false;
      };
      jspb.BinaryDecoder.prototype.getBuffer = function() {
        return this.bytes_;
      };
      jspb.BinaryDecoder.prototype.setBlock = function(a, b, c) {
        this.bytes_ = jspb.utils.byteSourceToUint8Array(a);
        this.start_ = b !== void 0 ? b : 0;
        this.end_ = c !== void 0 ? this.start_ + c : this.bytes_.length;
        this.cursor_ = this.start_;
      };
      jspb.BinaryDecoder.prototype.getEnd = function() {
        return this.end_;
      };
      jspb.BinaryDecoder.prototype.setEnd = function(a) {
        this.end_ = a;
      };
      jspb.BinaryDecoder.prototype.reset = function() {
        this.cursor_ = this.start_;
      };
      jspb.BinaryDecoder.prototype.getCursor = function() {
        return this.cursor_;
      };
      jspb.BinaryDecoder.prototype.setCursor = function(a) {
        this.cursor_ = a;
      };
      jspb.BinaryDecoder.prototype.advance = function(a) {
        this.cursor_ += a;
        goog.asserts.assert(this.cursor_ <= this.end_);
      };
      jspb.BinaryDecoder.prototype.atEnd = function() {
        return this.cursor_ == this.end_;
      };
      jspb.BinaryDecoder.prototype.pastEnd = function() {
        return this.cursor_ > this.end_;
      };
      jspb.BinaryDecoder.prototype.getError = function() {
        return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
      };
      jspb.BinaryDecoder.prototype.readSplitVarint64 = function(a) {
        for (var b = 128, c = 0, d = 0, e = 0; 4 > e && 128 <= b; e++)
          b = this.bytes_[this.cursor_++], c |= (b & 127) << 7 * e;
        128 <= b && (b = this.bytes_[this.cursor_++], c |= (b & 127) << 28, d |= (b & 127) >> 4);
        if (128 <= b)
          for (e = 0; 5 > e && 128 <= b; e++)
            b = this.bytes_[this.cursor_++], d |= (b & 127) << 7 * e + 3;
        if (128 > b)
          return a(c >>> 0, d >>> 0);
        goog.asserts.fail("Failed to read varint, encoding is invalid.");
        this.error_ = true;
      };
      jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function(a) {
        return this.readSplitVarint64(function(b, c) {
          return jspb.utils.fromZigzag64(b, c, a);
        });
      };
      jspb.BinaryDecoder.prototype.readSplitFixed64 = function(a) {
        var b = this.bytes_, c = this.cursor_;
        this.cursor_ += 8;
        for (var d = 0, e = 0, f = c + 7; f >= c; f--)
          d = d << 8 | b[f], e = e << 8 | b[f + 4];
        return a(d, e);
      };
      jspb.BinaryDecoder.prototype.skipVarint = function() {
        for (; this.bytes_[this.cursor_] & 128; )
          this.cursor_++;
        this.cursor_++;
      };
      jspb.BinaryDecoder.prototype.unskipVarint = function(a) {
        for (; 128 < a; )
          this.cursor_--, a >>>= 7;
        this.cursor_--;
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
        var a = this.bytes_;
        var b = a[this.cursor_ + 0];
        var c = b & 127;
        if (128 > b)
          return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), c;
        b = a[this.cursor_ + 1];
        c |= (b & 127) << 7;
        if (128 > b)
          return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), c;
        b = a[this.cursor_ + 2];
        c |= (b & 127) << 14;
        if (128 > b)
          return this.cursor_ += 3, goog.asserts.assert(this.cursor_ <= this.end_), c;
        b = a[this.cursor_ + 3];
        c |= (b & 127) << 21;
        if (128 > b)
          return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), c;
        b = a[this.cursor_ + 4];
        c |= (b & 15) << 28;
        if (128 > b)
          return this.cursor_ += 5, goog.asserts.assert(this.cursor_ <= this.end_), c >>> 0;
        this.cursor_ += 5;
        128 <= a[this.cursor_++] && 128 <= a[this.cursor_++] && 128 <= a[this.cursor_++] && 128 <= a[this.cursor_++] && 128 <= a[this.cursor_++] && goog.asserts.assert(false);
        goog.asserts.assert(this.cursor_ <= this.end_);
        return c;
      };
      jspb.BinaryDecoder.prototype.readSignedVarint32 = jspb.BinaryDecoder.prototype.readUnsignedVarint32;
      jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
        return this.readUnsignedVarint32().toString();
      };
      jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
        return this.readSignedVarint32().toString();
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
        var a = this.readUnsignedVarint32();
        return a >>> 1 ^ -(a & 1);
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinUint64);
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
        return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinInt64);
      };
      jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
        return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinZigzag64);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function() {
        return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
        return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readUint8 = function() {
        var a = this.bytes_[this.cursor_ + 0];
        this.cursor_ += 1;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a;
      };
      jspb.BinaryDecoder.prototype.readUint16 = function() {
        var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1];
        this.cursor_ += 2;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a << 0 | b << 8;
      };
      jspb.BinaryDecoder.prototype.readUint32 = function() {
        var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1], c = this.bytes_[this.cursor_ + 2], d = this.bytes_[this.cursor_ + 3];
        this.cursor_ += 4;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return (a << 0 | b << 8 | c << 16 | d << 24) >>> 0;
      };
      jspb.BinaryDecoder.prototype.readUint64 = function() {
        var a = this.readUint32(), b = this.readUint32();
        return jspb.utils.joinUint64(a, b);
      };
      jspb.BinaryDecoder.prototype.readUint64String = function() {
        var a = this.readUint32(), b = this.readUint32();
        return jspb.utils.joinUnsignedDecimalString(a, b);
      };
      jspb.BinaryDecoder.prototype.readInt8 = function() {
        var a = this.bytes_[this.cursor_ + 0];
        this.cursor_ += 1;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a << 24 >> 24;
      };
      jspb.BinaryDecoder.prototype.readInt16 = function() {
        var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1];
        this.cursor_ += 2;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return (a << 0 | b << 8) << 16 >> 16;
      };
      jspb.BinaryDecoder.prototype.readInt32 = function() {
        var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1], c = this.bytes_[this.cursor_ + 2], d = this.bytes_[this.cursor_ + 3];
        this.cursor_ += 4;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a << 0 | b << 8 | c << 16 | d << 24;
      };
      jspb.BinaryDecoder.prototype.readInt64 = function() {
        var a = this.readUint32(), b = this.readUint32();
        return jspb.utils.joinInt64(a, b);
      };
      jspb.BinaryDecoder.prototype.readInt64String = function() {
        var a = this.readUint32(), b = this.readUint32();
        return jspb.utils.joinSignedDecimalString(a, b);
      };
      jspb.BinaryDecoder.prototype.readFloat = function() {
        var a = this.readUint32();
        return jspb.utils.joinFloat32(a, 0);
      };
      jspb.BinaryDecoder.prototype.readDouble = function() {
        var a = this.readUint32(), b = this.readUint32();
        return jspb.utils.joinFloat64(a, b);
      };
      jspb.BinaryDecoder.prototype.readBool = function() {
        return !!this.bytes_[this.cursor_++];
      };
      jspb.BinaryDecoder.prototype.readEnum = function() {
        return this.readSignedVarint32();
      };
      jspb.BinaryDecoder.prototype.readString = function(a) {
        var b = this.bytes_, c = this.cursor_;
        a = c + a;
        for (var d = [], e = ""; c < a; ) {
          var f = b[c++];
          if (128 > f)
            d.push(f);
          else if (192 > f)
            continue;
          else if (224 > f) {
            var g = b[c++];
            d.push((f & 31) << 6 | g & 63);
          } else if (240 > f) {
            g = b[c++];
            var h = b[c++];
            d.push((f & 15) << 12 | (g & 63) << 6 | h & 63);
          } else if (248 > f) {
            g = b[c++];
            h = b[c++];
            var k = b[c++];
            f = (f & 7) << 18 | (g & 63) << 12 | (h & 63) << 6 | k & 63;
            f -= 65536;
            d.push((f >> 10 & 1023) + 55296, (f & 1023) + 56320);
          }
          8192 <= d.length && (e += String.fromCharCode.apply(null, d), d.length = 0);
        }
        e += goog.crypt.byteArrayToString(d);
        this.cursor_ = c;
        return e;
      };
      jspb.BinaryDecoder.prototype.readStringWithLength = function() {
        var a = this.readUnsignedVarint32();
        return this.readString(a);
      };
      jspb.BinaryDecoder.prototype.readBytes = function(a) {
        if (0 > a || this.cursor_ + a > this.bytes_.length)
          return this.error_ = true, goog.asserts.fail("Invalid byte length!"), new Uint8Array(0);
        var b = this.bytes_.subarray(this.cursor_, this.cursor_ + a);
        this.cursor_ += a;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return b;
      };
      jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
        return this.readSplitVarint64(jspb.utils.joinHash64);
      };
      jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
        var a = this.bytes_, b = this.cursor_, c = a[b + 0], d = a[b + 1], e = a[b + 2], f = a[b + 3], g = a[b + 4], h = a[b + 5], k = a[b + 6];
        a = a[b + 7];
        this.cursor_ += 8;
        return String.fromCharCode(c, d, e, f, g, h, k, a);
      };
      jspb.BinaryReader = function(a, b, c) {
        this.decoder_ = jspb.BinaryDecoder.alloc(a, b, c);
        this.fieldCursor_ = this.decoder_.getCursor();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
        this.error_ = false;
        this.readCallbacks_ = null;
      };
      jspb.BinaryReader.instanceCache_ = [];
      jspb.BinaryReader.alloc = function(a, b, c) {
        if (jspb.BinaryReader.instanceCache_.length) {
          var d = jspb.BinaryReader.instanceCache_.pop();
          a && d.decoder_.setBlock(a, b, c);
          return d;
        }
        return new jspb.BinaryReader(a, b, c);
      };
      jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc;
      jspb.BinaryReader.prototype.free = function() {
        this.decoder_.clear();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
        this.error_ = false;
        this.readCallbacks_ = null;
        100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this);
      };
      jspb.BinaryReader.prototype.getFieldCursor = function() {
        return this.fieldCursor_;
      };
      jspb.BinaryReader.prototype.getCursor = function() {
        return this.decoder_.getCursor();
      };
      jspb.BinaryReader.prototype.getBuffer = function() {
        return this.decoder_.getBuffer();
      };
      jspb.BinaryReader.prototype.getFieldNumber = function() {
        return this.nextField_;
      };
      jspb.BinaryReader.prototype.getWireType = function() {
        return this.nextWireType_;
      };
      jspb.BinaryReader.prototype.isDelimited = function() {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED;
      };
      jspb.BinaryReader.prototype.isEndGroup = function() {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
      };
      jspb.BinaryReader.prototype.getError = function() {
        return this.error_ || this.decoder_.getError();
      };
      jspb.BinaryReader.prototype.setBlock = function(a, b, c) {
        this.decoder_.setBlock(a, b, c);
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      };
      jspb.BinaryReader.prototype.reset = function() {
        this.decoder_.reset();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      };
      jspb.BinaryReader.prototype.advance = function(a) {
        this.decoder_.advance(a);
      };
      jspb.BinaryReader.prototype.nextField = function() {
        if (this.decoder_.atEnd())
          return false;
        if (this.getError())
          return goog.asserts.fail("Decoder hit an error"), false;
        this.fieldCursor_ = this.decoder_.getCursor();
        var a = this.decoder_.readUnsignedVarint32(), b = a >>> 3;
        a &= 7;
        if (a != jspb.BinaryConstants.WireType.VARINT && a != jspb.BinaryConstants.WireType.FIXED32 && a != jspb.BinaryConstants.WireType.FIXED64 && a != jspb.BinaryConstants.WireType.DELIMITED && a != jspb.BinaryConstants.WireType.START_GROUP && a != jspb.BinaryConstants.WireType.END_GROUP)
          return goog.asserts.fail("Invalid wire type: %s (at position %s)", a, this.fieldCursor_), this.error_ = true, false;
        this.nextField_ = b;
        this.nextWireType_ = a;
        return true;
      };
      jspb.BinaryReader.prototype.unskipHeader = function() {
        this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_);
      };
      jspb.BinaryReader.prototype.skipMatchingFields = function() {
        var a = this.nextField_;
        for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == a; )
          this.skipField();
        this.decoder_.atEnd() || this.unskipHeader();
      };
      jspb.BinaryReader.prototype.skipVarintField = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (goog.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint();
      };
      jspb.BinaryReader.prototype.skipDelimitedField = function() {
        if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
          goog.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField();
        else {
          var a = this.decoder_.readUnsignedVarint32();
          this.decoder_.advance(a);
        }
      };
      jspb.BinaryReader.prototype.skipFixed32Field = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4);
      };
      jspb.BinaryReader.prototype.skipFixed64Field = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8);
      };
      jspb.BinaryReader.prototype.skipGroup = function() {
        var a = this.nextField_;
        do {
          if (!this.nextField()) {
            goog.asserts.fail("Unmatched start-group tag: stream EOF");
            this.error_ = true;
            break;
          }
          if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
            this.nextField_ != a && (goog.asserts.fail("Unmatched end-group tag"), this.error_ = true);
            break;
          }
          this.skipField();
        } while (1);
      };
      jspb.BinaryReader.prototype.skipField = function() {
        switch (this.nextWireType_) {
          case jspb.BinaryConstants.WireType.VARINT:
            this.skipVarintField();
            break;
          case jspb.BinaryConstants.WireType.FIXED64:
            this.skipFixed64Field();
            break;
          case jspb.BinaryConstants.WireType.DELIMITED:
            this.skipDelimitedField();
            break;
          case jspb.BinaryConstants.WireType.FIXED32:
            this.skipFixed32Field();
            break;
          case jspb.BinaryConstants.WireType.START_GROUP:
            this.skipGroup();
            break;
          default:
            goog.asserts.fail("Invalid wire encoding for field.");
        }
      };
      jspb.BinaryReader.prototype.registerReadCallback = function(a, b) {
        this.readCallbacks_ === null && (this.readCallbacks_ = {});
        goog.asserts.assert(!this.readCallbacks_[a]);
        this.readCallbacks_[a] = b;
      };
      jspb.BinaryReader.prototype.runReadCallback = function(a) {
        goog.asserts.assert(this.readCallbacks_ !== null);
        a = this.readCallbacks_[a];
        goog.asserts.assert(a);
        return a(this);
      };
      jspb.BinaryReader.prototype.readAny = function(a) {
        this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(a);
        var b = jspb.BinaryConstants.FieldType;
        switch (a) {
          case b.DOUBLE:
            return this.readDouble();
          case b.FLOAT:
            return this.readFloat();
          case b.INT64:
            return this.readInt64();
          case b.UINT64:
            return this.readUint64();
          case b.INT32:
            return this.readInt32();
          case b.FIXED64:
            return this.readFixed64();
          case b.FIXED32:
            return this.readFixed32();
          case b.BOOL:
            return this.readBool();
          case b.STRING:
            return this.readString();
          case b.GROUP:
            goog.asserts.fail("Group field type not supported in readAny()");
          case b.MESSAGE:
            goog.asserts.fail("Message field type not supported in readAny()");
          case b.BYTES:
            return this.readBytes();
          case b.UINT32:
            return this.readUint32();
          case b.ENUM:
            return this.readEnum();
          case b.SFIXED32:
            return this.readSfixed32();
          case b.SFIXED64:
            return this.readSfixed64();
          case b.SINT32:
            return this.readSint32();
          case b.SINT64:
            return this.readSint64();
          case b.FHASH64:
            return this.readFixedHash64();
          case b.VHASH64:
            return this.readVarintHash64();
          default:
            goog.asserts.fail("Invalid field type in readAny()");
        }
        return 0;
      };
      jspb.BinaryReader.prototype.readMessage = function(a, b) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var c = this.decoder_.getEnd(), d = this.decoder_.readUnsignedVarint32();
        d = this.decoder_.getCursor() + d;
        this.decoder_.setEnd(d);
        b(a, this);
        this.decoder_.setCursor(d);
        this.decoder_.setEnd(c);
      };
      jspb.BinaryReader.prototype.readGroup = function(a, b, c) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP);
        goog.asserts.assert(this.nextField_ == a);
        c(b, this);
        this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (goog.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = true);
      };
      jspb.BinaryReader.prototype.getFieldDecoder = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a = this.decoder_.readUnsignedVarint32(), b = this.decoder_.getCursor(), c = b + a;
        a = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), b, a);
        this.decoder_.setCursor(c);
        return a;
      };
      jspb.BinaryReader.prototype.readInt32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint32();
      };
      jspb.BinaryReader.prototype.readInt32String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint32String();
      };
      jspb.BinaryReader.prototype.readInt64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64();
      };
      jspb.BinaryReader.prototype.readInt64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64String();
      };
      jspb.BinaryReader.prototype.readUint32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint32();
      };
      jspb.BinaryReader.prototype.readUint32String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint32String();
      };
      jspb.BinaryReader.prototype.readUint64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint64();
      };
      jspb.BinaryReader.prototype.readUint64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint64String();
      };
      jspb.BinaryReader.prototype.readSint32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint32();
      };
      jspb.BinaryReader.prototype.readSint64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint64();
      };
      jspb.BinaryReader.prototype.readSint64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint64String();
      };
      jspb.BinaryReader.prototype.readFixed32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readUint32();
      };
      jspb.BinaryReader.prototype.readFixed64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readUint64();
      };
      jspb.BinaryReader.prototype.readFixed64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readUint64String();
      };
      jspb.BinaryReader.prototype.readSfixed32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readInt32();
      };
      jspb.BinaryReader.prototype.readSfixed32String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readInt32().toString();
      };
      jspb.BinaryReader.prototype.readSfixed64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readInt64();
      };
      jspb.BinaryReader.prototype.readSfixed64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readInt64String();
      };
      jspb.BinaryReader.prototype.readFloat = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readFloat();
      };
      jspb.BinaryReader.prototype.readDouble = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readDouble();
      };
      jspb.BinaryReader.prototype.readBool = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return !!this.decoder_.readUnsignedVarint32();
      };
      jspb.BinaryReader.prototype.readEnum = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64();
      };
      jspb.BinaryReader.prototype.readString = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readString(a);
      };
      jspb.BinaryReader.prototype.readBytes = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readBytes(a);
      };
      jspb.BinaryReader.prototype.readVarintHash64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readVarintHash64();
      };
      jspb.BinaryReader.prototype.readSintHash64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarintHash64();
      };
      jspb.BinaryReader.prototype.readSplitVarint64 = function(a) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSplitVarint64(a);
      };
      jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function(a) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSplitVarint64(function(b, c) {
          return jspb.utils.fromZigzag64(b, c, a);
        });
      };
      jspb.BinaryReader.prototype.readFixedHash64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readFixedHash64();
      };
      jspb.BinaryReader.prototype.readSplitFixed64 = function(a) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readSplitFixed64(a);
      };
      jspb.BinaryReader.prototype.readPackedField_ = function(a) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var b = this.decoder_.readUnsignedVarint32();
        b = this.decoder_.getCursor() + b;
        for (var c = []; this.decoder_.getCursor() < b; )
          c.push(a.call(this.decoder_));
        return c;
      };
      jspb.BinaryReader.prototype.readPackedInt32 = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint32);
      };
      jspb.BinaryReader.prototype.readPackedInt32String = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint32String);
      };
      jspb.BinaryReader.prototype.readPackedInt64 = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint64);
      };
      jspb.BinaryReader.prototype.readPackedInt64String = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedUint32 = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32);
      };
      jspb.BinaryReader.prototype.readPackedUint32String = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32String);
      };
      jspb.BinaryReader.prototype.readPackedUint64 = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64);
      };
      jspb.BinaryReader.prototype.readPackedUint64String = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedSint32 = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint32);
      };
      jspb.BinaryReader.prototype.readPackedSint64 = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint64);
      };
      jspb.BinaryReader.prototype.readPackedSint64String = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedFixed32 = function() {
        return this.readPackedField_(this.decoder_.readUint32);
      };
      jspb.BinaryReader.prototype.readPackedFixed64 = function() {
        return this.readPackedField_(this.decoder_.readUint64);
      };
      jspb.BinaryReader.prototype.readPackedFixed64String = function() {
        return this.readPackedField_(this.decoder_.readUint64String);
      };
      jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
        return this.readPackedField_(this.decoder_.readInt32);
      };
      jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
        return this.readPackedField_(this.decoder_.readInt64);
      };
      jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
        return this.readPackedField_(this.decoder_.readInt64String);
      };
      jspb.BinaryReader.prototype.readPackedFloat = function() {
        return this.readPackedField_(this.decoder_.readFloat);
      };
      jspb.BinaryReader.prototype.readPackedDouble = function() {
        return this.readPackedField_(this.decoder_.readDouble);
      };
      jspb.BinaryReader.prototype.readPackedBool = function() {
        return this.readPackedField_(this.decoder_.readBool);
      };
      jspb.BinaryReader.prototype.readPackedEnum = function() {
        return this.readPackedField_(this.decoder_.readEnum);
      };
      jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
        return this.readPackedField_(this.decoder_.readVarintHash64);
      };
      jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
        return this.readPackedField_(this.decoder_.readFixedHash64);
      };
      jspb.Map = function(a, b) {
        this.arr_ = a;
        this.valueCtor_ = b;
        this.map_ = {};
        this.arrClean = true;
        0 < this.arr_.length && this.loadFromArray_();
      };
      jspb.Map.prototype.loadFromArray_ = function() {
        for (var a = 0; a < this.arr_.length; a++) {
          var b = this.arr_[a], c = b[0];
          this.map_[c.toString()] = new jspb.Map.Entry_(c, b[1]);
        }
        this.arrClean = true;
      };
      jspb.Map.prototype.toArray = function() {
        if (this.arrClean) {
          if (this.valueCtor_) {
            var a = this.map_, b;
            for (b in a)
              if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b].valueWrapper;
                c && c.toArray();
              }
          }
        } else {
          this.arr_.length = 0;
          a = this.stringKeys_();
          a.sort();
          for (b = 0; b < a.length; b++) {
            var d = this.map_[a[b]];
            (c = d.valueWrapper) && c.toArray();
            this.arr_.push([d.key, d.value]);
          }
          this.arrClean = true;
        }
        return this.arr_;
      };
      jspb.Map.prototype.toObject = function(a, b) {
        for (var c = this.toArray(), d = [], e = 0; e < c.length; e++) {
          var f = this.map_[c[e][0].toString()];
          this.wrapEntry_(f);
          var g = f.valueWrapper;
          g ? (goog.asserts.assert(b), d.push([f.key, b(a, g)])) : d.push([f.key, f.value]);
        }
        return d;
      };
      jspb.Map.fromObject = function(a, b, c) {
        b = new jspb.Map([], b);
        for (var d = 0; d < a.length; d++) {
          var e = a[d][0], f = c(a[d][1]);
          b.set(e, f);
        }
        return b;
      };
      jspb.Map.ArrayIteratorIterable_ = function(a) {
        this.idx_ = 0;
        this.arr_ = a;
      };
      jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
        return this.idx_ < this.arr_.length ? { done: false, value: this.arr_[this.idx_++] } : { done: true, value: void 0 };
      };
      typeof Symbol != "undefined" && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
        return this;
      });
      jspb.Map.prototype.getLength = function() {
        return this.stringKeys_().length;
      };
      jspb.Map.prototype.clear = function() {
        this.map_ = {};
        this.arrClean = false;
      };
      jspb.Map.prototype.del = function(a) {
        a = a.toString();
        var b = this.map_.hasOwnProperty(a);
        delete this.map_[a];
        this.arrClean = false;
        return b;
      };
      jspb.Map.prototype.getEntryList = function() {
        var a = [], b = this.stringKeys_();
        b.sort();
        for (var c = 0; c < b.length; c++) {
          var d = this.map_[b[c]];
          a.push([d.key, d.value]);
        }
        return a;
      };
      jspb.Map.prototype.entries = function() {
        var a = [], b = this.stringKeys_();
        b.sort();
        for (var c = 0; c < b.length; c++) {
          var d = this.map_[b[c]];
          a.push([d.key, this.wrapEntry_(d)]);
        }
        return new jspb.Map.ArrayIteratorIterable_(a);
      };
      jspb.Map.prototype.keys = function() {
        var a = [], b = this.stringKeys_();
        b.sort();
        for (var c = 0; c < b.length; c++)
          a.push(this.map_[b[c]].key);
        return new jspb.Map.ArrayIteratorIterable_(a);
      };
      jspb.Map.prototype.values = function() {
        var a = [], b = this.stringKeys_();
        b.sort();
        for (var c = 0; c < b.length; c++)
          a.push(this.wrapEntry_(this.map_[b[c]]));
        return new jspb.Map.ArrayIteratorIterable_(a);
      };
      jspb.Map.prototype.forEach = function(a, b) {
        var c = this.stringKeys_();
        c.sort();
        for (var d = 0; d < c.length; d++) {
          var e = this.map_[c[d]];
          a.call(b, this.wrapEntry_(e), e.key, this);
        }
      };
      jspb.Map.prototype.set = function(a, b) {
        var c = new jspb.Map.Entry_(a);
        this.valueCtor_ ? (c.valueWrapper = b, c.value = b.toArray()) : c.value = b;
        this.map_[a.toString()] = c;
        this.arrClean = false;
        return this;
      };
      jspb.Map.prototype.wrapEntry_ = function(a) {
        return this.valueCtor_ ? (a.valueWrapper || (a.valueWrapper = new this.valueCtor_(a.value)), a.valueWrapper) : a.value;
      };
      jspb.Map.prototype.get = function(a) {
        if (a = this.map_[a.toString()])
          return this.wrapEntry_(a);
      };
      jspb.Map.prototype.has = function(a) {
        return a.toString() in this.map_;
      };
      jspb.Map.prototype.serializeBinary = function(a, b, c, d, e) {
        var f = this.stringKeys_();
        f.sort();
        for (var g = 0; g < f.length; g++) {
          var h = this.map_[f[g]];
          b.beginSubMessage(a);
          c.call(b, 1, h.key);
          this.valueCtor_ ? d.call(b, 2, this.wrapEntry_(h), e) : d.call(b, 2, h.value);
          b.endSubMessage();
        }
      };
      jspb.Map.deserializeBinary = function(a, b, c, d, e, f, g) {
        for (; b.nextField() && !b.isEndGroup(); ) {
          var h = b.getFieldNumber();
          h == 1 ? f = c.call(b) : h == 2 && (a.valueCtor_ ? (goog.asserts.assert(e), g || (g = new a.valueCtor_()), d.call(b, g, e)) : g = d.call(b));
        }
        goog.asserts.assert(f != void 0);
        goog.asserts.assert(g != void 0);
        a.set(f, g);
      };
      jspb.Map.prototype.stringKeys_ = function() {
        var a = this.map_, b = [], c;
        for (c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
        return b;
      };
      jspb.Map.Entry_ = function(a, b) {
        this.key = a;
        this.value = b;
        this.valueWrapper = void 0;
      };
      jspb.ExtensionFieldInfo = function(a, b, c, d, e) {
        this.fieldIndex = a;
        this.fieldName = b;
        this.ctor = c;
        this.toObjectFn = d;
        this.isRepeated = e;
      };
      jspb.ExtensionFieldBinaryInfo = function(a, b, c, d, e, f) {
        this.fieldInfo = a;
        this.binaryReaderFn = b;
        this.binaryWriterFn = c;
        this.binaryMessageSerializeFn = d;
        this.binaryMessageDeserializeFn = e;
        this.isPacked = f;
      };
      jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
        return !!this.ctor;
      };
      jspb.Message = function() {
      };
      jspb.Message.GENERATE_TO_OBJECT = true;
      jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE;
      jspb.Message.GENERATE_TO_STRING = true;
      jspb.Message.ASSUME_LOCAL_ARRAYS = false;
      jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = true;
      jspb.Message.SUPPORTS_UINT8ARRAY_ = typeof Uint8Array == "function";
      jspb.Message.prototype.getJsPbMessageId = function() {
        return this.messageId_;
      };
      jspb.Message.getIndex_ = function(a, b) {
        return b + a.arrayIndexOffset_;
      };
      jspb.Message.hiddenES6Property_ = function() {
      };
      jspb.Message.getFieldNumber_ = function(a, b) {
        return b - a.arrayIndexOffset_;
      };
      jspb.Message.initialize = function(a, b, c, d, e, f) {
        a.wrappers_ = null;
        b || (b = c ? [c] : []);
        a.messageId_ = c ? String(c) : void 0;
        a.arrayIndexOffset_ = c === 0 ? -1 : 0;
        a.array = b;
        jspb.Message.initPivotAndExtensionObject_(a, d);
        a.convertedPrimitiveFields_ = {};
        jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (a.repeatedFields = e);
        if (e)
          for (b = 0; b < e.length; b++)
            c = e[b], c < a.pivot_ ? (c = jspb.Message.getIndex_(a, c), a.array[c] = a.array[c] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(a), a.extensionObject_[c] = a.extensionObject_[c] || jspb.Message.EMPTY_LIST_SENTINEL_);
        if (f && f.length)
          for (b = 0; b < f.length; b++)
            jspb.Message.computeOneofCase(a, f[b]);
      };
      jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [];
      jspb.Message.isArray_ = function(a) {
        return jspb.Message.ASSUME_LOCAL_ARRAYS ? a instanceof Array : Array.isArray(a);
      };
      jspb.Message.isExtensionObject_ = function(a) {
        return a !== null && typeof a == "object" && !jspb.Message.isArray_(a) && !(jspb.Message.SUPPORTS_UINT8ARRAY_ && a instanceof Uint8Array);
      };
      jspb.Message.initPivotAndExtensionObject_ = function(a, b) {
        var c = a.array.length, d = -1;
        if (c && (d = c - 1, c = a.array[d], jspb.Message.isExtensionObject_(c))) {
          a.pivot_ = jspb.Message.getFieldNumber_(a, d);
          a.extensionObject_ = c;
          return;
        }
        -1 < b ? (a.pivot_ = Math.max(b, jspb.Message.getFieldNumber_(a, d + 1)), a.extensionObject_ = null) : a.pivot_ = Number.MAX_VALUE;
      };
      jspb.Message.maybeInitEmptyExtensionObject_ = function(a) {
        var b = jspb.Message.getIndex_(a, a.pivot_);
        a.array[b] || (a.extensionObject_ = a.array[b] = {});
      };
      jspb.Message.toObjectList = function(a, b, c) {
        for (var d = [], e = 0; e < a.length; e++)
          d[e] = b.call(a[e], c, a[e]);
        return d;
      };
      jspb.Message.toObjectExtension = function(a, b, c, d, e) {
        for (var f in c) {
          var g = c[f], h = d.call(a, g);
          if (h != null) {
            for (var k in g.fieldName)
              if (g.fieldName.hasOwnProperty(k))
                break;
            b[k] = g.toObjectFn ? g.isRepeated ? jspb.Message.toObjectList(h, g.toObjectFn, e) : g.toObjectFn(e, h) : h;
          }
        }
      };
      jspb.Message.serializeBinaryExtensions = function(a, b, c, d) {
        for (var e in c) {
          var f = c[e], g = f.fieldInfo;
          if (!f.binaryWriterFn)
            throw Error("Message extension present that was generated without binary serialization support");
          var h = d.call(a, g);
          if (h != null)
            if (g.isMessageType())
              if (f.binaryMessageSerializeFn)
                f.binaryWriterFn.call(b, g.fieldIndex, h, f.binaryMessageSerializeFn);
              else
                throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
            else
              f.binaryWriterFn.call(b, g.fieldIndex, h);
        }
      };
      jspb.Message.readBinaryExtension = function(a, b, c, d, e) {
        var f = c[b.getFieldNumber()];
        if (f) {
          c = f.fieldInfo;
          if (!f.binaryReaderFn)
            throw Error("Deserializing extension whose generated code does not support binary format");
          if (c.isMessageType()) {
            var g = new c.ctor();
            f.binaryReaderFn.call(b, g, f.binaryMessageDeserializeFn);
          } else
            g = f.binaryReaderFn.call(b);
          c.isRepeated && !f.isPacked ? (b = d.call(a, c)) ? b.push(g) : e.call(a, c, [g]) : e.call(a, c, g);
        } else
          b.skipField();
      };
      jspb.Message.getField = function(a, b) {
        if (b < a.pivot_) {
          b = jspb.Message.getIndex_(a, b);
          var c = a.array[b];
          return c === jspb.Message.EMPTY_LIST_SENTINEL_ ? a.array[b] = [] : c;
        }
        if (a.extensionObject_)
          return c = a.extensionObject_[b], c === jspb.Message.EMPTY_LIST_SENTINEL_ ? a.extensionObject_[b] = [] : c;
      };
      jspb.Message.getRepeatedField = function(a, b) {
        return jspb.Message.getField(a, b);
      };
      jspb.Message.getOptionalFloatingPointField = function(a, b) {
        a = jspb.Message.getField(a, b);
        return a == null ? a : +a;
      };
      jspb.Message.getBooleanField = function(a, b) {
        a = jspb.Message.getField(a, b);
        return a == null ? a : !!a;
      };
      jspb.Message.getRepeatedFloatingPointField = function(a, b) {
        var c = jspb.Message.getRepeatedField(a, b);
        a.convertedPrimitiveFields_ || (a.convertedPrimitiveFields_ = {});
        if (!a.convertedPrimitiveFields_[b]) {
          for (var d = 0; d < c.length; d++)
            c[d] = +c[d];
          a.convertedPrimitiveFields_[b] = true;
        }
        return c;
      };
      jspb.Message.getRepeatedBooleanField = function(a, b) {
        var c = jspb.Message.getRepeatedField(a, b);
        a.convertedPrimitiveFields_ || (a.convertedPrimitiveFields_ = {});
        if (!a.convertedPrimitiveFields_[b]) {
          for (var d = 0; d < c.length; d++)
            c[d] = !!c[d];
          a.convertedPrimitiveFields_[b] = true;
        }
        return c;
      };
      jspb.Message.bytesAsB64 = function(a) {
        if (a == null || typeof a === "string")
          return a;
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a instanceof Uint8Array)
          return goog.crypt.base64.encodeByteArray(a);
        goog.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(a));
        return null;
      };
      jspb.Message.bytesAsU8 = function(a) {
        if (a == null || a instanceof Uint8Array)
          return a;
        if (typeof a === "string")
          return goog.crypt.base64.decodeStringToUint8Array(a);
        goog.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(a));
        return null;
      };
      jspb.Message.bytesListAsB64 = function(a) {
        jspb.Message.assertConsistentTypes_(a);
        return a.length && typeof a[0] !== "string" ? goog.array.map(a, jspb.Message.bytesAsB64) : a;
      };
      jspb.Message.bytesListAsU8 = function(a) {
        jspb.Message.assertConsistentTypes_(a);
        return !a.length || a[0] instanceof Uint8Array ? a : goog.array.map(a, jspb.Message.bytesAsU8);
      };
      jspb.Message.assertConsistentTypes_ = function(a) {
        if (goog.DEBUG && a && 1 < a.length) {
          var b = goog.typeOf(a[0]);
          goog.array.forEach(a, function(a2) {
            goog.typeOf(a2) != b && goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(a2) + " expected " + b);
          });
        }
      };
      jspb.Message.getFieldWithDefault = function(a, b, c) {
        a = jspb.Message.getField(a, b);
        return a == null ? c : a;
      };
      jspb.Message.getBooleanFieldWithDefault = function(a, b, c) {
        a = jspb.Message.getBooleanField(a, b);
        return a == null ? c : a;
      };
      jspb.Message.getFloatingPointFieldWithDefault = function(a, b, c) {
        a = jspb.Message.getOptionalFloatingPointField(a, b);
        return a == null ? c : a;
      };
      jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault;
      jspb.Message.getMapField = function(a, b, c, d) {
        a.wrappers_ || (a.wrappers_ = {});
        if (b in a.wrappers_)
          return a.wrappers_[b];
        var e = jspb.Message.getField(a, b);
        if (!e) {
          if (c)
            return;
          e = [];
          jspb.Message.setField(a, b, e);
        }
        return a.wrappers_[b] = new jspb.Map(e, d);
      };
      jspb.Message.setField = function(a, b, c) {
        goog.asserts.assertInstanceof(a, jspb.Message);
        b < a.pivot_ ? a.array[jspb.Message.getIndex_(a, b)] = c : (jspb.Message.maybeInitEmptyExtensionObject_(a), a.extensionObject_[b] = c);
        return a;
      };
      jspb.Message.setProto3IntField = function(a, b, c) {
        return jspb.Message.setFieldIgnoringDefault_(a, b, c, 0);
      };
      jspb.Message.setProto3FloatField = function(a, b, c) {
        return jspb.Message.setFieldIgnoringDefault_(a, b, c, 0);
      };
      jspb.Message.setProto3BooleanField = function(a, b, c) {
        return jspb.Message.setFieldIgnoringDefault_(a, b, c, false);
      };
      jspb.Message.setProto3StringField = function(a, b, c) {
        return jspb.Message.setFieldIgnoringDefault_(a, b, c, "");
      };
      jspb.Message.setProto3BytesField = function(a, b, c) {
        return jspb.Message.setFieldIgnoringDefault_(a, b, c, "");
      };
      jspb.Message.setProto3EnumField = function(a, b, c) {
        return jspb.Message.setFieldIgnoringDefault_(a, b, c, 0);
      };
      jspb.Message.setProto3StringIntField = function(a, b, c) {
        return jspb.Message.setFieldIgnoringDefault_(a, b, c, "0");
      };
      jspb.Message.setFieldIgnoringDefault_ = function(a, b, c, d) {
        goog.asserts.assertInstanceof(a, jspb.Message);
        c !== d ? jspb.Message.setField(a, b, c) : b < a.pivot_ ? a.array[jspb.Message.getIndex_(a, b)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(a), delete a.extensionObject_[b]);
        return a;
      };
      jspb.Message.addToRepeatedField = function(a, b, c, d) {
        goog.asserts.assertInstanceof(a, jspb.Message);
        b = jspb.Message.getRepeatedField(a, b);
        d != void 0 ? b.splice(d, 0, c) : b.push(c);
        return a;
      };
      jspb.Message.setOneofField = function(a, b, c, d) {
        goog.asserts.assertInstanceof(a, jspb.Message);
        (c = jspb.Message.computeOneofCase(a, c)) && c !== b && d !== void 0 && (a.wrappers_ && c in a.wrappers_ && (a.wrappers_[c] = void 0), jspb.Message.setField(a, c, void 0));
        return jspb.Message.setField(a, b, d);
      };
      jspb.Message.computeOneofCase = function(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
          var f = b[e], g = jspb.Message.getField(a, f);
          g != null && (c = f, d = g, jspb.Message.setField(a, f, void 0));
        }
        return c ? (jspb.Message.setField(a, c, d), c) : 0;
      };
      jspb.Message.getWrapperField = function(a, b, c, d) {
        a.wrappers_ || (a.wrappers_ = {});
        if (!a.wrappers_[c]) {
          var e = jspb.Message.getField(a, c);
          if (d || e)
            a.wrappers_[c] = new b(e);
        }
        return a.wrappers_[c];
      };
      jspb.Message.getRepeatedWrapperField = function(a, b, c) {
        jspb.Message.wrapRepeatedField_(a, b, c);
        b = a.wrappers_[c];
        b == jspb.Message.EMPTY_LIST_SENTINEL_ && (b = a.wrappers_[c] = []);
        return b;
      };
      jspb.Message.wrapRepeatedField_ = function(a, b, c) {
        a.wrappers_ || (a.wrappers_ = {});
        if (!a.wrappers_[c]) {
          for (var d = jspb.Message.getRepeatedField(a, c), e = [], f = 0; f < d.length; f++)
            e[f] = new b(d[f]);
          a.wrappers_[c] = e;
        }
      };
      jspb.Message.setWrapperField = function(a, b, c) {
        goog.asserts.assertInstanceof(a, jspb.Message);
        a.wrappers_ || (a.wrappers_ = {});
        var d = c ? c.toArray() : c;
        a.wrappers_[b] = c;
        return jspb.Message.setField(a, b, d);
      };
      jspb.Message.setOneofWrapperField = function(a, b, c, d) {
        goog.asserts.assertInstanceof(a, jspb.Message);
        a.wrappers_ || (a.wrappers_ = {});
        var e = d ? d.toArray() : d;
        a.wrappers_[b] = d;
        return jspb.Message.setOneofField(a, b, c, e);
      };
      jspb.Message.setRepeatedWrapperField = function(a, b, c) {
        goog.asserts.assertInstanceof(a, jspb.Message);
        a.wrappers_ || (a.wrappers_ = {});
        c = c || [];
        for (var d = [], e = 0; e < c.length; e++)
          d[e] = c[e].toArray();
        a.wrappers_[b] = c;
        return jspb.Message.setField(a, b, d);
      };
      jspb.Message.addToRepeatedWrapperField = function(a, b, c, d, e) {
        jspb.Message.wrapRepeatedField_(a, d, b);
        var f = a.wrappers_[b];
        f || (f = a.wrappers_[b] = []);
        c = c ? c : new d();
        a = jspb.Message.getRepeatedField(a, b);
        e != void 0 ? (f.splice(e, 0, c), a.splice(e, 0, c.toArray())) : (f.push(c), a.push(c.toArray()));
        return c;
      };
      jspb.Message.toMap = function(a, b, c, d) {
        for (var e = {}, f = 0; f < a.length; f++)
          e[b.call(a[f])] = c ? c.call(a[f], d, a[f]) : a[f];
        return e;
      };
      jspb.Message.prototype.syncMapFields_ = function() {
        if (this.wrappers_)
          for (var a in this.wrappers_) {
            var b = this.wrappers_[a];
            if (Array.isArray(b))
              for (var c = 0; c < b.length; c++)
                b[c] && b[c].toArray();
            else
              b && b.toArray();
          }
      };
      jspb.Message.prototype.toArray = function() {
        this.syncMapFields_();
        return this.array;
      };
      jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
        this.syncMapFields_();
        return this.array.toString();
      });
      jspb.Message.prototype.getExtension = function(a) {
        if (this.extensionObject_) {
          this.wrappers_ || (this.wrappers_ = {});
          var b = a.fieldIndex;
          if (a.isRepeated) {
            if (a.isMessageType())
              return this.wrappers_[b] || (this.wrappers_[b] = goog.array.map(this.extensionObject_[b] || [], function(b2) {
                return new a.ctor(b2);
              })), this.wrappers_[b];
          } else if (a.isMessageType())
            return !this.wrappers_[b] && this.extensionObject_[b] && (this.wrappers_[b] = new a.ctor(this.extensionObject_[b])), this.wrappers_[b];
          return this.extensionObject_[b];
        }
      };
      jspb.Message.prototype.setExtension = function(a, b) {
        this.wrappers_ || (this.wrappers_ = {});
        jspb.Message.maybeInitEmptyExtensionObject_(this);
        var c = a.fieldIndex;
        a.isRepeated ? (b = b || [], a.isMessageType() ? (this.wrappers_[c] = b, this.extensionObject_[c] = goog.array.map(b, function(a2) {
          return a2.toArray();
        })) : this.extensionObject_[c] = b) : a.isMessageType() ? (this.wrappers_[c] = b, this.extensionObject_[c] = b ? b.toArray() : b) : this.extensionObject_[c] = b;
        return this;
      };
      jspb.Message.difference = function(a, b) {
        if (!(a instanceof b.constructor))
          throw Error("Messages have different types.");
        var c = a.toArray();
        b = b.toArray();
        var d = [], e = 0, f = c.length > b.length ? c.length : b.length;
        a.getJsPbMessageId() && (d[0] = a.getJsPbMessageId(), e = 1);
        for (; e < f; e++)
          jspb.Message.compareFields(c[e], b[e]) || (d[e] = b[e]);
        return new a.constructor(d);
      };
      jspb.Message.equals = function(a, b) {
        return a == b || !(!a || !b) && a instanceof b.constructor && jspb.Message.compareFields(a.toArray(), b.toArray());
      };
      jspb.Message.compareExtensions = function(a, b) {
        a = a || {};
        b = b || {};
        var c = {}, d;
        for (d in a)
          c[d] = 0;
        for (d in b)
          c[d] = 0;
        for (d in c)
          if (!jspb.Message.compareFields(a[d], b[d]))
            return false;
        return true;
      };
      jspb.Message.compareFields = function(a, b) {
        if (a == b)
          return true;
        if (!goog.isObject(a) || !goog.isObject(b))
          return typeof a === "number" && isNaN(a) || typeof b === "number" && isNaN(b) ? String(a) == String(b) : false;
        if (a.constructor != b.constructor)
          return false;
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a.constructor === Uint8Array) {
          if (a.length != b.length)
            return false;
          for (var c = 0; c < a.length; c++)
            if (a[c] != b[c])
              return false;
          return true;
        }
        if (a.constructor === Array) {
          var d = void 0, e = void 0, f = Math.max(a.length, b.length);
          for (c = 0; c < f; c++) {
            var g = a[c], h = b[c];
            g && g.constructor == Object && (goog.asserts.assert(d === void 0), goog.asserts.assert(c === a.length - 1), d = g, g = void 0);
            h && h.constructor == Object && (goog.asserts.assert(e === void 0), goog.asserts.assert(c === b.length - 1), e = h, h = void 0);
            if (!jspb.Message.compareFields(g, h))
              return false;
          }
          return d || e ? (d = d || {}, e = e || {}, jspb.Message.compareExtensions(d, e)) : true;
        }
        if (a.constructor === Object)
          return jspb.Message.compareExtensions(a, b);
        throw Error("Invalid type in JSPB array");
      };
      jspb.Message.prototype.cloneMessage = function() {
        return jspb.Message.cloneMessage(this);
      };
      jspb.Message.prototype.clone = function() {
        return jspb.Message.cloneMessage(this);
      };
      jspb.Message.clone = function(a) {
        return jspb.Message.cloneMessage(a);
      };
      jspb.Message.cloneMessage = function(a) {
        return new a.constructor(jspb.Message.clone_(a.toArray()));
      };
      jspb.Message.copyInto = function(a, b) {
        goog.asserts.assertInstanceof(a, jspb.Message);
        goog.asserts.assertInstanceof(b, jspb.Message);
        goog.asserts.assert(a.constructor == b.constructor, "Copy source and target message should have the same type.");
        a = jspb.Message.clone(a);
        for (var c = b.toArray(), d = a.toArray(), e = c.length = 0; e < d.length; e++)
          c[e] = d[e];
        b.wrappers_ = a.wrappers_;
        b.extensionObject_ = a.extensionObject_;
      };
      jspb.Message.clone_ = function(a) {
        if (Array.isArray(a)) {
          for (var b = Array(a.length), c = 0; c < a.length; c++) {
            var d = a[c];
            d != null && (b[c] = typeof d == "object" ? jspb.Message.clone_(goog.asserts.assert(d)) : d);
          }
          return b;
        }
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a instanceof Uint8Array)
          return new Uint8Array(a);
        b = {};
        for (c in a)
          d = a[c], d != null && (b[c] = typeof d == "object" ? jspb.Message.clone_(goog.asserts.assert(d)) : d);
        return b;
      };
      jspb.Message.registerMessageType = function(a, b) {
        b.messageId = a;
      };
      jspb.Message.messageSetExtensions = {};
      jspb.Message.messageSetExtensionsBinary = {};
      jspb.arith = {};
      jspb.arith.UInt64 = function(a, b) {
        this.lo = a;
        this.hi = b;
      };
      jspb.arith.UInt64.prototype.cmp = function(a) {
        return this.hi < a.hi || this.hi == a.hi && this.lo < a.lo ? -1 : this.hi == a.hi && this.lo == a.lo ? 0 : 1;
      };
      jspb.arith.UInt64.prototype.rightShift = function() {
        return new jspb.arith.UInt64((this.lo >>> 1 | (this.hi & 1) << 31) >>> 0, this.hi >>> 1 >>> 0);
      };
      jspb.arith.UInt64.prototype.leftShift = function() {
        return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0);
      };
      jspb.arith.UInt64.prototype.msb = function() {
        return !!(this.hi & 2147483648);
      };
      jspb.arith.UInt64.prototype.lsb = function() {
        return !!(this.lo & 1);
      };
      jspb.arith.UInt64.prototype.zero = function() {
        return this.lo == 0 && this.hi == 0;
      };
      jspb.arith.UInt64.prototype.add = function(a) {
        return new jspb.arith.UInt64((this.lo + a.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.UInt64.prototype.sub = function(a) {
        return new jspb.arith.UInt64((this.lo - a.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a.hi & 4294967295) >>> 0) - (0 > this.lo - a.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.UInt64.mul32x32 = function(a, b) {
        var c = a & 65535;
        a >>>= 16;
        var d = b & 65535, e = b >>> 16;
        b = c * d + 65536 * (c * e & 65535) + 65536 * (a * d & 65535);
        for (c = a * e + (c * e >>> 16) + (a * d >>> 16); 4294967296 <= b; )
          b -= 4294967296, c += 1;
        return new jspb.arith.UInt64(b >>> 0, c >>> 0);
      };
      jspb.arith.UInt64.prototype.mul = function(a) {
        var b = jspb.arith.UInt64.mul32x32(this.lo, a);
        a = jspb.arith.UInt64.mul32x32(this.hi, a);
        a.hi = a.lo;
        a.lo = 0;
        return b.add(a);
      };
      jspb.arith.UInt64.prototype.div = function(a) {
        if (a == 0)
          return [];
        var b = new jspb.arith.UInt64(0, 0), c = new jspb.arith.UInt64(this.lo, this.hi);
        a = new jspb.arith.UInt64(a, 0);
        for (var d = new jspb.arith.UInt64(1, 0); !a.msb(); )
          a = a.leftShift(), d = d.leftShift();
        for (; !d.zero(); )
          0 >= a.cmp(c) && (b = b.add(d), c = c.sub(a)), a = a.rightShift(), d = d.rightShift();
        return [b, c];
      };
      jspb.arith.UInt64.prototype.toString = function() {
        for (var a = "", b = this; !b.zero(); ) {
          b = b.div(10);
          var c = b[0];
          a = b[1].lo + a;
          b = c;
        }
        a == "" && (a = "0");
        return a;
      };
      jspb.arith.UInt64.fromString = function(a) {
        for (var b = new jspb.arith.UInt64(0, 0), c = new jspb.arith.UInt64(0, 0), d = 0; d < a.length; d++) {
          if ("0" > a[d] || "9" < a[d])
            return null;
          var e = parseInt(a[d], 10);
          c.lo = e;
          b = b.mul(10).add(c);
        }
        return b;
      };
      jspb.arith.UInt64.prototype.clone = function() {
        return new jspb.arith.UInt64(this.lo, this.hi);
      };
      jspb.arith.Int64 = function(a, b) {
        this.lo = a;
        this.hi = b;
      };
      jspb.arith.Int64.prototype.add = function(a) {
        return new jspb.arith.Int64((this.lo + a.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.Int64.prototype.sub = function(a) {
        return new jspb.arith.Int64((this.lo - a.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a.hi & 4294967295) >>> 0) - (0 > this.lo - a.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.Int64.prototype.clone = function() {
        return new jspb.arith.Int64(this.lo, this.hi);
      };
      jspb.arith.Int64.prototype.toString = function() {
        var a = (this.hi & 2147483648) != 0, b = new jspb.arith.UInt64(this.lo, this.hi);
        a && (b = new jspb.arith.UInt64(0, 0).sub(b));
        return (a ? "-" : "") + b.toString();
      };
      jspb.arith.Int64.fromString = function(a) {
        var b = 0 < a.length && a[0] == "-";
        b && (a = a.substring(1));
        a = jspb.arith.UInt64.fromString(a);
        if (a === null)
          return null;
        b && (a = new jspb.arith.UInt64(0, 0).sub(a));
        return new jspb.arith.Int64(a.lo, a.hi);
      };
      jspb.BinaryEncoder = function() {
        this.buffer_ = [];
      };
      jspb.BinaryEncoder.prototype.length = function() {
        return this.buffer_.length;
      };
      jspb.BinaryEncoder.prototype.end = function() {
        var a = this.buffer_;
        this.buffer_ = [];
        return a;
      };
      jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(a, b) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(b == Math.floor(b));
        goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_32);
        for (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32); 0 < b || 127 < a; )
          this.buffer_.push(a & 127 | 128), a = (a >>> 7 | b << 25) >>> 0, b >>>= 7;
        this.buffer_.push(a);
      };
      jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(a, b) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(b == Math.floor(b));
        goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_32);
        goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32);
        this.writeUint32(a);
        this.writeUint32(b);
      };
      jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        for (goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_32); 127 < a; )
          this.buffer_.push(a & 127 | 128), a >>>= 7;
        this.buffer_.push(a);
      };
      jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_31 && a < jspb.BinaryConstants.TWO_TO_31);
        if (0 <= a)
          this.writeUnsignedVarint32(a);
        else {
          for (var b = 0; 9 > b; b++)
            this.buffer_.push(a & 127 | 128), a >>= 7;
          this.buffer_.push(1);
        }
      };
      jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_64);
        jspb.utils.splitInt64(a);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_63 && a < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitInt64(a);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_31 && a < jspb.BinaryConstants.TWO_TO_31);
        this.writeUnsignedVarint32((a << 1 ^ a >> 31) >>> 0);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_63 && a < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitZigzag64(a);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(a) {
        this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(a));
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function(a) {
        var b = this;
        jspb.utils.splitHash64(a);
        jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, function(a2, d) {
          b.writeSplitVarint64(a2 >>> 0, d >>> 0);
        });
      };
      jspb.BinaryEncoder.prototype.writeUint8 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(0 <= a && 256 > a);
        this.buffer_.push(a >>> 0 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint16 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(0 <= a && 65536 > a);
        this.buffer_.push(a >>> 0 & 255);
        this.buffer_.push(a >>> 8 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint32 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_32);
        this.buffer_.push(a >>> 0 & 255);
        this.buffer_.push(a >>> 8 & 255);
        this.buffer_.push(a >>> 16 & 255);
        this.buffer_.push(a >>> 24 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint64 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(0 <= a && a < jspb.BinaryConstants.TWO_TO_64);
        jspb.utils.splitUint64(a);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeInt8 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(-128 <= a && 128 > a);
        this.buffer_.push(a >>> 0 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt16 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(-32768 <= a && 32768 > a);
        this.buffer_.push(a >>> 0 & 255);
        this.buffer_.push(a >>> 8 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt32 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_31 && a < jspb.BinaryConstants.TWO_TO_31);
        this.buffer_.push(a >>> 0 & 255);
        this.buffer_.push(a >>> 8 & 255);
        this.buffer_.push(a >>> 16 & 255);
        this.buffer_.push(a >>> 24 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt64 = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_63 && a < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitInt64(a);
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeInt64String = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(+a >= -jspb.BinaryConstants.TWO_TO_63 && +a < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a));
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeFloat = function(a) {
        goog.asserts.assert(a === Infinity || a === -Infinity || isNaN(a) || a >= -jspb.BinaryConstants.FLOAT32_MAX && a <= jspb.BinaryConstants.FLOAT32_MAX);
        jspb.utils.splitFloat32(a);
        this.writeUint32(jspb.utils.split64Low);
      };
      jspb.BinaryEncoder.prototype.writeDouble = function(a) {
        goog.asserts.assert(a === Infinity || a === -Infinity || isNaN(a) || a >= -jspb.BinaryConstants.FLOAT64_MAX && a <= jspb.BinaryConstants.FLOAT64_MAX);
        jspb.utils.splitFloat64(a);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeBool = function(a) {
        goog.asserts.assert(typeof a === "boolean" || typeof a === "number");
        this.buffer_.push(a ? 1 : 0);
      };
      jspb.BinaryEncoder.prototype.writeEnum = function(a) {
        goog.asserts.assert(a == Math.floor(a));
        goog.asserts.assert(a >= -jspb.BinaryConstants.TWO_TO_31 && a < jspb.BinaryConstants.TWO_TO_31);
        this.writeSignedVarint32(a);
      };
      jspb.BinaryEncoder.prototype.writeBytes = function(a) {
        this.buffer_.push.apply(this.buffer_, a);
      };
      jspb.BinaryEncoder.prototype.writeVarintHash64 = function(a) {
        jspb.utils.splitHash64(a);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeFixedHash64 = function(a) {
        jspb.utils.splitHash64(a);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeString = function(a) {
        for (var b = this.buffer_.length, c = 0; c < a.length; c++) {
          var d = a.charCodeAt(c);
          if (128 > d)
            this.buffer_.push(d);
          else if (2048 > d)
            this.buffer_.push(d >> 6 | 192), this.buffer_.push(d & 63 | 128);
          else if (65536 > d)
            if (55296 <= d && 56319 >= d && c + 1 < a.length) {
              var e = a.charCodeAt(c + 1);
              56320 <= e && 57343 >= e && (d = 1024 * (d - 55296) + e - 56320 + 65536, this.buffer_.push(d >> 18 | 240), this.buffer_.push(d >> 12 & 63 | 128), this.buffer_.push(d >> 6 & 63 | 128), this.buffer_.push(d & 63 | 128), c++);
            } else
              this.buffer_.push(d >> 12 | 224), this.buffer_.push(d >> 6 & 63 | 128), this.buffer_.push(d & 63 | 128);
        }
        return this.buffer_.length - b;
      };
      jspb.BinaryWriter = function() {
        this.blocks_ = [];
        this.totalLength_ = 0;
        this.encoder_ = new jspb.BinaryEncoder();
        this.bookmarks_ = [];
      };
      jspb.BinaryWriter.prototype.appendUint8Array_ = function(a) {
        var b = this.encoder_.end();
        this.blocks_.push(b);
        this.blocks_.push(a);
        this.totalLength_ += b.length + a.length;
      };
      jspb.BinaryWriter.prototype.beginDelimited_ = function(a) {
        this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED);
        a = this.encoder_.end();
        this.blocks_.push(a);
        this.totalLength_ += a.length;
        a.push(this.totalLength_);
        return a;
      };
      jspb.BinaryWriter.prototype.endDelimited_ = function(a) {
        var b = a.pop();
        b = this.totalLength_ + this.encoder_.length() - b;
        for (goog.asserts.assert(0 <= b); 127 < b; )
          a.push(b & 127 | 128), b >>>= 7, this.totalLength_++;
        a.push(b);
        this.totalLength_++;
      };
      jspb.BinaryWriter.prototype.writeSerializedMessage = function(a, b, c) {
        this.appendUint8Array_(a.subarray(b, c));
      };
      jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(a, b, c) {
        a != null && b != null && c != null && this.writeSerializedMessage(a, b, c);
      };
      jspb.BinaryWriter.prototype.reset = function() {
        this.blocks_ = [];
        this.encoder_.end();
        this.totalLength_ = 0;
        this.bookmarks_ = [];
      };
      jspb.BinaryWriter.prototype.getResultBuffer = function() {
        goog.asserts.assert(this.bookmarks_.length == 0);
        for (var a = new Uint8Array(this.totalLength_ + this.encoder_.length()), b = this.blocks_, c = b.length, d = 0, e = 0; e < c; e++) {
          var f = b[e];
          a.set(f, d);
          d += f.length;
        }
        b = this.encoder_.end();
        a.set(b, d);
        d += b.length;
        goog.asserts.assert(d == a.length);
        this.blocks_ = [a];
        return a;
      };
      jspb.BinaryWriter.prototype.getResultBase64String = function(a) {
        return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), a);
      };
      jspb.BinaryWriter.prototype.beginSubMessage = function(a) {
        this.bookmarks_.push(this.beginDelimited_(a));
      };
      jspb.BinaryWriter.prototype.endSubMessage = function() {
        goog.asserts.assert(0 <= this.bookmarks_.length);
        this.endDelimited_(this.bookmarks_.pop());
      };
      jspb.BinaryWriter.prototype.writeFieldHeader_ = function(a, b) {
        goog.asserts.assert(1 <= a && a == Math.floor(a));
        this.encoder_.writeUnsignedVarint32(8 * a + b);
      };
      jspb.BinaryWriter.prototype.writeAny = function(a, b, c) {
        var d = jspb.BinaryConstants.FieldType;
        switch (a) {
          case d.DOUBLE:
            this.writeDouble(b, c);
            break;
          case d.FLOAT:
            this.writeFloat(b, c);
            break;
          case d.INT64:
            this.writeInt64(b, c);
            break;
          case d.UINT64:
            this.writeUint64(b, c);
            break;
          case d.INT32:
            this.writeInt32(b, c);
            break;
          case d.FIXED64:
            this.writeFixed64(b, c);
            break;
          case d.FIXED32:
            this.writeFixed32(b, c);
            break;
          case d.BOOL:
            this.writeBool(b, c);
            break;
          case d.STRING:
            this.writeString(b, c);
            break;
          case d.GROUP:
            goog.asserts.fail("Group field type not supported in writeAny()");
            break;
          case d.MESSAGE:
            goog.asserts.fail("Message field type not supported in writeAny()");
            break;
          case d.BYTES:
            this.writeBytes(b, c);
            break;
          case d.UINT32:
            this.writeUint32(b, c);
            break;
          case d.ENUM:
            this.writeEnum(b, c);
            break;
          case d.SFIXED32:
            this.writeSfixed32(b, c);
            break;
          case d.SFIXED64:
            this.writeSfixed64(b, c);
            break;
          case d.SINT32:
            this.writeSint32(b, c);
            break;
          case d.SINT64:
            this.writeSint64(b, c);
            break;
          case d.FHASH64:
            this.writeFixedHash64(b, c);
            break;
          case d.VHASH64:
            this.writeVarintHash64(b, c);
            break;
          default:
            goog.asserts.fail("Invalid field type in writeAny()");
        }
      };
      jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(a, b) {
        b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(b));
      };
      jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(a, b) {
        b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b));
      };
      jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(a, b) {
        b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(b));
      };
      jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(a, b) {
        b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(b));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(a, b) {
        b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(b));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(a, b) {
        b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(b));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(a, b) {
        b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(b));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function(a, b) {
        b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarintHash64(b));
      };
      jspb.BinaryWriter.prototype.writeInt32 = function(a, b) {
        b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a, b));
      };
      jspb.BinaryWriter.prototype.writeInt32String = function(a, b) {
        b != null && (b = parseInt(b, 10), goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a, b));
      };
      jspb.BinaryWriter.prototype.writeInt64 = function(a, b) {
        b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_63 && b < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(a, b));
      };
      jspb.BinaryWriter.prototype.writeInt64String = function(a, b) {
        b != null && (b = jspb.arith.Int64.fromString(b), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b.lo, b.hi));
      };
      jspb.BinaryWriter.prototype.writeUint32 = function(a, b) {
        b != null && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a, b));
      };
      jspb.BinaryWriter.prototype.writeUint32String = function(a, b) {
        b != null && (b = parseInt(b, 10), goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a, b));
      };
      jspb.BinaryWriter.prototype.writeUint64 = function(a, b) {
        b != null && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(a, b));
      };
      jspb.BinaryWriter.prototype.writeUint64String = function(a, b) {
        b != null && (b = jspb.arith.UInt64.fromString(b), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b.lo, b.hi));
      };
      jspb.BinaryWriter.prototype.writeSint32 = function(a, b) {
        b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(a, b));
      };
      jspb.BinaryWriter.prototype.writeSint64 = function(a, b) {
        b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_63 && b < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(a, b));
      };
      jspb.BinaryWriter.prototype.writeSintHash64 = function(a, b) {
        b != null && this.writeZigzagVarintHash64_(a, b);
      };
      jspb.BinaryWriter.prototype.writeSint64String = function(a, b) {
        b != null && this.writeZigzagVarint64String_(a, b);
      };
      jspb.BinaryWriter.prototype.writeFixed32 = function(a, b) {
        b != null && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(b));
      };
      jspb.BinaryWriter.prototype.writeFixed64 = function(a, b) {
        b != null && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(b));
      };
      jspb.BinaryWriter.prototype.writeFixed64String = function(a, b) {
        b != null && (b = jspb.arith.UInt64.fromString(b), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b.lo, b.hi));
      };
      jspb.BinaryWriter.prototype.writeSfixed32 = function(a, b) {
        b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(b));
      };
      jspb.BinaryWriter.prototype.writeSfixed64 = function(a, b) {
        b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_63 && b < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(b));
      };
      jspb.BinaryWriter.prototype.writeSfixed64String = function(a, b) {
        b != null && (b = jspb.arith.Int64.fromString(b), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b.lo, b.hi));
      };
      jspb.BinaryWriter.prototype.writeFloat = function(a, b) {
        b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(b));
      };
      jspb.BinaryWriter.prototype.writeDouble = function(a, b) {
        b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(b));
      };
      jspb.BinaryWriter.prototype.writeBool = function(a, b) {
        b != null && (goog.asserts.assert(typeof b === "boolean" || typeof b === "number"), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(b));
      };
      jspb.BinaryWriter.prototype.writeEnum = function(a, b) {
        b != null && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b));
      };
      jspb.BinaryWriter.prototype.writeString = function(a, b) {
        b != null && (a = this.beginDelimited_(a), this.encoder_.writeString(b), this.endDelimited_(a));
      };
      jspb.BinaryWriter.prototype.writeBytes = function(a, b) {
        b != null && (b = jspb.utils.byteSourceToUint8Array(b), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b.length), this.appendUint8Array_(b));
      };
      jspb.BinaryWriter.prototype.writeMessage = function(a, b, c) {
        b != null && (a = this.beginDelimited_(a), c(b, this), this.endDelimited_(a));
      };
      jspb.BinaryWriter.prototype.writeMessageSet = function(a, b, c) {
        b != null && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(a), a = this.beginDelimited_(3), c(b, this), this.endDelimited_(a), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
      };
      jspb.BinaryWriter.prototype.writeGroup = function(a, b, c) {
        b != null && (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.START_GROUP), c(b, this), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.END_GROUP));
      };
      jspb.BinaryWriter.prototype.writeFixedHash64 = function(a, b) {
        b != null && (goog.asserts.assert(b.length == 8), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(b));
      };
      jspb.BinaryWriter.prototype.writeVarintHash64 = function(a, b) {
        b != null && (goog.asserts.assert(b.length == 8), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(b));
      };
      jspb.BinaryWriter.prototype.writeSplitFixed64 = function(a, b, c) {
        this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.FIXED64);
        this.encoder_.writeSplitFixed64(b, c);
      };
      jspb.BinaryWriter.prototype.writeSplitVarint64 = function(a, b, c) {
        this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT);
        this.encoder_.writeSplitVarint64(b, c);
      };
      jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function(a, b, c) {
        this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.VARINT);
        var d = this.encoder_;
        jspb.utils.toZigzag64(b, c, function(a2, b2) {
          d.writeSplitVarint64(a2 >>> 0, b2 >>> 0);
        });
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeSignedVarint32_(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeInt32String(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeSignedVarint64_(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function(a, b, c, d) {
        if (b != null)
          for (var e = 0; e < b.length; e++)
            this.writeSplitFixed64(a, c(b[e]), d(b[e]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function(a, b, c, d) {
        if (b != null)
          for (var e = 0; e < b.length; e++)
            this.writeSplitVarint64(a, c(b[e]), d(b[e]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function(a, b, c, d) {
        if (b != null)
          for (var e = 0; e < b.length; e++)
            this.writeSplitZigzagVarint64(a, c(b[e]), d(b[e]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeInt64String(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeUnsignedVarint32_(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeUint32String(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeUnsignedVarint64_(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeUint64String(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeZigzagVarint32_(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeZigzagVarint64_(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeZigzagVarint64String_(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeZigzagVarintHash64_(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeFixed32(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeFixed64(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeFixed64String(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeSfixed32(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeSfixed64(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeSfixed64String(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFloat = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeFloat(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedDouble = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeDouble(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedBool = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeBool(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedEnum = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeEnum(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedString = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeString(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedBytes = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeBytes(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedMessage = function(a, b, c) {
        if (b != null)
          for (var d = 0; d < b.length; d++) {
            var e = this.beginDelimited_(a);
            c(b[d], this);
            this.endDelimited_(e);
          }
      };
      jspb.BinaryWriter.prototype.writeRepeatedGroup = function(a, b, c) {
        if (b != null)
          for (var d = 0; d < b.length; d++)
            this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.START_GROUP), c(b[d], this), this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.END_GROUP);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeFixedHash64(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(a, b) {
        if (b != null)
          for (var c = 0; c < b.length; c++)
            this.writeVarintHash64(a, b[c]);
      };
      jspb.BinaryWriter.prototype.writePackedInt32 = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeSignedVarint32(b[c]);
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedInt32String = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeSignedVarint32(parseInt(b[c], 10));
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedInt64 = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeSignedVarint64(b[c]);
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function(a, b, c, d) {
        if (b != null) {
          a = this.beginDelimited_(a);
          for (var e = 0; e < b.length; e++)
            this.encoder_.writeSplitFixed64(c(b[e]), d(b[e]));
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function(a, b, c, d) {
        if (b != null) {
          a = this.beginDelimited_(a);
          for (var e = 0; e < b.length; e++)
            this.encoder_.writeSplitVarint64(c(b[e]), d(b[e]));
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function(a, b, c, d) {
        if (b != null) {
          a = this.beginDelimited_(a);
          for (var e = this.encoder_, f = 0; f < b.length; f++)
            jspb.utils.toZigzag64(c(b[f]), d(b[f]), function(a2, b2) {
              e.writeSplitVarint64(a2 >>> 0, b2 >>> 0);
            });
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedInt64String = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++) {
            var d = jspb.arith.Int64.fromString(b[c]);
            this.encoder_.writeSplitVarint64(d.lo, d.hi);
          }
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint32 = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeUnsignedVarint32(b[c]);
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint32String = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeUnsignedVarint32(parseInt(b[c], 10));
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint64 = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeUnsignedVarint64(b[c]);
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint64String = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++) {
            var d = jspb.arith.UInt64.fromString(b[c]);
            this.encoder_.writeSplitVarint64(d.lo, d.hi);
          }
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSint32 = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeZigzagVarint32(b[c]);
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSint64 = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeZigzagVarint64(b[c]);
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSint64String = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(b[c]));
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSintHash64 = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeZigzagVarintHash64(b[c]);
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedFixed32 = function(a, b) {
        if (b != null && b.length)
          for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a = 0; a < b.length; a++)
            this.encoder_.writeUint32(b[a]);
      };
      jspb.BinaryWriter.prototype.writePackedFixed64 = function(a, b) {
        if (b != null && b.length)
          for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
            this.encoder_.writeUint64(b[a]);
      };
      jspb.BinaryWriter.prototype.writePackedFixed64String = function(a, b) {
        if (b != null && b.length)
          for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++) {
            var c = jspb.arith.UInt64.fromString(b[a]);
            this.encoder_.writeSplitFixed64(c.lo, c.hi);
          }
      };
      jspb.BinaryWriter.prototype.writePackedSfixed32 = function(a, b) {
        if (b != null && b.length)
          for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a = 0; a < b.length; a++)
            this.encoder_.writeInt32(b[a]);
      };
      jspb.BinaryWriter.prototype.writePackedSfixed64 = function(a, b) {
        if (b != null && b.length)
          for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
            this.encoder_.writeInt64(b[a]);
      };
      jspb.BinaryWriter.prototype.writePackedSfixed64String = function(a, b) {
        if (b != null && b.length)
          for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
            this.encoder_.writeInt64String(b[a]);
      };
      jspb.BinaryWriter.prototype.writePackedFloat = function(a, b) {
        if (b != null && b.length)
          for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a = 0; a < b.length; a++)
            this.encoder_.writeFloat(b[a]);
      };
      jspb.BinaryWriter.prototype.writePackedDouble = function(a, b) {
        if (b != null && b.length)
          for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
            this.encoder_.writeDouble(b[a]);
      };
      jspb.BinaryWriter.prototype.writePackedBool = function(a, b) {
        if (b != null && b.length)
          for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b.length), a = 0; a < b.length; a++)
            this.encoder_.writeBool(b[a]);
      };
      jspb.BinaryWriter.prototype.writePackedEnum = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeEnum(b[c]);
          this.endDelimited_(a);
        }
      };
      jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(a, b) {
        if (b != null && b.length)
          for (this.writeFieldHeader_(a, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
            this.encoder_.writeFixedHash64(b[a]);
      };
      jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(a, b) {
        if (b != null && b.length) {
          a = this.beginDelimited_(a);
          for (var c = 0; c < b.length; c++)
            this.encoder_.writeVarintHash64(b[c]);
          this.endDelimited_(a);
        }
      };
      jspb.Export = {};
      exports.Map = jspb.Map;
      exports.Message = jspb.Message;
      exports.BinaryReader = jspb.BinaryReader;
      exports.BinaryWriter = jspb.BinaryWriter;
      exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo;
      exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo;
      exports.exportSymbol = goog.exportSymbol;
      exports.inherits = goog.inherits;
      exports.object = { extend: goog.object.extend };
      exports.typeOf = goog.typeOf;
    }
  });

  // pb/city_message_pb.js
  var require_city_message_pb = __commonJS({
    "pb/city_message_pb.js"(exports2) {
      var jspb2 = require_google_protobuf();
      var goog2 = jspb2;
      var global2 = Function("return this")();
      goog2.exportSymbol("proto.cities.Cities", null, global2);
      goog2.exportSymbol("proto.cities.City", null, global2);
      proto.cities.Cities = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, proto.cities.Cities.repeatedFields_, null);
      };
      goog2.inherits(proto.cities.Cities, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.cities.Cities.displayName = "proto.cities.Cities";
      }
      proto.cities.City = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.cities.City, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.cities.City.displayName = "proto.cities.City";
      }
      proto.cities.Cities.repeatedFields_ = [1];
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.cities.Cities.prototype.toObject = function(opt_includeInstance) {
          return proto.cities.Cities.toObject(opt_includeInstance, this);
        };
        proto.cities.Cities.toObject = function(includeInstance, msg) {
          var f, obj = {
            cityList: jspb2.Message.toObjectList(msg.getCityList(), proto.cities.City.toObject, includeInstance)
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.cities.Cities.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.cities.Cities();
        return proto.cities.Cities.deserializeBinaryFromReader(msg, reader);
      };
      proto.cities.Cities.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = new proto.cities.City();
              reader.readMessage(value, proto.cities.City.deserializeBinaryFromReader);
              msg.addCity(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.cities.Cities.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.cities.Cities.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.cities.Cities.serializeBinaryToWriter = function(message, writer) {
        var f = void 0;
        f = message.getCityList();
        if (f.length > 0) {
          writer.writeRepeatedMessage(1, f, proto.cities.City.serializeBinaryToWriter);
        }
      };
      proto.cities.Cities.prototype.getCityList = function() {
        return jspb2.Message.getRepeatedWrapperField(this, proto.cities.City, 1);
      };
      proto.cities.Cities.prototype.setCityList = function(value) {
        return jspb2.Message.setRepeatedWrapperField(this, 1, value);
      };
      proto.cities.Cities.prototype.addCity = function(opt_value, opt_index) {
        return jspb2.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cities.City, opt_index);
      };
      proto.cities.Cities.prototype.clearCityList = function() {
        return this.setCityList([]);
      };
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.cities.City.prototype.toObject = function(opt_includeInstance) {
          return proto.cities.City.toObject(opt_includeInstance, this);
        };
        proto.cities.City.toObject = function(includeInstance, msg) {
          var f, obj = {
            id: jspb2.Message.getFieldWithDefault(msg, 1, 0),
            name: jspb2.Message.getFieldWithDefault(msg, 2, "")
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.cities.City.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.cities.City();
        return proto.cities.City.deserializeBinaryFromReader(msg, reader);
      };
      proto.cities.City.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = reader.readInt32();
              msg.setId(value);
              break;
            case 2:
              var value = reader.readString();
              msg.setName(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.cities.City.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.cities.City.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.cities.City.serializeBinaryToWriter = function(message, writer) {
        var f = void 0;
        f = message.getId();
        if (f !== 0) {
          writer.writeInt32(1, f);
        }
        f = message.getName();
        if (f.length > 0) {
          writer.writeString(2, f);
        }
      };
      proto.cities.City.prototype.getId = function() {
        return jspb2.Message.getFieldWithDefault(this, 1, 0);
      };
      proto.cities.City.prototype.setId = function(value) {
        return jspb2.Message.setProto3IntField(this, 1, value);
      };
      proto.cities.City.prototype.getName = function() {
        return jspb2.Message.getFieldWithDefault(this, 2, "");
      };
      proto.cities.City.prototype.setName = function(value) {
        return jspb2.Message.setProto3StringField(this, 2, value);
      };
      goog2.object.extend(exports2, proto.cities);
    }
  });

  // pb/generic_message_pb.js
  var require_generic_message_pb = __commonJS({
    "pb/generic_message_pb.js"(exports2) {
      var jspb2 = require_google_protobuf();
      var goog2 = jspb2;
      var global2 = Function("return this")();
      goog2.exportSymbol("proto.cities.EmptyMessage", null, global2);
      proto.cities.EmptyMessage = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.cities.EmptyMessage, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.cities.EmptyMessage.displayName = "proto.cities.EmptyMessage";
      }
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.cities.EmptyMessage.prototype.toObject = function(opt_includeInstance) {
          return proto.cities.EmptyMessage.toObject(opt_includeInstance, this);
        };
        proto.cities.EmptyMessage.toObject = function(includeInstance, msg) {
          var f, obj = {};
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.cities.EmptyMessage.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.cities.EmptyMessage();
        return proto.cities.EmptyMessage.deserializeBinaryFromReader(msg, reader);
      };
      proto.cities.EmptyMessage.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.cities.EmptyMessage.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.cities.EmptyMessage.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.cities.EmptyMessage.serializeBinaryToWriter = function(message, writer) {
        var f = void 0;
      };
      goog2.object.extend(exports2, proto.cities);
    }
  });

  // node_modules/grpc-web/index.js
  var require_grpc_web = __commonJS({
    "node_modules/grpc-web/index.js"(exports2, module2) {
      function aa(a) {
        var b = 0;
        return function() {
          return b < a.length ? { done: false, value: a[b++] } : { done: true };
        };
      }
      var ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value);
      };
      function ca(a) {
        a = [typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global, a];
        for (var b = 0; b < a.length; ++b) {
          var c = a[b];
          if (c && c.Math == Math)
            return c;
        }
        throw Error("Cannot find global object");
      }
      var da = ca(exports2);
      function ea(a, b) {
        if (b) {
          var c = da;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var f = a[d];
            f in c || (c[f] = {});
            c = c[f];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d && b != null && ba(c, a, { configurable: true, writable: true, value: b });
        }
      }
      ea("Object.is", function(a) {
        return a ? a : function(b, c) {
          return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
        };
      });
      ea("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var f = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + f, 0)); c < f; c++) {
            var g = d[c];
            if (g === b || Object.is(g, b))
              return true;
          }
          return false;
        };
      });
      function fa(a) {
        var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : { next: aa(a) };
      }
      ea("Promise", function(a) {
        function b(e) {
          this.b = 0;
          this.c = void 0;
          this.a = [];
          var h = this.f();
          try {
            e(h.resolve, h.reject);
          } catch (k) {
            h.reject(k);
          }
        }
        function c() {
          this.a = null;
        }
        function d(e) {
          return e instanceof b ? e : new b(function(h) {
            h(e);
          });
        }
        if (a)
          return a;
        c.prototype.b = function(e) {
          if (this.a == null) {
            this.a = [];
            var h = this;
            this.c(function() {
              h.g();
            });
          }
          this.a.push(e);
        };
        var f = da.setTimeout;
        c.prototype.c = function(e) {
          f(e, 0);
        };
        c.prototype.g = function() {
          for (; this.a && this.a.length; ) {
            var e = this.a;
            this.a = [];
            for (var h = 0; h < e.length; ++h) {
              var k = e[h];
              e[h] = null;
              try {
                k();
              } catch (l) {
                this.f(l);
              }
            }
          }
          this.a = null;
        };
        c.prototype.f = function(e) {
          this.c(function() {
            throw e;
          });
        };
        b.prototype.f = function() {
          function e(l) {
            return function(m) {
              k || (k = true, l.call(h, m));
            };
          }
          var h = this, k = false;
          return { resolve: e(this.m), reject: e(this.g) };
        };
        b.prototype.m = function(e) {
          if (e === this)
            this.g(new TypeError("A Promise cannot resolve to itself"));
          else if (e instanceof b)
            this.o(e);
          else {
            a:
              switch (typeof e) {
                case "object":
                  var h = e != null;
                  break a;
                case "function":
                  h = true;
                  break a;
                default:
                  h = false;
              }
            h ? this.l(e) : this.h(e);
          }
        };
        b.prototype.l = function(e) {
          var h = void 0;
          try {
            h = e.then;
          } catch (k) {
            this.g(k);
            return;
          }
          typeof h == "function" ? this.u(h, e) : this.h(e);
        };
        b.prototype.g = function(e) {
          this.i(2, e);
        };
        b.prototype.h = function(e) {
          this.i(1, e);
        };
        b.prototype.i = function(e, h) {
          if (this.b != 0)
            throw Error("Cannot settle(" + e + ", " + h + "): Promise already settled in state" + this.b);
          this.b = e;
          this.c = h;
          this.j();
        };
        b.prototype.j = function() {
          if (this.a != null) {
            for (var e = 0; e < this.a.length; ++e)
              g.b(this.a[e]);
            this.a = null;
          }
        };
        var g = new c();
        b.prototype.o = function(e) {
          var h = this.f();
          e.w(h.resolve, h.reject);
        };
        b.prototype.u = function(e, h) {
          var k = this.f();
          try {
            e.call(h, k.resolve, k.reject);
          } catch (l) {
            k.reject(l);
          }
        };
        b.prototype.then = function(e, h) {
          function k(n, v) {
            return typeof n == "function" ? function(x) {
              try {
                l(n(x));
              } catch (F) {
                m(F);
              }
            } : v;
          }
          var l, m, p = new b(function(n, v) {
            l = n;
            m = v;
          });
          this.w(k(e, l), k(h, m));
          return p;
        };
        b.prototype.catch = function(e) {
          return this.then(void 0, e);
        };
        b.prototype.w = function(e, h) {
          function k() {
            switch (l.b) {
              case 1:
                e(l.c);
                break;
              case 2:
                h(l.c);
                break;
              default:
                throw Error("Unexpected state: " + l.b);
            }
          }
          var l = this;
          this.a == null ? g.b(k) : this.a.push(k);
        };
        b.resolve = d;
        b.reject = function(e) {
          return new b(function(h, k) {
            k(e);
          });
        };
        b.race = function(e) {
          return new b(function(h, k) {
            for (var l = fa(e), m = l.next(); !m.done; m = l.next())
              d(m.value).w(h, k);
          });
        };
        b.all = function(e) {
          var h = fa(e), k = h.next();
          return k.done ? d([]) : new b(function(l, m) {
            function p(x) {
              return function(F) {
                n[x] = F;
                v--;
                v == 0 && l(n);
              };
            }
            var n = [], v = 0;
            do
              n.push(void 0), v++, d(k.value).w(p(n.length - 1), m), k = h.next();
            while (!k.done);
          });
        };
        return b;
      });
      var ha = ha || {};
      var q = exports2 || self;
      function r(a, b) {
        a = a.split(".");
        b = b || q;
        for (var c = 0; c < a.length; c++)
          if (b = b[a[c]], b == null)
            return null;
        return b;
      }
      function t() {
      }
      function ia(a) {
        var b = typeof a;
        if (b == "object")
          if (a) {
            if (a instanceof Array)
              return "array";
            if (a instanceof Object)
              return b;
            var c = Object.prototype.toString.call(a);
            if (c == "[object Window]")
              return "object";
            if (c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice"))
              return "array";
            if (c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call"))
              return "function";
          } else
            return "null";
        else if (b == "function" && typeof a.call == "undefined")
          return "object";
        return b;
      }
      function u(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function";
      }
      var ja = "closure_uid_" + (1e9 * Math.random() >>> 0);
      var ka = 0;
      function la(a, b, c) {
        return a.call.apply(a.bind, arguments);
      }
      function ma(a, b, c) {
        if (!a)
          throw Error();
        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function() {
            var f = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(f, d);
            return a.apply(b, f);
          };
        }
        return function() {
          return a.apply(b, arguments);
        };
      }
      function w(a, b, c) {
        Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? w = la : w = ma;
        return w.apply(null, arguments);
      }
      var na = Date.now || function() {
        return +new Date();
      };
      function y(a, b) {
        function c() {
        }
        c.prototype = b.prototype;
        a.S = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
      }
      function oa() {
        this.a = {};
      }
      oa.prototype.get = function(a) {
        return this.a[a];
      };
      oa.prototype.f = function() {
        return Object.keys(this.a);
      };
      function z(a, b, c, d) {
        this.f = a;
        this.c = b;
        this.b = c;
        this.a = d;
      }
      z.prototype.getRequestMessage = function() {
        return this.f;
      };
      z.prototype.getMethodDescriptor = function() {
        return this.c;
      };
      z.prototype.getMetadata = function() {
        return this.b;
      };
      z.prototype.getCallOptions = function() {
        return this.a;
      };
      function A(a, b, c, d) {
        c = c === void 0 ? {} : c;
        this.c = a;
        this.a = c;
        this.b = b;
        this.f = d === void 0 ? null : d;
      }
      A.prototype.getResponseMessage = function() {
        return this.c;
      };
      A.prototype.getMetadata = function() {
        return this.a;
      };
      A.prototype.getMethodDescriptor = function() {
        return this.b;
      };
      A.prototype.getStatus = function() {
        return this.f;
      };
      function pa(a, b, c, d, f, g) {
        this.name = a;
        this.a = f;
        this.b = g;
      }
      function qa(a, b, c) {
        c = c === void 0 ? {} : c;
        var d = d === void 0 ? new oa() : d;
        return new z(b, a, c, d);
      }
      function ra(a, b, c, d) {
        return d instanceof pa ? d : new pa(a, c, d.b || b.constructor, d.f, d.a, d.c);
      }
      function B(a) {
        this.a = a;
      }
      B.prototype.on = function(a, b) {
        return a == "data" || a == "error" ? this : this.a.on(a, b);
      };
      B.prototype.removeListener = function(a, b) {
        return this.a.removeListener(a, b);
      };
      B.prototype.cancel = function() {
        this.a.cancel();
      };
      function sa(a) {
        switch (a) {
          case 0:
            return "No Error";
          case 1:
            return "Access denied to content document";
          case 2:
            return "File not found";
          case 3:
            return "Firefox silently errored";
          case 4:
            return "Application custom error";
          case 5:
            return "An exception occurred";
          case 6:
            return "Http response at 400 or 500 level";
          case 7:
            return "Request was aborted";
          case 8:
            return "Request timed out";
          case 9:
            return "The resource is not available offline";
          default:
            return "Unrecognized error code";
        }
      }
      function C(a) {
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, C);
        else {
          var b = Error().stack;
          b && (this.stack = b);
        }
        a && (this.message = String(a));
      }
      y(C, Error);
      C.prototype.name = "CustomError";
      function ta(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, f = 0; f < d; f++)
          c += a[f] + (f < b.length ? b[f] : "%s");
        C.call(this, c + a[d]);
      }
      y(ta, C);
      ta.prototype.name = "AssertionError";
      function ua(a, b) {
        throw new ta("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
      }
      function va() {
        this.j = null;
        this.i = [];
        this.l = 0;
        this.b = wa;
        this.f = this.a = this.h = 0;
        this.c = null;
        this.g = 0;
      }
      function xa(a, b) {
        function c(l) {
          l == ya ? e.h = l : l == D ? e.h = l : za(e, h, k, "invalid frame byte");
          e.b = Aa;
          e.a = 0;
          e.f = 0;
        }
        function d(l) {
          e.f++;
          e.a = (e.a << 8) + l;
          e.f == 4 && (e.b = Ba, e.g = 0, typeof Uint8Array !== "undefined" ? e.c = new Uint8Array(e.a) : e.c = Array(e.a), e.a == 0 && g());
        }
        function f(l) {
          e.c[e.g++] = l;
          e.g == e.a && g();
        }
        function g() {
          var l = {};
          l[e.h] = e.c;
          e.i.push(l);
          e.b = wa;
        }
        var e = a, h, k = 0;
        for (b instanceof Uint8Array || b instanceof Array ? h = b : h = new Uint8Array(b); k < h.length; ) {
          switch (e.b) {
            case Ca:
              za(e, h, k, "stream already broken");
              break;
            case wa:
              c(h[k]);
              break;
            case Aa:
              d(h[k]);
              break;
            case Ba:
              f(h[k]);
              break;
            default:
              throw Error("unexpected parser state: " + e.b);
          }
          e.l++;
          k++;
        }
        a = e.i;
        e.i = [];
        return 0 < a.length ? a : null;
      }
      var wa = 0;
      var Aa = 1;
      var Ba = 2;
      var Ca = 3;
      var ya = 0;
      var D = 128;
      function za(a, b, c, d) {
        a.b = Ca;
        a.j = "The stream is broken @" + a.l + "/" + c + ". Error: " + d + ". With input:\n" + b;
        throw Error(a.j);
      }
      function Da(a) {
        switch (a) {
          case 200:
            return 0;
          case 400:
            return 3;
          case 401:
            return 16;
          case 403:
            return 7;
          case 404:
            return 5;
          case 409:
            return 10;
          case 412:
            return 9;
          case 429:
            return 8;
          case 499:
            return 1;
          case 500:
            return 2;
          case 501:
            return 12;
          case 503:
            return 14;
          case 504:
            return 4;
          default:
            return 2;
        }
      }
      var Ea = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      } : function(a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
          if (c in a && a[c] === b)
            return c;
        return -1;
      };
      function Fa(a) {
        a: {
          var b = Ga;
          for (var c = a.length, d = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++)
            if (f in d && b.call(void 0, d[f], f, a)) {
              b = f;
              break a;
            }
          b = -1;
        }
        return 0 > b ? null : typeof a === "string" ? a.charAt(b) : a[b];
      }
      var Ha = String.prototype.trim ? function(a) {
        return a.trim();
      } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
      function E(a, b) {
        return a.indexOf(b) != -1;
      }
      function Ia(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
      }
      var G;
      a: {
        Ja = q.navigator;
        if (Ja) {
          Ka = Ja.userAgent;
          if (Ka) {
            G = Ka;
            break a;
          }
        }
        G = "";
      }
      var Ja;
      var Ka;
      function La(a, b) {
        for (var c in a)
          b.call(void 0, a[c], c, a);
      }
      function Ma(a, b) {
        var c = {}, d;
        for (d in a)
          c[d] = b.call(void 0, a[d], d, a);
        return c;
      }
      var Na = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      function Oa(a, b) {
        for (var c, d, f = 1; f < arguments.length; f++) {
          d = arguments[f];
          for (c in d)
            a[c] = d[c];
          for (var g = 0; g < Na.length; g++)
            c = Na[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
      function Pa(a) {
        var b = 1;
        a = a.split(":");
        for (var c = []; 0 < b && a.length; )
          c.push(a.shift()), b--;
        a.length && c.push(a.join(":"));
        return c;
      }
      function Qa(a) {
        Qa[" "](a);
        return a;
      }
      Qa[" "] = t;
      function Ra(a, b) {
        var c = Sa;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
      }
      var Ta = E(G, "Opera");
      var H = E(G, "Trident") || E(G, "MSIE");
      var Ua = E(G, "Edge");
      var Va = E(G, "Gecko") && !(E(G.toLowerCase(), "webkit") && !E(G, "Edge")) && !(E(G, "Trident") || E(G, "MSIE")) && !E(G, "Edge");
      var Wa = E(G.toLowerCase(), "webkit") && !E(G, "Edge");
      function Xa() {
        var a = q.document;
        return a ? a.documentMode : void 0;
      }
      var I;
      a: {
        Ya = "", Za = function() {
          var a = G;
          if (Va)
            return /rv:([^\);]+)(\)|;)/.exec(a);
          if (Ua)
            return /Edge\/([\d\.]+)/.exec(a);
          if (H)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
          if (Wa)
            return /WebKit\/(\S+)/.exec(a);
          if (Ta)
            return /(?:Version)[ \/]?(\S+)/.exec(a);
        }();
        Za && (Ya = Za ? Za[1] : "");
        if (H) {
          $a = Xa();
          if ($a != null && $a > parseFloat(Ya)) {
            I = String($a);
            break a;
          }
        }
        I = Ya;
      }
      var Ya;
      var Za;
      var $a;
      var Sa = {};
      function ab(a) {
        return Ra(a, function() {
          for (var b = 0, c = Ha(String(I)).split("."), d = Ha(String(a)).split("."), f = Math.max(c.length, d.length), g = 0; b == 0 && g < f; g++) {
            var e = c[g] || "", h = d[g] || "";
            do {
              e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
              h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
              if (e[0].length == 0 && h[0].length == 0)
                break;
              b = Ia(e[1].length == 0 ? 0 : parseInt(e[1], 10), h[1].length == 0 ? 0 : parseInt(h[1], 10)) || Ia(e[2].length == 0, h[2].length == 0) || Ia(e[2], h[2]);
              e = e[3];
              h = h[3];
            } while (b == 0);
          }
          return 0 <= b;
        });
      }
      var bb;
      if (q.document && H) {
        cb = Xa();
        bb = cb ? cb : parseInt(I, 10) || void 0;
      } else
        bb = void 0;
      var cb;
      var db = bb;
      function eb() {
        fb != 0 && (Object.prototype.hasOwnProperty.call(this, ja) && this[ja] || (this[ja] = ++ka));
        this.F = this.F;
      }
      var fb = 0;
      eb.prototype.F = false;
      var gb = Object.freeze || function(a) {
        return a;
      };
      var hb;
      (hb = !H) || (hb = 9 <= Number(db));
      var ib = hb;
      var jb = H && !ab("9");
      var kb = function() {
        if (!q.addEventListener || !Object.defineProperty)
          return false;
        var a = false, b = Object.defineProperty({}, "passive", { get: function() {
          a = true;
        } });
        try {
          q.addEventListener("test", t, b), q.removeEventListener("test", t, b);
        } catch (c) {
        }
        return a;
      }();
      function J(a, b) {
        this.type = a;
        this.a = this.target = b;
        this.defaultPrevented = false;
      }
      J.prototype.b = function() {
        this.defaultPrevented = true;
      };
      function K(a, b) {
        J.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
        this.pointerId = 0;
        this.pointerType = "";
        this.c = null;
        if (a) {
          var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
          this.target = a.target || a.srcElement;
          this.a = b;
          if (b = a.relatedTarget) {
            if (Va) {
              a: {
                try {
                  Qa(b.nodeName);
                  var f = true;
                  break a;
                } catch (g) {
                }
                f = false;
              }
              f || (b = null);
            }
          } else
            c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement);
          this.relatedTarget = b;
          d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
          this.button = a.button;
          this.key = a.key || "";
          this.ctrlKey = a.ctrlKey;
          this.altKey = a.altKey;
          this.shiftKey = a.shiftKey;
          this.metaKey = a.metaKey;
          this.pointerId = a.pointerId || 0;
          this.pointerType = typeof a.pointerType === "string" ? a.pointerType : lb[a.pointerType] || "";
          this.c = a;
          a.defaultPrevented && this.b();
        }
      }
      y(K, J);
      var lb = gb({ 2: "touch", 3: "pen", 4: "mouse" });
      K.prototype.b = function() {
        K.S.b.call(this);
        var a = this.c;
        if (a.preventDefault)
          a.preventDefault();
        else if (a.returnValue = false, jb)
          try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
              a.keyCode = -1;
          } catch (b) {
          }
      };
      var L = "closure_listenable_" + (1e6 * Math.random() | 0);
      var mb = 0;
      function nb(a, b, c, d, f) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.A = f;
        this.key = ++mb;
        this.s = this.v = false;
      }
      function ob(a) {
        a.s = true;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.A = null;
      }
      function M(a) {
        this.src = a;
        this.a = {};
        this.b = 0;
      }
      M.prototype.add = function(a, b, c, d, f) {
        var g = a.toString();
        a = this.a[g];
        a || (a = this.a[g] = [], this.b++);
        var e = pb(a, b, d, f);
        -1 < e ? (b = a[e], c || (b.v = false)) : (b = new nb(b, this.src, g, !!d, f), b.v = c, a.push(b));
        return b;
      };
      function qb(a, b) {
        var c = b.type;
        if (c in a.a) {
          var d = a.a[c], f = Ea(d, b), g;
          (g = 0 <= f) && Array.prototype.splice.call(d, f, 1);
          g && (ob(b), a.a[c].length == 0 && (delete a.a[c], a.b--));
        }
      }
      function pb(a, b, c, d) {
        for (var f = 0; f < a.length; ++f) {
          var g = a[f];
          if (!g.s && g.listener == b && g.capture == !!c && g.A == d)
            return f;
        }
        return -1;
      }
      var rb = "closure_lm_" + (1e6 * Math.random() | 0);
      var sb = {};
      var tb = 0;
      function ub(a, b, c, d, f) {
        if (d && d.once)
          vb(a, b, c, d, f);
        else if (Array.isArray(b))
          for (var g = 0; g < b.length; g++)
            ub(a, b[g], c, d, f);
        else
          c = wb(c), a && a[L] ? a.f.add(String(b), c, false, u(d) ? !!d.capture : !!d, f) : xb(a, b, c, false, d, f);
      }
      function xb(a, b, c, d, f, g) {
        if (!b)
          throw Error("Invalid event type");
        var e = u(f) ? !!f.capture : !!f, h = yb(a);
        h || (a[rb] = h = new M(a));
        c = h.add(b, c, d, e, g);
        if (!c.proxy) {
          d = zb();
          c.proxy = d;
          d.src = a;
          d.listener = c;
          if (a.addEventListener)
            kb || (f = e), f === void 0 && (f = false), a.addEventListener(b.toString(), d, f);
          else if (a.attachEvent)
            a.attachEvent(Ab(b.toString()), d);
          else if (a.addListener && a.removeListener)
            a.addListener(d);
          else
            throw Error("addEventListener and attachEvent are unavailable.");
          tb++;
        }
      }
      function zb() {
        var a = Bb, b = ib ? function(c) {
          return a.call(b.src, b.listener, c);
        } : function(c) {
          c = a.call(b.src, b.listener, c);
          if (!c)
            return c;
        };
        return b;
      }
      function vb(a, b, c, d, f) {
        if (Array.isArray(b))
          for (var g = 0; g < b.length; g++)
            vb(a, b[g], c, d, f);
        else
          c = wb(c), a && a[L] ? a.f.add(String(b), c, true, u(d) ? !!d.capture : !!d, f) : xb(a, b, c, true, d, f);
      }
      function Cb(a, b, c, d, f) {
        if (Array.isArray(b))
          for (var g = 0; g < b.length; g++)
            Cb(a, b[g], c, d, f);
        else
          (d = u(d) ? !!d.capture : !!d, c = wb(c), a && a[L]) ? (a = a.f, b = String(b).toString(), b in a.a && (g = a.a[b], c = pb(g, c, d, f), -1 < c && (ob(g[c]), Array.prototype.splice.call(g, c, 1), g.length == 0 && (delete a.a[b], a.b--)))) : a && (a = yb(a)) && (b = a.a[b.toString()], a = -1, b && (a = pb(b, c, d, f)), (c = -1 < a ? b[a] : null) && Db(c));
      }
      function Db(a) {
        if (typeof a !== "number" && a && !a.s) {
          var b = a.src;
          if (b && b[L])
            qb(b.f, a);
          else {
            var c = a.type, d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ab(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            tb--;
            (c = yb(b)) ? (qb(c, a), c.b == 0 && (c.src = null, b[rb] = null)) : ob(a);
          }
        }
      }
      function Ab(a) {
        return a in sb ? sb[a] : sb[a] = "on" + a;
      }
      function Fb(a, b, c, d) {
        var f = true;
        if (a = yb(a)) {
          if (b = a.a[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
              var g = b[a];
              g && g.capture == c && !g.s && (g = Gb(g, d), f = f && g !== false);
            }
        }
        return f;
      }
      function Gb(a, b) {
        var c = a.listener, d = a.A || a.src;
        a.v && Db(a);
        return c.call(d, b);
      }
      function Bb(a, b) {
        if (a.s)
          return true;
        if (!ib) {
          var c = b || r("window.event");
          b = new K(c, this);
          var d = true;
          if (!(0 > c.keyCode || c.returnValue != void 0)) {
            a: {
              var f = false;
              if (c.keyCode == 0)
                try {
                  c.keyCode = -1;
                  break a;
                } catch (e) {
                  f = true;
                }
              if (f || c.returnValue == void 0)
                c.returnValue = true;
            }
            c = [];
            for (f = b.a; f; f = f.parentNode)
              c.push(f);
            a = a.type;
            for (f = c.length - 1; 0 <= f; f--) {
              b.a = c[f];
              var g = Fb(c[f], a, true, b);
              d = d && g;
            }
            for (f = 0; f < c.length; f++)
              b.a = c[f], g = Fb(c[f], a, false, b), d = d && g;
          }
          return d;
        }
        return Gb(a, new K(b, this));
      }
      function yb(a) {
        a = a[rb];
        return a instanceof M ? a : null;
      }
      var Hb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
      function wb(a) {
        if (ia(a) == "function")
          return a;
        a[Hb] || (a[Hb] = function(b) {
          return a.handleEvent(b);
        });
        return a[Hb];
      }
      function N() {
        eb.call(this);
        this.f = new M(this);
        this.N = this;
      }
      y(N, eb);
      N.prototype[L] = true;
      N.prototype.addEventListener = function(a, b, c, d) {
        ub(this, a, b, c, d);
      };
      N.prototype.removeEventListener = function(a, b, c, d) {
        Cb(this, a, b, c, d);
      };
      function O(a, b) {
        a = a.N;
        var c = b.type || b;
        if (typeof b === "string")
          b = new J(b, a);
        else if (b instanceof J)
          b.target = b.target || a;
        else {
          var d = b;
          b = new J(c, a);
          Oa(b, d);
        }
        a = b.a = a;
        Ib(a, c, true, b);
        Ib(a, c, false, b);
      }
      function Ib(a, b, c, d) {
        if (b = a.f.a[String(b)]) {
          b = b.concat();
          for (var f = true, g = 0; g < b.length; ++g) {
            var e = b[g];
            if (e && !e.s && e.capture == c) {
              var h = e.listener, k = e.A || e.src;
              e.v && qb(a.f, e);
              f = h.call(k, d) !== false && f;
            }
          }
        }
      }
      function Jb(a, b, c) {
        if (ia(a) == "function")
          c && (a = w(a, c));
        else if (a && typeof a.handleEvent == "function")
          a = w(a.handleEvent, a);
        else
          throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : q.setTimeout(a, b || 0);
      }
      function Kb(a, b, c) {
        this.reset(a, b, c, void 0, void 0);
      }
      Kb.prototype.a = null;
      var Lb = 0;
      Kb.prototype.reset = function(a, b, c, d, f) {
        typeof f == "number" || Lb++;
        d || na();
        delete this.a;
      };
      function Mb(a) {
        this.f = a;
        this.b = this.c = this.a = null;
      }
      function Nb(a, b) {
        this.name = a;
        this.value = b;
      }
      Nb.prototype.toString = function() {
        return this.name;
      };
      var Ob = new Nb("SEVERE", 1e3);
      var Pb = new Nb("CONFIG", 700);
      var Qb = new Nb("FINE", 500);
      function Rb(a) {
        if (a.c)
          return a.c;
        if (a.a)
          return Rb(a.a);
        ua("Root logger has no level set.");
        return null;
      }
      Mb.prototype.log = function(a, b, c) {
        if (a.value >= Rb(this).value)
          for (ia(b) == "function" && (b = b()), a = new Kb(a, String(b), this.f), c && (a.a = c), c = this; c; )
            c = c.a;
      };
      var Sb = {};
      var Tb = null;
      function Ub(a) {
        Tb || (Tb = new Mb(""), Sb[""] = Tb, Tb.c = Pb);
        var b;
        if (!(b = Sb[a])) {
          b = new Mb(a);
          var c = a.lastIndexOf("."), d = a.substr(c + 1);
          c = Ub(a.substr(0, c));
          c.b || (c.b = {});
          c.b[d] = b;
          b.a = c;
          Sb[a] = b;
        }
        return b;
      }
      function P(a, b) {
        a && a.log(Qb, b, void 0);
      }
      function Vb() {
      }
      Vb.prototype.a = null;
      function Wb(a) {
        var b;
        (b = a.a) || (b = {}, Xb(a) && (b[0] = true, b[1] = true), b = a.a = b);
        return b;
      }
      var Yb;
      function Zb() {
      }
      y(Zb, Vb);
      function $b(a) {
        return (a = Xb(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
      }
      function Xb(a) {
        if (!a.b && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
          for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
              return new ActiveXObject(d), a.b = d;
            } catch (f) {
            }
          }
          throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b;
      }
      Yb = new Zb();
      function Q(a, b) {
        this.b = {};
        this.a = [];
        this.c = 0;
        var c = arguments.length;
        if (1 < c) {
          if (c % 2)
            throw Error("Uneven number of arguments");
          for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1]);
        } else
          a && ac(this, a);
      }
      Q.prototype.f = function() {
        bc(this);
        return this.a.concat();
      };
      function bc(a) {
        if (a.c != a.a.length) {
          for (var b = 0, c = 0; b < a.a.length; ) {
            var d = a.a[b];
            R(a.b, d) && (a.a[c++] = d);
            b++;
          }
          a.a.length = c;
        }
        if (a.c != a.a.length) {
          var f = {};
          for (c = b = 0; b < a.a.length; )
            d = a.a[b], R(f, d) || (a.a[c++] = d, f[d] = 1), b++;
          a.a.length = c;
        }
      }
      Q.prototype.get = function(a, b) {
        return R(this.b, a) ? this.b[a] : b;
      };
      Q.prototype.set = function(a, b) {
        R(this.b, a) || (this.c++, this.a.push(a));
        this.b[a] = b;
      };
      function ac(a, b) {
        if (b instanceof Q)
          for (var c = b.f(), d = 0; d < c.length; d++)
            a.set(c[d], b.get(c[d]));
        else
          for (c in b)
            a.set(c, b[c]);
      }
      Q.prototype.forEach = function(a, b) {
        for (var c = this.f(), d = 0; d < c.length; d++) {
          var f = c[d], g = this.get(f);
          a.call(b, g, f, this);
        }
      };
      function R(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }
      var cc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
      function S(a) {
        N.call(this);
        this.headers = new Q();
        this.D = a || null;
        this.c = false;
        this.C = this.a = null;
        this.J = this.o = "";
        this.g = 0;
        this.i = "";
        this.h = this.I = this.m = this.G = false;
        this.l = 0;
        this.u = null;
        this.j = dc;
        this.B = this.H = false;
      }
      y(S, N);
      var dc = "";
      var ec = S.prototype;
      var fc = Ub("goog.net.XhrIo");
      ec.b = fc;
      var gc = /^https?$/i;
      var hc = ["POST", "PUT"];
      function ic(a, b, c) {
        if (a.a)
          throw Error("[goog.net.XhrIo] Object is active with another request=" + a.o + "; newUri=" + b);
        a.o = b;
        a.i = "";
        a.g = 0;
        a.J = "POST";
        a.G = false;
        a.c = true;
        a.a = a.D ? $b(a.D) : $b(Yb);
        a.C = a.D ? Wb(a.D) : Wb(Yb);
        a.a.onreadystatechange = w(a.K, a);
        try {
          P(a.b, T(a, "Opening Xhr")), a.I = true, a.a.open("POST", String(b), true), a.I = false;
        } catch (g) {
          P(a.b, T(a, "Error opening Xhr: " + g.message));
          jc(a, g);
          return;
        }
        b = c || "";
        c = new Q(a.headers);
        var d = Fa(c.f()), f = q.FormData && b instanceof q.FormData;
        !(0 <= Ea(hc, "POST")) || d || f || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        c.forEach(function(g, e) {
          this.a.setRequestHeader(e, g);
        }, a);
        a.j && (a.a.responseType = a.j);
        "withCredentials" in a.a && a.a.withCredentials !== a.H && (a.a.withCredentials = a.H);
        try {
          kc(a), 0 < a.l && (a.B = lc(a.a), P(a.b, T(a, "Will abort after " + a.l + "ms if incomplete, xhr2 " + a.B)), a.B ? (a.a.timeout = a.l, a.a.ontimeout = w(a.L, a)) : a.u = Jb(a.L, a.l, a)), P(a.b, T(a, "Sending request")), a.m = true, a.a.send(b), a.m = false;
        } catch (g) {
          P(a.b, T(a, "Send error: " + g.message)), jc(a, g);
        }
      }
      function lc(a) {
        return H && ab(9) && typeof a.timeout === "number" && a.ontimeout !== void 0;
      }
      function Ga(a) {
        return a.toLowerCase() == "content-type";
      }
      S.prototype.L = function() {
        typeof ha != "undefined" && this.a && (this.i = "Timed out after " + this.l + "ms, aborting", this.g = 8, P(this.b, T(this, this.i)), O(this, "timeout"), this.abort(8));
      };
      function jc(a, b) {
        a.c = false;
        a.a && (a.h = true, a.a.abort(), a.h = false);
        a.i = b;
        a.g = 5;
        mc(a);
        nc(a);
      }
      function mc(a) {
        a.G || (a.G = true, O(a, "complete"), O(a, "error"));
      }
      S.prototype.abort = function(a) {
        this.a && this.c && (P(this.b, T(this, "Aborting")), this.c = false, this.h = true, this.a.abort(), this.h = false, this.g = a || 7, O(this, "complete"), O(this, "abort"), nc(this));
      };
      S.prototype.K = function() {
        this.F || (this.I || this.m || this.h ? oc(this) : this.O());
      };
      S.prototype.O = function() {
        oc(this);
      };
      function oc(a) {
        if (a.c && typeof ha != "undefined") {
          if (a.C[1] && U(a) == 4 && a.getStatus() == 2)
            P(a.b, T(a, "Local request error detected and ignored"));
          else if (a.m && U(a) == 4)
            Jb(a.K, 0, a);
          else if (O(a, "readystatechange"), U(a) == 4) {
            P(a.b, T(a, "Request complete"));
            a.c = false;
            try {
              var b = a.getStatus();
              a:
                switch (b) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var c = true;
                    break a;
                  default:
                    c = false;
                }
              var d;
              if (!(d = c)) {
                var f;
                if (f = b === 0) {
                  var g = String(a.o).match(cc)[1] || null;
                  if (!g && q.self && q.self.location) {
                    var e = q.self.location.protocol;
                    g = e.substr(0, e.length - 1);
                  }
                  f = !gc.test(g ? g.toLowerCase() : "");
                }
                d = f;
              }
              if (d)
                O(a, "complete"), O(a, "success");
              else {
                a.g = 6;
                try {
                  var h = 2 < U(a) ? a.a.statusText : "";
                } catch (k) {
                  P(a.b, "Can not get status: " + k.message), h = "";
                }
                a.i = h + " [" + a.getStatus() + "]";
                mc(a);
              }
            } finally {
              nc(a);
            }
          }
        }
      }
      function nc(a) {
        if (a.a) {
          kc(a);
          var b = a.a, c = a.C[0] ? t : null;
          a.a = null;
          a.C = null;
          O(a, "ready");
          try {
            b.onreadystatechange = c;
          } catch (d) {
            (a = a.b) && a.log(Ob, "Problem encountered resetting onreadystatechange: " + d.message, void 0);
          }
        }
      }
      function kc(a) {
        a.a && a.B && (a.a.ontimeout = null);
        a.u && (q.clearTimeout(a.u), a.u = null);
      }
      function U(a) {
        return a.a ? a.a.readyState : 0;
      }
      S.prototype.getStatus = function() {
        try {
          return 2 < U(this) ? this.a.status : -1;
        } catch (a) {
          return -1;
        }
      };
      function pc(a) {
        try {
          if (!a.a)
            return null;
          if ("response" in a.a)
            return a.a.response;
          switch (a.j) {
            case dc:
            case "text":
              return a.a.responseText;
            case "arraybuffer":
              if ("mozResponseArrayBuffer" in a.a)
                return a.a.mozResponseArrayBuffer;
          }
          var b = a.b;
          b && b.log(Ob, "Response type " + a.j + " is not supported on this browser", void 0);
          return null;
        } catch (c) {
          return P(a.b, "Can not get response: " + c.message), null;
        }
      }
      function qc(a, b) {
        if (a.a && U(a) == 4)
          return a = a.a.getResponseHeader(b), a === null ? void 0 : a;
      }
      function rc(a) {
        var b = {};
        a = (a.a && U(a) == 4 ? a.a.getAllResponseHeaders() || "" : "").split("\r\n");
        for (var c = 0; c < a.length; c++)
          if (!/^[\s\xa0]*$/.test(a[c])) {
            var d = Pa(a[c]), f = d[0];
            d = d[1];
            if (typeof d === "string") {
              d = d.trim();
              var g = b[f] || [];
              b[f] = g;
              g.push(d);
            }
          }
        return Ma(b, function(e) {
          return e.join(", ");
        });
      }
      function T(a, b) {
        return b + " [" + a.J + " " + a.o + " " + a.getStatus() + "]";
      }
      var sc = {};
      var V = null;
      function tc(a) {
        var b = a.length, c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : E("=.", a[b - 1]) && (c = E("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c), f = 0;
        uc(a, function(g) {
          d[f++] = g;
        });
        return d.subarray(0, f);
      }
      function uc(a, b) {
        function c(k) {
          for (; d < a.length; ) {
            var l = a.charAt(d++), m = V[l];
            if (m != null)
              return m;
            if (!/^[\s\xa0]*$/.test(l))
              throw Error("Unknown base64 encoding at char: " + l);
          }
          return k;
        }
        vc();
        for (var d = 0; ; ) {
          var f = c(-1), g = c(0), e = c(64), h = c(64);
          if (h === 64 && f === -1)
            break;
          b(f << 2 | g >> 4);
          e != 64 && (b(g << 4 & 240 | e >> 2), h != 64 && b(e << 6 & 192 | h));
        }
      }
      function vc() {
        if (!V) {
          V = {};
          for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            sc[c] = d;
            for (var f = 0; f < d.length; f++) {
              var g = d[f];
              V[g] === void 0 && (V[g] = f);
            }
          }
        }
      }
      var wc = ["content-type", "grpc-status", "grpc-message"];
      function W(a) {
        this.a = a.T;
        this.l = null;
        this.b = [];
        this.h = [];
        this.g = [];
        this.f = [];
        this.c = [];
        this.j = false;
        this.i = 0;
        this.m = new va();
        var b = this;
        ub(this.a, "readystatechange", function() {
          var c = b.a;
          if (c = c.a ? c.a.getResponseHeader("Content-Type") : null) {
            c = c.toLowerCase();
            if (c.lastIndexOf("application/grpc-web-text", 0) == 0) {
              c = b.a;
              try {
                var d = c.a ? c.a.responseText : "";
              } catch (l) {
                P(c.b, "Can not get responseText: " + l.message), d = "";
              }
              c = d || "";
              d = c.length - c.length % 4;
              c = c.substr(b.i, d - b.i);
              if (c.length == 0)
                return;
              b.i = d;
              c = tc(c);
            } else if (c.lastIndexOf("application/grpc", 0) == 0)
              c = new Uint8Array(pc(b.a));
            else {
              X(b, { code: 2, message: "Unknown Content-type received.", metadata: {} });
              return;
            }
            d = null;
            try {
              d = xa(b.m, c);
            } catch (l) {
              X(b, { code: 2, message: "Error in parsing response body", metadata: {} });
            }
            if (d)
              for (c = 0; c < d.length; c++) {
                if (ya in d[c]) {
                  var f = d[c][ya];
                  if (f)
                    try {
                      var g = b.l(f);
                      if (g) {
                        f = b;
                        for (var e = g, h = 0; h < f.b.length; h++)
                          f.b[h](e);
                      }
                    } catch (l) {
                      X(b, { code: 2, message: "Error in response deserializer function.", metadata: {} });
                    }
                }
                if (D in d[c] && 0 < d[c][D].length) {
                  f = "";
                  for (e = 0; e < d[c][D].length; e++)
                    f += String.fromCharCode(d[c][D][e]);
                  f = f.trim().split("\r\n");
                  e = {};
                  for (h = 0; h < f.length; h++) {
                    var k = f[h].indexOf(":");
                    e[f[h].substring(0, k).trim()] = f[h].substring(k + 1).trim();
                  }
                  f = e;
                  e = 0;
                  h = "";
                  "grpc-status" in f && (e = f["grpc-status"], delete f["grpc-status"]);
                  "grpc-message" in f && (h = f["grpc-message"], delete f["grpc-message"]);
                  X(b, { code: Number(e), message: h, metadata: f });
                }
              }
          }
        });
        ub(this.a, "complete", function() {
          var c = b.a.g, d = "", f = {}, g = rc(b.a);
          Object.keys(g).forEach(function(h) {
            wc.includes(h) || (f[h] = g[h]);
          });
          xc(b, f);
          if (c != 0) {
            switch (c) {
              case 7:
                var e = 10;
                break;
              case 8:
                e = 4;
                break;
              case 6:
                e = Da(b.a.getStatus());
                break;
              default:
                e = 14;
            }
            e == 10 && b.j || X(b, { code: e, message: sa(c), metadata: {} });
          } else
            c = false, "grpc-status" in g && (e = qc(b.a, "grpc-status"), "grpc-message" in g && (d = qc(b.a, "grpc-message")), Number(e) != 0 && (X(b, { code: Number(e), message: d, metadata: g }), c = true)), c || yc(b);
        });
      }
      W.prototype.on = function(a, b) {
        a == "data" ? this.b.push(b) : a == "status" ? this.h.push(b) : a == "metadata" ? this.g.push(b) : a == "end" ? this.c.push(b) : a == "error" && this.f.push(b);
        return this;
      };
      function Y(a, b) {
        b = a.indexOf(b);
        -1 < b && a.splice(b, 1);
      }
      W.prototype.removeListener = function(a, b) {
        a == "data" ? Y(this.b, b) : a == "status" ? Y(this.h, b) : a == "metadata" ? Y(this.g, b) : a == "end" ? Y(this.c, b) : a == "error" && Y(this.f, b);
        return this;
      };
      W.prototype.cancel = function() {
        this.j = true;
        this.a.abort();
      };
      function X(a, b) {
        if (b.code != 0)
          for (var c = { code: b.code, message: decodeURIComponent(b.message || ""), metadata: b.metadata }, d = 0; d < a.f.length; d++)
            a.f[d](c);
        b = { code: b.code, details: decodeURIComponent(b.message || ""), metadata: b.metadata };
        for (c = 0; c < a.h.length; c++)
          a.h[c](b);
      }
      function xc(a, b) {
        for (var c = 0; c < a.g.length; c++)
          a.g[c](b);
      }
      function yc(a) {
        for (var b = 0; b < a.c.length; b++)
          a.c[b]();
      }
      W.prototype.cancel = W.prototype.cancel;
      W.prototype.removeListener = W.prototype.removeListener;
      W.prototype.on = W.prototype.on;
      function zc(a) {
        var b = "";
        La(a, function(c, d) {
          b += d;
          b += ":";
          b += c;
          b += "\r\n";
        });
        return b;
      }
      function Z(a) {
        this.a = r("format", a) || "text";
        this.f = r("suppressCorsPreflight", a) || false;
        this.c = r("withCredentials", a) || false;
        this.b = r("streamInterceptors", a) || [];
        this.g = r("unaryInterceptors", a) || [];
      }
      Z.prototype.P = function(a, b, c, d, f) {
        var g = this;
        d = ra(a, b, "unary", d);
        var e = a.substr(0, a.length - d.name.length);
        a = Ac(function(h) {
          return Bc(g, h, e);
        }, this.b).call(this, qa(d, b, c));
        Cc(a, f, false);
        return new B(a);
      };
      Z.prototype.M = function(a, b, c, d) {
        var f = this;
        d = ra(a, b, "unary", d);
        var g = a.substr(0, a.length - d.name.length);
        return Ac(function(e) {
          return new Promise(function(h, k) {
            var l = Bc(f, e, g), m, p, n;
            Cc(l, function(v, x, F, Eb) {
              v ? k(v) : x ? n = x : F ? p = F : Eb ? m = Eb : (v = e.getMethodDescriptor(), x = m, x = x === void 0 ? {} : x, h(new A(n, v, x, p === void 0 ? null : p)));
            }, true);
          });
        }, this.g).call(this, qa(d, b, c)).then(function(e) {
          return e.getResponseMessage();
        });
      };
      Z.prototype.unaryCall = function(a, b, c, d) {
        return this.M(a, b, c, d);
      };
      Z.prototype.R = function(a, b, c, d) {
        var f = this;
        d = ra(a, b, "server_streaming", d);
        var g = a.substr(0, a.length - d.name.length);
        return Ac(function(e) {
          return Bc(f, e, g);
        }, this.b).call(this, qa(d, b, c));
      };
      function Bc(a, b, c) {
        var d = b.getMethodDescriptor(), f = c + d.name;
        c = new S();
        c.H = a.c;
        var g = new W({ T: c });
        g.l = d.b;
        ac(c.headers, b.getMetadata());
        a.a == "text" ? (c.headers.set("Content-Type", "application/grpc-web-text"), c.headers.set("Accept", "application/grpc-web-text")) : c.headers.set("Content-Type", "application/grpc-web+proto");
        c.headers.set("X-User-Agent", "grpc-web-javascript/0.1");
        c.headers.set("X-Grpc-Web", "1");
        if (R(c.headers.b, "deadline")) {
          var e = c.headers.get("deadline");
          e = Math.round(e - new Date().getTime());
          var h = c.headers;
          R(h.b, "deadline") && (delete h.b.deadline, h.c--, h.a.length > 2 * h.c && bc(h));
          e === Infinity && (e = 0);
          0 < e && c.headers.set("grpc-timeout", e + "m");
        }
        if (a.f) {
          h = c.headers;
          bc(h);
          e = {};
          for (var k = 0; k < h.a.length; k++) {
            var l = h.a[k];
            e[l] = h.b[l];
          }
          h = c.headers;
          h.b = {};
          h.a.length = 0;
          h.c = 0;
          b: {
            for (m in e) {
              var m = false;
              break b;
            }
            m = true;
          }
          if (!m)
            if (e = zc(e), typeof f === "string") {
              if (m = encodeURIComponent("$httpHeaders"), e = e != null ? "=" + encodeURIComponent(String(e)) : "", m += e)
                e = f.indexOf("#"), 0 > e && (e = f.length), h = f.indexOf("?"), 0 > h || h > e ? (h = e, k = "") : k = f.substring(h + 1, e), f = [f.substr(0, h), k, f.substr(e)], e = f[1], f[1] = m ? e ? e + "&" + m : m : e, f = f[0] + (f[1] ? "?" + f[1] : "") + f[2];
            } else
              f.a("$httpHeaders", e);
        }
        b = (0, d.a)(b.getRequestMessage());
        d = b.length;
        m = [0, 0, 0, 0];
        e = new Uint8Array(5 + d);
        for (h = 3; 0 <= h; h--)
          m[h] = d % 256, d >>>= 8;
        e.set(new Uint8Array(m), 1);
        e.set(b, 5);
        b = e;
        if (a.a == "text") {
          a = b;
          var p;
          p === void 0 && (p = 0);
          vc();
          p = sc[p];
          b = [];
          for (d = 0; d < a.length; d += 3) {
            l = a[d];
            var n = (m = d + 1 < a.length) ? a[d + 1] : 0;
            k = (e = d + 2 < a.length) ? a[d + 2] : 0;
            h = l >> 2;
            l = (l & 3) << 4 | n >> 4;
            n = (n & 15) << 2 | k >> 6;
            k &= 63;
            e || (k = 64, m || (n = 64));
            b.push(p[h], p[l], p[n] || "", p[k] || "");
          }
          b = b.join("");
        } else
          a.a == "binary" && (c.j = "arraybuffer");
        ic(c, f, b);
        return g;
      }
      function Cc(a, b, c) {
        var d = null, f = false;
        a.on("data", function(g) {
          d = g;
        });
        a.on("error", function(g) {
          g.code == 0 || f || (f = true, b(g, null));
        });
        a.on("status", function(g) {
          g.code == 0 || f ? c && b(null, null, g) : (f = true, b({ code: g.code, message: g.details, metadata: g.metadata }, null));
        });
        if (c)
          a.on("metadata", function(g) {
            b(null, null, null, g);
          });
        a.on("end", function() {
          f || (d == null ? b({ code: 2, message: "Incomplete response" }) : b(null, d));
          c && b(null, null);
        });
      }
      function Ac(a, b) {
        var c = a;
        b.forEach(function(d) {
          var f = c;
          c = function(g) {
            return d.intercept(g, f);
          };
        });
        return c;
      }
      Z.prototype.serverStreaming = Z.prototype.R;
      Z.prototype.unaryCall = Z.prototype.unaryCall;
      Z.prototype.thenableCall = Z.prototype.M;
      Z.prototype.rpcCall = Z.prototype.P;
      module2.exports.AbstractClientBase = { MethodInfo: function(a, b, c, d, f) {
        this.name = d;
        this.b = f;
        this.f = a;
        this.a = b;
        this.c = c;
      } };
      module2.exports.GrpcWebClientBase = Z;
      module2.exports.StatusCode = { OK: 0, CANCELLED: 1, UNKNOWN: 2, INVALID_ARGUMENT: 3, DEADLINE_EXCEEDED: 4, NOT_FOUND: 5, ALREADY_EXISTS: 6, PERMISSION_DENIED: 7, UNAUTHENTICATED: 16, RESOURCE_EXHAUSTED: 8, FAILED_PRECONDITION: 9, ABORTED: 10, OUT_OF_RANGE: 11, UNIMPLEMENTED: 12, INTERNAL: 13, UNAVAILABLE: 14, DATA_LOSS: 15 };
      module2.exports.MethodDescriptor = pa;
      module2.exports.MethodType = { UNARY: "unary", SERVER_STREAMING: "server_streaming" };
    }
  });

  // pb/city_service_pb.js
  var require_city_service_pb = __commonJS({
    "pb/city_service_pb.js"() {
      var jspb2 = require_google_protobuf();
      var goog2 = jspb2;
      var global2 = Function("return this")();
      var city_message_pb = require_city_message_pb();
      goog2.object.extend(proto, city_message_pb);
      var generic_message_pb = require_generic_message_pb();
      goog2.object.extend(proto, generic_message_pb);
    }
  });

  // pb/city_service_grpc_web_pb.js
  var require_city_service_grpc_web_pb = __commonJS({
    "pb/city_service_grpc_web_pb.js"(exports2, module2) {
      var grpc = {};
      grpc.web = require_grpc_web();
      var city_message_pb = require_city_message_pb();
      var generic_message_pb = require_generic_message_pb();
      var proto2 = {};
      proto2.cities = require_city_service_pb();
      proto2.cities.CitiesServiceClient = function(hostname, credentials, options) {
        if (!options)
          options = {};
        options["format"] = "text";
        this.client_ = new grpc.web.GrpcWebClientBase(options);
        this.hostname_ = hostname;
      };
      proto2.cities.CitiesServicePromiseClient = function(hostname, credentials, options) {
        if (!options)
          options = {};
        options["format"] = "text";
        this.client_ = new grpc.web.GrpcWebClientBase(options);
        this.hostname_ = hostname;
      };
      var methodDescriptor_CitiesService_List = new grpc.web.MethodDescriptor("/cities.CitiesService/List", grpc.web.MethodType.UNARY, generic_message_pb.EmptyMessage, city_message_pb.Cities, function(request) {
        return request.serializeBinary();
      }, city_message_pb.Cities.deserializeBinary);
      var methodInfo_CitiesService_List = new grpc.web.AbstractClientBase.MethodInfo(city_message_pb.Cities, function(request) {
        return request.serializeBinary();
      }, city_message_pb.Cities.deserializeBinary);
      proto2.cities.CitiesServiceClient.prototype.list = function(request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ + "/cities.CitiesService/List", request, metadata || {}, methodDescriptor_CitiesService_List, callback);
      };
      proto2.cities.CitiesServicePromiseClient.prototype.list = function(request, metadata) {
        return this.client_.unaryCall(this.hostname_ + "/cities.CitiesService/List", request, metadata || {}, methodDescriptor_CitiesService_List);
      };
      module2.exports = proto2.cities;
    }
  });

  // fakecss:/Users/rijal/jackyhtg/latihan-grpc-web/frontend/src/App.esbuild-svelte-fake-css
  var require_ = __commonJS({
    "fakecss:/Users/rijal/jackyhtg/latihan-grpc-web/frontend/src/App.esbuild-svelte-fake-css"(exports2, module2) {
      module2.exports = {};
    }
  });

  // node_modules/svelte/internal/index.mjs
  function noop() {
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  var tasks = new Set();
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    node.parentNode.removeChild(node);
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.wholeText !== data)
      text2.data = data;
  }
  var active_docs = new Set();
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  var flushing = false;
  var seen_callbacks = new Set();
  function flush() {
    if (flushing)
      return;
    flushing = true;
    do {
      for (let i = 0; i < dirty_components.length; i += 1) {
        const component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }
      set_current_component(null);
      dirty_components.length = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  var outroing = new Set();
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  var boolean_attributes = new Set([
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]);
  function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance2, create_fragment2, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: null,
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : options.context || []),
      callbacks: blank_object(),
      dirty,
      skip_bound: false
    };
    let ready = false;
    $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        for (const key in this.$$.slotted) {
          this.appendChild(this.$$.slotted[key]);
        }
      }
      attributeChangedCallback(attr2, _oldValue, newValue) {
        this[attr2] = newValue;
      }
      disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type, callback) {
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
  }
  var SvelteComponent = class {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };

  // src/App.svelte
  var import_city_message_pb = __toModule(require_city_message_pb());
  var import_generic_message_pb = __toModule(require_generic_message_pb());
  var import_city_service_grpc_web_pb = __toModule(require_city_service_grpc_web_pb());

  // src/service/city.js
  var city_default = class {
    constructor(deps) {
      this.proto = deps.proto;
      this.client = new deps.proto.CitiesClient("http://localhost:8099", null, null);
    }
    index() {
      const req = new this.proto.EmptyMessage();
      return this.client.list(req, {}).then((res) => {
        return res.getCityList().map((city) => {
          return {
            id: city.getId(),
            name: city.getName()
          };
        });
      });
    }
  };
  var city_default2 = city_default;

  // src/App.svelte
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[4] = list[i];
    return child_ctx;
  }
  function create_each_block(ctx) {
    let li;
    let t0_value = ctx[4].id + "";
    let t0;
    let t1;
    let t2_value = ctx[4].name + "";
    let t2;
    let t3;
    return {
      c() {
        li = element("li");
        t0 = text(t0_value);
        t1 = text(" - ");
        t2 = text(t2_value);
        t3 = space();
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, t0);
        append(li, t1);
        append(li, t2);
        append(li, t3);
      },
      p(ctx2, dirty) {
        if (dirty & 2 && t0_value !== (t0_value = ctx2[4].id + ""))
          set_data(t0, t0_value);
        if (dirty & 2 && t2_value !== (t2_value = ctx2[4].name + ""))
          set_data(t2, t2_value);
      },
      d(detaching) {
        if (detaching)
          detach(li);
      }
    };
  }
  function create_fragment(ctx) {
    let main;
    let h1;
    let t0;
    let t1;
    let t2;
    let t3;
    let p;
    let t7;
    let button;
    let t9;
    let ul;
    let mounted;
    let dispose;
    let each_value = ctx[1];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    return {
      c() {
        main = element("main");
        h1 = element("h1");
        t0 = text("Hello ");
        t1 = text(ctx[0]);
        t2 = text("!");
        t3 = space();
        p = element("p");
        p.innerHTML = `Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.`;
        t7 = space();
        button = element("button");
        button.textContent = "Get Cities (RPC)";
        t9 = space();
        ul = element("ul");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(h1, "class", "svelte-1tky8bj");
        attr(main, "class", "svelte-1tky8bj");
      },
      m(target, anchor) {
        insert(target, main, anchor);
        append(main, h1);
        append(h1, t0);
        append(h1, t1);
        append(h1, t2);
        append(main, t3);
        append(main, p);
        append(main, t7);
        append(main, button);
        append(main, t9);
        append(main, ul);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(ul, null);
        }
        if (!mounted) {
          dispose = listen(button, "click", ctx[2]);
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & 1)
          set_data(t1, ctx2[0]);
        if (dirty & 2) {
          each_value = ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(ul, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(main);
        destroy_each(each_blocks, detaching);
        mounted = false;
        dispose();
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let { name } = $$props;
    let cities = [];
    async function myCall() {
      var deps = {
        proto: {
          EmptyMessage: import_generic_message_pb.EmptyMessage,
          Cities: import_city_message_pb.Cities,
          CitiesClient: import_city_service_grpc_web_pb.CitiesServicePromiseClient
        }
      };
      let city = new city_default2(deps);
      return await city.index();
    }
    function getCities() {
      myCall().then((response) => {
        $$invalidate(1, cities = response);
      }).catch((error) => {
        console.log("error", error);
      });
    }
    $$self.$$set = ($$props2) => {
      if ("name" in $$props2)
        $$invalidate(0, name = $$props2.name);
    };
    return [name, cities, getCities];
  }
  var App = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, { name: 0 });
    }
  };
  var App_default = App;
  require_();

  // src/main.js
  var app = new App_default({
    target: document.body,
    props: {
      name: "world"
    }
  });
  var main_default = app;
})();
