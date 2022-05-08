import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../api/axiousPrivate';
const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myitem?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url)
                setItems(data);
            }
            catch (error) {
                console.log(error.massage);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
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