<script>
    let currentDate = new Date();
    let releaseDate = new Date('July 21, 2023 00:00:00');
    let numMillisecondsLeft = releaseDate.getTime()-currentDate.getTime(); 
    let numSecondsLeft = numMillisecondsLeft/1000;
    let numMinutesLeft = numSecondsLeft/60;
    let numHoursLeft = numMinutesLeft/60;
    let numDaysLeft = numHoursLeft/24;
    console.log(currentDate);
    console.log(releaseDate);
</script>

<h1>Days Until Pikmin 4</h1>
<p>{Math.round(numDaysLeft)}</p>
<!-- <p>That's around ~{Math.round(numHoursLeft)} Hours</p>
<p>Or ~{Math.round(numMinutesLeft)} Minutes</p>
<p>Or ~{Math.round(numSecondsLeft)} Seconds</p>
<p>Or exactly {numMillisecondsLeft} Milliseconds</p> -->
