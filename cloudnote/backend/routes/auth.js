const express = require('express')
const router = express.Router()
const User = require('../models/User')
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
router.post('',(req,res)=>{
    console.log(req.body)
    const u = User(req.body);
    u.save();
    res.send(req.body)
})

module.exports = router;