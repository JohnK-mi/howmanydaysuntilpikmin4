<script>
    export let data;
    //console.log(data);
</script>

<div class="poko-header">
    <img class="poko-header-text" src="/src/lib/header.png" alt="How many days until Pikmin 4?">
</div>
<div class="digits">
    {#each data.digits as digit}
        <div class="poko-digit">
            <img class="poko-digit-text" src="/src/lib/{digit}.png" alt="{digit}" width=48 height=52>
        </div>
    {/each}
</div>

<!-- <p>That's around ~{Math.round(numHoursLeft)} Hours</p>
<p>Or ~{Math.round(numMinutesLeft)} Minutes</p>
<p>Or ~{Math.round(numSecondsLeft)} Seconds</p>
<p>Or exactly {numMillisecondsLeft} Milliseconds</p> -->
<style lang="scss">

</style>
