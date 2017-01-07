const express=require('express')
const router=express.Router()

router.get('/',function(req,res){
    res.json({
        "name":'cll',
        "age":16,
        "gender":'male'
    })
})

module.exports=router
