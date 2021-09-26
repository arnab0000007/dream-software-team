import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Engineer.css';

const Engineer = (props) => {
    const { name, img, age, salary, work, country } = props.engineer;

    return (
        <div className="col">
            <div className="card h-100 text-center shadow-lg p-3 mb-5 rounded">
                <img src={img} className="card-img-top img rounded mx-auto d-block" alt="engineerImage" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p>Work: {work}</p>
                    <p>Age: {age}</p>
                    <p>Country: {country}</p>
                    <h4>Salary: <span className="text-danger">${salary}</span></h4>

                </div>
                <div>
                    <button
                        onClick={() => props.handleAddToCart(props.engineer)}
                        className="btn btn-add"
                    ><FontAwesomeIcon icon={faShoppingCart} /> Add to Team</button>
                </div>
            </div>
        </div>
    );
};

export default Engineer;