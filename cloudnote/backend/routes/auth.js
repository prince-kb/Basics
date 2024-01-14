const express = require('express')
const router = express.Router()
const User = require('../models/User')
//It should b einstalled seperately
const {body, validationResult} = require('express-validator')
// router.get('/',(req,res)=>{
//     const a = {
//         str : "hiiiiiioioioioioio",
//         num : 34
//     }
//     // res.json(a);
//     res.send(req.body)
// })

//To add data (here we are adding login information) 'post' is used majorly
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
        //User is a 

        /* const u = User(req.body);
        u.save();
        return res.send(`Hello, ${req.body.name}!, your schema is added`); 
        */
        //OR
        try{
            //This line should must be declared await
        let user = await User.findOne({email : req.body.email})
        if(user){
            return res.status(400).json({error : "Email already exist",message : "Try using another email"})
        }
        //user is a variable and it will be send as response to save the data
        user = User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            description : req.body.description
        })
        //This line will return the user as response
        console.log(req.body.name + " added")
        res.send("Added user : " + req.body.name)
        
    }
    catch(error){
        console.log(error)
        return res.status(500).json({error : "Some error occured from our side",message : "We are trying to fix it"})
    }
        //We can also use .then and .catch if we are not using an await request
/*         .then(user=>{res.json(user)
            console.log("User added")
        })
        .catch(err=>{console.log(err)
        res.json({error : 'Enter unique attributes', message : err.message });
    }) */
  });

module.exports = router;
