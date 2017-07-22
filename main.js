numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '€'
    }
});
numeral.locale('fr');

(function() {
  var number = numeral();
  var counter = document.querySelector('#counter span'),
      fraudInSecond = 60000000000 / 365 / 24 / 60 / 60,
      total = fraudInSecond,
      loop = function() {
        total += fraudInSecond;
        counter.innerHTML = numeral(total).format('0,0');
      };

  loop();
  setInterval(loop, 1000);
}());
