import React, { FC, Fragment, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import s from './Modal.module.css';

const Backdrop: FC<Omit<Props, 'children'>> = props => {
  return <div className={s.backdrop} onClick={props.onClick} />;
};

const ModalOverlay: FC<Props> = props => {
  return (
    <div className={s.modal}>
      <div className={s.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays-root')!;

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const Modal: FC<Props> = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
