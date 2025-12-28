function findMaxMinSum(arr) {
    let max = null
    let min = null

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] !== 'number') {
            continue
        }
        if (max === null || arr[i] > max) {
            max = arr[i]
        }
        if (min === null || arr[i] < min) {
            min = arr[i]
        }
    }
    let sum = max + min;

    return "Max: " + max + ", Min: " + min + ", Sum: " + sum;
}
function calculate() {
    let numbers = [3, 5, 6, 8, 11];
    let result = findMaxMinSum(numbers);

    document.getElementById("result").innerText = result;
    comsole.log(result);
}