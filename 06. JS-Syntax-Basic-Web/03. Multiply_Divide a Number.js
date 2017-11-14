function solution(arr) {
    let n = Number(arr[0]);
    let x = Number(arr[1]);
    if (x >= n){
        console.log(x * n);
    }
    else {
        console.log(n / x);
    }
}

let arr = [2, 5];
console.log(solution(arr));