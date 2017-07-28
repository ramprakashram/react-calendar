'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Decades = require('./CenturyView/Decades');

var _Decades2 = _interopRequireDefault(_Decades);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CenturyView = function (_Component) {
  _inherits(CenturyView, _Component);

  function CenturyView() {
    _classCallCheck(this, CenturyView);

    return _possibleConstructorReturn(this, (CenturyView.__proto__ || Object.getPrototypeOf(CenturyView)).apply(this, arguments));
  }

  _createClass(CenturyView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var setView = this.props.setView;


      if (setView) setView('century');
    }
  }, {
    key: 'renderDecades',
    value: function renderDecades() {
      var _props = this.props,
          onClickDecade = _props.onClickDecade,
          setActiveRange = _props.setActiveRange,
          century = _props.century;


      return _react2.default.createElement(_Decades2.default, {
        century: century,
        onClickDecade: onClickDecade,
        setActiveRange: setActiveRange
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'react-calendar__century-view' },
        this.renderDecades()
      );
    }
  }]);

  return CenturyView;
}(_react.Component);

exports.default = CenturyView;


CenturyView.propTypes = {
  century: _propTypes2.default.oneOfType([_propTypes2.default.string, // Only strings that are parseable to integer
  _propTypes2.default.number, _propTypes2.default.instanceOf(Date)]).isRequired,
  onClickDecade: _propTypes2.default.func,
  setActiveRange: _propTypes2.default.func,
  setView: _propTypes2.default.func
};