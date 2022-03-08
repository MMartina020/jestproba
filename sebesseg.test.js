const sebesseg = require('sebesseg');

test('az ut 2m az ido 2sec, akkor a sebesseg 1m/s', () => {
    expect(sebesseg(2, 2)).toBe(1);
    //ide lehet bővíteni
  });

  test('az ut 2m az ido 0sec, akkor hibát kell kapjunk', () => {
    expect(sebesseg(2, 0)).toBe('err');
  });