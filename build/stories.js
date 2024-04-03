'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _Validator = require('./Validator');

var _Progress = require('./Progress');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Miscellaneous', module);
stories.addDecorator(_addonKnobs.withKnobs);

var submitValidation = function submitValidation(intent) {
    return function (e, reason) {
        e.preventDefault();
        console.log(intent + ': ' + reason);
    };
};

stories.add('Validator', function () {
    return _react2.default.createElement(
        'div',
        { style: { maxWidth: 500 } },
        _react2.default.createElement(_Validator.Validator, {
            commentable: true,
            onAccepted: submitValidation('accepted'),
            onRejected: submitValidation('rejected')
        })
    );
}).add('Progress', function () {
    return _react2.default.createElement(_Progress.Progress, {
        value: (0, _addonKnobs.number)('Value', 80),
        max: (0, _addonKnobs.number)('Max', 100),
        color: (0, _addonKnobs.color)('Color'),
        backgroundColor: (0, _addonKnobs.color)('Background Color'),
        label: (0, _addonKnobs.text)('Label', 'Loading, please wait...')
    });
});