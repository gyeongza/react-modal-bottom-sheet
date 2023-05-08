import { Dispatch, SetStateAction } from 'react';
import { Canvas, Container, Wrapper } from './styles';

interface ModalProps {
  width?: string;
  height?: string;
  element: JSX.Element;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>> | null;
}

export const Modal = (props: ModalProps) => {
  const { width, height, element, setModal } = props;

  const closeModal = () => {
    setModal?.(false);
  };

  return (
    <>
      <Container width={width} height={height}>
        <div onClick={closeModal}></div>
        <Wrapper>{element}</Wrapper>
      </Container>
      <Canvas onClick={closeModal} />
    </>
  );
};

export default Modal;
