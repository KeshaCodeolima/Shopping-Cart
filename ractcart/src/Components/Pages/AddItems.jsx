import React from 'react';
import './AddItems.css';

function AddItems() {
    return (
        <>
            <div className="mainadditem">
                <div className="mainaddbox">
                    <div className="boxtopic">
                        <h2>Add Items.</h2>
                    </div>
                    <input type="text" placeholder='Enter Item Name' className='inputadd' />
                    <input type="text" placeholder='Enter Item Price' className='inputadd' />
                    <textarea placeholder='Enter Item Description' className='inputaddtext' />
                    <input type="file" className='inputadd1' />
                    <button className='btnadd'>Add Item</button>
                </div>
            </div>
        </>
    )
}
export default AddItems