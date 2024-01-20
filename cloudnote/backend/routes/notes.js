const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Notes = require("../models/Notes")
const {body,validationResult}= require('express-validator')

router.get('/addnote',fetchuser,[
    body('title','Enter a valid title').isLength({min : 3}),
    body('notes','Enter a valid note with at least 1 character').isLength({min : 1})
],async (req,res)=>{
    
    // const note1 = await Notes.find({user : req.user.id})
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(400).json({errors : errors.array()})
    }
    const {user,title,notes,tag}= req.body;
        const note = await Notes.create({
            user : req.user.id,title,notes,tag
        // title : req.body.title,
        // notes : req.body.notes
    })
    console.log("Note added")
    res.send(note)
})

router.post('/fetchnotes',fetchuser,async (req,res)=>{
    try{
        const n = await Notes.find({user : req.user.id})
        console.log(n)
        res.json(n)  
    }
    catch{
        return res.status(400).json({errors : errors.array()})
    }
})
module.exports=router;