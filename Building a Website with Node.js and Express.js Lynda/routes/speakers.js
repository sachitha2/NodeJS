const express = require("express");
const { response } = require("express");


const router = express.Router();

module.exports = (params)=>{

    const {speakersService} = params;

    router.get('/',async(req,res)=>{

        const speakers = await speakersService.getList();
        if(!req.session.visitCount){
            req.session.visitCount = 0;
        }
        req.session.visitCount += 1;
        console.log(`Number of visits ${req.session.visitCount}`);
        res.render('layout',{pageTitle:"Speakers",template:'speakers',speakers});
    });

    router.get('/:shortname',async(req,res)=>{
        const speaker = await speakersService.getSpeaker(req.params.shortname);
        console.log(speaker);
        res.render('layout',{pageTitle:"Speakers",template:'speaker-detail',speaker});
    });


    return router;
};


