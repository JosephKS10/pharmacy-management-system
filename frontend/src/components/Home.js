import React, { useState } from 'react';
import homebackground from '../img/background2.png';
import logoimg from '../img/logo.png';
import CreateModal from './CreateModal';
import SupModal from './SupModal';
import AltModal from './AltModal';
import DataFetching from './DataFetching';
import Table from './Table';
import UpdateModal from './UpdateModal';
import SupplierViewModal from './SupplierViewModal';
import AlternateViewModal from './AlternateViewModal';
import useCreateHook from './hooks/useCreateHook';


export default function Home() {

   // need to start working from here!!

  const [useopenCreateModal, setuseOpenCreateModal] = useState(false);
  const [useProceedModal, setuseProceedModal] = useState(false);
  const [useproceedSupModal,setuseproceedSupModal] = useState(false);
  const [useMedicineName, setuseMedicineName] = useState();
  const [useViewDatabase, setuseViewDatabase] = useState(false);
  const [useData, setuseData] = useState([]);
  const [usedatarecieved, setusedatarecieved] = useState(false);
  const [useUpdateModal, setuseUpdateModal] = useState(false);
  const [useIDdata, setuseIDdata] = useState();
  const [useIDdatasupplier, setuseIDdatasupplier] = useState();
  const [useSupplierViewModal, setuseSupplierViewModal] = useState(false);
  const [useAlternateViewModal, setuseAlternateViewModal] = useState(false);
  const [useIDdataalternate, setuseIDdataalternate] = useState();




  return (
    <>
    
    <img className='home_background' src={homebackground} alt="background.jpg"/>

    <div className="container_for_bar">
    <img className='home_logo' src={logoimg} alt="logo.png" />
    <input name='medicine_name' type="search" className='search_bar' id='medicine_name' placeholder='Search Entry...'/>
    <div className="button_container">
    <button className='view_button' onClick={() => {setuseViewDatabase(true)}}>View Dataset</button>
    <button className='create_button' onClick={() => {setuseOpenCreateModal(true)}}>Create Entry</button>
    {useopenCreateModal && <CreateModal closeCreateModal={setuseOpenCreateModal} proceedCreateModel={setuseProceedModal} getmedicineName={setuseMedicineName}/>} 
    {useProceedModal && <SupModal proceedSupModal={setuseproceedSupModal} closeSupModal={setuseProceedModal} putMedicineName={useMedicineName}/>}
    {useproceedSupModal && <AltModal closeAltModal={setuseproceedSupModal} putMedicineName={useMedicineName}/>}
    
    </div>

    {useViewDatabase && <DataFetching setUseData={setuseData} datarecieved={setusedatarecieved}/>}

    {usedatarecieved && useViewDatabase && 
    <Table useData={useData} setclosedatabase={setuseViewDatabase} openupdate={setuseUpdateModal} setiddata={setuseIDdata} opensupplierviewmodal={setuseSupplierViewModal} openalternate={setuseAlternateViewModal} 
    setiddatasupplier={setuseIDdatasupplier} setiddataalternate={setuseIDdataalternate}/>}

    {useUpdateModal && <UpdateModal closeUpdateModal={setuseUpdateModal} idData={useIDdata} openviewDatabase={setuseViewDatabase}/>}
    {useSupplierViewModal && <SupplierViewModal closesupplierviewmodal={setuseSupplierViewModal} putIDdatasupplier={useIDdatasupplier} openviewdatabase={setuseViewDatabase} setiddatasupplier={setuseIDdatasupplier}/>}
    {useAlternateViewModal && <AlternateViewModal closeAlternateViewModal={setuseAlternateViewModal} putIddataalternate={useIDdataalternate} openviewdatabase={setuseViewDatabase} setiddataalternate={setuseIDdataalternate}/>}
    </div>
    
    
    </>
  )
}
