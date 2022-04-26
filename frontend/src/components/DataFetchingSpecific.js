import {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingSpecific({medicine_name}) {
    const api = axios.create({
        baseURL: 'http://localhost:9000/medicine'
})

useEffect(()=>{
    api.get('/name/'+medicine_name).then(res=>{
        console.log(res.data.medicine_data_specific);
    })
})
  return (null)
}

export default DataFetchingSpecific
