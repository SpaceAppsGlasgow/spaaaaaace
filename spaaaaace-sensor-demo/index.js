var request = require("request");


function generateTempObject(){
    return {
       "type": "temperature",
       "value": Math.random()*100,
       "units": "K"
    }
}

function generateLightObject(){
    return {
       "type": "light",
       "value": Math.random()*3000,
       "units": "Lux"
    }
}

function generateCO2Object(){
    return {
       "type": "CO2",
       "value": Math.random()*10,
       "units": "CM^3"
    }
}


function sendMessage(){
    console.log("Sending message")
    var selection = Math.floor(Math.random()*3)

    var devices = ["BOB1", "BOB2", "DOGE1", "DOGE2", "SPAAAACE1"];
    var device = devices[Math.floor(Math.random()*(devices.length-1))];
    switch (selection) {
        case 0: 
        request.post("http://localhost:3000/node/"+device+"/data.json", {form: {d: JSON.stringify(generateCO2Object())}}, function(err, res){
            console.log(res);
        });
	break;
        case 1:
        request.post("http://localhost:3000/node/"+device+"/data.json", {form: {d: JSON.stringify(generateLightObject())}}, function(err, res){
            console.log(res);
        });
        break;
        case 2:
        request.post("http://localhost:3000/node/"+device+"/data.json", {form: {d: JSON.stringify(generateLightObject())}}, function(err, res){
            console.log(res);
        });
        break;
    }
    setTimeout(() => {
        sendMessage();
    }, 1000+(Math.random()*10000))
    
}

setTimeout(() => {
    sendMessage();
},1+(Math.random()*10000))
