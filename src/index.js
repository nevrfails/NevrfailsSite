import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {Provider, Consumer} from './context/context';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider>
    <Consumer>
    {({ panelOpen, projects, openPanelToggle, closePanelToggle, detailsPanel, detailsPanelOpen, detailsPanelClose, projectSelected }) => <App panelOpen = {panelOpen} projects = { projects } openPanelToggle = { openPanelToggle } closePanelToggle = {closePanelToggle} detailsPanel ={detailsPanel} detailsPanelOpen = { detailsPanelOpen } detailsPanelClose = { detailsPanelClose } projectSelected = { projectSelected }/>}
    </Consumer>
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
