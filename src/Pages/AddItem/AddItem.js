import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { toast } from 'react-toastify';
const axios = require('axios');

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user);
    }
    const onSubmit = (data, event) => {
        console.log(data);
        const url = `https://murmuring-spire-17460.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const myItem = {
                    email: user.email,
                    name: event.target.name.value,
                    img: event.target.img.value,
                    quantity: event.target.quantity.value,
                    description: event.target.description.value,
                    supplier: event.target.supplier.value,
                    price: event.target.price.value,
                }
                axios.post('https://murmuring-spire-17460.herokuapp.com/myitem', myItem)
                    .then(res => {
                        const { data } = res;
                        if (data.insertedId) {
                            toast('Your item ia add!!')
                            event.target.reset();
                        }
                    })
            })


    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-dark mt-3'>Please add a item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier")} />
                <input className='mb-2' placeholder='Quantity' {...register("quantity")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='mb-3' value="Add Item" type="submit" />
            </form>
        </div>
    );
};

export default AddItem;