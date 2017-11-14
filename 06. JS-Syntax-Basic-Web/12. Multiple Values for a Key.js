function multipleValuesForAKey(inputArr) {
    let obj = {};
    let last = inputArr[inputArr.length - 1];

    for (let i = 0; i < inputArr.length - 1; i++) {
        let key = inputArr[i].split(' ')[0];
        let value = inputArr[i].split(' ')[1];

        if (!obj.hasOwnProperty(key)){
            obj[key] = [];
        }

        obj[key].push(value);
    }

    if (obj.hasOwnProperty(last)){
        obj[last].forEach(x => console.log(x));
    }
    else {
        console.log("None");
    }
}