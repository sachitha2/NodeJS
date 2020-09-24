const events = require("events");


const emitter = new events.EventEmitter();


emitter.on("customEvent",(message,user)=>{
    console.log(`${user}:${message}`);
});

// emitter.emit("customEvent","Hello world","Computer");

// emitter.emit("customEvent","Thats prety cool","alex");

process.stdin.on("data",data=>{
    const input = data.toString().trim();

    if(input === "exit"){
        emitter.emit("customEvent","goodbye","process");
        process.exit();
    }

    emitter.emit("customEvent",input,"terminal");
})