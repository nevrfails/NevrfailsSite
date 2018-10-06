import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {Provider, Consumer} from './context/context';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider>
    <Consumer>
    {({ projects, openPanelToggle }) => <App projects = { projects } openPanelToggle = { openPanelToggle } />}
    </Consumer>
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
