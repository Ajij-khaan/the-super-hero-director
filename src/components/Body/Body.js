import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Fish from '../Fish/Fish';


const Body = () => {


    const [fishes, setFishes] = useState([]);
    const [cart, setCart] = useState([]);

    //Loading Data
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setFishes(data))
    }, [])

    //Handling Cart 
    const handleMyCart = (fish) => {
        // console.log(fish);
        const newCart = [...cart, fish];
        setCart(newCart);
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center">
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>

            <div className="mt-5 row row-cols-1 row-cols-md-3 g-4">
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



    );
};

export default Body;