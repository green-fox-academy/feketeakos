let daily: number = 6;
let semesterWeeks: number = 17;
let semesterDays: number = semesterWeeks * 5;
let totalAverage: number = 52 * 17
console.log('Total hours spent on coding:', daily * semesterDays);
console.log('Percentage of coding:', Math.round (daily * semesterDays / totalAverage * 100) , '%');