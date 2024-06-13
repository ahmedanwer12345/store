import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';




const Products = () => {
    const cart = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(20);
    const navigate = useNavigate();


    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=100`);
            const data = await response.json();
            setProducts(data.products);
            setLoading(false);
        }
        catch (e) {
            console.log(e);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    function updateData() {
        setVisible(prev => prev + 20);
    }


    if (loading) {
        return (
            <div className="container">
                <div>products is loading</div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className='items'>
                {products.slice(0, visible).map(p => (
                    <div key={p.id} className='item'>
                        <div className="image">
                            <img alt={p.title} src={p.thumbnail} />
                        </div>

                        <div className='content'>
                            <h3>{p.category}</h3>
                            <p>{p.description.length > 90 ? `${p.description.slice(0, 90)}.....` : p.description}</p>
                            <h3>{p.price}$</h3>
                            <button className='btn' onClick={() => cart.addOneToCart(p.id, p.price, p.thumbnail, p.title)}>add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
            {visible === 100 ? <button className='btn show-btn' onClick={() => navigate("/cart")}>Go To Cart</button> :
                <button className='btn show-btn' onClick={updateData}>show more data</button>}

        </div>

    )
}

export default Products