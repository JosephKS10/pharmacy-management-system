const express = require('express');
const router = express.Router();
const Alternate = require('../model/alternate');

// getting all the data from the database(mongoBD) || Read method applied here for all the values
router.get('/',(req,res,next)=>{
    Alternate.find()
    .then(result=>{
        res.status(200).json({
            alt_medicine_data: result
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
router.get('/:pre_name',(req,res,next)=>{
    console.log("The pre name required for the particular medicine alternative: "+req.params.pre_name);
    Alternate.find({pre_medicine_name: req.params.pre_name})
    .then(result=>{
        res.status(200).json({
            alt_medicine_data_specific: result
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
// alternate medicine record creation occurs due to this post method
router.post('/alt_med_create',(req,res,next)=>{
    const alt_medicine = new Alternate({
    pre_medicine_name: req.body.pre_medicine_name,
    medicine_name: req.body.medicine_name,
    storage_id: req.body.storage_id,
    price: req.body.price,
    stock: req.body.stock,
    manu_info: req.body.manu_info,
    date_of_expiry: req.body.date_of_expiry
    })

    alt_medicine.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            alt_new_medicine: result
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
    console.log("The alternate medicine id required: "+req.params.id);
    Alternate.deleteOne({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message: "the alternate medicine record has been deleted from the database",
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
    console.log("The Alternate id required: "+req.params.id);
    Alternate.findOneAndUpdate({_id:req.params.id}, {
        $set:{
            pre_medicine_name: req.body.pre_medicine_name,
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
            updated_alt_medicine_result: result
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