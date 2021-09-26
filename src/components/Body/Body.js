import React, { useEffect, useState } from 'react';
import Fish from '../Fish/Fish';

const Body = () => {
    const [fishes, setFishes] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setFishes(data))
    }, [])


    const handleMyCart = (fish) => {
        // console.log(fish);
        const newCart = [...cart, fish];
        setCart(newCart);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            fishes.map(fish => <Fish
                                key={fish.id}
                                fish={fish}
                                handleMyCart={handleMyCart}
                            >
                            </Fish>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header fw-bold"> My Cart </div>
                        <div className="card-body">
                            <h5 className="text-start">Totad Fish: {cart.length}</h5>
                            <h5 className="text-start">Total COst: </h5>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Body;