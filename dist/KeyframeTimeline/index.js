import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React, { useMemo, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import range from "lodash/range";
import * as colors from "@mui/material/colors";
import useMeasure from "react-use-measure";
import useEventCallback from "use-event-callback";
import { useRafState } from "react-use";
import getTimeString from "./get-time-string";
var theme = createTheme();
var Container = styled("div")(function (_ref) {
  var theme = _ref.theme;
  return {
    position: "relative",
    display: "flex",
    flexGrow: 1,
    minWidth: 240,
    height: 64,
    marginLeft: 16,
    marginRight: 16
  };
});
var Tick = styled("div")(function (_ref2) {
  var theme = _ref2.theme;
  return {
    position: "absolute",
    width: 2,
    marginLeft: -1,
    height: "100%",
    backgroundColor: colors.grey[300],
    bottom: 0
  };
});
var TickText = styled("div")(function (_ref3) {
  var theme = _ref3.theme;
  return {
    position: "absolute",
    userSelect: "none",
    fontSize: 10,
    color: colors.grey[600],
    fontWeight: "bold",
    bottom: 0
  };
});
var PositionCursor = styled("div")(function (_ref4) {
  var theme = _ref4.theme;
  return {
    position: "absolute",
    bottom: "calc(50% + 6px)",
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
    display: "grid",
    placeItems: "center",
    width: 48,
    marginLeft: -24,
    borderRadius: 2,
    height: 24,
    backgroundColor: colors.blue[500],
    userSelect: "none",
    fontVariantNumeric: "tabular-nums",
    "&::before": {
      position: "absolute",
      bottom: -6,
      left: 24 - 8,
      content: '""',
      width: 0,
      height: 0,
      borderTop: "8px solid ".concat(colors.blue[500]),
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent"
    }
  };
});
var KeyframeMarker = styled("div")(function (_ref5) {
  var _ref6;

  var theme = _ref5.theme;
  return _ref6 = {
    position: "absolute",
    bottom: 8,
    cursor: "pointer",
    opacity: 0.75,
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
    display: "grid",
    placeItems: "center",
    width: 16,
    marginLeft: 0,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    height: 12
  }, _defineProperty(_ref6, "marginLeft", -8), _defineProperty(_ref6, "backgroundColor", colors.red[500]), _defineProperty(_ref6, "userSelect", "none"), _defineProperty(_ref6, "fontVariantNumeric", "tabular-nums"), _defineProperty(_ref6, "&::before", {
    position: "absolute",
    bottom: -8,
    left: 0,
    content: '""',
    width: 0,
    height: 0,
    borderTop: "8px solid ".concat(colors.red[500]),
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent"
  }), _ref6;
});
var min = 60000;
var displayIntervalPairs = [[50, 250], [100, 500], [250, 1000], [1000, 5000], [5000, 30000], [10000, min], [30000, min * 2], [min, min * 5], [min * 5, min * 30], [min * 10, min * 60], [min * 30, min * 60 * 3], [min * 60, min * 60 * 5]];

var getMajorInterval = function getMajorInterval(duration) {
  var _iterator = _createForOfIteratorHelper(displayIntervalPairs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ref9 = _step.value;

      var _ref8 = _slicedToArray(_ref9, 2);

      var minor = _ref8[0];
      var major = _ref8[1];

      if (duration / major < 6 && duration / major > 2) {
        return [minor, major];
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return [duration / 4, duration];
};

export default (function (_ref10) {
  var _ref10$currentTime = _ref10.currentTime,
      currentTime = _ref10$currentTime === void 0 ? 0 : _ref10$currentTime,
      duration = _ref10.duration,
      onChangeCurrentTime = _ref10.onChangeCurrentTime,
      keyframes = _ref10.keyframes;

  var _useMeasure = useMeasure(),
      _useMeasure2 = _slicedToArray(_useMeasure, 2),
      ref = _useMeasure2[0],
      bounds = _useMeasure2[1];

  var _useState = useState(currentTime),
      _useState2 = _slicedToArray(_useState, 2),
      instantCurrentTime = _useState2[0],
      changeInstantCurrentTime = _useState2[1];

  var _useRafState = useRafState(false),
      _useRafState2 = _slicedToArray(_useRafState, 2),
      draggingTime = _useRafState2[0],
      changeDraggingTime = _useRafState2[1];

  var keyframeTimes = Object.keys(keyframes || {}).map(function (t) {
    return parseInt(t);
  }).filter(function (t) {
    return !isNaN(t);
  }).sort(function (a, b) {
    return a - b;
  });
  useEffect(function () {
    if (currentTime !== instantCurrentTime) {
      changeInstantCurrentTime(currentTime);
    }
  }, [currentTime]);

  var _useMemo = useMemo(function () {
    return getMajorInterval(duration);
  }, [duration]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      minorInterval = _useMemo2[0],
      majorInterval = _useMemo2[1];

  var onMouseMove = useEventCallback(function (e) {
    if (draggingTime) {
      var px = (e.clientX - bounds.left) / bounds.width;
      changeInstantCurrentTime(Math.min(duration, Math.max(0, Math.floor(px * duration))));
    }
  });
  var onMouseUp = useEventCallback(function (e) {
    changeDraggingTime(false);
    var px = (e.clientX - bounds.left) / bounds.width;
    var newTime = Math.min(duration, Math.max(0, Math.floor(px * duration)));
    changeInstantCurrentTime(newTime);
    onChangeCurrentTime(newTime);
  }); // TODO skeleton

  if (!duration) return null;
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Container, {
    onMouseMove: onMouseMove,
    onMouseUp: onMouseUp,
    ref: ref
  }, range(0, duration, majorInterval).map(function (a) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tick, {
      key: a,
      style: {
        left: a / duration * bounds.width,
        height: "50%"
      }
    }), /*#__PURE__*/React.createElement(TickText, {
      style: {
        left: a / duration * bounds.width + 8,
        bottom: "calc(50% - 12px)"
      }
    }, getTimeString(a)));
  }), range(0, duration, minorInterval).filter(function (a) {
    return !Number.isInteger(a / majorInterval);
  }).map(function (a) {
    return /*#__PURE__*/React.createElement(Tick, {
      key: a,
      style: {
        left: a / duration * bounds.width,
        height: "25%"
      }
    });
  }), keyframeTimes.map(function (kt) {
    return /*#__PURE__*/React.createElement(KeyframeMarker, {
      onClick: function onClick() {
        return onChangeCurrentTime(kt);
      },
      key: kt,
      style: {
        left: kt / duration * bounds.width
      }
    });
  }), /*#__PURE__*/React.createElement(PositionCursor, {
    onMouseDown: function onMouseDown(e) {
      return changeDraggingTime(true);
    },
    style: {
      cursor: draggingTime ? "grabbing" : "grab",
      left: instantCurrentTime / duration * bounds.width
    }
  }, getTimeString(instantCurrentTime))));
});