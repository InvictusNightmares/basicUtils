/**
 判断是对象还是数组
**/
function isObjArr(val) {
  if (Object.prototype.toString.call(val) === "[object Array]") {
    console.log('This is Array');
  } else if (Object.prototype.toString.call(val) === "[object Object]") {
    console.log('This is Object');
  } else {
    console.log('This is unknown type');
  }
}

isObjArr([1]);
isObjArr({a: 1});
isObjArr(null);

/**
 数组去重三种方法
**/

function unique1(arr) {
  return [...new Set(arr)];
}

function unique2(arr) {
  let n = [];
  arr.forEach((item) => {
    if (n.indexOf(item) === -1) {
      n.push(item);
    }
  });
  return n;
}

function unique3(arr) {
  let n = {};
  let r = [];
  arr.forEach((item) => {
    if (!n[item]) {
      n[item] = true;
      r.push(item);
    }
  });
  return r;
}

console.log(unique1([1, 1, 2, 2, 4, 'a', 'a']));
console.log(unique2([1, 1, 2, 2, 4, 'a', 'a']));
console.log(unique3([1, 1, 2, 2, 4, 'a', 'a']));

/**
 数组乱序
**/
function sortRandom(arr) {
  return arr.sort(() => {
    return Math.random() > 0.5 ? -1 : 1;
  });
}

console.log(sortRandom([1,2,3,4,5,'6',7,'8','a','b','z']));

/**
 翻转字符串
**/

function reverseStr(str) {
  return [...str].reverse().join("");
}

console.log(reverseStr("Hello World"));

/**
 数组和对象浅拷贝
**/

function shallowCopy1(val) {
  if (typeof val !== 'object') return;
  const newVal = val instanceof Array ? [] : {};
  for (let key in val) {
    if (val.hasOwnProperty(key)) {
      newVal[key] = val[key];
    }
  }
  return newVal;
}

//ES6对象浅拷贝
function shallowCopy2(val) {
  return Object.assign(val)
}

console.log(shallowCopy1(['old', 1, true, null]));
console.log(shallowCopy1({a: 'old', b: 1, c: true, d: null}));
console.log(shallowCopy2({a: 'old', b: 1, c: true, d: null}));

/**
 数组和对象深拷贝
**/

function deepCopy1(val) {
  return JSON.parse(JSON.stringify(val));
}

function deepCopy2(val) {
  if (typeof val !== 'object') return;
  const newVal = val instanceof Array ? [] : {};
  for (let key in val) {
    newVal[key] = typeof val[key] === 'object' ? deepCopy2(val[key]) : val[key];
  }
  return newVal;
}

console.log(deepCopy1(['old', 1, true, null]));
console.log(deepCopy1({a: 'old', b: 1, c: true, d: null}));
console.log(deepCopy2(['old', 1, true, null]));
console.log(deepCopy2({a: 'old', b: 1, c: true, d: null}));
