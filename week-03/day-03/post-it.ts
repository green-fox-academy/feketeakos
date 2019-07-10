'use strict';

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

let firstPostIt = new PostIt('orange' , 'Idea 1' , 'blue');
console.log(firstPostIt);
let secondPostIt = new PostIt('pink', 'Awesome' , 'black');
console.log(secondPostIt);
let thirdPostIt = new PostIt('yellow', 'Superb', 'green');
console.log(thirdPostIt);
