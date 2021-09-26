import React from 'react';

const Fish = (porps) => {

    // console.log(porps.fish.id)

    const { id, name, size, FoodValue, Habitats, price, image } = porps.fish;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Fish ID: {id}</h5>
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title">Size: {size} lbs</h5>
                    <h5 className="card-title">Food Value: {FoodValue}</h5>
                    <h5 className="card-title">Habitats: {Habitats}</h5>
                    <h5 className="card-title">Price: {price}</h5>
                </div>
                <div className="card-footer">
                    <small className="text-muted">ADD TO Cart</small>
                </div>
            </div>
        </div>
    );
};

export default Fish;