import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Item from '../Item/Item';
import Items from '../Items/Items';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch('items.json')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])

    return (
        <div>
            <Banner/>

            <h1 className='text-center text-warning mt-5 mp-5'>Items</h1>
            <div className='container mb-5'>
                <div className="row ms-5">
                {
                    items.map(item=><Item
                    key={item.id}
                    item={item}
                    >
                    </Item>)
                }      
                </div>
            </div>
            <Contact/>
        </div>
    );
};

export default Home;