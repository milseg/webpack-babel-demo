var person = {
  name: 'John',
  age: '10',
  address: {
      street: 'first',
      number: 123
  }
};

export function destructuringObjectOnDeclaration() {
  var {name, age} = person;
  console.log(name, age);
}

export function destructuringObjectOnDeclarationRenaming() {
  var {name: n, age: a} = person;
  console.log(n, a);
}

export function destructuringObjectFieldUndefined() {
  var {gender, status='Active'} = person;
  console.log(gender, status);//undefined "Active"
}

export function destructuringNested() {
  var {address: {street, number}} = person;
  console.log(street, number);
}

export function destructuringUndefinedNested() {
  var {account: {code, agency}} = person;//error cant read attribute from undefined
  console.log(code, agency);
}

export function destructuringArray() {
  var [first] = [5];
  console.log(first);//5
}

export function destructuringArrayJumping() {
  var [x,,y,z,,w,k=1] = [1,2,3,4];
  console.log(x,y,z,w,k);//1 3 4 undefined 1
}

export function destructuringArrayNested() {
  var [,[,x]] = [[1,2],[3,4]];
  console.log(x); //4
}

export function destruturingFunctionWithObject() {
  function rand({min = 0, max = 50}) {
    var val = Math.random()*(max-min);
    var x = Math.floor(val)+min;
    console.log(x);
    return x;
  }
  rand({min: 100, max: 150});//number between 100 and 150
  rand({max: 4});//between 0 and 4
  rand({});//between 0 and 50
  rand();//undefined params -->error
}

export function destruturingFunctionWithArray() {
  function rand([min = 0, max = 50]) {
    var val = Math.random()*(max-min);
    var x = Math.floor(val)+min;
    console.log(x);
    return x;
  }
  rand([100, 150]);//number between 100 and 150
  rand([,4]);//between 0 and 80
  rand([]);//between 0 and 50
  rand();//undefined params -->error
}

export function destructuringChangingParams() {
  var x = 3, y = 9;
  [x,y] = [y,x];
  console.log(x,y);//9 3
}
