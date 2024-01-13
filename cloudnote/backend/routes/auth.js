const express = require('express')
const router = express.Router()
const User = require('../models/User')
const {body, validationResult} = require('express-validator')
// router.get('/',(req,res)=>{
//     const a = {
//         str : "hiiiiiioioioioioio",
//         num : 34
//     }
//     // res.json(a);
//     res.send(req.body)
// })


router.post('/', 
[ 
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isAlphanumeric()
], 
(req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        const u = User(req.body);
        u.save();
        return res.send(`Hello, ${req.body.name}!, your schema is added`);
    }
    else {
        res.send({ errors: result.array() });
    }
  });

module.exports = router;
