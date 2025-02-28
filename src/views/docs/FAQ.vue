<template>
    <div>
        <h1 id="first">FAQ</h1>
        <h3>Where to buy $KRK?</h3>
        <p>Once launched you can buy $KRK on Uniswap on Base Layer 2.</p>
        <h3>Is the AI Agent owned by anyone?</h3>
        <p>The AI Agent is fully sovereign. No owner or admin can intervene or change the behaviour of the agent. It operates in a closed environment.</p>
        <h3>Are there any fees when using the protocol?</h3>
        <p>There are no fees and there is no fee switch. Kraiken is an immutable protocol that has been fair launched and will continue so.</p>
        <h3>How often does supply expand?</h3>
        <p>The AI liquidity manager mints new $KRK based on market conditions - typically during sustained buying pressure or liquidity needs.</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(["onmounted"])
onMounted(() => {
    emit("onmounted")
})
</script>
