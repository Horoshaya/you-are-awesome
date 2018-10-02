// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = () => {};
const createNotEnumerableProperty = () => { return Symbol()}; //propertyName = value
const createProtoMagicObject = () => { return Function};
                                      
let count = 0;
const incrementor = () => {count++; return incrementor};
incrementor.valueOf = () => count;

let asyncCount = 0;
const asyncIncrementor = () => {return ++asyncCount};
const createIncrementer = () => {
    let count = 0;
    function* next() {while (true) yield ++count}
    return next();
};
// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (value) => {     
    return new Promise((a) => {setTimeout(() => {a(value);}, 1000)});
};
const getDeepPropertiesCount = (obj) => {
    let count = 0;
    for (key in obj) {
        count++;
        count += getDeepPropertiesCount(obj[key]);
    };
    return count;
};
const createSerializedObject = () =>  {return null;}
const sortByProto = (arr) =>  {return arr.sort((a, b) => b.__proto__ - a.__proto__)};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
