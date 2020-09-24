const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");


const routes = require('./routes');

const FeedBackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');
const { response } = require("express");

const feedBackService = new FeedBackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');



const app = express();
app.set('trust proxy',1);
const port = 3000;
app.use(cookieSession({
    name:'session',
    keys:['vknerksfcre','vnewbdjbew']
}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.locals.siteName = 'ROUX Meetup ';

//this code is used for load static files like css,js,images
app.use(express.static(path.join(__dirname,'./static')));
app.use(async(req,res,next) => {

    try{
        const names = await speakersService.getNames();
        res.locals.speakerNames = names;
        console.log(res.locals);
        return  next();
    }catch(err){
        return next(err)
    }
    // res.locals.someVariable = 'Helloo';
    // return next();
})
app.use('/',routes({
    feedBackService,
    speakersService
}));

app.listen(port,()=> {
    console.log(`Express server is listnning on port ${port}`);
})