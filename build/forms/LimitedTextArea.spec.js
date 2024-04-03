'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestingLibrary = require('react-testing-library');

var _LimitedTextArea = require('./LimitedTextArea');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('styled-components', function () {
    return {
        input: function input() {
            return {
                withComponent: function withComponent() {
                    return 'textarea';
                }
            };
        },
        p: function p() {
            return 'p';
        }
    };
});

describe('Limited TextArea', function () {
    var defaultProps = {
        limit: 300,
        onChange: function onChange() {}
    };

    it('should display number of currently written characters and limit', function () {
        var props = _extends({}, defaultProps, { limit: 450, value: 'Hello World!' });
        var wrapper = (0, _reactTestingLibrary.render)(_react2.default.createElement(_LimitedTextArea.LimitedTextArea, props));

        expect(wrapper.getAllByText('12 / 450')).toHaveLength(1);
    });

    it('should truncate text if too long', function () {
        var onChange = jest.fn();
        var props = _extends({}, defaultProps, {
            placeholder: 'Missions',
            limit: 2,
            onChange: onChange
        });
        var wrapper = (0, _reactTestingLibrary.render)(_react2.default.createElement(_LimitedTextArea.LimitedTextArea, props));

        var input = wrapper.queryByPlaceholderText('Missions');
        _reactTestingLibrary.Simulate.change(input, { target: { value: 'foo' } });

        expect(onChange).toHaveBeenCalledWith('fo');
    });
});