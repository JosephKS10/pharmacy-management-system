import React from 'react';
import "./CreateModal.css";
import axios from 'axios';
import useCreateHook from './hooks/useCreateHook';



function CreateModal({closeCreateModal, proceedCreateModel, getmedicineName}) {

  const api = axios.create({
    baseURL: 'http://localhost:9000/medicine'
  })

const medicine_submit = () => {
  alert(`Medicine Entry Created!
        Medicine Name: ${inputs.medicine_name}
        Storage ID: ${inputs.storage_id}
        Price: ${inputs.price}
        Stock: ${inputs.stock}
        Manufacturer: ${inputs.manu_info}
        DOE: ${inputs.date_of_expiry}
        `);
  api.post('/med_create', {medicine_name:inputs.medicine_name, storage_id: inputs.storage_id, price:inputs.price, stock:inputs.stock, manu_info:inputs.manu_info, date_of_expiry:inputs.date_of_expiry});
} 

const {inputs, handleInputChange, handleSubmit} = useCreateHook(medicine_submit);

function submit(){
  close();
  open();
  medicinename();
  handleSubmit();
}
function close(){
  closeCreateModal(false);
}
function open(){
  proceedCreateModel(true);
}
function medicinename(){
    getmedicineName(inputs.medicine_name);

}
return (
    <div className='modalBackground'>
    <div className="modalContainer">
        <div className="titleCloseBtn">
      
          <div className="titleCRT">
              <h1>Medicine Details</h1>
          </div>
          <div className="body">
            <div className="name">
          <label className='label_text'>Name</label>
          <input name='medicine_name' type="text" className='text_field' placeholder='Enter the medicine name' value={inputs.medicine_name} onChange={handleInputChange} required/>
          </div>
          <div className="storage">
          <label className='label_text'>Storage ID</label>
          <input name='storage_id' type="number" className='text_field' placeholder='Enter the storage id for the medicine' value={inputs.storage_id} onChange={handleInputChange} required/>
          </div>
          <div className="price">
          <label className='label_text'>Price</label>
          <input name='price' type="number" className='text_field left' placeholder='Enter the price of the medicine' value={inputs.price} onChange={handleInputChange} required/>
          </div>
          <div className="stock">
          <label className='label_text'>Stock</label>
          <input name='stock' type="number" className='text_field left' placeholder='Enter the stock available' value={inputs.stock} onChange={handleInputChange} required/>
          </div>
          <div className="manu_info">
          <label className='label_text'>Manufacturer</label>
          <input name='manu_info' type="text" className='text_field' placeholder='Enter the manufacturer name' value={inputs.manu_info} onChange={handleInputChange} required/>
          </div>
          <div className="doe">
          <label className='label_text'>Date Of Expiry</label>
          <input name='date_of_expiry' type="text" className='text_field' placeholder='Enter the date of expiry of the Medicine' value={inputs.date_of_expiry} onChange={handleInputChange} required/> 
          </div>
          </div>

          <div className="footer">
              <button className='button_modal' onClick={() => closeCreateModal(false)}  id="cancelBtn"> Cancel </button>
              <button className='button_modal'id="createBtn" onClick={submit}> Proceed </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateModal
