'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pagination = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = exports.Pagination = function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Pagination);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.state = { pageIndex: 0, pageSize: 20, total: 1, maxPageIndex: 1 }, _this.handleGoToNextPage = function () {
            var _this$state = _this.state,
                maxPageIndex = _this$state.maxPageIndex,
                pageIndex = _this$state.pageIndex,
                pageSize = _this$state.pageSize;
            var onChange = _this.props.onChange;


            if (pageIndex < maxPageIndex) {
                onChange({
                    pageIndex: pageIndex + 1,
                    pageSize: pageSize
                });
            }
        }, _this.handleGoToPage = function (page) {
            var _this$state2 = _this.state,
                maxPageIndex = _this$state2.maxPageIndex,
                pageIndex = _this$state2.pageIndex,
                pageSize = _this$state2.pageSize;
            var onChange = _this.props.onChange;


            if (page !== pageIndex && (page >= 0 || page < maxPageIndex)) {
                onChange({
                    pageIndex: page,
                    pageSize: pageSize
                });
            }
        }, _this.handleGoToPreviousPage = function () {
            var _this$state3 = _this.state,
                pageIndex = _this$state3.pageIndex,
                pageSize = _this$state3.pageSize;
            var onChange = _this.props.onChange;


            if (pageIndex > 0) {
                onChange({
                    pageIndex: pageIndex - 1,
                    pageSize: pageSize
                });
            }
        }, _this.handleGoToFirstPage = function () {
            var pageSize = _this.state.pageSize;
            var onChange = _this.props.onChange;


            onChange({
                pageIndex: 0,
                pageSize: pageSize
            });
        }, _this.handleGoToLastPage = function () {
            var _this$state4 = _this.state,
                maxPageIndex = _this$state4.maxPageIndex,
                pageSize = _this$state4.pageSize;
            var onChange = _this.props.onChange;


            onChange({
                pageIndex: maxPageIndex - 1,
                pageSize: pageSize
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Pagination, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                maxPageIndex = _state.maxPageIndex,
                pageIndex = _state.pageIndex,
                pageSize = _state.pageSize,
                total = _state.total;
            var children = this.props.children;


            return children({
                canGoToNextPage: pageIndex < maxPageIndex,
                goToFirstPage: this.handleGoToFirstPage,
                goToLastPage: this.handleGoToLastPage,
                goToNextPage: this.handleGoToNextPage,
                goToPage: this.handleGoToPage,
                goToPreviousPage: this.handleGoToPreviousPage,
                maxPageIndex: maxPageIndex,
                pageIndex: pageIndex,
                pageSize: pageSize,
                total: total
            });
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
            var state = {};

            if (nextProps.total !== prevState.total) {
                state.total = nextProps.total;
            }

            if (nextProps.pageIndex !== prevState.pageIndex) {
                state.pageIndex = nextProps.pageIndex;
            }

            if (nextProps.pageSize !== prevState.pageSize) {
                state.pageSize = nextProps.pageSize;
            }

            var maxPageIndex = Math.ceil(nextProps.total / nextProps.pageSize);

            if (maxPageIndex !== prevState.maxPageIndex) {
                state.maxPageIndex = maxPageIndex;
            }

            return state;
        }
    }]);

    return Pagination;
}(_react.Component);

Pagination.propTypes = {
    children: _propTypes2.default.func.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    pageIndex: _propTypes2.default.number,
    pageSize: _propTypes2.default.number,
    total: _propTypes2.default.number
};