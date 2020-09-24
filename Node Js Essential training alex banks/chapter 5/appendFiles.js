const fs = require("fs");
const cData = require("./assets/colors.json");

cData.colorsList.forEach(c => {
    fs.appendFile("./assets/colors.md",`${c.color}:${c.hex}\n`,err=>{
        if(err){
            throw err;
        }else{

        }
    });
})