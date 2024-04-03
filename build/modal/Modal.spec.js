'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestingLibrary = require('react-testing-library');

var _styledComponents = require('styled-components');

var _theme = require('../theme');

var _Modal = require('./Modal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('Modal', function () {
    it('should render a Modal with its content', function () {
        var _renderIntoDocument = (0, _reactTestingLibrary.renderIntoDocument)(_react2.default.createElement(
            _styledComponents.ThemeProvider,
            { theme: _theme.theme },
            _react2.default.createElement(
                _Modal.Modal,
                null,
                _react2.default.createElement(
                    'span',
                    { 'data-testid': 'content' },
                    'Modals are bad UI'
                )
            )
        )),
            getByTestId = _renderIntoDocument.getByTestId;

        expect(getByTestId('content').textContent).toBe('Modals are bad UI');
    });

    it('should call onClose prop when clicking on the close button', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var onClose, _renderIntoDocument2, getByTestId;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        onClose = jest.fn();
                        _renderIntoDocument2 = (0, _reactTestingLibrary.renderIntoDocument)(_react2.default.createElement(
                            _styledComponents.ThemeProvider,
                            { theme: _theme.theme },
                            _react2.default.createElement(
                                _Modal.Modal,
                                { onClose: onClose },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Modals are bad UI'
                                )
                            )
                        )), getByTestId = _renderIntoDocument2.getByTestId;


                        getByTestId('close-button').click();
                        expect(onClose).toHaveBeenCalled();

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    })));

    it('should not allow to close if the modal is not closable', function () {
        var _renderIntoDocument3 = (0, _reactTestingLibrary.renderIntoDocument)(_react2.default.createElement(
            _styledComponents.ThemeProvider,
            { theme: _theme.theme },
            _react2.default.createElement(
                _Modal.Modal,
                { closable: false },
                _react2.default.createElement(
                    'span',
                    null,
                    'Modals are bad UI'
                )
            )
        )),
            getByTestId = _renderIntoDocument3.getByTestId;

        expect(function () {
            getByTestId('close-button');
        }).toThrow();
    });
});