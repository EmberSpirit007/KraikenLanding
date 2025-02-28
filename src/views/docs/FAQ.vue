<template>
    <div>
        <h1 id="first">FAQ</h1>
        <h3>Where to buy $KRK?</h3>
        <p>Once launched you can buy $KRK on Uniswap on Base Layer 2.</p>
        <h3>What is the utility of $KRK?</h3>
        <p>$KRK serves as training data for the AI agent and will eventually generate returns through cross-pool liquidity management.</p>
        <h3>Why is the liquidity unruggable?</h3>
        <p>Liquidity is permanently locked in Uniswap and managed by immutable contracts, with 75-95% ETH reserved in the Floor position to prevent full withdrawals even through a bank run event.</p>
        <h3>How often does supply expand?</h3>
        <p>The AI liquidity manager mints new $KRK based on market conditions - typically during sustained buying pressure or liquidity needs.</p>
        <h3>What happens to the supply during price drops?</h3>
        <p>The protocol automatically burns surplus $KRK from the liquidity pool to stabilize prices during sell pressure.</p>
        <h3>Is the AI Agent owned by anyone?</h3>
        <p>The AI Agent is fully sovereign. No owner or admin can intervene or change the behaviour of the agent. It operates in a closed environment on-chain.</p>
        <h3>How does the AI agent respond to volatile markets?</h3>
        <p>The agent adjusts the Anchor width, Discovery depth of the liquidity positions, and capital allocation based on volatility ratios and staking signals in real time.</p>
        <h3>Is my $KRK at risk if the AI fails?</h3>
        <p>Yes – Per the disclaimer, failed AI decisions could negatively impact $KRK's value. The Floor position mitigates but doesn't eliminate this risk.</p>
        <h3>Are there any fees when using the protocol?</h3>
        <p>There are no fees and there is no fee switch. Kraiken is an immutable protocol that has been fair launched and will continue so.</p>
        <h3>How can I stake my $KRK?</h3>
        <p>You can get access to staking by contacting the team.</p>
        <h3>Can the protocol code be changed later?</h3>
        <p>No – All contracts are permanently immutable after deployment. Liquidity Manager and AI agent operate autonomously with no upgrade path or admin controls.</p>
        <h3>Are there team allocations or unlocks?</h3>
        <p>No – Kraiken is a fair-launch protocol with zero allocations for teams or investors. All tokens enter circulation via the liquidity pool.</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(["onmounted"])
onMounted(() => {
    emit("onmounted")
})
</script>
