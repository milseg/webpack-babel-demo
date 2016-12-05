//SPREAD "..." Desmember array in values
export function es5spreadPms() {
  var arr = [1, 2, 3, 4];
  function sum(x, y, z) {
    return x+y+z;
  }
  console.log(sum.apply(null, arr));//last array element isnt used
}


export function spreadPms() {
  var arr = [1, 2, 3, 4];
  function sum(x, y, z) {
    return x+y+z;
  }
  console.log(sum(...arr));//last array element isnt used
}


export function es5spreadArray() {
  var arr1 = [1,2,3];
  var arr = arr1.concat([4, 5, 6]);
  console.log(arr);
}

export function es6spreadArray() {
  var arr1 = [1,2,3];
  var arr = [...arr1, 4, 5, 6];
  console.log(arr);
}

//REST: Grouping values in array
export function pmsRest() {
  function toArray(...args) {
    return args;
  }
  console.log(toArray(1, 5, 7));
}
