import React from 'react';
import { ProjectCard } from './ProjectCard';
import musicviz from '../img/musicviz-placeholder.png';
import proxy from '../img/proxy-server.webp';

export class Projects extends React.Component {
    render() {
        return (
            <div>
                <h1>My Projects</h1>
                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                    <ProjectCard image={musicviz} link="https://github.com/info340a-w20/music-viz" title="Music Visualizer" text="Utilize Deezer free music APIs to pull song samples and save them in a Firebase database.
                        Use javascript to analyze sound file and calculate where to draw shapes in a canvas."></ProjectCard>
                    <ProjectCard image={proxy} link="https://github.com/alwong34/PythonWebProxy" title="Python Web Proxy" text="Leverage the Python sockets API to build an HTTP proxy based on the HTTP/1.0 protocol."></ProjectCard>
                </div>
            </div>
        )
    }
}