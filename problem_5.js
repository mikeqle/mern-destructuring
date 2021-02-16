const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // output: 'value'
console.log(secondKey);  // ouput: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // output: 1
console.log(willThisWork); // output: 5