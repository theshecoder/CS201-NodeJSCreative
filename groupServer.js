
var morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..", 
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----." };


var http = require('http');
var url = require('url');
var fs = require('fs');
var ROOT_DIR = "html/";
var port = 8080;

http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true, false);
    
    if(urlObj.pathname.indexOf("code") != -1)
    {
        console.log("In REST Service");
        
        var message = urlObj.query["q"].toLowerCase();
        var result = "";
        
        for(var i = 0; i < message.length; i++)
        {
            if(message.charAt(i).match(/[a-z0-9]/))
            {
                console.log(message.charAt(i));
                
                switch(message.charAt(i))
                {
                    case 'a': result += morseCode["a"]; break;
                    case 'b': result += morseCode["b"]; break;
                    case 'c': result += morseCode["c"]; break;
                    case 'd': result += morseCode["d"]; break;
                    case 'e': result += morseCode["e"]; break;
                    case 'f': result += morseCode["f"]; break;
                    case 'g': result += morseCode["g"]; break;
                    case 'h': result += morseCode["h"]; break;
                    case 'i': result += morseCode["i"]; break;
                    case 'j': result += morseCode["j"]; break;
                    case 'k': result += morseCode["k"]; break;
                    case 'l': result += morseCode["l"]; break;
                    case 'm': result += morseCode["m"]; break;
                    case 'n': result += morseCode["n"]; break;
                    case 'o': result += morseCode["o"]; break;
                    case 'p': result += morseCode["p"]; break;
                    case 'q': result += morseCode["q"]; break;
                    case 'r': result += morseCode["r"]; break;
                    case 's': result += morseCode["s"]; break;
                    case 't': result += morseCode["t"]; break;
                    case 'u': result += morseCode["u"]; break;
                    case 'v': result += morseCode["v"]; break;
                    case 'w': result += morseCode["w"]; break;
                    case 'x': result += morseCode["x"]; break;
                    case 'y': result += morseCode["y"]; break;
                    case 'z': result += morseCode["z"]; break;
                    case '1': result += morseCode["1"]; break;
                    case '2': result += morseCode["2"]; break;
                    case '3': result += morseCode["3"]; break;
                    case '4': result += morseCode["4"]; break;
                    case '5': result += morseCode["5"]; break;
                    case '6': result += morseCode["6"]; break;
                    case '7': result += morseCode["7"]; break;
                    case '8': result += morseCode["8"]; break;
                    case '9': result += morseCode["9"]; break;
                    case '0': result += morseCode["0"]; break;
                }
                
                result += " ";
               
            }
            else if(message.charAt(9) === ' ')
            {
                result += "   ";
            }
            else{
                result += message.charAt(i);
            }
        }
        console.log(result);
        
        res.writeHead(200);
        res.end(result);
        
    }
    else
    {
        console.log("REST failed. Initializing File Server");
        
        fs.readFile(ROOT_DIR + urlObj.pathname, function(err, data) {
            if(err){
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            
            res.writeHead(200);
            res.end(data);
        });
    }
    
}).listen(port);