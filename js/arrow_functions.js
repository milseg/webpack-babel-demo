export function oneStatemenAndPm() {
  var arr = [1,2,3];
  //square array
  console.log(arr.map(el => el*el));
}

export function arrowFunctionReusability() {
  var arr = [1,2,3];
  var square = el => el*el;
  //square array
  console.log(arr.map(square));
}

export function emptyPmsArrowFunction() {
  var randint = () => Math.floor(Math.random()*1000000);
  console.log(randint());
}

export function multipleStatementAndPm() {
  var arr = [{name: 'name', value: 'John'}, {name: 'age', value: 24}];
  console.log(arr.reduce((prev, current) => {
    prev[current.name] =  current.value;
    return prev;
  }, {}));
}


//DYNAMIC SCOPE
export function thisScope() {
  console.log(this === global);//should be true on node js when called from global scope
  console.log(this === window);//should be true on native browser. It isnt in babel for some reason. I'm still finding out why
  console.log(this === module.exports);//true when called from a module scope, when using amd
}

//LEXICAL SCOPE --> undefined
export const arrowFunctionThisScope = () => {
  console.log(this === global);
  console.log(this === window);
  console.log(this === module.exports);
  console.log(this);
};

export function thisStrict() {
  'use strict';
  console.log(this);//expect undefined on strict mode
}

/**
 * This function shows bind doesnt work for arrow functions.
 * Lexical scope is imutable
 */
export function bindDoesntWork() {
  arrowFunctionThisScope.bind("teste");
  arrowFunctionThisScope();
}
