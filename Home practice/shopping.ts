'use strict';
export{};

let products = new Map;
products.set('Milk', 1.07);
products.set('Rice', 1.59);
products.set('Eggs', 3.14);
products.set('Cheese', 12.60);
products.set('Chicken Breasts', 9.40);
products.set('Apples', 2.31);
products.set('Tomato', 2.58);
products.set('Potato', 1.75);
products.set('Onion', 1.10);

let bobList = new Map;
bobList.set('Milk', 3);
bobList.set('Rice', 2);
bobList.set('Eggs', 2);
bobList.set('Cheese', 1);
bobList.set('Chicken Breasts', 4);
bobList.set('Apples', 1);
bobList.set('Tomato', 2);
bobList.set('Potato', 1);

let aliceList = new Map;

aliceList.set('Rice', 1);
aliceList.set('Eggs', 5);
aliceList.set('Chicken Breasts', 2);
aliceList.set('Apples', 1);
aliceList.set('Tomato', 10);

let bobBill: number = 0;
bobList.forEach((value, key) => bobBill += products.get(key) * value);

console.log(bobBill);

let aliceBill: number = 0;
aliceList.forEach((value,key) => aliceBill +=products.get(key)* value)

console.log(aliceBill)