
let mass = [2, 3, "text"]
function quadro (arr){
    for (key in arr){
        if (typeof arr[key] === "number"){
            arr[key] = arr[key] ** 2
        }
    }
    return arr;
}
quadro (mass);
console.log(mass);
