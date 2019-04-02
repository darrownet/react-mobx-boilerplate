import React, { Component } from 'react';
import PropTypes from "prop-types";

import { observer, Provider } from 'mobx-react';
import { appStore } from '../core/stores/app.store.js';

@observer
class App extends Component {

  static propTypes = {};

  constructor(props) {
    super(props);
    this.stores = {
      app: appStore
    }
  }

  componentDidMount () {
    this.stores.app.updateDummyVal('Hello World!');
  }

  render() {
    return (
      <Provider stores={this.stores}>
        <p>{this.stores.app.dummyVal}</p>
      </Provider>
    );
  }
}

export default App;
