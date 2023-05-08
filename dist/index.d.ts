import { Dispatch, SetStateAction } from 'react';
interface ModalProps {
    width?: string;
    height?: string;
    element: JSX.Element;
    modal: boolean;
    setModal: Dispatch<SetStateAction<boolean>> | null;
}
export declare const Modal: (props: ModalProps) => JSX.Element;
export default Modal;
