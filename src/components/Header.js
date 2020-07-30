import React from 'react';
import protrait from '../img/Cocos_portrait.jpg'
import ReactTypingEffect from 'react-typing-effect';
import ParticlesBg from 'particles-bg';
import MediaQuery from 'react-responsive';

class Background extends React.Component {
    render () {
        return (
            <div>
                <MediaQuery minDeviceWidth={1024}>
                    <ParticlesBg className="web" color="#a3f7bf" num={75} type="cobweb" />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1023}>
                    <ParticlesBg className="web" color="#a3f7bf" num={25} type="cobweb" />
                </MediaQuery>
            </div>    
        )
    }
}

const ReactTypingName = () => {
    return (
        <ReactTypingEffect
        text="Alex Wong"
        cursor="_"
        typingDelay="1000"
        speed="200"
        eraseDelay="10000"
        />
    );
};

export class Header extends React.Component {
    render() {
        return (
            <div className="header-section">
                <div style={{position: "relative", zIndex: "1"}}>
                    <img src={protrait} alt="portrait of Alex Wong" style={{borderRadius: '50%', width: '250px'}}></img>
                    <br></br>
                    <ReactTypingName />
                </div>
                <Background />
            </div>
        )
    }
}