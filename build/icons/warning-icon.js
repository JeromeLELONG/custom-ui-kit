'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WarningIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WarningIcon = exports.WarningIcon = function WarningIcon(props) {
    return _react2.default.createElement(
        'svg',
        _extends({ viewBox: '0 0 20 20' }, props),
        _react2.default.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
            _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('path', { d: 'M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M15.6568542,15.6568542 C18.7810486,12.5326599 18.7810486,7.46734008 15.6568542,4.34314575 C12.5326599,1.21895142 7.46734008,1.21895142 4.34314575,4.34314575 C1.21895142,7.46734008 1.21895142,12.5326599 4.34314575,15.6568542 C7.46734008,18.7810486 12.5326599,18.7810486 15.6568542,15.6568542 Z M9,5 L11,5 L11,11 L9,11 L9,5 Z M9,13 L11,13 L11,15 L9,15 L9,13 Z' })
            )
        )
    );
};

WarningIcon.defaultProps = {
    width: 16,
    height: 16,
    fill: _theme.theme.colors.red
};

WarningIcon.displayName = 'WarningIcon';