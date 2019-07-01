let n: number = 5
let star: string = "*";
let space: string ="";
for (let i = 0; i < n; i++) {
        for (let j = 1; j < n-i; j++) {
            space+= " ";
        }
        console.log(space+star);
        star+="**";
        space = "";
    }
    
for (let i = 0; i < n; i++) {
        for (let j = 1; j < i-n; j++) {
            space+= " ";
        }
        console.log(space+star);
            space+="**";
            space = "";
        }