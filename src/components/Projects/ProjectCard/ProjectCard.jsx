import React , {Fragment} from 'react';
import './ProjectCard.css';

export default props => (
    <Fragment key = {props.key}>
    <button key = {props.key} onClick={props.detailsPanelOpenClickHandler}>
        <div className = "project-card" >
            <div className = "project-card_inner" style = {{backgroundImage: `url(${props.projectfeatureimage})`, backgroundSize: 'cover'}}>
            <div className="overlay"></div>
                <hgroup >
                <h2> {props.projecttitle}</h2> 
                <h5> {props.projecttype}</h5> 
                </hgroup> 
            </div> 
        </div> 
        </button>
    </Fragment>
)
