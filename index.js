// Collection Functions (Arrays or Objects)

// myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

// myMap
function myMap(collection, callback) {
    const result = [];
    myEach(collection, function (item) {
        result.push(callback(item));
    });
    return result;
}
const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
// myReduce
function myReduce(collection, callback, acc) {
    let startIndex = standardizeInput(collection);
    if (!acc){
        acc = startIndex[0]
        startIndex = startIndex.slice(1);
    }
 for(let i = 0; i < startIndex.length; ++i) {
    acc = callback(acc, startIndex[i],startIndex);
   
  }
  return acc;  
}
// myFind
function myFind(collection, predicate) {
let arrayCollection = standardizeInput(collection);
for(let i = 0; i < arrayCollection.length; ++i) {
    if(predicate(arrayCollection[i]))return arrayCollection[i];
    }
    return undefined;
}
// myFilter
function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function (item) {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
}

// mySize
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

// Array Functions

// myFirst
function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

// myLast
function myLast(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

// BONUS: mySortBy
function mySortBy(array, callback) {
    return array.slice().sort(function (a, b) {
        const valueA = callback(a);
        const valueB = callback(b);
        if (valueA < valueB) {
            return -1;
        } else if (valueA > valueB) {
            return 1;
        } else {
            return 0;
        }
    });
}

// BONUS: myFlatten
function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
        return newArr.concat(...array);
    } else {
        for (let item of array) {
            if (Array.isArray(item)) {
                myFlatten(item, false, newArr);
            } else {
                newArr.push(item);
            }
        }
        return newArr;
    }
}

// Object Functions

// myKeys
function myKeys(object) {
    return Object.keys(object);
}

// myValues
function myValues(object) {
    return Object.values(object);
}
