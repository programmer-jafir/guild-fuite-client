import React  from 'react';
import useItems from '../../hooks/useItems';
import Item from '../Item/Item';
import ManageInventories from '../ManageInventorie/ManageInventorie';

const Items = () => {
    const [items] = useItems();
    return (
        <div>
            <h1 className='text-center text-warning mt-5 mp-5'>Manage Inventories</h1>
            <div className='container mb-5'>
                <div className="row ms-5">
                    {
                        items.map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;