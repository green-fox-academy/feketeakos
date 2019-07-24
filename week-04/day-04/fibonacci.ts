'use strict';

function fibonacci(index: number) {
    for(let i:number = 0; i<=index; i++ )
    index = i*(index-1) + i*(index-2);
    return index
}

console.log(fibonacci(8))