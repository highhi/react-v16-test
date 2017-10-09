import * as React from 'react';

interface IProps {
  closeDialog: () => void;
}

//TODO: 戻り値が配列の場合の正しい型情報
const Dialog = ({ closeDialog }: IProps): JSX.Element[] => {
  return [
    <div key="overlay" className="overlay" onClick={() => closeDialog()}></div>,
    <div key="dialog" className="dialog">
      <p>Dialog</p>
    </div>
  ];
};

export default Dialog;
