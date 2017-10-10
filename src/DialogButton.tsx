import * as React from 'react';
import Dialog from './Dialog';

interface IState {
  isShow: boolean;
}

export default class DiaglogButton extends React.Component<{}, IState> {
  state: IState;

  constructor() {
    super();
    this.state = { isShow: false };
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog() {
    this.setState({ isShow: true });
  }

  closeDialog() {
    this.setState({ isShow: false });
  }

  render() {
    return [
      <button key="dialog-button" onClick={() => this.openDialog()}>Opne</button>,
      <Dialog key="dialog" isShow={this.state.isShow} closeDialog={this.closeDialog} />,
    ];
  }
}
