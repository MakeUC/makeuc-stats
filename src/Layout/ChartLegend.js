import React from 'react';

import '../App.css';

export function RaceLegend() {
    return <div className="Legend">
        <div id="legend1">
            Asian
        </div>
        <div id="legend2">
            White
        </div>
        <div id="legend3">
            Prefer not to answer
        </div>
        <div id="legend4">
            African American
        </div>
        <div id="legend5">
            Hispanic / Latino
        </div>
        <div id="legend7">
            American Indian / Alaskan Native
        </div>
        <div id="legend6">
            Other
        </div>

    </div>;
}

export function EducationLegend() {
    return <div className="Legend">
        <div id="legend2">
            Bachelor's
        </div>
        <div id="legend1">
            Master's
        </div>
        <div id="legend6">
            High School
        </div>
        <div id="legend3">
            Doctorate
        </div>
        <div id="legend5">
            Associates
        </div>
        <div id="legend4">
            Other
        </div>
        
        <div id="legend6">
            &nbsp;
        </div>
    </div>;
}