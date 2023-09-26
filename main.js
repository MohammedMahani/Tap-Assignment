let exampleOne = [3, 0, 1];
// let exampleTwo = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// let exampleThree = [0, 1];

findMissing(exampleOne);

function findMissing(arr) {
  let found = false;
  for (let i = 0; i <= arr.length; i++) {
    found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        found = true;
      }
    }
    if (!found) {
      console.log('Missing number is ' + i);
    }
  }
}
