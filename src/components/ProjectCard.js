import React from 'react';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{width: "40%"}}>
                <CardMedia image={this.props.image} style={{width: "50rem", height: "25rem"}}/>
                <CardContent>
                    <Typography>
                        <strong>{this.props.title}</strong>
                    </Typography>
                    <Typography style={{textAlign: "left"}}>
                        {this.props.text}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}