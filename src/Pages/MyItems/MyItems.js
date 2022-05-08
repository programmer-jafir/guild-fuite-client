import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';
const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://murmuring-spire-17460.herokuapp.com/myitem?email=${email}`
            const { data } = await axios.get(url);
            setItems(data);
        }
        getItems();
    }, [user, items])
    return (
        <div>
            <h1 className='text-center text-warning mt-5 mp-5'>My Items</h1>
            <div className='container mb-5'>
                <div className="row ms-5">
                    {
                        items.map(item => <MyItem
                            key={item._id}
                            item={item}
                        ></MyItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;