'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FileUploader = exports.STATE_SUCCESS = exports.STATE_UPLOADING = exports.STATE_ERROR = exports.STATE_INITIAL = exports.StyledDropzone = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: ', ';\n    border: ', ';\n    transition: all 0.125s ease-in-out;\n    &:hover {\n        cursor: pointer;\n        background-color: ', ';\n        border-color: ', ';\n    }\n    padding: 3rem 2rem;\n    max-width: 500px;\n    & p {\n        color: ', ';\n    }\n\n    &:hover .uploadWrapper {\n        opacity: 1;\n    }\n\n    &.erred {\n        background: ', ';\n        border: ', ';\n    }\n\n    &.droppable {\n        border: ', ';\n        & .uploadWrapper {\n            opacity: 1;\n        }\n    }\n\n    .uploadable {\n        cursor: pointer;\n        &:hover {\n            border: ', ';\n        }\n    }\n\n    .label {\n        margin-bottom: \'0.25rem\';\n    }\n\n    .uploading: {\n        cursor: progress;\n        &:hover {\n            border: 0;\n        }\n    }\n\n    .wrapper {\n        text-align: center;\n        width: 100%;\n\n        > * {\n            height: 69px;\n        }\n\n        .step-label {\n            height: 24px;\n        }\n    }\n\n    .fileWrapper: {\n        width: 100%;\n        padding: 2rem;\n    }\n\n    .uploadWrapper: {\n        transition: opacity 0.125s ease-in-out;\n        opacity: 0.5;\n    }\n\n    .errorIcon {\n        color: ', ';\n        font-size: 5rem;\n    }\n\n    .icon: {\n        font-size: \'5rem\',\n        color: ', ';\n    }\n\n    .uploadedIcon: {\n        font-size: 5rem;\n        color: ', ';\n    }\n\n    .loader {\n        margin-top: 1rem;\n    }\n'], ['\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: ', ';\n    border: ', ';\n    transition: all 0.125s ease-in-out;\n    &:hover {\n        cursor: pointer;\n        background-color: ', ';\n        border-color: ', ';\n    }\n    padding: 3rem 2rem;\n    max-width: 500px;\n    & p {\n        color: ', ';\n    }\n\n    &:hover .uploadWrapper {\n        opacity: 1;\n    }\n\n    &.erred {\n        background: ', ';\n        border: ', ';\n    }\n\n    &.droppable {\n        border: ', ';\n        & .uploadWrapper {\n            opacity: 1;\n        }\n    }\n\n    .uploadable {\n        cursor: pointer;\n        &:hover {\n            border: ', ';\n        }\n    }\n\n    .label {\n        margin-bottom: \'0.25rem\';\n    }\n\n    .uploading: {\n        cursor: progress;\n        &:hover {\n            border: 0;\n        }\n    }\n\n    .wrapper {\n        text-align: center;\n        width: 100%;\n\n        > * {\n            height: 69px;\n        }\n\n        .step-label {\n            height: 24px;\n        }\n    }\n\n    .fileWrapper: {\n        width: 100%;\n        padding: 2rem;\n    }\n\n    .uploadWrapper: {\n        transition: opacity 0.125s ease-in-out;\n        opacity: 0.5;\n    }\n\n    .errorIcon {\n        color: ', ';\n        font-size: 5rem;\n    }\n\n    .icon: {\n        font-size: \'5rem\',\n        color: ', ';\n    }\n\n    .uploadedIcon: {\n        font-size: 5rem;\n        color: ', ';\n    }\n\n    .loader {\n        margin-top: 1rem;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Loader = require('../Loader');

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDropzone = exports.StyledDropzone = (0, _styledComponents2.default)(_reactDropzone2.default)(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.colors.white;
}, function (_ref2) {
    var theme = _ref2.theme;
    return '2px solid ' + theme.colors.lightBlue;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.lightGrey;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.blue;
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.colors.grey;
}, function (_ref6) {
    var theme = _ref6.theme;
    return theme.colors.lightRed;
}, function (_ref7) {
    var theme = _ref7.theme;
    return '2px solid ' + theme.colors.red;
}, function (_ref8) {
    var theme = _ref8.theme;
    return '2px solid ' + theme.colors.red;
}, function (_ref9) {
    var theme = _ref9.theme;
    return '2px solid ' + theme.colors.lightBlue;
}, function (_ref10) {
    var theme = _ref10.theme;
    return theme.colors.redLight;
}, function (_ref11) {
    var theme = _ref11.theme;
    return theme.colors.grayLight;
}, function (_ref12) {
    var theme = _ref12.theme;
    return theme.colors.green;
});

var STATE_INITIAL = exports.STATE_INITIAL = 'initial';
var STATE_ERROR = exports.STATE_ERROR = 'error';
var STATE_UPLOADING = exports.STATE_UPLOADING = 'uploading';
var STATE_SUCCESS = exports.STATE_SUCCESS = 'success';

var FileUploader = exports.FileUploader = function (_React$Component) {
    _inherits(FileUploader, _React$Component);

    function FileUploader() {
        var _ref13;

        var _temp, _this, _ret;

        _classCallCheck(this, FileUploader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref13 = FileUploader.__proto__ || Object.getPrototypeOf(FileUploader)).call.apply(_ref13, [this].concat(args))), _this), _this.state = {
            error: null,
            uploadState: STATE_INITIAL,
            progress: 0
        }, _this.handleUploadProgress = function (progressEvent) {
            var progress = Math.round(progressEvent.loaded * 100 / progressEvent.total);

            if (progress >= 100) {
                _this.setState({
                    progress: 100,
                    uploadState: STATE_SUCCESS
                });
            } else {
                _this.setState({ progress: progress });
            }
        }, _this.handleUpload = function (files, rejectedFiles) {
            if (rejectedFiles && rejectedFiles.length !== 0) {
                if (rejectedFiles[0].size > _this.props.maxSize) {
                    return _this.setState({
                        uploadState: STATE_ERROR,
                        error: 'Fichier trop lourd (maximum ' + _this.props.maxSize / 1000000 + ' Mo)'
                    });
                }

                return _this.setState({
                    uploadState: STATE_ERROR,
                    error: 'Seuls les fichiers PDF sont autorisés.'
                });
            }

            var data = new FormData();
            data.append('pdf', files[0]);

            _this.setState({
                uploadState: STATE_UPLOADING,
                fileName: files[0].name,
                error: null
            });

            return _this.props.onUpload(data, _this.handleUploadProgress).then(function (fileName) {
                _this.setState({ uploadState: STATE_SUCCESS });
                _this.props.onChange(fileName);

                return fileName;
            }).catch(function (err) {
                return new Promise(function (resolve) {
                    var message = "Une erreur s'est produite lors de l'envoi.";

                    if (err.response) {
                        return err.response.json().then(function (_ref14) {
                            var error = _ref14.error;
                            return resolve(error);
                        });
                    }

                    return resolve(message);
                }).then(function (message) {
                    _this.setState({
                        error: message,
                        uploadState: STATE_ERROR
                    });
                });
            });
        }, _this.renderContent = function () {
            var _this$state = _this.state,
                error = _this$state.error,
                fileName = _this$state.fileName;
            var placeholder = _this.props.placeholder;


            switch (_this.state.uploadState) {
                case STATE_SUCCESS:
                    return _react2.default.createElement(
                        'div',
                        { className: 'wrapper uploadedWrapper' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_icons.SuccessIcon, { width: 48, height: 48 })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'step-label' },
                            'Fichier t\xE9l\xE9charg\xE9 avec succ\xE8s !'
                        )
                    );

                case STATE_ERROR:
                    return _react2.default.createElement(
                        'div',
                        { className: 'wrapper errorWrapper' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_icons.WarningIcon, { width: 64, height: 64 })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'step-label' },
                            error
                        )
                    );

                case STATE_UPLOADING:
                    return _react2.default.createElement(
                        'div',
                        { className: 'wrapper fileWrapper' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_Loader.Loader, { size: 48 })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'step-label' },
                            fileName
                        )
                    );
            }

            return _react2.default.createElement(
                'div',
                { className: 'wrapper uploadWrapper' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_icons.UploadingIcon, { width: 64, height: 64 })
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'step-label' },
                    placeholder
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FileUploader, [{
        key: 'render',
        value: function render() {
            var uploadState = this.state.uploadState;

            var _props = this.props,
                onUpload = _props.onUpload,
                otherProps = _objectWithoutProperties(_props, ['onUpload']);

            return _react2.default.createElement(
                StyledDropzone,
                _extends({
                    className: (0, _classnames2.default)({
                        dropzone: true,
                        uploading: uploadState === STATE_UPLOADING,
                        erred: uploadState === STATE_ERROR
                    }),
                    disablePreview: true,
                    activeClassName: 'droppable',
                    onDrop: this.handleUpload
                }, otherProps),
                this.renderContent()
            );
        }
    }]);

    return FileUploader;
}(_react2.default.Component);

FileUploader.propTypes = {
    onUpload: _propTypes2.default.func.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    placeholder: _propTypes2.default.string,
    maxSize: _propTypes2.default.number
};
FileUploader.defaultProps = {
    maxSize: 1e6
};