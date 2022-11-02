const fetch = require ('cross-fetch');
const { Router } = require('express');

module.exports = Router();
.get('/horoscope/:name', (req, res) => { 
    const name = zodiacs.find((sign) => sign.name === req.params.name);
    
    res.json(name.horoscope);
  });