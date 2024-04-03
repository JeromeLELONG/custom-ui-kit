'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TablePagination = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    & tr:first-child td {\n        padding-top: ', ';\n    }\n    & td {\n        padding-top: ', ';\n        padding-bottom: 0;\n        padding-left: 0;\n        padding-right: 0;\n        border: none;\n        color: ', ';\n        text-align: center;\n\n        > button {\n            display: inline-flex;\n            font-weight: normal;\n            font-size: ', ';\n            padding-left: ', ';\n            padding-right: ', ';\n            width: auto;\n\n            &.current {\n                font-weight: bold;\n            }\n        }\n    }\n'], ['\n    & tr:first-child td {\n        padding-top: ', ';\n    }\n    & td {\n        padding-top: ', ';\n        padding-bottom: 0;\n        padding-left: 0;\n        padding-right: 0;\n        border: none;\n        color: ', ';\n        text-align: center;\n\n        > button {\n            display: inline-flex;\n            font-weight: normal;\n            font-size: ', ';\n            padding-left: ', ';\n            padding-right: ', ';\n            width: auto;\n\n            &.current {\n                font-weight: bold;\n            }\n        }\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    & > * {\n        display: flex;\n        justify-content: space-between;\n\n        span {\n            font: ', ';\n            font-size: ', ';\n            padding-left: ', ';\n            padding-right: ', ';\n        }\n    }\n'], ['\n    & > * {\n        display: flex;\n        justify-content: space-between;\n\n        span {\n            font: ', ';\n            font-size: ', ';\n            padding-left: ', ';\n            padding-right: ', ';\n        }\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-weight: normal;\n    color: ', ';\n    font: ', ';\n    text-transform: uppercase;\n    padding-left: ', ';\n    padding-right: ', ';\n    > input {\n        font-size: ', ';\n        width: 4rem !important;\n    }\n'], ['\n    font-weight: normal;\n    color: ', ';\n    font: ', ';\n    text-transform: uppercase;\n    padding-left: ', ';\n    padding-right: ', ';\n    > input {\n        font-size: ', ';\n        width: 4rem !important;\n    }\n']);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _forms = require('../forms');

var _buttons = require('../buttons');

var _pagination = require('../pagination');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TablePaginationFoot = _styledComponents2.default.tfoot(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.l;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.s;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.black;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.fontSizes.s;
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.spacing.xs;
}, function (_ref6) {
    var theme = _ref6.theme;
    return theme.spacing.xs;
});

TablePaginationFoot.displayName = 'TablePaginationFoot';

var TablePaginationSummary = _styledComponents2.default.td(_templateObject2, function (_ref7) {
    var theme = _ref7.theme;
    return theme.fonts.button;
}, function (_ref8) {
    var theme = _ref8.theme;
    return theme.fontSizes.s;
}, function (_ref9) {
    var theme = _ref9.theme;
    return theme.spacing.xs;
}, function (_ref10) {
    var theme = _ref10.theme;
    return theme.spacing.xs;
});

TablePaginationSummary.displayName = 'TablePaginationSummary';

var PageSelector = _styledComponents2.default.label(_templateObject3, function (_ref11) {
    var theme = _ref11.theme;
    return theme.colors.blue;
}, function (_ref12) {
    var theme = _ref12.theme;
    return theme.fonts.button;
}, function (_ref13) {
    var theme = _ref13.theme;
    return theme.spacing.l;
}, function (_ref14) {
    var theme = _ref14.theme;
    return theme.spacing.l;
}, function (_ref15) {
    var theme = _ref15.theme;
    return theme.fontSizes.m;
});

PageSelector.displayName = 'PageSelector';

var TablePagination = exports.TablePagination = function TablePagination(_ref16) {
    var numberColumns = _ref16.numberColumns,
        onChange = _ref16.onChange,
        _ref16$pageIndex = _ref16.pageIndex,
        pageIndex = _ref16$pageIndex === undefined ? 0 : _ref16$pageIndex,
        _ref16$pageSize = _ref16.pageSize,
        pageSize = _ref16$pageSize === undefined ? 0 : _ref16$pageSize,
        _ref16$total = _ref16.total,
        total = _ref16$total === undefined ? 0 : _ref16$total;
    return _react2.default.createElement(
        _pagination.Pagination,
        { onChange: onChange, pageIndex: pageIndex, pageSize: pageSize, total: total },
        function (_ref17) {
            var goToFirstPage = _ref17.goToFirstPage,
                goToLastPage = _ref17.goToLastPage,
                goToNextPage = _ref17.goToNextPage,
                goToPage = _ref17.goToPage,
                goToPreviousPage = _ref17.goToPreviousPage,
                maxPageIndex = _ref17.maxPageIndex,
                pageIndex = _ref17.pageIndex,
                pageSize = _ref17.pageSize;

            var debouncedGoToPage = (0, _debounce2.default)(goToPage, 500);
            var pageStartIndex = pageIndex * pageSize + 1;
            var pageEndIndex = Math.min(pageIndex * pageSize + pageSize, total);

            return (maxPageIndex > 1 || pageIndex > 0) && _react2.default.createElement(
                TablePaginationFoot,
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        TablePaginationSummary,
                        { colSpan: numberColumns },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                pageStartIndex,
                                ' \xE0 ',
                                pageEndIndex,
                                ' sur ',
                                total
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                'Page ',
                                pageIndex + 1,
                                maxPageIndex > 10 ? ' / ' + maxPageIndex : ''
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'tr',
                    null,
                    maxPageIndex <= 10 && _react2.default.createElement(
                        'td',
                        { colSpan: numberColumns },
                        Array.from(Array(maxPageIndex).keys()).map(function (index) {
                            return _react2.default.createElement(
                                _buttons.GhostButton,
                                {
                                    className: (0, _classnames2.default)({
                                        current: index === pageIndex
                                    }),
                                    key: index,
                                    onClick: function onClick() {
                                        return goToPage(index);
                                    }
                                },
                                index + 1
                            );
                        })
                    ),
                    maxPageIndex > 10 && _react2.default.createElement(
                        'td',
                        { colSpan: numberColumns },
                        _react2.default.createElement(
                            _buttons.GhostButton,
                            {
                                className: (0, _classnames2.default)({
                                    current: pageIndex === 1
                                }),
                                onClick: function onClick() {
                                    return goToFirstPage();
                                }
                            },
                            'Premi\xE8re page'
                        ),
                        pageIndex >= 1 && _react2.default.createElement(
                            _buttons.GhostButton,
                            { onClick: function onClick() {
                                    return goToPreviousPage();
                                } },
                            '<',
                            ' Page pr\xE9c\xE9dente'
                        ),
                        _react2.default.createElement(
                            PageSelector,
                            null,
                            'Aller \xE0 la page',
                            ' ',
                            _react2.default.createElement(_forms.Input, {
                                type: 'number',
                                step: '1',
                                min: '1',
                                max: maxPageIndex,
                                onChange: function onChange(_ref18) {
                                    var target = _ref18.target;

                                    var selectedPage = target.value >= 1 ? target.value - 1 : pageIndex || 0;
                                    debouncedGoToPage(selectedPage);
                                }
                            })
                        ),
                        pageIndex < maxPageIndex - 1 && _react2.default.createElement(
                            _buttons.GhostButton,
                            { onClick: function onClick() {
                                    return goToNextPage();
                                } },
                            'Page suivante ',
                            '>'
                        ),
                        _react2.default.createElement(
                            _buttons.GhostButton,
                            {
                                className: (0, _classnames2.default)({
                                    current: pageIndex === maxPageIndex
                                }),
                                onClick: function onClick() {
                                    return goToLastPage();
                                }
                            },
                            'Derni\xE8re page'
                        )
                    )
                )
            );
        }
    );
};

TablePagination.propTypes = {
    numberColumns: _propTypes2.default.number.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    pageIndex: _propTypes2.default.number,
    pageSize: _propTypes2.default.number,
    total: _propTypes2.default.number
};