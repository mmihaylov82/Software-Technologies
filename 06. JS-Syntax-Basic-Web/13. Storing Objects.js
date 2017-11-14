function storingObjects(arr) {
    let listOfObj = [];

    for (let i = 0; i < arr.length; i++) {
        let splitArr = arr[i].split(' -> ');
        let obj = {};
        obj.name = splitArr[0];
        obj.age = splitArr[1];
        obj.grade = splitArr[2];
        listOfObj.push(obj);
    }

    for (let obj of listOfObj) {
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Grade: ${obj.grade}`);
    }
}