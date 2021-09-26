import React from 'react';
import './CartDetails.css'
const CartDetails = (props) => {
    const { name, img } = props.engineer
    return (
        <div className="card mb-3 cart-details">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start cart-img" alt="engineerImage" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;