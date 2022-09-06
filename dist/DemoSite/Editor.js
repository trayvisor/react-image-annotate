import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

import React, { useState } from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "react-select";
import Code from "react-syntax-highlighter";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import MonacoEditor from "react-monaco-editor";
var theme = createTheme();
var useStyles = makeStyles(function (theme) {
  return {
    editBar: {
      padding: 10,
      borderBottom: "1px solid #ccc",
      backgroundColor: "#f8f8f8",
      display: "flex",
      alignItems: "center",
      "& .button": {
        margin: 5
      }
    },
    select: {
      width: 240,
      fontSize: 14
    },
    contentArea: {
      padding: 10
    },
    specificationArea: {
      padding: 10
    }
  };
});

var loadSavedInput = function loadSavedInput() {
  try {
    return JSON.parse(window.localStorage.getItem("customInput") || "{}");
  } catch (e) {
    return {};
  }
};

var handleSave = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(data);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleSave(_x) {
    return _ref.apply(this, arguments);
  };
}();

export var examples = {
  "Simple Bounding Box": function SimpleBoundingBox() {
    return {
      taskDescription: "Annotate each image according to this _markdown_ specification.",
      // regionTagList: [],
      // regionClsList: ["hotdog"],
      regionTagList: ["has-bun"],
      regionClsList: ["hotdog", "not-hotdog"],
      regionPrdList: ["prd1", "prd2", "prd3"],
      enabledTools: ["select", "create-box"],
      // onExit: {handleSave},
      // showTags: true,
      images: [{
        src: "https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        name: "hot-dogs-1"
      }, {
        src: "https://www.bianchi.com/wp-content/uploads/2019/07/YPB17I555K.jpg",
        name: "bianchi-oltre-xr4"
      }],
      allowComments: true
    };
  },
  "Simple Segmentation": function SimpleSegmentation() {
    return {
      taskDescription: "Annotate each image according to this _markdown_ specification.",
      regionClsList: ["car", "truck"],
      enabledTools: ["select", "create-polygon"],
      images: [{
        src: "https://images.unsplash.com/photo-1561518776-e76a5e48f731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        name: "car-image-1"
      }]
    };
  },
  Custom: function Custom() {
    return loadSavedInput();
  }
};

var Editor = function Editor(_ref2) {
  var onOpenAnnotator = _ref2.onOpenAnnotator,
      lastOutput = _ref2.lastOutput;
  var c = useStyles();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      currentError = _useState2[0],
      changeCurrentError = _useState2[1];

  var _useState3 = useState(window.localStorage.getItem("customInput") ? "Custom" : "Simple Bounding Box"),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedExample = _useState4[0],
      changeSelectedExample = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      outputDialogOpen = _useState6[0],
      changeOutputOpen = _useState6[1];

  var _useState7 = useState(JSON.stringify(examples[selectedExample](), null, "  ")),
      _useState8 = _slicedToArray(_useState7, 2),
      currentJSONValue = _useState8[0],
      changeCurrentJSONValue = _useState8[1];

  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: c.editBar
  }, /*#__PURE__*/React.createElement("h3", null, "React Image Annotate"), /*#__PURE__*/React.createElement("div", {
    style: {
      flexGrow: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    className: c.select,
    value: {
      label: selectedExample,
      value: selectedExample
    },
    options: Object.keys(examples).map(function (s) {
      return {
        label: s,
        value: s
      };
    }),
    onChange: function onChange(selectedOption) {
      changeSelectedExample(selectedOption.value);
      changeCurrentJSONValue(JSON.stringify(selectedOption.value === "Custom" ? loadSavedInput() : examples[selectedOption.value](), null, "  "));
    }
  })), /*#__PURE__*/React.createElement(Button, {
    className: "button",
    disabled: !lastOutput,
    onClick: function onClick() {
      return changeOutputOpen(true);
    }
  }, "View Output"), /*#__PURE__*/React.createElement(Button, {
    className: "button",
    variant: "outlined",
    disabled: Boolean(currentError),
    onClick: function onClick() {
      onOpenAnnotator(selectedExample === "Custom" ? loadSavedInput() : examples[selectedExample]);
    }
  }, "Open Annotator"))), /*#__PURE__*/React.createElement("div", {
    className: c.contentArea,
    style: currentError ? {
      border: "2px solid #f00"
    } : {
      border: "2px solid #fff"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MonacoEditor, {
    value: currentJSONValue,
    language: "javascript",
    onChange: function onChange(code) {
      try {
        window.localStorage.setItem("customInput", JSON.stringify(JSON.parse(code)));
        changeCurrentError(null);
      } catch (e) {
        changeCurrentError(e.toString());
      }

      changeCurrentJSONValue(code);
    },
    width: "100%",
    height: "550px"
  }))), /*#__PURE__*/React.createElement("div", {
    className: c.specificationArea
  }, /*#__PURE__*/React.createElement("h2", null, "React Image Annotate Format"), /*#__PURE__*/React.createElement(Code, {
    language: "javascript"
  }, "\n{\n  taskDescription?: string, // markdown\n  regionTagList?: Array<string>,\n  regionClsList?: Array<string>,\n  imageTagList?: Array<string>,\n  imageClsList?: Array<string>,\n  // all tools are enabled by default\n  enabledTools?: Array< \"select\" | \"create-point\" | \"create-box\" | \"create-polygon\" | \"create-line\">,\n  selectedImage?: string, // initial selected image\n  images: Array<{\n    src: string,\n    thumbnailSrc?: string, // use this if you are using high-res images\n    name: string,\n    regions?: Array<{\n      id: string | number,\n      cls?: string,\n      color?: string,\n      tags?: Array<string>,\n\n      // Point\n      type: \"point\",\n      x: number, // [0-1] % of image width\n      y: number, // [0-1] % of image height\n\n      // Bounding Box\n      type: \"box\",\n      x: number, // [0-1] % of image width\n      y: number, // [0-1] % of image height\n      w: number, // [0-1] % of image width\n      h: number, // [0-1] % of image height\n\n      // Polygon\n      type: \"polygon\",\n      open?: boolean, // should last and first points be connected, default: true\n      points: Array<[number, number]> // [0-1] % of image width/height\n    }>\n  }>,\n}\n")), /*#__PURE__*/React.createElement(Dialog, {
    fullScreen: true,
    open: outputDialogOpen
  }, /*#__PURE__*/React.createElement(DialogTitle, null, "React Image Annotate Output"), /*#__PURE__*/React.createElement(DialogContent, {
    style: {
      minWidth: 400
    }
  }, /*#__PURE__*/React.createElement(MonacoEditor, {
    value: JSON.stringify(lastOutput, null, "  "),
    language: "javascript",
    width: "100%",
    height: "550px"
  })), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return changeOutputOpen(false);
    }
  }, "Close")))));
};

export default Editor;