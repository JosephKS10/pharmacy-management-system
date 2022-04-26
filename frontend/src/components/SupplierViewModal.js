import React from 'react'
import "./SupplierViewModal.css"



function SupplierViewModal({closesupplierviewmodal, putIDdatasupplier, openviewdatabase, setiddatasupplier}) {


  function openviewDatabaseback(){
    setiddatasupplier([]);
    closesupplierviewmodal(false);
    openviewdatabase(true);
} 
  return (
    
    <div className='modalBackground'>
    <div className="modalContainer">
        <div className="titleCloseBtn">
     
          <div className="titleSUP">
              <h1>Supplier Details</h1>
          </div>
          <div className="body_sup_view">
          <div className="sup_name">  
          <label className='label_text_sup'>Supplier Name</label>
          <label name='sup_name' className='sup_nam' >{putIDdatasupplier[0].supplier_name}</label>
          </div>
          <div className="ph_number">
          <label className='label_text_sup'>Phone No</label>
          <label name='ph_number' className='ph_num'>{putIDdatasupplier[0].phone_number}</label>
          </div>
          <div className="email">
          <label className='label_text_sup'>Email Address</label>
          <label name='email' className='ema'>{putIDdatasupplier[0].email}</label>
          </div>
          <div className="address">
          <label className='label_text_sup'>Address</label>
          <label name='address' className='add'>{putIDdatasupplier[0].address}</label>
          </div>
          
          </div>

          <div className="footer_sup">
              
              <button className='button_modal' id="cancelBtnSup" onClick={openviewDatabaseback}> Close </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierViewModal
