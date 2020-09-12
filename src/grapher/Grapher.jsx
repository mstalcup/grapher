import React from 'react';
import './grapher.css';
import {calculateCoordinates} from '../grapher/grapher.js';

export class Grapher extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.transform(1, 0, 0, -1, 0, canvas.height);
    }

    graph() {
        calculateCoordinates();
    }

    render() {
        return (
            <div className="container">
                <div>
                    this is a test.
                </div>
                <div>
                    y = 
                    <input id="expression"></input>
                </div>
                <button onClick={() => this.graph()}>
                    Calculate..
                </button>
                <button onClick={() => this.loadImage()}>
                    Image stuff
                </button>
                <div>
		            <canvas id="canvas"></canvas>
                </div>
            </div>
        );
    }
}

export default Grapher;