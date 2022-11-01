const zodiacs = [
  {
    'id': '1',
    'name': 'aquarius',
    'dates': 'Jan 21 - Feb 19',
    'symbol': 'Water Bearer',
    'horoscope': 'The planet Saturn, which rules government structures and responsibility, is in your sign this year, Aquarius. You are the rebel of the zodiac, and as the water-bearer, it is your job to fight injustice. 2022 sees everyone else trying to get on your level thanks to your influence on the usually-stodgy Saturn. But while you are out there trying to save the world, Aquarius, do not forget about yourself. And you need to pay attention to your personal life, because when it comes to money and love, 2022 is one for the record books.'
  },
  {
    'id': '2',
    'name': 'aries',
    'dates': 'Mar 21 - Apr 19',
    'symbol': 'Ram',
    'horoscope': 'You are the first sign of the zodiac and love to get your way. Unfortunately, you experience financial frustrations early in the year when Venus is retrograde. You want to level up in life but feel stuck. Thankfully, when Venus, the planet of abundance, enters your sign in May, you are ready to make bank. Plus, the lucky planet Jupiter enters your sign, Aries, bringing blessings to your love life and career. 2022 is a great year to go first.'
  },
  {
    'id': '3',
    'name': 'cancer',
    'dates': 'Jun 21 - Jul 22',
    'symbol': 'Crab',
    'horoscope': 'You are ruled by the moon, and as a result, are sensitive, intuitive, and throw fabulous dinner parties. Your emotional depth is your strength, and do not let anyone tell you otherwise. Just make sure to double down on self-care this year, especially during the eclipses in fellow water sign Scorpio, as this energy can make you paranoid. 2022 is it all stressful, however. The latter half of the year brings blessings on the love and financial front.'
  },
  {
    'id': '4',
    'name': 'capricorn',
    'dates': 'Dec 22 - Feb 19',
    'symbol': 'Goat',
    'horoscope':'You are a natural-born leader, and fine, you are almost always right. People look at Capricorns and assume that they have everything put together, and that is the image you like to present. But this year, when your ruling planet, strict Saturn, is in independent Aquarius, you have to prioritize yourself. How much of your happiness is sincere, and how much depends on the opinions of others? Answering that question is your 2022 goal, you devilish sea-goat. '
  },
  {
    'id': '5',
    'name': 'gemini',
    'dates': 'May 21 - Jun 20',
    'symbol': 'Twins',
    'horoscope':'Your ruling planet, Mercury, goes through four of its infamous retrogrades this year, Gemini. You are still as desired as ever, so always double-check that your work emails are typo-free and that you are texting the right sidepiece. But when the asteroid Ceres, which is associated with marriage, delicious food, and the home, enters your sign, you find yourself feeling more concerned with home and family life than partying. The summer should be especially romantic for you, as the lover planet Venus dances through your sign.'
  },
  {
    'id': '6',
    'name': 'leo',
    'dates': 'Jul 23 - Aug 22',
    'symbol': 'Lion',
    'horoscope':'Leo, you lovely lion, you will get so many things that you want this year. Because your ruling planet is the sun, the spotlight always seems to shine on you, and that is just how you like it. So just make time to factor in cat naps during 2022 because two solar eclipses will shake up your world. The theme for these eclipses is transformation, so while they may feel hectic, you will end up on top (and maybe with a new job or love interest). Oh, and Leo, do not cut that gorgeous mane during Venus retrograde.'
  },
  {
    'id': '7',
    'name': 'libra',
    'dates': 'Sept 23 - Oct 22',
    'symbol': 'Balance',
    'horoscope':'When 2022 begins, your ruling planet, Venus, is retrograde. Because the planet rules love, beauty, and abundance, it is easier to feel as if you shine dimmer during this time. But you don not at all; it is just a time to regroup and re-establish your goals regarding love and money. Because when the year ends, with marriage-oriented asteroid Ceres in your sign, you will feel like the shiniest earthling in the world.'
  },
  {
    'id': '8',
    'name': 'pisces',
    'dates': 'Feb 19 - Mar 20',
    'symbol': 'Fish',
    'horoscope':'You are perhaps the most emotionally deep and psychic sign of the zodiac, Pisces, but that blessing can also be a burden. In 2022, you finally find healthy and effective ways to manage the stress and anxiety of having such knowledge. The messenger planet Mercury teaches you how to stand up for yourself, and when your ruling planet, Neptune, goes retrograde, the stars snip out the losers in your life for you.'
  },
  {
    'id': '9',
    'name': 'sagittarius',
    'dates': 'Nov 22 - Dec 21',
    'symbol': 'Archer',
    'horoscope':'Let us be honest, Sagittarius. With lucky Jupiter as your ruling planet, nearly every year is a good year to be the archer of the zodiac. But when Jupiter, which rules growth, expansion, and higher learning, goes retrograde during the second half of 2022, you finally have to face the false narratives in your life. And yes, that may mean finally blocking your toxic exes phone number.'
  },
  {
    'id': '10',
    'name': 'scorpio',
    'dates': 'Oct 23 - Nov 21',
    'symbol': 'Scorpion',
    'horoscope':'Your intensity is a blessing and a curse, Scorpio. On the one hand, you are mysterious and so charismatic you put a spell on people. On the other, you can be jealous and sometimes even manipulative. The 2022 eclipses fall on the Scorpio/Taurus axis, which means that these chaotic moments will affect you more than most. However, if you can get through the eclipses without picking fights, you will end the year like a phoenix, which is considered the highest evolution of a Scorpio. '
  },
  {
    'id': '11',
    'name': 'taurus',
    'dates': 'Apr 20 - May 20',
    'symbol': 'Bull',
    'horoscope':'Sure, darling Taurus, your ruling planet Venus is retrograde when 2022 begins, but do not let that get you down. Frankly, it would be best to focus on the eclipses that occur on the Taurus/Scorpio axis throughout the year. These will be times of significant change, but it is all pushing you towards your destiny. When the independent planet Uranus conjuncts the North Node in your sign, Taurus, you receive a major push from the universe to transform into a more evolved version of yourself.'
  },
  {
    'id': '12',
    'name': 'virgo',
    'dates': 'Aug 23 - Sep 22',
    'symbol': 'Virgin',
    'horoscope':'You are the healer of the zodiac, Virgo. As a result, you tend to put more effort into taking care of others rather than yourself. But do not forget that the tarot card associated with your sign is the hermit. Sometimes, you have to withdraw to focus on yourself. Your ruling planet, Mercury, is all over the place in 2022, so an extra dose of self-care will do you well. Retreating to refocus does not mean that you are doomed to be alone. This year, especially around your birthday, brings surprises and blessings to your love life.'
  }
];

module.exports = { zodiacs };
