const express = require('express')
const router = express.Router()
const User = require('../models/User')
const {query, validationResult} = require('express-validator')
// router.get('/',(req,res)=>{
//     const a = {
//         str : "hiiiiiioioioioioio",
//         num : 34
//     }
//     // res.json(a);
//     // res.send("Hii i am working")
//     console.log(req.body)
//     res.send(req.body)
// })
router.post('',[
    query('name').notEmpty(),
    query('password').isAlphanumeric(),
    query('email').isEmail()
]
,(req,res)=>{
    const jsonResult = validationResult(res);
    console.log(jsonResult.isEmpty())

    if(!jsonResult.isEmpty()){
        return res.send("Name cannot be empty");
    }
    else {
    const u = User(req.body);
    u.save();
    res.send("Added body data to database")
    }
})

module.exports = router;