<template>
    <div>
        <h1 id="first">Generate Passive Income</h1>
        <p>In traditional protocol designs, holders benefit from a protocol’s success only indirectly through an increase in token price. HARBERG changes this by allowing holders to earn directly through a passive income stream funded by protocol owners, who pay for the privilege of staying in their positions of power. </p>
        <br>
        <p>Token holders are essential for decentralisation, governance and decision-making in crypto. Their role is key to a project’s long-term success. It’s only fair that token holders should have the right to become owners of the very protocol they support.</p>
        <h2 id="second">Buy $HARB</h2>
        <p> $HARB tokens and the Harberg Protocol are deployed on Base an $ETHeum Layer 2. $HARB can be bought on <a href="uniswap.org">Uniswap</a> there. </p>
        <h2 id="third">Passive Income</h2>
        <p>By holding $HARB, holders can claim a passive income funded by the owner’s tax. The more owners are competing for limited owner slots the higher the tax for the token holders.</p>
        <p>The longer the token is held, the more tax holders can claim. No protocol fee is taken. </p>
        <h2 id="fourth">Sell $HARB</h2>
        <p>$HARB can be sold anytime on <a href="uniswap.org">Uniswap</a> </p>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
const emit = defineEmits(["onmounted"])

onMounted(() => {
    emit("onmounted")
})
</script>