const Big = require('big.js');

function fibonacchi(n) {
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  return fibonacchi(n - 2) + fibonacchi(n - 1);
}

function fibonacchiLine(n) {
  if (n == 0) {
    return 0;
  }

  if (n <= 2) return 1;

  let x = 1;
  let y = 1;
  let acc = 0;

  for (let i = 2; i < n; i++) {
    acc = x + y;
    x = y;
    y = acc;
  }

  return acc;
}

String.prototype.expandExponential = function () {
  return this.replace(/^([+-])?(\d+).?(\d*)[eE]([-+]?\d+)$/, function (x, s, n, f, c) {
    var l = +c < 0,
      i = n.length + +c,
      x = (l ? n : f).length,
      c = (c = Math.abs(c)) >= x ? c - x + l : 0,
      z = new Array(c + 1).join('0'),
      r = n + f;
    return (s || '') + (l ? (r = z + r) : (r += z)).substr(0, (i += l ? z.length : 0)) + (i < r.length ? '.' + r.substr(i) : '');
  });
};

function fibonacchiGold(n) {
  sqrt = Math.sqrt(5); // получаем корень из 5
  phi = (sqrt + 1) / 2; // прибавляем к корню из 5 + 1 и делим на 2
  return Math.floor(phi ** n / sqrt + 0.5);
}

function fibonacchiMatrix(n) {
  var a = 1,
    ta,
    b = 1,
    tb,
    c = 1,
    rc = 0,
    tc,
    d = 0,
    rd = 1;

  while (n) {
    //power is odd
    if (n & 1) {
      tc = rc;
      rc = rc * a + rd * c;
      rd = tc * b + rd * d;
    }

    ta = a;
    tb = b;
    tc = c;
    a = a * a + b * c;
    b = ta * b + b * d;
    c = c * ta + d * c;
    d = tc * tb + d * d;

    n >>= 1;
  }
  return rc;
}

module.exports.fibonacchi = fibonacchi;
module.exports.fibonacchiLine = fibonacchiLine;
module.exports.fibonacchiGold = fibonacchiGold;
module.exports.fibonacchiMatrix = fibonacchiMatrix;
