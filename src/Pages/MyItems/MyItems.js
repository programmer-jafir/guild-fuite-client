import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect( () =>{
        const getOrders = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/myitem?email=${email}`
            const {data} = await axios.get(url);
            setItems(data);
        }
        getOrders();
    }, [user])
    return (
        <div>
            <h1>My Items: {items.length}</h1>
        </div>
    );
};

export default MyItems;