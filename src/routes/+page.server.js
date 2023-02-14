export async function load({}){
    let currentDate = new Date();
    let releaseDate = new Date('July 21, 2023 00:00:00');
    let numMillisecondsLeft = releaseDate.getTime()-currentDate.getTime(); 
    let numSecondsLeft = numMillisecondsLeft/1000;
    let numMinutesLeft = numSecondsLeft/60;
    let numHoursLeft = numMinutesLeft/60;
    let numDaysLeft = numHoursLeft/24;
    let tmpDaysLeft= Math.round(numDaysLeft);
    let numDigits = 0;
    let digits = [];
    while(tmpDaysLeft>0){
        numDigits += 1;
        digits.push(tmpDaysLeft%10);
        tmpDaysLeft = Math.floor(tmpDaysLeft/10);
        //console.log(tmpDaysLeft);
    }
    //console.log(numDigits);
    //console.log(digits);
    //console.log(currentDate);
    //console.log(releaseDate);
    return {numDaysLeft};
}