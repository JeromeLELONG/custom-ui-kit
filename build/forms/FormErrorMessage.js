'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormErrorMessage = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    margin-top: ', ';\n'], ['\n    margin-top: ', ';\n']);

var _errorMessage = require('../error-message');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormErrorMessage = exports.FormErrorMessage = _errorMessage.ErrorMessage.extend(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.xs;
});

FormErrorMessage.displayName = 'FormErrorMessage';