export function es5VSes6() {
  var name = 'john';
  var es5 = 'Hey: '+name+'!';
  var es6 = `Hey
  ${name} !
  `;
  console.log(es5, es6);
}

export function expressionInTemplate() {
  function isEven(x) {
    return x%2 === 0;
  }

  console.log(`1+1=${1+1}`);
  console.log(`is2even =${isEven(2)}`);
}

export function taggedFunction () {
  var p1 = 120, p2 = 39.99;
  function money(strings, ...values) {
    var result = [];
    values.forEach(function (value, index) {
      value = typeof(value) === 'number' ?
              `$${value.toFixed(2)}` : value;
      result.push(strings[index], value);
    });
    return result.join('');
  }
  console.log(money `1x ${p1} or 3x ${p2}`);
}
