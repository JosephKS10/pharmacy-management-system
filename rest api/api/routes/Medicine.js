const express = require('express');
const router = express.Router();
const Medicine = require('../model/medicine');


// getting all the data from the database(mongoBD) || Read method applied here for all the values
router.get('/',(req,res,next)=>{
    Medicine.find()
    .then(result=>{
        res.status(200).json({
            medicine_data: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

// Read method applied here for a specific record in the database
router.get('/:name',(req,res,next)=>{
    console.log("The name required for the particular medicine: "+req.params.name);
    Medicine.find({medicine_name:req.params.name})
    .then(result=>{
        res.status(200).json({
            medicine_data_specific: result
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
// medicine record creation occurs due to this post method
router.post('/med_create',(req,res,next)=>{
    const medicine = new Medicine({
    medicine_name: req.body.medicine_name,
    storage_id: req.body.storage_id,
    price: req.body.price,
    stock: req.body.stock,
    manu_info: req.body.manu_info,
    date_of_expiry: req.body.date_of_expiry
    })

    medicine.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            new_medicine: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })

})

// deleting data from the database || Delete method applied here
router.delete('/:id',(req,res,next)=>{
    console.log("The medicine id required: "+req.params.id);
    Medicine.deleteOne({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message: "the medicine record has been deleted from the database",
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
    console.log("The id required: "+req.params.id);
    Medicine.findOneAndUpdate({_id:req.params.id}, {
        $set:{
            medicine_name: req.body.medicine_name,
            storage_id: req.body.storage_id,
            price: req.body.price,
            stock: req.body.stock,
            manu_info: req.body.manu_info,
            date_of_expiry: req.body.date_of_expiry
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_medicine_result: result
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