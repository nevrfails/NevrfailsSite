import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {Provider, Consumer} from './context/context';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider>
    <Consumer>
    {({ panelOpen, projects, openPanelToggle, closePanelToggle, detailsPanelVisible, projectSelected }) => <App panelOpen = {panelOpen} projects = { projects } openPanelToggle = { openPanelToggle } closePanelToggle = {closePanelToggle} detailsPanelVisible = { detailsPanelVisible } projectSelected = { projectSelected }/>}
    </Consumer>
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
