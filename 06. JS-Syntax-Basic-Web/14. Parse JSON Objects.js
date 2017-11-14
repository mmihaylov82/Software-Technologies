function ParseJSONObjects(input) {
    for (let i = 0; i < input.length; i++) {
        let result = JSON.parse(input[i]);
        console.log(`Name: ${result.name}`);
        console.log(`Age: ${result.age}`);
        console.log(`Date: ${result.date}`);
    }
}
ParseJSONObjects([
    '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
]);