import React from 'react';

const Cart = (props) => {

    //Getting cart from event handler and update the price 

    const { cart } = props;

    let total = 0;
    for (const product of cart) {
        total = total + product.price;

    }

    return (
        //Creating My Cart UI
        <div>
            <div className="card">
                <div className="card-header fw-bold-auto"> My Cart </div>
                <div className="card-body">
                    <h5 className="text-start">Totad Fish: {props.cart.length}</h5>
                    <h5 className="text-start">Total Cost: {total}</h5>

                </div>
            </div>
        </div>
    );
};

export default Cart;