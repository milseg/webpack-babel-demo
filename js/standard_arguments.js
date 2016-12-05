//ES5 simulations
export function orSimulation() {
  /**
   * - Not that legible
   * - 0 buggy
   * - Nice writeability
   */
  function product(a, b) {
    a = a || 1;
    b = b || 1;
    return a*b;
  }
  console.log(product(), product(3,7), product(0));
}


export function ternarySimulation() {
  /**
   * More legible
   * Not buggy
   * Reasonable writeability
   */
  function product(a, b) {
      a = a !== undefined ? a : 1;
      b = b !== undefined ? b : 1;
      return a*b;
  }
  console.log(product(), product(3,7), product(0));
}

export function argumentsSimulation() {
  /**
   * Less legible
   * Not buggy
   * Bad writeability
   */
  function product(a, b) {
      a = (0 in arguments) ? a : 1;
      b = (1 in arguments) ? b : 1;
      return b;
  }
  console.log(product(), product(3,7), product(0));
}

//ES6 standard parameters
export function standardParameterSimple() {
  function pow(a, b = 2) {
    return Math.pow(a, b);
  }
  console.log(pow(2), pow(2, 3));
}

export function standardParameterExpression() {
    function getYear(d = new Date()) {
      return d.getFullYear();
    }
    console.log(getYear(new Date("December 31, 2999 23:59:59")), getYear());
}
