const express = require('express')
const router = express.Router()
const User = require('../models/User')
//It should b einstalled seperately
const {body, validationResult} = require('express-validator')

//To encrypt a password we use the following package
const bcryptjs = require('bcryptjs')
// router.get('/',(req,res)=>{
//     const a = {
//         str : "hiiiiiioioioioioio",
//         num : 34
//     }
//     // res.json(a);
//     res.send(req.body)
// })

//Using jsonwebtoken to simplify login process and not dealing with security
//It basically generates a token for signing in and has three parts - Header,payload and signature
var jwt = require('jsonwebtoken');
const jwwwtoken = "hiiieyo"

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

        //Both bcryptjs lines return a promise, so we need to add await
        //Salt will add additional strings to be generated to the hash table
        const salt = await bcryptjs.genSalt(10);
        //This will generate a hash table for my password so that if my database is stolen, password cannot be retrieved or cannot be matched using a rainbow table
        const securePassword = await bcryptjs.hash(req.body.password,salt);
        //User is a schema defined in another js file

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
            password : securePassword,
            description : req.body.description
        })
        const data = {
            userid : req.body.userid
        }
        const sign = jwt.sign(data,jwwwtoken)
        console.log(req.body.name + " added")


        //This line will return the user as response
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
