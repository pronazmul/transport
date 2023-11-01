import React, { Component } from 'react';

import { Crisp } from 'crisp-sdk-web';

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure('5cb0f7d5-3c6e-4e08-b40d-48f5a4b0859a');
  }

  render() {
    return null;
  }
}
export default CrispChat;
