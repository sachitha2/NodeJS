const fs = require("fs");

const md =`
#this is a new file

`

fs.writeFile('./assets/notes.md',md.trim(),err=>{
    if(err){
        throw err;
    }
    console.log("file saved");
})

