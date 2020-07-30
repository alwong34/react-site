import React from 'react';
import MediaQuery from 'react-responsive';

export class About extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery minDeviceWidth={1024}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{display: "flex", width: "50%", flexDirection: "column", background: "#a3f7bf"}}>
                            <h1>About Me</h1>
                            <p style={{textAlign: "left", paddingLeft: "8rem", paddingRight: "8rem", paddingBottom: "4rem"}}>I am a software developer with a Bachelors of Science from the University of Washington Seattle's Informatics department. My skillsets vary from 
                                front-end languages like HTML, CSS, and JavaScript to server-side technologies like Python, Docker, SQL, and many others in between. As a full-stack developer
                                I like to be able to connect all the parts of a project and understand the inner workings and iteractions of each stage of technology. Cybersecurity has been an interest
                                of mine since my start in college and I want to explore more about preventing vulnerabilities and delivering the highest quality code.</p>
                        </div>
                        <div style={{display: "flex", width: "50%", flexDirection: "column", background: "#393e46", color: "white"}}>
                            <p>TODO</p>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1023}>
                <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{display: "flex", flexDirection: "column", background: "#a3f7bf", padding: "3rem"}}>
                            <h2>About Me</h2>
                            <p style={{textAlign: "left"}}>I am a software developer with a Bachelors of Science from the University of Washington Seattle's Informatics department. My skillsets vary from 
                                front-end languages like HTML, CSS, and JavaScript to server-side technologies like Python, Docker, SQL, and many others in between. </p>
                        </div>
                        <div style={{display: "flex", width: "50%", flexDirection: "column", background: "#393e46", color: "white"}}>
                            <p>TODO</p>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}