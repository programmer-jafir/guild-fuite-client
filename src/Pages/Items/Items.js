import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch('items.json')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])
    return (
        <div>
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
        </div>
    );
};

export default Items;