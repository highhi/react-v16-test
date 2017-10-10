import * as React from 'react';
import * as ReactDom from 'react-dom';

interface IProps {
  isShow: boolean;
  closeDialog(): void;
}

const root = document.getElementById('dialog');

const Dialog: React.SFC<IProps> = ({ isShow, closeDialog }: IProps): JSX.Element | null => {
  if (!isShow) return null;

  const component = [
    <div key="overlay" className="overlay" onClick={() => closeDialog()}></div>,
    <div key="dialog" className="dialog">
      <p>Dialog</p>
    </div>,
  ];

  return ReactDom.createPortal(component, root);
};

export default Dialog;
