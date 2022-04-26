import {useState, useEffect} from 'react'
import axios from 'axios'


function DataFetching({setUseData, datarecieved}) {

const api = axios.create({
        baseURL: 'http://localhost:9000/medicine'
})

const [usePosts, setusePosts] = useState([]);

useEffect(() => {
    api.get('/').then(res => {
        console.log(res.data.medicine_data);
        setusePosts(res.data.medicine_data)
        setUseData(res.data.medicine_data);
        setdatarecieved();
        
    })
    .catch(err=>{
        console.log(err);
    })
}, []);

function setdatarecieved(){
  datarecieved(true);
}
return (null);

}



export default DataFetching
