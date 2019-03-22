import React, { Components } from 'react';

class Home extends Components {
    constructor (props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
            <div className="home">
                <div className="origin-circle"></div>
                <div className="sun"></div>
                <div className="moveY">
                    <div className="earth"></div>
                </div>
            </div>
        );
    }
}

export default Home;