import { h, Fragment } from 'preact';


/** @jsx h */
/** @jsxFrag Fragment */

export default (props) => {
    return (
        <clipPath id={`body-clip-${ props.id }`}>
            <path d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
        </clipPath>
    )
}