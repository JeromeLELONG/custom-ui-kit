'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormField = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormFieldContainer = require('./FormFieldContainer');

var _FormLabel = require('./FormLabel');

var _FormErrorMessage = require('./FormErrorMessage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormField = function FormField(_ref) {
    var children = _ref.children,
        input = _ref.input,
        label = _ref.label,
        meta = _ref.meta,
        props = _objectWithoutProperties(_ref, ['children', 'input', 'label', 'meta']);

    return _react2.default.createElement(
        _FormFieldContainer.FormFieldContainer,
        props,
        _react2.default.createElement(
            _FormLabel.FormLabel,
            { htmlFor: input.name, hasError: meta.touched && meta.error },
            label
        ),
        children({ input: input, meta: meta }),
        meta.touched && meta.error && _react2.default.createElement(
            _FormErrorMessage.FormErrorMessage,
            null,
            meta.error
        )
    );
};

exports.FormField = FormField;
FormField.propTypes = {
    children: _propTypes2.default.func.isRequired,
    input: _propTypes2.default.object.isRequired,
    label: _propTypes2.default.string.isRequired,
    meta: _propTypes2.default.object.isRequired
};