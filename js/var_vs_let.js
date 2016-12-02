//const behavior is analogous to let, except that the first is a constant
//
/**
 * Shows var hoisting
 */
export function varHoisting() {
  {{{{{{var a = 1;}}}}}}
  console.log(a);//expects sees a
}

export function letNotHoisted() {
  {{{{{{let a = 1;}}}}}}
  console.log(a);
}

export function varVsLet () {
  var a = 1;
  {
    a = 2;
    console.log('Inside a: ', a);//expect 2
  }
  console.log('Outside a', a);//expect 2
  let b = 3;
  {
    //let introduces block scope
    let b = 1;
    console.log("Inside b: ",b);//expect 1
  }
  console.log("Outside b: ", b);//expect 3
}

export function varVsLetLoop() {
  for(var i = 0; i < 10; i++) {}
  console.log("i",i);//expect i10
  for(let j = 0; j < 10; j++) {}
  console.log("j",j);//expect j not found error
}

export function varVsLetLoop2() {
  var fns = [];
  for(var i = 0; i < 10; i++) {
    fns.push(function () {
      console.log(i);
    });
  }
  fns[8]();
  fns[2]();//expect 10 10
  fns = [];
  for(let i = 0; i < 10; i++) {//each iteration has its own "i"
    fns.push(function () {
      return i;
    });
  }

  console.log(fns[8](), fns[2]());//expect 8 2?
}

export function testVar() {
  var a= 2;
  var f = [];
  f.push(function () {
    return a;
  });
  a = 3;
  return f[0];
}

export function blockOverLocal() {
  var a = 3;
  {
    const a = 2;
    console.log(a);
  }
  console.log(a);
}

//UNCOMMENT THE FUNCTIONS BELLOW FOR THE PROOF OF CONCEPT
/**
 * Constant object cant be modified but it cannot be assigned by reference
 */
export function canModifyConstObject() {
  const a = {
    name: "test",
  };
  a.name = 'modify';
  console.log(a.name);//modify
  //a = {};//not allowed
}
export function cannotRedeclareLet() {
  var a = 1;
  //let a = 2;//error

  let b = 1;
  //const b = 2;//error
}

export function cannotAssignAfterDeclareConst() {
  //const b;
  //b = 2;//error
}
