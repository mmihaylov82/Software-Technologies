function printReversed(arr) {
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let arr = [5, 5.5, 24, -3];
printReversed(arr);