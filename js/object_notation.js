export function newSyntax() {
  var name = 'John', birthYear = '1992';
  function age() {
    return new Date().getFullYear() - this.birthYear;
  }
  /**
   * 1. keys matched with scope vars, without es5 ':' notation
   */
  var person = {
    name,
    birthYear,
    age,
    /**
     * 2. shorter method declaration
     */
    toString(){return `${this.name} is ${this.age()} years old`;}
  };
  console.log(person.toString());
}

export function dynamicAtribbutesDefinition() {
  var reference, ch, book;
  ch = 'chapter';
  b = 'book';
  reference = {
    [ch]: 5,
    [b]: 'The four hour workweek'
  };
  console.log(reference); //{chapter: 5, book: 'The four hour workweek'}
}

export function protoStandandardized() {
  //either __proto__ attribute and Object.setPrototypeOf were standardized on es6
  var two_dim = {x: 1.0, y: 2.2};
  var three_dim = {__proto__: two_dim, z: 2.0};
  var four_dim = {w: 5.0};
  Object.setPrototypeOf(four_dim, three_dim);
  console.log(four_dim.x, four_dim.y, four_dim.z, four_dim.w);
}

export function superKeyword() {
  var sandwich = {
    ingredients () { return 'bread';}
  };
  var cheese_sandwich = {
    __proto__: sandwich,
    ingredients () {
      return `${super.ingredients()}, cheese`;
    }
  };
  console.log(cheese_sandwich.ingredients());
}

//just a nice es5 feature to remember
export function es5GetSet() {
  var hat = {
    __price: 1,
    get price() {return this.__price++},
    set price(p) {this.__price = p/2;}
  };
  console.log(hat.price, hat.price);
  hat.price = 2;
  console.log(hat.price, hat.price);
}
