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
    };
    expect(res.body).toEqual(aquarius);
  });

  describe('horoscope routes', () => {
    it('/horoscope/:name should return horoscope for each zodiac', async () => {
      const res = await request(app).get('/horoscope/aquarius');
      const aquarius = {
        sign: 'aquarius',
        date: '2022-11-01',
        horoscope:'You may have a hard time appreciating the little things this morning, dear Aquarius, as the moon forms a harsh square with the nodes of fate. Certain lifestyle luxuries, personal success, and status may not taste as sweet as you would hoped, causing you to close off emotionally. Don not be hard on yourself if you are feeling disenchanted with the world, but try to reach for that which brings you joy. The vibe will be charged within your domestic affairs when Luna squares off with Uranus this afternoon, so you will want to be on guard for finicky appliances or temperamental roommates.'
    };
    expect(res.body).toEqual(aquarius);
  });
});