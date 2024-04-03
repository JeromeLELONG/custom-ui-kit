'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _reactRouter = require('react-router');

var _TabsNavBar = require('./TabsNavBar');

var _NavItem = require('./NavItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Nav', module).addDecorator(function (story) {
    return _react2.default.createElement(
        _reactRouter.MemoryRouter,
        { initialEntries: ['/validate'] },
        story()
    );
}).add('TabsNavBar', function () {
    return _react2.default.createElement(
        _TabsNavBar.TabsNavBar,
        null,
        _react2.default.createElement(
            _NavItem.NavItem,
            { to: '/' },
            'Root'
        ),
        _react2.default.createElement(
            _NavItem.NavItem,
            { to: '/treat' },
            'To do'
        ),
        _react2.default.createElement(
            _NavItem.NavItem,
            { to: '/validate' },
            'To validate'
        ),
        _react2.default.createElement(
            _NavItem.NavItem,
            { to: '/send' },
            'To send'
        )
    );
}).add('TabsNavBar (with exact set to false)', function () {
    return _react2.default.createElement(
        _TabsNavBar.TabsNavBar,
        null,
        _react2.default.createElement(
            _NavItem.NavItem,
            { exact: false, to: '/' },
            'Root'
        ),
        _react2.default.createElement(
            _NavItem.NavItem,
            { to: '/treat' },
            'To do'
        ),
        _react2.default.createElement(
            _NavItem.NavItem,
            { to: '/validate' },
            'To validate'
        ),
        _react2.default.createElement(
            _NavItem.NavItem,
            { to: '/send' },
            'To send'
        )
    );
});