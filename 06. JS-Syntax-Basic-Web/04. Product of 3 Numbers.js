function productSign(arr) {
    let nums = arr.map(Number);
    let counter = 0;
    for (let num in nums){
        if (nums[num] < 0){
            counter++;
        }
        if (nums[num] == 0){
            return console.log('Positive');
        }
    }
    if (counter % 2 == 0){
        console.log('Positive');
    }
    else {
        console.log('Negative');
    }
}

let arr = [2, 0, -1];
console.log(productSign(arr));