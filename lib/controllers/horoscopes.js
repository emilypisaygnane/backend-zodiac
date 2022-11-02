const fetch = require('cross-fetch');
const { Router } = require('express');

module.exports = Router()
  .get('/:sign', async (req, res) => {
    const horoscope = await getHoroscope(req.params.sign);
    return res.json(horoscope);
  });

async function getHoroscope(sign) {
  const res = await fetch(`https://ohmanda.com/api/horoscope/${sign}`);
  return await res.json();
}
