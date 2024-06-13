import React from 'react';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
    const navigate = useNavigate();

    return (

        <div className='checkout'>
            <h3>Thank You For Using My App</h3>
            <button onClick={() => navigate("/store")} className="btn"> Go To Page</button>
        </div>



    )
}

export default Checkout