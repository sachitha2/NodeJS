const fs = require("fs");

fs.renameSync("./assets/colors.md","./assets/newColors.md");

fs.rename("./assets/notes.md","./storage-files/newNotes.md",err => {
    if(err){
        throw err;
    }else{

    }
});


setTimeout(() => {
    fs.unlinkSync("./assets/del.txt");
},400);