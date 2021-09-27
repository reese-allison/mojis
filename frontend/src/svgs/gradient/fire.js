import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Fire(props){
    return (
        <radialGradient id={`moji-${ props.id }-body-color`} fx="40%" fy="0%" fr="20%" cx="40%" cy="30%">
            <stop offset="0" stop-color="rgb(255,230,0)" stop-opacity=".99" fx="0%" fy="0%">
                <animate attributeName="stop-color" values="rgb(255,230,0);rgb(255,170,0);rgb(255,110,0);rgb(255,170,0);rgb(255,230,0);" dur="5s" repeatCount="indefinite"/>
            </stop>
            <stop offset=".5" stop-color="rgb(255,170,0)" stop-opacity=".99">
                <animate attributeName="stop-color" values="rgb(255,170,0);rgb(255,110,0);rgb(255,170,0);rgb(255,230,0);rgb(255,170,0);" dur="5s" repeatCount="indefinite"/>
            </stop>
            <stop offset="1" stop-color="rgb(255,110,0)" stop-opacity=".99">
                <animate attributeName="stop-color" values="rgb(255,110,0);rgb(255,170,0);rgb(255,230,0);rgb(255,170,0);rgb(255,110,0);" dur="5s" repeatCount="indefinite"/>
            </stop>
        </radialGradient>
    )
}

export default memo(Fire);

