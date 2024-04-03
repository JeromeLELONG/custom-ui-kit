'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _theme = require('../theme');

var _RangeSelector = require('./RangeSelector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('RangeSelector', function () {
    var defaultProps = {
        theme: _theme.theme,
        lowerBound: 'a',
        upperBound: 'z',
        onChange: jest.fn()
    };

    it('should display lower and upper bounds', function () {
        var props = _extends({
            lowerBound: 'a',
            upperBound: 'z'
        }, defaultProps);

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RangeSelector.RangeSelector, props));
        expect(wrapper.find('[placeholder="début"]').prop('value')).toBe('a');
        expect(wrapper.find('[placeholder="fin"]').prop('value')).toBe('z');
    });

    it('should allow the user to type a word to search for', function () {
        var props = _extends({}, defaultProps, {
            lowerBound: 'a',
            upperBound: 'z'
        });

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RangeSelector.RangeSelector, props));

        var lowerBoundNode = wrapper.find('[placeholder="début"]');
        lowerBoundNode.simulate('change', { target: { value: 'ab' } });
        expect(props.onChange).toHaveBeenCalledWith({
            lowerBound: 'ab',
            upperBound: 'z'
        });

        var upperBoundNode = wrapper.find('[placeholder="fin"]');
        upperBoundNode.simulate('change', { target: { value: 'fe' } });
        expect(props.onChange).toHaveBeenCalledWith({
            lowerBound: 'a',
            upperBound: 'fe'
        });
    });

    it('should have a maxLength equals to size', function () {
        var props = _extends({}, defaultProps, {
            size: 5
        });

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RangeSelector.RangeSelector, props));
        expect(wrapper.find('[placeholder="début"]').prop('maxLength')).toBe(5);
        expect(wrapper.find('[placeholder="fin"]').prop('maxLength')).toBe(5);
    });
});