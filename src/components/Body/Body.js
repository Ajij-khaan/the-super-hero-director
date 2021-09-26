import React, { useEffect, useState } from 'react';
import Fish from '../Fish/Fish';

const Body = () => {
    const [fishes, setFishes] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setFishes(data))
    }, [])

    return (
        <div>
            <h2>this is from body</h2>
            {
                fishes.map(fish => <Fish></Fish>)
            }
        </div>
    );
};

export default Body;