var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Canvas, Container, Wrapper } from './styles';
export var Modal = function (props) {
    var width = props.width, height = props.height, element = props.element, setModal = props.setModal;
    var closeModal = function () {
        setModal === null || setModal === void 0 ? void 0 : setModal(false);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Container, __assign({ width: width, height: height }, { children: [_jsx("div", { onClick: closeModal }), _jsx(Wrapper, { children: element })] })), _jsx(Canvas, { onClick: closeModal })] }));
};
export default Modal;
