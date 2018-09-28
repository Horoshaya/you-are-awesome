// DO WHATEVER YOU WANT HERE
let count = 0;
let asyncCount = 0;
const createEnumerableProperty = () => {};
const createNotEnumerableProperty = () => { return Symbol()}; //propertyName = value
const createProtoMagicObject = () => { return Function};
const incrementor = () => {count++; return incrementor};
incrementor.valueOf = () => count;

const asyncIncrementor = () => {return ++asyncCount};
const createIncrementer = () => {
    let count = 0;
    function* next() {while (true) yield ++count}
    return next()
};
// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (value) => {     
    return new Promise((a) => {setTimeout(() => {a(value);}, 1000)});
};

const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

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
