'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addonInfo = require('@storybook/addon-info');

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _addonActions = require('@storybook/addon-actions');

var _Input = require('./Input');

var _Select = require('./Select');

var _Textarea = require('./Textarea');

var _LimitedTextArea = require('./LimitedTextArea');

var _DatePicker = require('./DatePicker');

var _FileUploader = require('./FileUploader');

var _RangeSelector = require('./RangeSelector');

var _SelectMultiple = require('./SelectMultiple');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stories = (0, _react3.storiesOf)('Forms', module);
stories.addDecorator(_addonKnobs.withKnobs);

var options = [{
    value: 'admin',
    label: 'Administrator'
}, {
    value: 'editor',
    label: 'Editor'
}, {
    value: 'animator',
    label: 'Animator'
}];

stories.add('Text Input', (0, _addonInfo.withInfo)()(function () {
    return _react2.default.createElement(_Input.Input, null);
})).add('Select List', (0, _addonInfo.withInfo)()(function () {
    return _react2.default.createElement(
        _Select.Select,
        null,
        options.map(function (option) {
            return _react2.default.createElement(
                'option',
                { key: option.value, value: option.value },
                option.label
            );
        })
    );
})).add('Select Multiple', function () {
    return _react2.default.createElement(_SelectMultiple.SelectMultiple, { options: options, defaultValue: [options[0]], onChange: (0, _addonActions.action)('onChange') });
}).add('File Uploader', (0, _addonInfo.withInfo)({
    propTables: []
})(function () {
    var onUpload = function onUpload(file, onProgress) {
        var progress = 0;

        return new Promise(function (resolve) {
            var nextStep = function nextStep() {
                return setTimeout(function () {
                    progress = Math.min(progress + Math.random(0, 1) * 10, 100);
                    onProgress({
                        loaded: progress,
                        total: 100
                    });

                    if (progress === 100) {
                        return resolve('uploaded/file.csv');
                    } else {
                        nextStep();
                    }
                }, 100);
            };

            return nextStep();
        });
    };

    return _react2.default.createElement(_FileUploader.FileUploader, {
        name: 'data',
        placeholder: 'T\xE9l\xE9chargez votre convention (fichiers PDF uniquement)',
        onUpload: onUpload,
        onChange: function onChange() {}
    });
})).add('Textarea', (0, _addonInfo.withInfo)()(function () {
    return _react2.default.createElement(_Textarea.TextArea, null);
})).add('Limited Textarea', (0, _addonInfo.withInfo)({
    propTables: []
})(function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'p',
            null,
            'Value will be limited in length outside of the storybook when used in a real form.'
        ),
        _react2.default.createElement(_LimitedTextArea.LimitedTextArea, { onChange: jest.fn(), limit: 300 })
    );
})).add('Date Picker', function () {
    var DatePickerWithValue = function (_React$Component) {
        _inherits(DatePickerWithValue, _React$Component);

        function DatePickerWithValue() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, DatePickerWithValue);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePickerWithValue.__proto__ || Object.getPrototypeOf(DatePickerWithValue)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                value: null
            }, _this.onChange = function (e) {
                _this.setState({ value: e.target.value });
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(DatePickerWithValue, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(_DatePicker.DatePicker, { onChange: this.onChange, value: this.state.value });
            }
        }]);

        return DatePickerWithValue;
    }(_react2.default.Component);

    return _react2.default.createElement(DatePickerWithValue, null);
}).add('RangeSelector', function () {
    var RangeSelectorWithValue = function (_React$Component2) {
        _inherits(RangeSelectorWithValue, _React$Component2);

        function RangeSelectorWithValue() {
            var _ref2;

            var _temp2, _this2, _ret2;

            _classCallCheck(this, RangeSelectorWithValue);

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = RangeSelectorWithValue.__proto__ || Object.getPrototypeOf(RangeSelectorWithValue)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
                lowerBound: 'a',
                upperBound: ''
            }, _this2.onChange = function (e) {
                _this2.setState({
                    lowerBound: e.lowerBound,
                    upperBound: e.upperBound
                });
            }, _temp2), _possibleConstructorReturn(_this2, _ret2);
        }

        _createClass(RangeSelectorWithValue, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(_RangeSelector.RangeSelector, { label: 'Filtres :', size: 5, separator: '\u2192', onChange: this.onChange });
            }
        }]);

        return RangeSelectorWithValue;
    }(_react2.default.Component);

    return _react2.default.createElement(
        'div',
        { style: { width: 300 } },
        _react2.default.createElement(RangeSelectorWithValue, null)
    );
});