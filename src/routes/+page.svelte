<script>
    export let data;
    //importing digits so as to please vite or whatever demigod is preventing
    //these assets from being imported and/or found
    //Better solution likely exists, but this works for now
    // import zero from './../lib/0.png';
    // import one from '$lib/1.png';
    // import two from './../lib/2.png';
    // import three from './../lib/3.png';
    // import four from './../lib/4.png';
    // import five from './../lib/5.png';
    // import six from './../lib/6.png';
    // import seven from './../lib/7.png';
    // import eight from './../lib/8.png';
    // import nine from './../lib/9.png';
    //console.log(data);
</script>

<svelte:head>
    <title>How many days until Pikmin 4?</title>
</svelte:head>

<div class="poko-hidden-imports">
    <img class="poko-hidden-image" src="./../lib/0.png" alt="Don't mind me">
    <img class="poko-hidden-image" src="./../lib/1.png" alt="Don't mind me">
    <img class="poko-hidden-image" src="./../lib/2.png" alt="Don't mind me">
    <img class="poko-hidden-image" src="./../lib/3.png" alt="Don't mind me">
    <img class="poko-hidden-image" src="./../lib/4.png" alt="Don't mind me">
    <img class="poko-hidden-image" src="./../lib/5.png" alt="Don't mind me">
    <img class="poko-hidden-image" src="./../lib/6.png" alt="Don't mind me">
    <img class="poko-hidden-image" src="./../lib/7.png" alt="Don't mind me">
    <img class="poko-hidden-image" src="./../lib/8.png" alt="Don't mind me">
    <img class="poko-hidden-image" src="./../lib/9.png" alt="Don't mind me">
</div>

<div class="poko-header">
    <img class="poko-header-text" src="./../lib/header.png" alt="How many days until Pikmin 4?">
</div>
<div class="digits">
    {#each data.digits as digit}
        <div class="poko-digit">
            <img class="poko-digit-text poko-{digit}" alt="{digit}" width=48 height=52>
        </div>
    {/each}
</div>
<div class="poko-footer">
    <a href="https://www.buymeacoffee.com/jkirchner"><img class="poko-footer-image" src="./../lib/coffee.png" alt="Buy me a coffee?"></a>
</div>



<!-- <p>That's around ~{Math.round(numHoursLeft)} Hours</p>
<p>Or ~{Math.round(numMinutesLeft)} Minutes</p>
<p>Or ~{Math.round(numSecondsLeft)} Seconds</p>
<p>Or exactly {numMillisecondsLeft} Milliseconds</p> -->
<style lang="scss">

</style>
