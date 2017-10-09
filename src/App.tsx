import * as React from 'react';
import * as ReactDom from 'react-dom';
import Dialog from './Dialog';

interface IState {
  isShow: boolean;
}

export default class App extends React.Component<{}, IState> {
  state: IState;
  private dialog: HTMLElement;

  constructor() {
    super();
    this.state = { isShow: false };
    this.dialog = document.getElementById('dialog') as HTMLElement;
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog() {
    this.setState({ isShow: true });
  }

  closeDialog() {
    this.setState({ isShow: false });
  }
  
  renderDialog() {
    return ReactDom.createPortal(
      <Dialog closeDialog={this.closeDialog} />,
      this.dialog,
    );
  }

  render() {
    return(
      <div>
        <button onClick={() => this.openDialog()}>Open</button>
        { this.state.isShow ? this.renderDialog() : null }
      </div>
    );
  }
}
