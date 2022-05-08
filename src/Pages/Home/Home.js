import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Item from '../Item/Item';
import ManageInventorie from '../ManageInventorie/ManageInventorie';

const Home = () => {
    // const [items] = useItems();
    const [items, setItems] = useState([]);
    const [quantity, setQuentity] = useState(0);

    useEffect(() => {
        fetch('https://murmuring-spire-17460.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [items])

    const updateQuantity = () => {
        console.log('clicked');
    }
    return (
        <div>
            <Banner />

            <h1 className='text-center text-warning mt-5 mp-5'>Inventory</h1>
            <div className='container mb-5'>
                <div className="row ms-5">
                    {
                        items.slice(0, 6).map(item => <Item
                            key={item.id}
                            item={item}
                            updateQuantity={updateQuantity}
                        >
                        </Item>)
                    }
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <Link to='/manage-inventories' className='btn btn-dark text-white'>  Manage Inventories</Link>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Home;