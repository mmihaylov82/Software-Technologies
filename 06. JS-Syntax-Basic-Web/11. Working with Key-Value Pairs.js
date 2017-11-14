function keyValuePairs(inputArr) {
    let obj = {};
    let last = inputArr[inputArr.length - 1];

    for (let i = 0; i < inputArr.length - 1; i++) {
        let key = inputArr[i].split(' ')[0];
        let value = inputArr[i].split(' ')[1];
        obj[key]= value;
    }

    if (obj.hasOwnProperty(last)){
        console.log(obj[last]);
    }
    else {
        console.log("None");
    }
}