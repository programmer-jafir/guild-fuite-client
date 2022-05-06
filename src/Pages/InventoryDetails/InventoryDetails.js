import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    const {name, img, description, price, quantity, supplier}= item;

    useEffect( () =>{
        const url = `http://localhost:5000/item/${id}`
        
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));
    })
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 py-3'>
        <div className="card box-shadow" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{name}</h4>
    <h5 className="card-title">Price: {price} $</h5>
    <h5 className="card-title">Quantity: {quantity} kg</h5>
    <h6 className="card-title">Supplier: {supplier}</h6>
    <p className="card-text">{description}</p>
    <button className="btn btn-success">Delivered</button>
  </div>
</div>
        </div>
    );
};

export default InventoryDetails;