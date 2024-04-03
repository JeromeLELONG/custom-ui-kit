'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Pagination = require('./Pagination');

var _styledComponents = require('styled-components');

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Pagination />', function () {
    it('should display not display pagination if only one page', function () {
        var props = {
            numberColumns: 4,
            onChange: function onChange() {},
            pageSize: 10,
            pageIndex: 0,
            total: 10
        };
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
            _styledComponents.ThemeProvider,
            { theme: _theme.theme },
            _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(_Pagination.TablePagination, props)
            )
        ));

        expect(wrapper.text()).toContain('');
    });

    it('should display pagination if many pages', function () {
        var props = {
            numberColumns: 4,
            onChange: function onChange() {},
            pageSize: 10,
            pageIndex: 0,
            total: 30
        };
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
            _styledComponents.ThemeProvider,
            { theme: _theme.theme },
            _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(_Pagination.TablePagination, props)
            )
        ));

        expect(wrapper.text()).toContain('1 à 10 sur 30Page 1123');
    });

    it('should display Pagination on page 2 even if page is empty', function () {
        var props = {
            numberColumns: 4,
            onChange: function onChange() {},
            pageSize: 10,
            pageIndex: 1,
            total: 10
        };
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
            _styledComponents.ThemeProvider,
            { theme: _theme.theme },
            _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(_Pagination.TablePagination, props)
            )
        ));

        expect(wrapper.text()).toContain('11 à 10 sur 10Page 21');
    });
});