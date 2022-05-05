import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Welcvome to InventoryDetails : {id}</h2>
        </div>
    );
};

export default InventoryDetails;