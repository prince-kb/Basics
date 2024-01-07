const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const a = {
        str : "hiiiiiioioioioioio",
        num : 34
    }
    res.json(a);
    res.send("Hii i am working")
})

module.exports = router;