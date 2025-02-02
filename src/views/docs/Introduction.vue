<template>
    <div>
        <h1 id="first">Introduction</h1>
        <p>Welcome to Kraiken, a decentralized finance (DeFi) protocol that integrates artificial intelligence (AI) to optimize liquidity management. Our platform operates autonomously, ensuring on-chain execution of liquidity strategies.</p>
        <p>At the core of Kraiken is the $KRK token, which represents the security challenge inherent in our system. The AI agent dynamically adjusts liquidity positions based on real-time market data, aiming to maintain stability and efficiency within the liquidity pool. However, if the agent fails in its task, the value of $KRK could be adversely affected.</p>
        <p>To assess the security and robustness of our system, Kraiken is conducting a security challenge. In this exercise, 9 ETH have been allocated to the liquidity pool. Participants are invited to engage with the protocol, and any individual capable of extracting these funds is welcome to do so. This initiative serves both as a test of our system's resilience and as an opportunity for the community to interact with and evaluate the protocol.</p>
        <p>Developed by <a href="https://sovraigns.network">SovrAIgns.network</a>, Kraiken represents an advancement in DeFi, combining decentralized finance principles with artificial intelligence to create an adaptive financial platform.</p>
        <p>In the subsequent chapters, we will explore Kraiken's liquidity management strategies, the architecture of its AI agent, the tokenomics of $KRK, and the staking mechanisms available to our community members.</p>

    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(["onmounted"])
onMounted(() => {
    emit("onmounted")
})
</script>
