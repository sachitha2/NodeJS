const express = require("express");


const router = express.Router();

module.exports = (params)=>{

    const {feedBackService} = params;

    router.get('/',async (req,res)=>{
        const feedback = await feedBackService.getList();

        return res.json(feedback);
    });

    router.post('/',(req,res)=>{
        res.send('Feedback form');
    });


    return router;
};


