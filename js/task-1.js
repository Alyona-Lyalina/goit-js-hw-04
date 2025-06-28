function isEnoughCapacity(products, containerSize) {
    const values = Object.values(products);

    let sum = 0;

    for (const element of values) {
    sum += element    
    };

    let result 
    
    if (sum <= containerSize) {
        result = true;
    } else {
        result = false
    }
    return result
}



console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false