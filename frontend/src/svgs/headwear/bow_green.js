import { h, Fragment } from 'preact';
import { PureComponent } from 'preact/compat';


const willRenderFront = (orientation) => {
    if(orientation != 'back'){
        return true;
    }
    return false;
}


const willRenderBack = (orientation) => {
    if(orientation === 'back'){
        return true;
    }
    return false;
}


/** @jsx h */
/** @jsxFrag Fragment */

class Headwear extends PureComponent{
    constructor(props){
        super(props);
        this.ref = props.forwardRef
        this.state = {
            style: props.style,
            id: props.id
        }
    }

    render(){
        return (
            <g ref={ this.ref }>
                <g style={ this.state.style }>
                    <linearGradient id={`moji-${ this.state.id }-headwear-color`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgb(0,200,0);stop-opacity:1" />
                        <stop offset="50%" style="stop-color:rgb(0,240,0);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgb(0,200,0);stop-opacity:1" />
                    </linearGradient>
                    <filter id={`shadow-headwear-blur-${ this.state.id }`} height="300%" width="300%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                    </filter>
                    <g id={`moji-${ this.state.id }-headwear`}>
                        <path id={ `moji-headwear-${ this.state.id }-shadow` } fill="rgba(0,0,0,.15)" filter={ `url(#shadow-headwear-blur-${ this.state.id })` } d="m 228,182.0 c -6,-11.3 -25,-25.9 -34.7,-25.9 -7.3,0 -14.5,19.3 -14.5,40.6 0,21.2 6.3,40.6 14.2,40.6 9.2,0 32.2,-22.5 32.2,-22.5 13.7,3.5 18.3,4.6 31,0.9 2.1,2.9 21.9,21.6 32.2,21.6 7.8,0 14.2,-19.3 14.2,-40.6 0,-21.2 -7.1,-40.6 -14.5,-40.6 h 4e-5 c -10,0 -28.8,15.3 -34.9,26.6 -7.8,-3.2 -15.6,-3.2 -25.3,-0.7 z" />
                        <path fill="#008080" style="stroke: #000;stroke-width:.2;" d="m 229,176.6 c -5.7,-11.3 -23.5,-33.9 -32.7,-33.9 -6.9,0 -13.6,19.3 -13.6,40.6 0,21.2 6,40.6 13.4,40.6 8.7,0 30.3,-14.4 30.3,-14.4 12.9,3.5 17.3,4.6 29.2,0.9 1.9,2.9 21.7,16.3 31.4,16.3 7.4,0 13.4,-19.3 13.4,-40.6 0,-21.2 -6.7,-40.6 -13.6,-40.6 -11.9,3.4 -28.6,21.6 -34.0,31.8 -7.3,-3.2 -14.7,-3.2 -23.9,-0.7 z" />
                        <path fill={ `url(#moji-${ this.state.id }-headwear-color)` } d="m 232.6,180.4 c 0,0 2,-1.1 5,-1.7 5.3,-1 9.9,-1.3 12,2.1 2.4,4.3 4.6,13.5 4.1,21.6 -0.2,4.2 -1.1,5.6 -1.1,5.6 0,0 -3.8,2.4 -11.9,1.7 -8.7,-0.7 -10.1,-3.8 -10.1,-3.8 0,0 1.1,-2.8 2,-10.7 0.8,-7.9 0,-14.8 0,-14.8 z m -3.1,16.2 c 0.1,-1.1 0.3,-2.4 0.4,-3.8 0,-0.8 0.1,-1.7 0.1,-2.5 -7.1,-2.4 -13.5,-4.8 -21.6,-6.8 7.6,-0.0 13.9,0.4 21.7,4.3 0.1,-4 -0.6,-8.2 -0.6,-8.2 -5.5,-10.1 -23.1,-31.8 -32.0,-31.8 -6.7,0 -13.2,17.3 -13.2,36.4 0,19.1 5.8,36.4 13,36.4 8.4,0 29.3,-13.7 29.3,-13.7 0,0 1.4,-2.1 2.5,-7.5 -4.7,1.3 -16.1,2.1 -16.1,2.1 5.7,-1.4 10.8,-2.8 16.5,-4.7 z m 56.0,-46.2 c -9.2,0 -27.2,18.9 -32.7,29.1 l -0.1,0.3 0.4,0.8 c 0.8,1.5 1.6,3.6 2.3,6 2,-0.7 5.9,-2 9.5,-3.3 5,-1.7 8.8,-2.4 8.8,-2.4 0,0 -13.4,6 -17.6,8.6 0.5,2.5 0.9,5.3 1,8.1 5.9,2.3 11.3,3.4 17.7,5.4 0,0 -13.7,-1.3 -17.7,-3.1 0.0,0.6 0.0,1.4 0,2.1 -0.2,4.2 -0.4,5.0 -0.4,5.1 1.9,2.6 19.6,15.6 29.1,15.6 7.2,0 13,-17.3 13,-36.4 -1.1,-9.5 -4.5,-35.7 -13.2,-36.1 z" />
                    </g>
                </g>
            </g>
        )
    }
}

export {
    Headwear, willRenderFront, willRenderBack
};
