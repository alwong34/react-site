import React from 'react';
import { ProjectCard } from './ProjectCard';
import musicviz from '../img/musicviz-placeholder.png';

export class Projects extends React.Component {
    render() {
        return (
            <div>
                <h1>What I've Done</h1>
                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                    <ProjectCard image={musicviz} title="Music Visualizer" text="Utilize Deezer free music APIs to pull song samples and save them in a Firebase database.
                        Use javascript to analyze sound file and calculate where to draw shapes in a canvas."></ProjectCard>
                </div>
            </div>
        )
    }
}