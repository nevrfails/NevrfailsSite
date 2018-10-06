import React, {Component} from 'react';
import {database} from '../config/firebase';

const Context = React.createContext();

export class Provider extends Component {
constructor(props){
  super(props)
 
  this.database = database;

  this.database.on('child_added', snap => {
    

  });

  this.state = {
    projects: [
      {
        id: 1,
        projectTitle: "Test 1",
        projectType: "branding",
        projectFeatureImage: "https://placeimg.com/1200/1000/arch"
      },
      {
        id: 2,
        projectTitle: "Test 2",
        projectType: "design",
        projectFeatureImage: "https://placeimg.com/1200/1000/arch"
      },
      {
        id: 3,
        projectTitle: "Test 3",
        projectType: "web",
        projectFeatureImage: "https://placeimg.com/1200/1000/arch"
      }
    ],
    panelOpen: false
  }
}

openPanelToggle = () => {
  console.log("I've been clicked")
  this.setState((prevState)=>{
      return {panelOpen: !prevState.panelOpen}
          
  });
};

render() {
  return (
    <Context.Provider value={{
      ...this.state,
      openPanelToggle: this.openPanelToggle
    }}>
      {this.props.children}
    </Context.Provider>
    )
  };
}
export const Consumer = Context.Consumer;