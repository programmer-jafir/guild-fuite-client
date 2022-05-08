import React  from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import ManageInventorie from '../ManageInventorie/ManageInventorie';
// import ManageInventories from '../ManageInventorie/ManageInventorie';

const ManageInventories = () => {
    const [items] = useItems();
    return (
        <div>
            <h1 className='text-center text-warning mt-5 mp-5'>Manage Inventories</h1>
            <div className='container mb-5'>
                <div className="row ms-5">
                    {
                        items.map(item => <ManageInventorie
                            key={item._id}
                            item={item}
                        ></ManageInventorie>)
                    }
                </div>
                <div className='d-flex justify-content-center mt-5'>
                <Link to='/additem' className='btn btn-dark text-white'>  Add new item</Link>
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;