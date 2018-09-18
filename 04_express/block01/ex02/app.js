const express = require('express');
const app     = express();
const port    = 3001;

app.listen(port, () => {
    console.log(`server is running on port ${port} ...`);
})

app.get(`/:lang`, (req, res)=>{
    let{ lang } = req.params;
        
    let languajes = {
        HI: 'नमस्ते दुनिया',
        NL: 'Hallo Wereld',
        FR: 'Bonjour le monde',
        ES: 'Hola Mundo',
        IT: 'Ciao Mondo',
        CH: '你好，世界',
        JP: 'こんにちは世界',
        AR: 'مرحبا بالعالم',
        EN: 'Hello world'
    }
    for(var i in languajes){
        if(lang !== i){
            languajes[lang] 
        }
    }
    
    res.send(`<h1>${languajes[lang]}</h1>`)
})


app.get('*',(req, res)=>{
    res.send('<h1>Hello World</h1>')
})