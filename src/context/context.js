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
        projectTitle: "Test 1",
        projectType: "branding",
        projectFeatureImage: "https://placeimg.com/1200/1000/arch",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, diam molestie volutpat faucibus, ex sem porttitor odio, eget tincidunt ligula nulla non lacus. Integer suscipit ante at ipsum dignissim ultrices. Etiam tincidunt ipsum et pharetra lobortis. Etiam finibus venenatis eros, in ornare tortor volutpat porttitor. Vestibulum scelerisque mauris sapien. Nulla consequat condimentum ligula. Vivamus eget ante et elit auctor scelerisque et vel nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, ex vel consequat mollis, mi turpis aliquam risus, non rutrum diam arcu sit amet massa.",
        projectDetailImages:
          {
            image1:"http://lorempixel.com/600/350/sports/1",
            image2:"http://lorempixel.com/600/350/sports/1" 
          },
        projectToolsUsed:"Adobe Photoshop, Adobe Illustrator, Sketch, Angular 6"
      },
      {
        projectTitle: "Test 2",
        projectType: "design",
        projectFeatureImage: "https://placeimg.com/1200/1000/arch",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, diam molestie volutpat faucibus, ex sem porttitor odio, eget tincidunt ligula nulla non lacus. Integer suscipit ante at ipsum dignissim ultrices. Etiam tincidunt ipsum et pharetra lobortis. Etiam finibus venenatis eros, in ornare tortor volutpat porttitor. Vestibulum scelerisque mauris sapien. Nulla consequat condimentum ligula. Vivamus eget ante et elit auctor scelerisque et vel nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, ex vel consequat mollis, mi turpis aliquam risus, non rutrum diam arcu sit amet massa.",
        projectDetailImages:
          {
            image1:"http://lorempixel.com/600/350/sports/1",
            image2:"http://lorempixel.com/600/350/sports/1" 
          },
        projectToolsUsed:"Adobe Photoshop, Adobe Illustrator, Sketch, Angular 6"
      },
      {
        projectTitle: "Test 3",
        projectType: "web",
        projectFeatureImage: "https://placeimg.com/1200/1000/arch",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, diam molestie volutpat faucibus, ex sem porttitor odio, eget tincidunt ligula nulla non lacus. Integer suscipit ante at ipsum dignissim ultrices. Etiam tincidunt ipsum et pharetra lobortis. Etiam finibus venenatis eros, in ornare tortor volutpat porttitor. Vestibulum scelerisque mauris sapien. Nulla consequat condimentum ligula. Vivamus eget ante et elit auctor scelerisque et vel nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, ex vel consequat mollis, mi turpis aliquam risus, non rutrum diam arcu sit amet massa.",
        projectDetailImages:
          {
            image1:"http://lorempixel.com/600/350/sports/1",
            image2:"http://lorempixel.com/600/350/sports/1" 
          },
        projectToolsUsed:"Adobe Photoshop, Adobe Illustrator, Sketch, Angular 6"
      }
    ],
    panelOpen: false,
    detailsPanel: false,
    selectedProject : ''
  }
}

// Panel Controls
openPanelToggle = () => {
  this.setState((prevState)=>{
      return {panelOpen: !prevState.panelOpen}
          
  });
};
closePanelToggle = () => {
  this.setState({panelOpen: false})
}
detailsPanelVisible = ()=>{
  this.setState({detailsPanel: false})
}
projectSelected = (e) =>{
  console.log(e);
}

render() {
  return (
    <Context.Provider value={{
      ...this.state,
      openPanelToggle: this.openPanelToggle,
      closePanelToggle: this.closePanelToggle,
      detailsPanelVisible: this.detailsPanelVisible,
      projectSelected: this.projectSelected
    }}>
      {this.props.children}
    </Context.Provider>
    )
  };
}
export const Consumer = Context.Consumer;