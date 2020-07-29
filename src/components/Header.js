import React from 'react';
import protrait from '../img/portrait.jpg'
import ReactTypingEffect from 'react-typing-effect';
import ParticlesBg from 'particles-bg'

class Background extends React.Component {
    render () {
        return (
            <ParticlesBg className="web" color="#a3f7bf" num={75} type="cobweb" />
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
        eraseDelay="9999999"
        />
    );
};

export class Header extends React.Component {
    render() {
        return (
            <div className="header-section">
                <div style={{position: "relative", zIndex: "1"}}>
                    <img src={protrait} alt="portrait of Alex Wong" style={{borderRadius: '50%'}}></img>
                    <br></br>
                    <ReactTypingName />
                </div>
                <Background />
            </div>
        )
    }
}