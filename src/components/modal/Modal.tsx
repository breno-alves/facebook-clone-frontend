import React from 'react';
import BlackScreen from '../blackScreen/BlackScreen';
import { Wrapper, Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  handler(state: boolean): void;
  children: React.ReactNode;
}

const Modal = function Modal({
  isOpen,
  handler,
  children,
}: ModalProps): React.ReactElement | null {
  return isOpen ? (
    <>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
      <BlackScreen closeHandler={() => handler(false)} />
    </>
  ) : null;
};

export default Modal;
