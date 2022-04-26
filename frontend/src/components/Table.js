import React, {useState} from 'react'
import "./Table.css"
import axios from 'axios';

function Table({useData, setclosedatabase, openupdate, setiddata, opensupplierviewmodal, setiddatasupplier, setiddataalternate, openalternate}) {

  const api = axios.create({
    baseURL: 'http://localhost:9000/medicine'
})

  const [userecord, setuserecords] = useState(useData);
  
  
  function updatemodal(){
    openupdate(true);
  }

  function supplierviewmodal(){
    opensupplierviewmodal(true);
  }

  function alternatemodal(){
    openalternate(true);
  }
  function closedatabase(){
    setclosedatabase(false);
  }

  function refreshpage(){
    window.location.reload();
  }
  return (
    <div className='table-container' >
      <table>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Storage ID</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Manufacturer Name</th>
            <th>Date of Expiry</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>           
            {userecord.map((record) => (
                <tr>
                <td id={record._id}>{record.medicine_name}</td>
                <td id={record._id}>{record.storage_id}</td>
                <td id={record._id}>{record.price}</td>
                <td id={record._id}>{record.stock}</td>
                <td id={record._id}>{record.manu_info}</td>
                <td id={record._id}>{record.date_of_expiry}</td>
                <td>
                    <div className='container_3buttons'>
                    <button className='record_button3' onClick={()=>{ 
                      api.get('/'+record._id).then(res=>{
                        setiddata(res);
                        closedatabase();
                      updatemodal();
                      })
                      
                    }}><i className="fa-solid fa-pen"></i></button>


                    <button className='record_button3'onClick={() => {
                      api.delete('/'+ record._id).then(resp=>{console.log("Medicine Delete successful"+resp);
                      const supp_api = axios.create({
                        baseURL: 'http://localhost:9000/supplier'
                    })
                    supp_api.get('/'+record.medicine_name).then(resp=>{ supp_api.delete('/'+ resp.data.supplier_data_specific[0]._id).then(resp=>{console.log("Supplier Deleted"+resp);
                  
                    const alt_api = axios.create({
                      baseURL: 'http://localhost:9000/alternate'
                    })
                    alt_api.get('/'+record.medicine_name).then(resp=>{if (resp.data.alt_medicine_data_specific.length !== 0){alt_api.delete('/'+resp.data.alt_medicine_data_specific[0]._id).then(resp=>{console.log("Alternate Deleted"+resp)})} })
                  })}).catch(err=>{console.log(err)})
                    
                    }).catch(err=>{console.log(err)});
                    
                  alert(`The following record has been deleted
                          ID: ${record._id}
                          Medicine Name: ${record.medicine_name}
                          Kindly refresh the Database View
                  `)}}>
                    <i className="fa-solid fa-trash"></i>
                    </button>

                    <button className='record_button3'onClick={()=> {
                      const supp_api = axios.create({
                        baseURL: 'http://localhost:9000/supplier'
                    })
                      supp_api.get('/'+record.medicine_name).then(res=>{
                        setiddatasupplier(res.data.supplier_data_specific);
                        closedatabase();
                        supplierviewmodal();
                        console.log(res.data.supplier_data_specific);
                      })
                      
                      
                    }}><i className="fa-solid fa-truck-field"></i></button>    
                    </div>
                    <button className='record_button1' onClick={() => {
                        const alt_api = axios.create({
                          baseURL: 'http://localhost:9000/alternate'
                        })

                        alt_api.get('/'+record.medicine_name).then(res=>{
                          setiddataalternate(res.data.alt_medicine_data_specific);
                          if(res.data.alt_medicine_data_specific.length === 0){
                            alert("there are no alternatives for this particular medicine");
                          }
                          else{
                            closedatabase();
                            alternatemodal();
                          }
                        })

                    }}>alternative</button></td>
              </tr>
                                ))}
        </tbody>
      </table>
      <button className='cancelBtn' onClick={() => {setclosedatabase(false)}}>Close Dataset</button>
      <button className='refreshBtn' onClick={refreshpage}>Refresh</button>
    </div>
  )
}

export default Table
