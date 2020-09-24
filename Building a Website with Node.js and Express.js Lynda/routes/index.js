const express = require("express");


const speakersRoutes = require('./speakers');
const feedbackRoutes = require('./feedback');
const router = express.Router();

module.exports = params=>{

    const {speakersService} = params;

    console.log(speakersService);

    router.get('/',async(req,res)=>{

        const topSpeaker = await speakersService.getList();
        if(!req.session.visitCount){
            req.session.visitCount = 0;
        }
        req.session.visitCount += 1;
        console.log(`Number of visits ${req.session.visitCount}`);
        res.render('layout',{pageTitle:"helloo",template:'index',topSpeaker});
    });

    router.use('/speakers',speakersRoutes(params));
    router.use('/feedback',feedbackRoutes(params));

    return router;
};


