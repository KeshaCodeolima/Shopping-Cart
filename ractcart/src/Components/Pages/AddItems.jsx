import React from 'react';
import './AddItems.css';

function AddItems() {
    return (
        <>
            <div className="mainadditem">
                <input type="text" placeholder='Enter Item Name' />
                <input type="text" placeholder='Enter Item Price' />
                <input type="text" placeholder='Enter Item Description' />
                <input type="file" />
                <button className='btnadd'>Add Item</button>
            </div>
        </>
    )
}
export default AddItems