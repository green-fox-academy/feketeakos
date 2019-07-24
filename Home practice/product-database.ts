'use strict';

import { finished } from "stream";

let productDatabase= new Map <string, number>();
productDatabase.set("Eggs", 200);
productDatabase.set("Milk", 200);
productDatabase.set("Fish", 400);
productDatabase.set("Apples", 150);
productDatabase.set("Bread", 50);
productDatabase.set("Chicken", 550);


console.log(productDatabase.get("Fish"));

let avg: number = 0;

productDatabase.forEach(value => avg += value);
avg /= productDatabase.size;

console.log(avg);

 let cheaperThan: number = 0;
 function cheaper(price: any) {
   for (let i: any = 0; i<Object.values(productDatabase).length; i++)
     if (Object.values(productDatabase)[i] < price) {
       cheaperThan++;
     }
  
   console.log("There are "+cheaperThan+" product(s) cheaper than "+price);
 }
 cheaper(300);

 let maxKey: string = "";
 let maxVal: number = 0;
 productDatabase.forEach((value, key) => {
    if (value > maxVal) {
        maxVal = value;
        maxKey = key;
    }

}
);
console.log(maxKey);
