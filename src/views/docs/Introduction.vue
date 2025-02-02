<template>
    <div>
        <h1 id="first">First On-chain Ownership Market</h1>
        <p>Power dynamics in crypto are broken. Protocol owners—like investors, influencers, and the team—get most of the rewards through fees, token unlocks, and growth. </p> 
        <p> Token holders, on the other hand, take on the most risk from market ups and downs, as well as decisions made by those at the top. </p>
        <br>
        <p>Token governance is a toothless tiger. Right now, to balance this dynamic token governance relies on simple majority votes, which are often controlled by large token holders. Many of these votes are only suggestions and don’t really lead to action.</p>
        <br>
        <p>Ownership as a market. But what if there is a fair way to share ownership of a protocol using a market-based system? This would let the people who care the most about the protocol’s success take charge and promote it.</p> 
        <br>
        <p>Introducing HARBERG: Making ownership available through an open market of limited “Owner Slots”. As an owner you benefit from every new token buy and the general growth of the protocol. In exchange, Owners need to set a self-assessed tax (The Harberger Tax) on their owner slots. This tax is directly paid to every normal token holder to fairly balance the system.</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(["onmounted"])
onMounted(() => {
    emit("onmounted")
})
</script>