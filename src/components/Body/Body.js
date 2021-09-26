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
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            fishes.map(fish => <Fish key={fish.id} fish={fish} ></Fish>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <h4>Fish Added: </h4>
                    <h4>Total Cost: </h4>
                </div>

            </div>
        </div >
    );
};

export default Body;