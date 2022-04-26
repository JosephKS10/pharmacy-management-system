const express = require('express');
const router = express.Router();
const Supplier = require('../model/supplier');

// getting all the data from the database(mongoBD) || Read method applied here for all the values of supplier table
router.get('/',(req,res,next)=>{
    Supplier.find()
    .then(result=>{
        res.status(200).json({
            supplier_data: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

// Read method applied here for a specific record in the supplier database
router.get('/:pre_name',(req,res,next)=>{
    console.log("The pre_name required for the particular supplier detail: "+req.params.pre_name);
    Supplier.find({pre_medicine_name:req.params.pre_name})
    .then(result=>{
        res.status(200).json({
            supplier_data_specific: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

// ( Post Method) getting data from the front end and then saving in the database(mongoDB) || Create method applied here
// Supplier record creation occurs due to this post method
router.post('/supplier_create',(req,res,next)=>{
    const supplier = new Supplier({
    pre_medicine_name: req.body.pre_medicine_name,
    supplier_name: req.body.supplier_name,
    phone_number: req.body.phone_number,
    email: req.body.email,
    address: req.body.address
    })

    supplier.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            supplier_info: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })

})


// deleting data from the supplier database || Delete method applied here
router.delete('/:id',(req,res,next)=>{
    console.log("The supplier id required: "+req.params.id);
    Supplier.deleteOne({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message: "the supplier record has been deleted from the database",
            deleted_data: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

// Updating the values in the medicine records of the database ( PUT request ) || Update method applied here
router.put('/:id',(req,res,next)=>{
    console.log("The supplier id required: "+req.params.id);
    Supplier.findOneAndUpdate({_id:req.params.id}, {
        $set:{
            supplier_name: req.body.supplier_name,
            phone_number: req.body.phone_number,
            email: req.body.email,
            address: req.body.address
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_supplier_info_result: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;