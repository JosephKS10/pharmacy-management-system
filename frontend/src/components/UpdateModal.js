import React from 'react'
import "./UpdateModal.css"
import axios from 'axios';
import useCreateHook from './hooks/useCreateHook';
function UpdateModal({closeUpdateModal,idData, openviewDatabase}) {
    const api = axios.create({
        baseURL: 'http://localhost:9000/medicine'
      })
    
    const update_medicine_submit = () => {
        alert(`Updated Medicine Entry!
              Medicine Name: ${inputs.medicine_name}
              Storage ID: ${inputs.storage_id}
              Price: ${inputs.price}
              Stock: ${inputs.stock}
              Manufacturer: ${inputs.manu_info}
              DOE: ${inputs.date_of_expiry}
              `);
        
    api.put('/'+idData.data.medicine_data_specific._id, {medicine_name:inputs.medicine_name, storage_id: inputs.storage_id, price:inputs.price, stock:inputs.stock, manu_info:inputs.manu_info, date_of_expiry:inputs.date_of_expiry});
    } 

    const {inputs, handleInputChange, handleSubmit} = useCreateHook(update_medicine_submit);

    function initialize(){
        inputs.medicine_name = idData.data.medicine_data_specific.medicine_name;
        inputs.storage_id = idData.data.medicine_data_specific.storage_id;
        inputs.price = idData.data.medicine_data_specific.price;
        inputs.stock = idData.data.medicine_data_specific.stock;
        inputs.manu_info = idData.data.medicine_data_specific.manu_info;
        inputs.date_of_expiry = idData.data.medicine_data_specific.date_of_expiry;
    }
        
        
    
    function update(){
        handleSubmit();
        openviewDatabaseback();
    }

    function close(){
        closeUpdateModal(false)
    }
    function openviewDatabaseback(){
        closeUpdateModal(false)
        openviewDatabase(true);
    }
  return (
    <div className='modalBackground'>
    <div className="modalContainer">
        <div className="titleCloseBtn">
      
          <div className="titleCRT">
              <h1>Update Medicine Details</h1>
          </div>
          <div className="body">
            <div className="name">
          <label className='label_text1'>Name</label>
          <input name='medicine_name' type="text" className='text_field1' placeholder='Enter the medicine name' value={inputs.medicine_name} onChange={handleInputChange} required/>
          </div>
          <div className="storage">
          <label className='label_text1'>Storage ID</label>
          <input name='storage_id' type="number" className='text_field1' placeholder='Enter the storage id for the medicine' value={inputs.storage_id} onChange={handleInputChange} required/>
          </div>
          <div className="price">
          <label className='label_text1'>Price</label>
          <input name='price' type="number" className='text_field left1' placeholder='Enter the price of the medicine' value={inputs.price} onChange={handleInputChange} required/>
          </div>
          <div className="stock">
          <label className='label_text1'>Stock</label>
          <input name='stock' type="number" className='text_field left1' placeholder='Enter the stock available' value={inputs.stock} onChange={handleInputChange} required/>
          </div>
          <div className="manu_info">
          <label className='label_text1'>Manufacturer</label>
          <input name='manu_info' type="text" className='text_field1' placeholder='Enter the manufacturer name' value={inputs.manu_info} onChange={handleInputChange} required/>
          </div>
          <div className="doe">
          <label className='label_text1'>Date Of Expiry</label>
          <input name='date_of_expiry' type="text" className='text_field1' placeholder='Enter the date of expiry of the Medicine' value={inputs.date_of_expiry} onChange={handleInputChange} required/> 
          </div>
          </div>

          <div className="footer">
              <button className='button_modal' onClick={openviewDatabaseback}  id="cancelBtn"> Cancel </button>
              <button className='button_modal'id="createBtn" onClick={update}>Update</button>
              <button className='button_modal'id='loadBtn' onClick={initialize}>Load Data</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateModal
