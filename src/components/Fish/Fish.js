import React from 'react';
import './Fish.css'

const Fish = (porps) => {

    // console.log(porps.fish.id)

    const { id, name, size, FoodValue, Habitats, price, image, details } = porps.fish;

    return (
        <div className="col">
            <div className="card h-100">
                <img className="bg-fish" src={image} alt="" />
                <div className="card-body ">
                    <h5 className="card-title">Fish ID: {id}</h5>
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title">Size: {size} lbs</h5>
                    <h5 className="card-title">Food Value: {FoodValue}</h5>
                    <h5 className="card-title">Habitats: {Habitats}</h5>
                    <h5 className="card-title">Price: {price}</h5>
                    <div className="d-flex flex-column align-items-center">
                        <div className="border rounded-pill border-primary w-75">
                            <i className="fas fa-angle-double-right"></i>
                            <a href={details} className="text-muted px-2 py-2 text-decoration-none">   More Details </a>
                        </div>
                        <div className="border rounded-pill border-primary w-75 mt-2">
                            <i className="fas fa-shopping-cart"></i>
                            <small className="text-muted px-2 py-2 ">   Add TO Cart </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fish;