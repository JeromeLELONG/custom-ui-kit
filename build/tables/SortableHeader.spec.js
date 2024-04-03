'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SortableHeader = require('./SortableHeader');

var _icons = require('../icons');

var _buttons = require('../buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<SortableHeader />', function () {
    var defaultProps = {
        classes: {},
        onChange: function onChange() {}
    };

    it('should display children and a sorting button', function () {
        var props = _extends({}, defaultProps);
        var header = (0, _enzyme.shallow)(_react2.default.createElement(
            _SortableHeader.SortableHeader,
            props,
            _react2.default.createElement(
                'strong',
                null,
                'Attendee'
            )
        ));

        expect(header.find('strong').text()).toBe('Attendee');
        expect(header.find(_icons.ArrowDownIcon)).toHaveLength(1);
    });

    it('should highlight sorted column button', function () {
        var test = function test(order, shouldBeHighlighted) {
            var props = _extends({}, defaultProps, { order: order });
            var header = (0, _enzyme.shallow)(_react2.default.createElement(_SortableHeader.SortableHeader, props));

            expect(header.find(_buttons.GhostButton).prop('className').indexOf('sorted') !== -1).toBe(shouldBeHighlighted);
        };

        test(null, false);
        test('ASC', true);
        test('DESC', true);
    });

    it('should sorting arrow icon accordingly to given order', function () {
        var test = function test(order, shouldBeRotated) {
            var props = _extends({}, defaultProps, { order: order });
            var header = (0, _enzyme.shallow)(_react2.default.createElement(_SortableHeader.SortableHeader, props));

            expect(header.find(_buttons.GhostButton).prop('className').indexOf('rotate') !== -1).toBe(shouldBeRotated);
        };

        test(null, false);
        test('ASC', false);
        test('DESC', true);
    });

    it('should change sort direction correctly when clicking on the button', function () {
        var test = function test(order, expectedOnChangeArgs) {
            var onChange = jest.fn();
            var props = _extends({}, defaultProps, { onChange: onChange, order: order });
            var header = (0, _enzyme.shallow)(_react2.default.createElement(_SortableHeader.SortableHeader, props));

            var sortButton = header.find(_buttons.GhostButton);

            sortButton.simulate('click');
            expect(onChange.mock.calls[0]).toEqual(expectedOnChangeArgs);
        };

        test(null, ['DESC']);
        test('DESC', ['ASC']);
        test('ASC', ['DESC']);
    });
});