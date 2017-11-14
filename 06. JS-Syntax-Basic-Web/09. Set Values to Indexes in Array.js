function valuesToIndexes(arr) {
    let n = Number(arr[0]);
    let newArray = [];
    for (let i = 1; i < arr.length; i++) {
        let currentIndex = arr[i].split(' - ')[0];
        let currentValue = arr[i].split(' - ')[1];
        newArray[currentIndex] = currentValue;
    }
    for (let j = 0; j < n; j++) {
        if (newArray[j] == undefined){
            console.log(0);
        }
        else{
            console.log(newArray[j]);
        }
    }
}
