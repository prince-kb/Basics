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
//     res.send(req.body)
// })
/* router.post('/',[query('name').isLength({min : 3})],(req,res)=>{
    const result = validationResult(req);
    console.log(result)
    if (!result.isEmpty()) {
        const u = User(req.body);
        u.save();
        return res.send(`Hello, ${req.query.name}!`);
    }
    
    res.send({ errors: result.array() });
    // const jsonResult = validationResult(res);
    // console.log(jsonResult.isEmpty())

    // if(!jsonResult.isEmpty()){
    //     return res.status(200).json({errors : errors.Array()});
    // }

    // res.send("Added body data to database")
}) */

router.post('/', query('name').notEmpty(), (req, res) => {
    const result = validationResult(req);
    console.log(query('name').notEmpty().toBoolean)
    // if (!result.isEmpty()) {
    //   return res.send(`Hello, ${req.query.name}!`);
    // }
  
    res.send({ errors: result.array() });
  });

module.exports = router;
