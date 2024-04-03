'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    margin-bottom: ', ';\n'], ['\n    display: block;\n    margin-bottom: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n'], ['\n    display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: block;\n    font: ', ';\n    font-size: ', ';\n\n    ', ' {\n        font-size: ', ';\n    }\n'], ['\n    display: block;\n    font: ', ';\n    font-size: ', ';\n\n    ', ' {\n        font-size: ', ';\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    flex: 1 0 0;\n    font: ', ';\n'], ['\n    flex: 1 0 0;\n    font: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    display: none;\n\n    ', ' {\n        display: block;\n        flex: 1 0 0;\n        text-align: right;\n    }\n'], ['\n    display: none;\n\n    ', ' {\n        display: block;\n        flex: 1 0 0;\n        text-align: right;\n    }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    ', ' {\n        display: none;\n    }\n'], ['\n    ', ' {\n        display: none;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonKnobs = require('@storybook/addon-knobs');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Modal = require('./Modal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var stories = (0, _react3.storiesOf)('Modal', module);
stories.addDecorator(_addonKnobs.withKnobs);

var Header = _styledComponents2.default.div(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.s;
});

var Headline = _styledComponents2.default.div(_templateObject2);

var Label = _styledComponents2.default.div(_templateObject3, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fonts.title;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fontSizes.m;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.medias.largerThanPhone;
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.fontSizes.l;
});

var Title = _styledComponents2.default.div(_templateObject4, function (_ref6) {
    var theme = _ref6.theme;
    return theme.fonts.appHeader;
});

var Evaluation = _styledComponents2.default.div(_templateObject5, function (_ref7) {
    var theme = _ref7.theme;
    return theme.medias.largerThanPhone;
});

var MobileOnly = _styledComponents2.default.div(_templateObject6, function (_ref8) {
    var theme = _ref8.theme;
    return theme.medias.largerThanPhone;
});

stories.add('Modal (empty)', function () {
    return _react2.default.createElement(
        _Modal.Modal,
        {
            closable: (0, _addonKnobs.boolean)('Closable', true),
            closeOnEscape: (0, _addonKnobs.boolean)('Close on ESC', true),
            onClose: (0, _addonActions.action)('closed')
        },
        _react2.default.createElement(
            'pre',
            null,
            '<Modal\n    closable\n    closeOnEscape\n    onClose={console.log}\n>\n    {/* children */}\n</Modal>'
        )
    );
}).add('Modal', function () {
    return _react2.default.createElement(
        _Modal.Modal,
        null,
        _react2.default.createElement(
            Header,
            null,
            _react2.default.createElement(
                Headline,
                null,
                _react2.default.createElement(
                    Title,
                    null,
                    'TEC111'
                ),
                _react2.default.createElement(
                    Evaluation,
                    null,
                    'Devoir 2'
                )
            ),
            _react2.default.createElement(
                Label,
                null,
                'Gestion juridique et fiscale'
            ),
            _react2.default.createElement(
                MobileOnly,
                null,
                'Devoir 2'
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            'A rendre pour le: 30/10/2019'
        )
    );
});