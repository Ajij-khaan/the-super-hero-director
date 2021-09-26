import React from 'react';

const Cart = (props) => {

    const { cart } = props;

    let total = 0;
    for (const product of cart) {
        total = total + product.price;

    }

    return (
        <div>
            <div className="card position-fixed">
                <div className="card-header fw-bold-auto"> My Cart </div>
                <div className="card-body">
                    <h5 className="text-start">Totad Fish: {props.cart.length}</h5>
                    <h5 className="text-start">Total COst: {total}</h5>

                </div>
            </div>
        </div>
    );
};

export default Cart;