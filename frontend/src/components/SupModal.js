import React from 'react'
import "./SupModal.css";
import axios from 'axios';
import useCreateHook from './hooks/useCreateHook';


function SupModal({proceedSupModal, closeSupModal,putMedicineName}) {
  const api = axios.create({
    baseURL: 'http://localhost:9000/supplier'
  })

  const supplier_submit = () => {
    alert(`Supplier Entry Created!
         Medicine name: ${putMedicineName}
         Supllier Name: ${inputs.sup_name}
         Phone No: ${inputs.ph_number}
         Email: ${inputs.email}
         Address: ${inputs.address}
          `);
    let res = api.post('/supplier_create', {pre_medicine_name:putMedicineName , supplier_name: inputs.sup_name, phone_number:inputs.ph_number, email:inputs.email, address:inputs.address});
  } 
  const {inputs, handleInputChange, handleSubmit} = useCreateHook(supplier_submit);
  function submit(){
    close();
    open();
    handleSubmit();
    
    
  }
  function open(){
    proceedSupModal(true);
  }
  function close(){
    closeSupModal(false);
  }
  
  return (
    <div className='modalBackground'>
    <div className="modalContainer">
        <div className="titleCloseBtn">
     
          <div className="titleSUP">
              <h1>Supplier Details</h1>
          </div>
          <div className="body_sup">
          <div className="sup_name">
          <label className='label_text_s'>Supplier Name</label>
          <input name='sup_name' type="text" className='text_field_sup s_nam' placeholder='Enter the Supplier name' value={inputs.sup_name} onChange={handleInputChange} required/>
          </div>
          <div className="ph_number">
          <label className='label_text_s'>Phone No</label>
          <input name='ph_number' type="number" className='text_field s_ph_num' placeholder='Enter the phone number of the Supplier' value={inputs.ph_number} onChange={handleInputChange} required/>
          </div>
          <div className="email">
          <label className='label_text_s'>Email Address</label>
          <input name='email' type="text" className='text_field s_ema' placeholder='Enter the email address of the Supplier' value={inputs.email} onChange={handleInputChange} required/>
          </div>
          <div className="address">
          <label className='label_text_s'>Address</label>
          <input name='address' type="text" className='text_field s_add' placeholder='Enter the address of the Supplier' value={inputs.address} onChange={handleInputChange} required/>
          </div>
          
          </div>

          <div className="footer_s">
              
              <button className='button_modal' id="createBtn" onClick={submit}> Proceed </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupModal
