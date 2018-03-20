import React from 'react';


import Headshot from '../../assets/headshot@2x.png';
import './AboutMe.css';
import SocialMedia from './SocialMedia';

class AboutMe extends React.Component{
    render(){
        return (
            <div className='pure-g about-me'>
             <div className='pure-u-1'>
                <img src={Headshot} alt='Herston R. Fails'/>
                <hgroup>
                    <h2>Herston R. Fails</h2>
                    <h3>Creative Problem Solver</h3>
                </hgroup>
                <p>I believe that the best user experiences can be understood and embraced by anyone whether they are 7 or 77 years old. I was elated to hear of your opening for a Front End/UI Developer. I am excited to share with you how my experience and passion for functional design can add value to your team.</p>
                <p>My background includes a wide array of skills ranging from Brand Design and Development to User Interface design that have helped clients successfully achieve their goals. I have over 10 years of experience in design and over 5 years of experience in web design and development. Some of my most recent work includes the creation of a new web experience for my personal site and creating an Augmented Reality experience for client recognition at Blue Rivet. I’ve designed a wide array complete user experiences and user interfaces ranging from an application prototype, subreach, for a NIC Inc. Innovation project to the Oakwood sponsored event ‘brainstorm:KC’, signage and website. These efforts increased overall brand awareness for all initiatives.</p>
                <p>I have gained a wealth of practical experience with customers across a wide range of technologies. While working at Best Buy, I had an opportunity to educate individuals on how to use an assortment of products, from home theater equipment and televisions, to appliances and beyond. While working retail for Apple, I helped many individuals select products and accessories that best aligned with their needs. I also provided guided instruction to help new users understand their electronics, software, and online services. Before my departure from Apple, I was also responsible for leading new hire training sessions, guiding employees on the delivery of exceptional customer experience.</p>
                <p>In addition to my corporate experience, I am President of 100 Black Men of Greater Kansas City, a chapter of a national non-profit organization specializing in enhancing educational and economic opportunities through mentoring and community service. As a 9-year member, I have worked to create brand consistency and redesigned our chapter’s website to enhance the organization’s digital presence. Along with guiding business responsibilities, as the organization’s leader, I have worked with other chapter members to brand the mentoring program’s curriculum to secure funding and enrich our mentoring experience.</p>
                <p>My branding and UI/UX experience, I also offer strong computer proficiencies in Adobe Creative Suite and Sketch. I am excited to learn more about this opportunity and look forward to a conversation about how my skills can have an immediate impact in the Front End/UI Developer position.</p>
             <SocialMedia />
             </div>
            </div>
        );
    }
}

export default AboutMe;