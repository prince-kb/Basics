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
    body('password','Password length must be greater than 4').isLength({min : 4})
], 
async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
    }
     /* const u = User(req.body);
        u.save();
        return res.send(`Hello, ${req.body.name}!, your schema is added`); */
        //OR
        let user = await User.findOne({email : req.body.email})
        if(user){
            // console.log(user)
            return res.status(400).json({error : "Email already exist",message : "Try using another email"})
        }
        user = User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            description : req.body.description
        })
        res.send("Added user : " + req.body.name)
        
/*         .then(user=>{res.json(user)
            console.log("User added")
        })
        .catch(err=>{console.log(err)
        res.json({error : 'Enter unique attributes', message : err.message });
    }) */
  });

module.exports = router;
