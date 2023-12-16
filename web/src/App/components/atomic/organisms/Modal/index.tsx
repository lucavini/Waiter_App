import React from 'react';
import Button from '@Atoms/Buttom';
import ReactPortal from '~Shared/Utils/ReactPortal';
import Title from '@Components/atomic/atoms/Title';
import { Overlay, Container, Footer } from './styles';

type ButtonProps = {
  label?: string;
  onClick: () => void;
  variation?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'smallPrimary'
    | 'smallSecondary';
  danger?: boolean;
};

type Props = {
  title?: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  danger?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  cancelButtonProps?: ButtonProps;
  confirmButtonProps?: ButtonProps;
};

function Modal({
  title,
  children,
  visible,
  setVisible,
  cancelButtonProps,
  confirmButtonProps,
  isLoading = false,
}: Props) {
  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay onClick={() => setVisible(false)}>
        <Container onClick={e => e.stopPropagation()}>
          <Title>{title}</Title>

          <div className="modal-body">{children}</div>

          <Footer>
            <div>
              {cancelButtonProps && (
                <Button
                  variation="tertiary"
                  disabled={isLoading}
                  danger
                  {...cancelButtonProps}
                >
                  {cancelButtonProps?.label ?? 'Cancelar'}
                </Button>
              )}
            </div>

            <div>
              {confirmButtonProps && (
                <Button disabled={isLoading} {...confirmButtonProps}>
                  {confirmButtonProps?.label ?? 'Confirmar'}
                </Button>
              )}
            </div>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

export default Modal;
