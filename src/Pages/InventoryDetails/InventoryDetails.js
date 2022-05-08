import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import useItems from '../../hooks/useItems';

const InventoryDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    const url = `https://murmuring-spire-17460.herokuapp.com/item/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const UpdateQuantity = event => {
    event.preventDefault();
    const quantity = event.target.quantity.value;

    const updateQuantity = { quantity };

    // send data to backend
    const url = `https://murmuring-spire-17460.herokuapp.com/item/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateQuantity)
    })
      .item(res => res.json())
      .then(data => {
        console.log('sucess', data);
        alert('');
        event.target.reset();
      })
  }


  const { name, img, description, price, quantity, supplier } = items;

  return (
    <div className='col-sm-12 col-md-6 col-lg-4 py-3 mx-auto'>
      <div className="card box-shadow" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5 className="card-title">Price: {price} $</h5>
          <h5 className="card-title">Quantity: {quantity} kg</h5>
          <h6 className="card-title">Supplier: {supplier}</h6>
          <p className="card-text">{description}</p>
          <button className="btn btn-success">Delivered</button>
          <form onSubmit={UpdateQuantity}>
            <input type="number" name="quantity" placeholder='quantity' id="quantity" />
            <input type="submit" value="Quentity" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default InventoryDetails;