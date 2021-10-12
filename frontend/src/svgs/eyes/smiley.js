import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Smiley (props) {
    return (
        <g style={props.style}>
            <g>
                <g class="outer-eye">
                    <path fill="#000" d="m 97.8,343.3 c -2.5,-16.9 4.1,-36.7 22.7,-35.6 21.0,-1.1 26.4,23.0 22.2,35.4 -5.4,9.6 -8.6,-5.8 -8.7,-13.0 -1.2,-15.0 -22.9,-15.6 -25.8,0.1 -1.0,7.8 -6.3,21.9 -10.3,13.0 z" />
                </g>
            </g>
            <g>
                <g class="outer-eye">
                    <path fill="#000" d="m 325.9,343.7 c -2.5,-16.9 4.1,-36.7 22.7,-35.6 21.0,-1.1 26.4,23.0 22.2,35.4 -5.4,9.6 -8.6,-5.8 -8.7,-13.0 -1.2,-15.0 -22.9,-15.6 -25.8,0.1 -1.0,7.8 -6.3,21.9 -10.3,13.0 z" />
                </g>
            </g>
        </g>
    )
};

export default memo(Smiley);
