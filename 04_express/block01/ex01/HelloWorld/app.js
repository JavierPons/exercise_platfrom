const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})



app.get(`/:lang`, (req, res)=>{
    let{ lang } = req.params;
    if(lang === 'HI'){
        lang = 'नमस्ते दुनिया'
    }else if(lang === 'NL'){
        lang = 'Hallo Wereld'
    }else if(lang === 'FR'){
        lang = 'Bonjour le monde'
    }else if(lang === 'ES'){
        lang = 'Hola Mundo'
    }else if(lang === 'IT'){
        lang = 'Ciao Mondo'
    }else if(lang === 'CH'){
        lang = '你好，世界'
    }else if(lang === 'JP'){
        lang = 'こんにちは世界'
    }else if(lang === 'AR'){
        lang = 'مرحبا بالعالم'
    }else if(lang === 'EN'){
        lang = 'Hello world'
    }
    res.send(`<h1>${lang}</h1>`)
})

app.get('*',(req, res)=>{
    res.send('<h1>Hello World</h1>')
})