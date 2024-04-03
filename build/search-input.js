'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    background-image: url(\'data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%09%09%09%09%09%09%0D%0A%09%09%09%09%09%09%3Cg%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0D%0A%09%09%09%09%09%09%09%3Cg%20fill%3D%22%23aa9f97%22%3E%0D%0A%09%09%09%09%09%09%09%09%3Cpath%20d%3D%22M12.9056439%2C14.3198574%20C11.5509601%2C15.3729184%209.84871145%2C16%208%2C16%20C3.581722%2C16%200%2C12.418278%200%2C8%20C0%2C3.581722%203.581722%2C0%208%2C0%20C12.418278%2C0%2016%2C3.581722%2016%2C8%20C16%2C9.84871145%2015.3729184%2C11.5509601%2014.3198574%2C12.9056439%20L19.6568542%2C18.2426407%20L18.2426407%2C19.6568542%20L12.9056439%2C14.3198574%20Z%20M8%2C14%20C11.3137085%2C14%2014%2C11.3137085%2014%2C8%20C14%2C4.6862915%2011.3137085%2C2%208%2C2%20C4.6862915%2C2%202%2C4.6862915%202%2C8%20C2%2C11.3137085%204.6862915%2C14%208%2C14%20Z%22%3E%3C%2Fpath%3E%0D%0A%09%09%09%09%09%09%09%3C%2Fg%3E%0D%0A%09%09%09%09%09%09%3C%2Fg%3E%3C%2Fsvg%3E\');\n    background-position: ', ';\n    background-repeat: no-repeat;\n    background-size: auto 60%;\n    padding-left: ', ';\n\n    &:focus {\n        background-image: url(\'data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%09%09%09%09%09%09%0D%0A%09%09%09%09%09%09%3Cg%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0D%0A%09%09%09%09%09%09%09%3Cg%20fill%3D%22%23aa9f97%22%3E%0D%0A%09%09%09%09%09%09%09%09%3Cpath%20d%3D%22M12.9056439%2C14.3198574%20C11.5509601%2C15.3729184%209.84871145%2C16%208%2C16%20C3.581722%2C16%200%2C12.418278%200%2C8%20C0%2C3.581722%203.581722%2C0%208%2C0%20C12.418278%2C0%2016%2C3.581722%2016%2C8%20C16%2C9.84871145%2015.3729184%2C11.5509601%2014.3198574%2C12.9056439%20L19.6568542%2C18.2426407%20L18.2426407%2C19.6568542%20L12.9056439%2C14.3198574%20Z%20M8%2C14%20C11.3137085%2C14%2014%2C11.3137085%2014%2C8%20C14%2C4.6862915%2011.3137085%2C2%208%2C2%20C4.6862915%2C2%202%2C4.6862915%202%2C8%20C2%2C11.3137085%204.6862915%2C14%208%2C14%20Z%22%3E%3C%2Fpath%3E%0D%0A%09%09%09%09%09%09%09%3C%2Fg%3E%0D%0A%09%09%09%09%09%09%3C%2Fg%3E%3C%2Fsvg%3E\');\n        background-position: ', ';\n        background-repeat: no-repeat;\n        background-size: auto 60%;\n    }\n'], ['\n    background-image: url(\'data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%09%09%09%09%09%09%0D%0A%09%09%09%09%09%09%3Cg%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0D%0A%09%09%09%09%09%09%09%3Cg%20fill%3D%22%23aa9f97%22%3E%0D%0A%09%09%09%09%09%09%09%09%3Cpath%20d%3D%22M12.9056439%2C14.3198574%20C11.5509601%2C15.3729184%209.84871145%2C16%208%2C16%20C3.581722%2C16%200%2C12.418278%200%2C8%20C0%2C3.581722%203.581722%2C0%208%2C0%20C12.418278%2C0%2016%2C3.581722%2016%2C8%20C16%2C9.84871145%2015.3729184%2C11.5509601%2014.3198574%2C12.9056439%20L19.6568542%2C18.2426407%20L18.2426407%2C19.6568542%20L12.9056439%2C14.3198574%20Z%20M8%2C14%20C11.3137085%2C14%2014%2C11.3137085%2014%2C8%20C14%2C4.6862915%2011.3137085%2C2%208%2C2%20C4.6862915%2C2%202%2C4.6862915%202%2C8%20C2%2C11.3137085%204.6862915%2C14%208%2C14%20Z%22%3E%3C%2Fpath%3E%0D%0A%09%09%09%09%09%09%09%3C%2Fg%3E%0D%0A%09%09%09%09%09%09%3C%2Fg%3E%3C%2Fsvg%3E\');\n    background-position: ', ';\n    background-repeat: no-repeat;\n    background-size: auto 60%;\n    padding-left: ', ';\n\n    &:focus {\n        background-image: url(\'data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%09%09%09%09%09%09%0D%0A%09%09%09%09%09%09%3Cg%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0D%0A%09%09%09%09%09%09%09%3Cg%20fill%3D%22%23aa9f97%22%3E%0D%0A%09%09%09%09%09%09%09%09%3Cpath%20d%3D%22M12.9056439%2C14.3198574%20C11.5509601%2C15.3729184%209.84871145%2C16%208%2C16%20C3.581722%2C16%200%2C12.418278%200%2C8%20C0%2C3.581722%203.581722%2C0%208%2C0%20C12.418278%2C0%2016%2C3.581722%2016%2C8%20C16%2C9.84871145%2015.3729184%2C11.5509601%2014.3198574%2C12.9056439%20L19.6568542%2C18.2426407%20L18.2426407%2C19.6568542%20L12.9056439%2C14.3198574%20Z%20M8%2C14%20C11.3137085%2C14%2014%2C11.3137085%2014%2C8%20C14%2C4.6862915%2011.3137085%2C2%208%2C2%20C4.6862915%2C2%202%2C4.6862915%202%2C8%20C2%2C11.3137085%204.6862915%2C14%208%2C14%20Z%22%3E%3C%2Fpath%3E%0D%0A%09%09%09%09%09%09%09%3C%2Fg%3E%0D%0A%09%09%09%09%09%09%3C%2Fg%3E%3C%2Fsvg%3E\');\n        background-position: ', ';\n        background-repeat: no-repeat;\n        background-size: auto 60%;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: relative;\n'], ['\n    position: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position: absolute;\n    right: 0;\n    top: ', ';\n'], ['\n    position: absolute;\n    right: 0;\n    top: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _buttons = require('./buttons');

var _icons = require('./icons');

var _Input = require('./forms/Input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = (0, _styledComponents2.default)(_Input.Input)(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.xs;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.l;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.spacing.xs;
});

var InputContainer = _styledComponents2.default.div(_templateObject2);

var ClearButton = _buttons.GhostButton.extend(_templateObject3, function (_ref4) {
    var theme = _ref4.theme;
    return theme.spacing.xxs;
});

var SearchInput = function SearchInput(_ref5) {
    var _onChange = _ref5.onChange,
        props = _objectWithoutProperties(_ref5, ['onChange']);

    return _react2.default.createElement(
        InputContainer,
        null,
        _react2.default.createElement(Input, _extends({}, props, { onChange: function onChange(event) {
                return _onChange(event.target.value);
            } })),
        _react2.default.createElement(
            ClearButton,
            { 'aria-label': 'Remettre \xE0 z\xE9ro', onClick: function onClick() {
                    return _onChange('');
                } },
            _react2.default.createElement(_icons.CrossIcon, null)
        )
    );
};

exports.SearchInput = SearchInput;
SearchInput.displayName = 'SearchInput';