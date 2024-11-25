"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var LeaFormFeld = function LeaFormFeld(_ref) {
  var label = _ref.label,
    value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      display: 'block',
      marginBottom: '5px'
    }
  }, label), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    style: {
      padding: '5px',
      width: '100%'
    }
  }));
};
var _default = exports["default"] = LeaFormFeld;