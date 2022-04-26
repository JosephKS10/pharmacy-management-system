import React from 'react'
import "./AlternateViewModal.css"

function AlternateViewModal({closeAlternateViewModal,putIddataalternate, openviewdatabase, setiddataalternate}) {
    function close(){
      setiddataalternate([]);
        closeAlternateViewModal(false);
        openviewdatabase(true);
        
    }
  return (
    <div className='modalBackground'>
    <div className="modalContainer">
        <div className="titleCloseBtn">
     
          <div className="titleALT">
              <h1>Alternate Medicine Details</h1>
          </div>
          <div className="body_alt_view">
            <div className="alt_name">
          <label className='label_text_alt'>Name</label>
          <label name='medicine_name' className='alt' >{putIddataalternate[0].medicine_name}</label>
          </div>
          <div className="alt_storage">
          <label className='label_text_alt'>Storage ID</label>
          <label name='storage_id' className='alt'>{putIddataalternate[0].storage_id}</label>
          </div>
          <div className="alt_price">
          <label className='label_text_alt'>Price</label>
          <label name='price' className='alt'>{putIddataalternate[0].price}</label>
          </div>
          <div className="alt_stock">
          <label className='label_text_alt'>Stock</label>
          <label name='stock' className='alt'>{putIddataalternate[0].stock}</label>
          </div>
          <div className="alt_manu_info">
          <label className='label_text_alt'>Manufacturer</label>
          <label name='manu_info' className='alt'>{putIddataalternate[0].manu_info}</label>
          </div>
          <div className="alt_doe">
          <label className='label_text_alt'>Date Of Expiry</label>
          <label name='date_of_expiry'className='alt'>{putIddataalternate[0].date_of_expiry}</label> 
          </div>
          </div>

          <div className="footer_alt">
              <button className='button_modal' onClick={close}  id="cancelBtn"> Close </button>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlternateViewModal
