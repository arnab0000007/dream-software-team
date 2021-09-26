import React, { useEffect, useState } from 'react';
import Engineer from '../Engineer/Engineer';
import Cart from '../Cart/Cart';
import './Engineers.css';

const Engineers = () => {
    // defining the states
    const [engineers, setEngineers] = useState([]);
    const [cart, setCart] = useState([]);
    //fetching data using useState
    useEffect(() => {
        fetch('./engineers.JSON')
            .then(res => res.json())
            .then(data => setEngineers(data));
    }, []);

    // cart handler function
    const handleAddToCart = (engineer) => {
        const newCart = [...cart, engineer];
        setCart(newCart);
    }


    return (
        <div className="row eng-container">
            <div className="col-lg-9 col-md-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        engineers.map(engineer => <Engineer
                            key={engineer.key}
                            engineer={engineer}
                            handleAddToCart={handleAddToCart}
                        >
                        </Engineer>)
                    }
                </div>
            </div>
            <div className="col-lg-3 col-md-3">
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>


    );
};

export default Engineers;