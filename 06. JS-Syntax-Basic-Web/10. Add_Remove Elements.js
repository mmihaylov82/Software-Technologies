function addRemoveElements(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        let arg = Number(tokens[1]);
        if (command == "add"){
            array.push(arg);
        }
        if (command == "remove") {
            array.splice(arg, 1);
        }
    }

    for (let i of array) {
        console.log(i);
    }
}