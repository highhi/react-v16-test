import * as React from 'react';

interface IProps {
  closeDialog: () => void;
}

const Dialog = ({ closeDialog }: IProps): React.ReactFragment => {
  return [
    <div key="overlay" className="overlay" onClick={() => closeDialog()}></div>,
    <div key="dialog" className="dialog">
      <p>Dialog</p>
    </div>,
  ];
};

export default (Dialog as React.SFC<IProps>);
