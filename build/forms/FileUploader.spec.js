'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FileUploader = require('./FileUploader');

var _Loader = require('../Loader');

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('File Uploader', function () {
    var defaultProps = {
        classes: {},
        label: 'Convention',
        onChange: function onChange() {},
        onUpload: function onUpload() {
            return Promise.resolve('uploaded.pdf');
        }
    };

    it('should display error message if dropped file is invalid', function () {
        var props = _extends({}, defaultProps);
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FileUploader.FileUploader, props));
        wrapper.find(_FileUploader.StyledDropzone).prop('onDrop')([], [{
            file: 'wrong.png'
        }]);

        expect(wrapper.find('.errorWrapper p').text()).toContain('Seuls les fichiers PDF sont autorisés.');
    });

    it('should display loader when uploading', function () {
        var onUpload = function onUpload(file, setProgress) {
            setProgress({ total: 100, loaded: 48 });
            return Promise.resolve('uploaded.pdf');
        };

        var props = _extends({}, defaultProps, { onUpload: onUpload });
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FileUploader.FileUploader, props));

        wrapper.find(_FileUploader.StyledDropzone).prop('onDrop')([{ file: 'data.csv' }], []);
        expect(wrapper.find(_Loader.Loader)).toHaveLength(1);
    });

    it('should display success message if upload is done', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var onUpload, props, wrapper;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        onUpload = function onUpload(file, setProgress) {
                            setProgress(100);
                            return Promise.resolve('uploaded.pdf');
                        };

                        props = _extends({}, defaultProps, { onUpload: onUpload });
                        wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FileUploader.FileUploader, props));
                        _context.next = 5;
                        return wrapper.find(_FileUploader.StyledDropzone).prop('onDrop')([{ file: 'data.pdf' }], []);

                    case 5:
                        expect(wrapper.find(_icons.SuccessIcon)).toHaveLength(1);
                        expect(wrapper.find('.uploadedWrapper p').text()).toContain('Fichier téléchargé avec succès !');

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    })));

    it('should call `onChange` handler with remote file path once uploaded', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var onUpload, onChange, props, wrapper;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        onUpload = function onUpload() {
                            return Promise.resolve('uploaded.pdf');
                        };

                        onChange = jest.fn();
                        props = _extends({}, defaultProps, {
                            onUpload: onUpload,
                            onChange: onChange
                        });
                        wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FileUploader.FileUploader, props));
                        _context2.next = 6;
                        return wrapper.find(_FileUploader.StyledDropzone).prop('onDrop')([{ file: 'data.pdf' }], []);

                    case 6:
                        return _context2.abrupt('return', Promise.resolve().then(function () {
                            expect(onChange).toHaveBeenCalledWith('uploaded.pdf');
                        }));

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    })));
});