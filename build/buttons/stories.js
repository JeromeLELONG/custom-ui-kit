'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Button = require('./Button');

var _PrimaryButton = require('./PrimaryButton');

var _SecondaryButton = require('./SecondaryButton');

var _GhostButton = require('./GhostButton');

var _ButtonsBar = require('./ButtonsBar');

var _DangerButton = require('./DangerButton');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Buttons', module).add('Primary Button', function () {
    return _react2.default.createElement(
        _PrimaryButton.PrimaryButton,
        null,
        'Primary Button'
    );
}).add('Condensed Button', function () {
    return _react2.default.createElement(
        _PrimaryButton.PrimaryButton,
        { condensed: true },
        'Condensed'
    );
}).add('Secondary Button', function () {
    return _react2.default.createElement(
        _SecondaryButton.SecondaryButton,
        null,
        'Secondary Button'
    );
}).add('Danger Button', function () {
    return _react2.default.createElement(
        _DangerButton.DangerButton,
        null,
        'Danger Button'
    );
}).add('Default Button', function () {
    return _react2.default.createElement(
        _Button.Button,
        null,
        'Button'
    );
}).add('Ghost Button', function () {
    return _react2.default.createElement(
        _GhostButton.GhostButton,
        null,
        'Ghost Button'
    );
}).add('Buttons Bar', function () {
    return _react2.default.createElement(
        _ButtonsBar.ButtonsBar,
        null,
        _react2.default.createElement(
            _SecondaryButton.SecondaryButton,
            null,
            'Reset'
        ),
        _react2.default.createElement(
            _PrimaryButton.PrimaryButton,
            null,
            'Save'
        )
    );
});