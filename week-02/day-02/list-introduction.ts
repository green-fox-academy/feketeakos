'use script';

let myList: string[] = ['William', "John", "Amanda"];

console.log(myList.length);

if (myList.length == 0) {
  console.log('myList is empty.')
} else {
    console.log('The list has got\n' + '\t', myList.length + '\nobjects.');
}
console.log(myList[0],'\n' + myList[1],'\n' +myList[2]);
let index = 0
for (index = 0; index < myList.length; index++) { 
    console.log(index+1, myList[index]); 
} 
console.log(myList[0],myList[2]);

function reverse(myList){
    return myList.reverse()
  }
console.log(reverse(myList));

