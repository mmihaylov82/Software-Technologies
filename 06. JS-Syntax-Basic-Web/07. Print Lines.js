function printLines(arr) {
    for (let item in arr) {
        if (arr[item] == "Stop"){
            return;
        }
        else{
            console.log(arr[item]);
        }
    }
}

let arr = [3, 6, 5, 4, "Stop", 10, 12];
printLines(arr);