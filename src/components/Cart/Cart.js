import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const engineer of cart) {
        total = total + engineer.salary;
    }

    return (
        <div className="cart-container">
            <h3>Team Summary</h3>
            <hr />
            <h5><FontAwesomeIcon icon={faUser} />  Engineer Added: <span className="text-warning">{cart.length}</span> </h5>

            <h3>Total Cost: <span className="text-danger">${total.toFixed(2)}</span> </h3>
            <br />
            {
                cart.map(engineer => <CartDetails
                    key={engineer.key}
                    engineer={engineer}
                >
                </CartDetails>)
            }
            <button className="btn btn-secondary">Confirm</button>
        </div>
    );
};

export default Cart;