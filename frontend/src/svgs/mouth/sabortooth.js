import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Sabortooth(props){
    return (   
        <g>
            <path style="fill:#fff;stroke:#000;stroke-width:4px;stroke-opacity:1" d="m 202.3,419.2 c 2.0,12.2 3.5,21.7 23.7,38.4 C 220.7,435.3 222.1,428.3 226,418.7 Z" />
            <path style="fill:#fff;stroke:#000;stroke-width:4px;stroke-opacity:1" d="m 282.8,419.6 c -2.0,12.2 -3.5,21.7 -23.7,38.4 5.2,-22.3 3.8,-29.2 0.0,-38.9 z" />
            <path fill="#000" d="m 196,422.4 c -4.8,-2.9 -5.8,-4.2 0.6,-7 l 1.9,-0.8 c 40.7,0 40.8,0 84.4,-0.9 13.3,3.6 10.2,8.8 -3.4,8.8 -39.2,0 -39.5,-0.9 -83.5,0 z" />
        </g>
    )
}

export default memo(Sabortooth);

