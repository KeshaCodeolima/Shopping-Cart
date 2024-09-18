import React, { useState } from 'react';
import './AddItems.css';
import axios from 'axios';

function AddItems() {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemImage, setItemImage] = useState('');

    const handleAddItems=(e)=>{
        const formData = new FormData();
        formData.append('name',itemName);
        formData.append('price', itemPrice);
        formData.append('description', itemDescription);
        formData.append('image', itemImage)
        axios.post("http://localhost:3001/upload", formData)
        .then(res=>{console.log(res)
            alert('Item Add Successful')
        })
        .catch(err=>console.log(err))
    };
    
    return (
        <>
            <div className="mainadditem">
                <div className="mainaddbox">
                    <div className="boxtopic">
                        <h2>Add Items.</h2>
                    </div>

                    <input type="text" 
                    placeholder='Enter Item Name' 
                    className='inputadd'
                    value={itemName}
                    onChange={(e)=>setItemName(e.target.value)}/>

                    <input type="text"
                     placeholder='Enter Item Price' 
                     className='inputadd'  
                     value={itemPrice}
                     onChange={(e) => setItemPrice(e.target.value)}/>

                    <textarea placeholder='Enter Item Description' 
                    className='inputaddtext' 
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}/>

                    <input type="file" 
                    className='inputadd1' 
                    onChange={(e) => setItemImage(e.target.files[0])}/>

                    <button className='btnadd' onClick={handleAddItems}>Add Item</button>
                </div>
            </div>
        </>
    )
}
export default AddItems