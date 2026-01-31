function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num);
}
console.log(processArray([2, 3, 4, 5, 6])); // output[4, 3, 16, 5, 36]