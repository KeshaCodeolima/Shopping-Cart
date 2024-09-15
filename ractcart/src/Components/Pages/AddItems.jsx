import React from 'react';
import './AddItems.css';

function AddItems() {
    return (
        <>
            <div className="mainadditem">
                <div className="mainaddbox">
                    <input type="text" placeholder='Enter Item Name' />
                    <input type="text" placeholder='Enter Item Price' />
                    <input type="text" placeholder='Enter Item Description' />
                    <input type="file" />
                    <button className='btnadd'>Add Item</button>
                </div>
            </div>
        </>
    )
}
export default AddItems