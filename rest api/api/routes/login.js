const express = require('express');
const router = express.Router();
const Login = require('../model/login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// getting data from the database(mongoBD) || Read method applied here for all the values
router.get('/',(req,res,next)=>{
    Login.find()
    .then(result=>{
        res.status(200).json({
            login_data: result
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
router.get('/:id',(req,res,next)=>{
    console.log("The id required: "+req.params.id);
    Login.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            login_data_specific: result
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
// User creation occurs due to this post method
router.post('/user_create',(req,res,next)=>{
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.status(500).json({
                error:err
            })
        }
        else{
            const login = new Login({
                username: req.body.username,
                password: hash,
                employee_id: req.body.employee_id,
                first_name: req.body.first_name,
                last_name: req.body.last_name
               }) 
               
                login.save()
                .then(result=>{
                    console.log(result);
                    res.status(200).json({
                        newlogin: result
                    })
                })
                
                .catch(err=>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    })
                })
        }
    })
  
})

// Login verification occurs due to this post method
router.post('/verify',(req,res,next)=>{
    Login.find({username:req.body.username})
    .exec()
    .then(user=>{
        if(user.length < 1){
            return res.status(401).json({
                message: "User not found"
            })
        }
        else{
            bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                if(!result){
                    return res.status(401).json({
                        message: "Invalid Password!" 
                    })
                }
                else{
                    const token = jwt.sign({
                        username:user[0].username,
                        employee_id:user[0].employee_id,
                        first_name:user[0].first_name,
                        last_name:user[0].last_name
                    }, "this is a dummy text", {expiresIn:"24h"}); // this function has 3 parameters
                    res.status(200).json({
                        username:user[0].username,
                        employee_id:user[0].employee_id,
                        first_name:user[0].first_name,
                        last_name:user[0].last_name,
                        token: token
                    })
                }
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})

// deleting data from the database || Delete method applied here
router.delete('/:id',(req,res,next)=>{
    console.log("The id required: "+req.params.id);
    Login.deleteOne({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message: "the record has been deleted from the database",
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

// Updating the values in the records of the database ( PUT request ) || Update method applied here
router.put('/:id',(req,res,next)=>{
    console.log("The id required: "+req.params.id);
    bcrypt.hash(req.body.password,10,(err,hash1)=>{
        if(err){
            return res.status(500).json({
                error:err
            })
        }
        else{
            Login.findOneAndUpdate({_id:req.params.id}, {
                $set:{
                    username: req.body.username,
                    password: hash1,
                    employee_id: req.body.employee_id,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name
                }
            })
            .then(result=>{
                res.status(200).json({
                    updated_result: result
                })
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json({
                    error:err
                })
            })
        }
    })
   
})

module.exports = router; 