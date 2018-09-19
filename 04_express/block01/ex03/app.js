const express = require('express');
const app = express();
const port = 3001;

let languages = {}

app.listen(port, () => {
    console.log(`server is running on port ${port} ...`);
})



app.get('/:lang/:word', (req, res) => {
    let { lang } = req.params;
    let { word } = req.params;
    if(!languages[lang]){
        languages[lang] = word;
        res.send(`<h1>${lang} added with the message ${word}</h1>`)
    }else{
        res.send(`<h1>${languages[lang]}</h1>`)
    }

})

app.get('/delete/:lang/:word', (req,res) => {
    let { lang } = req.params;
    let { word } = req.params;
    
    delete languages[lang]
    res.send(`<h1>${lang} removed</h1>`)
    
})

app.get('/:lang', (req,res) => {
    let { lang } = req.params;
    let { word } = req.params;
    if(lang !== languages[lang]){
        res.send(`<h1>Hello World in ${lang} not found</h1>`)
    }else{
        res.send(`<h1>${languages[lang]}</h1>`)
    }     
})




  
  