// methods for looping an array

// 1. for loop simple method : in this method we give a for loop from index value 0 to index value 1 less than length of an Array
// example

let array = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < array.length; i++) {
    console.log('method1', array[i]);
}
console.log('------------');

// 2. for loop of method : in this method we use for loop but this time simply saying <variable name> of <array name>
// example

for (let elements of array) {
    console.log('method2', elements);
}
console.log('------------');

// 3.While loops: in this method we use index and increase it auto loop our array
// example 

let index = 0;
while (index < array.length) {
    console.log('method3', array[index]);
    index++;
}
console.log('------------');