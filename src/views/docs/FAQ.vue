<template>
    <div>
        <h1 id="first">FAQ</h1>
        <h3>Where to buy $KRK?</h3>
        <p>You can buy $KRK on Uniswap on Base Layer 2.</p>
        <h3>Are there any fees when using the protocol?</h3>
        <p>There are no fees and there is no fee switch. Kraiken is an immutable protocol that has been fair launched and will continue so.</p>
        <h3>How often does supply expand?</h3>
        <p>The AI liquidity manager mints new $KRK based on market conditions - typically during sustained buying pressure or liquidity needs.</p>
        <h3>How is security ensured in Kraiken?</h3>
        <p>The security is you, the user. Kraiken is a security challenge, endowed with funds that you are meant to steel.</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(["onmounted"])
onMounted(() => {
    emit("onmounted")
})
</script>
