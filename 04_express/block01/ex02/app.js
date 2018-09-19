const express = require('express');
const app     = express();
const port    = 3001;

let languages = {
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
app.listen(port, () => {
    console.log(`server is running on port ${port} ...`);
})

app.get('/:lang/:word', (req, res)=>{
  let { lang } = req.params;
  let { word } = req.params;
        if(languages[lang]){
             languages[lang]
        }else{
             languages[lang] = word;
}
      
res.send(`<h1>${languages[lang]}</h1>`)
    
})

app.get('*',(req, res)=>{
    res.send('<h1>Hello World</h1>')
 })