import React from 'react';
import './Range.css';


class Range extends React.Component {
    render() {
        return (
            <div style={{ width: '100%', marginTop: '5%' }}>
                <input type="range" min='0' max='3' step='1'  />
                <div className="inputDiv">
                    <div className="test1" >
                        <div className="test2" ></div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Range;