const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../lib/zodiac-data');

describe('zodiac routes', () => {
  it('/zodiacs should return a list of zodiac signs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiacs/:id should return zodiac details', async () => {
    const res = await request(app).get('/zodiacs/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
      horoscope: 'The planet Saturn, which rules government structures and responsibility, is in your sign this year, Aquarius. You are the rebel of the zodiac, and as the water-bearer, it is your job to fight injustice. 2022 sees everyone else trying to get on your level thanks to your influence on the usually-stodgy Saturn. But while you are out there trying to save the world, Aquarius, do not forget about yourself. And you need to pay attention to your personal life, because when it comes to money and love, 2022 is one for the record books.'

    };
    expect(res.body).toEqual(aquarius);
  });

  it('/horoscope/:sign should return horoscope for each zodiac', async () => {
    const res = await request(app).get('/horoscope/libra');
    const libra = {
      horoscope:'When 2022 begins, your ruling planet, Venus, is retrograde. Because the planet rules love, beauty, and abundance, it is easier to feel as if you shine dimmer during this time. But you don not at all; it is just a time to regroup and re-establish your goals regarding love and money. Because when the year ends, with marriage-oriented asteroid Ceres in your sign, you will feel like the shiniest earthling in the world.'
    };
    expect(res.body).toEqual(libra);
  });
});
