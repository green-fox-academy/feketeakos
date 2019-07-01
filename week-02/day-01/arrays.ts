'us strict';

let myName: string = "Akos";
let yourName: string = "Zsolti";
let hisName: string = "Evetke";

let cutePuppy: string[] = ["Morzsi", "Liza", "Furkesz", "Riley"];

for (let i: number = 0; i < cutePuppy.length; i++) {
    console.log(cutePuppy[i]);
}

console.log(cutePuppy);

cutePuppy.forEach(function (item) {
    console.log(item);
})


let diffArray: [string, boolean] = ["Mark", true];


diffArray.forEach(function (item) {
    console.log(item)
})

diffArray.splice(0, 1, "Akos");
diffArray.forEach(function (item) {
    console.log(item)
})

let doubled: number[] = [1, 2, 3, 4, 5].map(function (i) {
    if (i % 2 === 0) {
        return i ** 2
    }
}).filter(function(item) {
    return item == undefined;
});
console.log(doubled);

let odds: number[] = [1, 2, 3, 4, 5].filter(function(item) {
    return item % 2 === 1;
})
console.log(odds);

let array1: number[] = [1, 2];
let array2: number[] = [3, 4];

let array3: any[] = [array1, array2];
console.log(array3);

let array4: any[] = [...array1, ...array2];
console.log(array4);
