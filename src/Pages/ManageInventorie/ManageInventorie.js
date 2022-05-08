import React from 'react';
import { useNavigate } from 'react-router-dom';
const ManageInventorie = ({item}) => {
    const {_id, name, img, description, price, quantity, supplier}= item;
    const navigate = useNavigate();
    const navigateToInventoryId = id =>{
      navigate(`/inventory-info/${id}`);
    }
    const handleDelete = id => {
      const procceed = window.confirm('Are you sure?')
      if(procceed){
        const url = `http://localhost:5000/item/${id}`;
        fetch(url, {
          method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data);
        })
      }
    }
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
    <button onClick={() => navigateToInventoryId(_id)} className="btn btn-warning">Update</button>
    <button onClick={() => handleDelete(item._id)} className="btn btn-danger ms-3">Delete</button>
  </div>
</div>
        </div>
    );
};

export default ManageInventorie;