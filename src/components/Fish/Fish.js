import React from 'react';
import './Fish.css'

const Fish = (porps) => {

    // console.log('porps')

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
                    <h5 className="card-title">Price: {price}$</h5>
                    <div className="d-flex flex-column align-items-center ">
                        <button className="ms-2 text-muted px-3 py-2 border-0 rounded-pill">
                            <i className="fas fa-angle-double-right"></i>
                            <a href={details} className="text-dark text-decoration-none">   More Details </a>
                        </button>

                        <button onClick={() => porps.handleMyCart(porps.fish)} className="mt-2 ms-2 text-muted px-3 py-2 border-0 rounded-pill">
                            <i className="fas fa-shopping-cart"></i>
                            <a className="text-dark text-decoration-none">   Add To Cart </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fish;