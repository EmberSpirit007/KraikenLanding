<template>
    <div>
        <h1 id="first">FAQ</h1>
<h3>Where to buy $HARB?</h3>
<p>You can buy $HARB on Uniswap on Base Layer 2.</p>
<h3>How can I become an Owner of HARBERG</h3>
<p>Head over to the ownership market and claim yourself a spot</p>
<h3>Are there any fees when using the protocol?</h3>
<p>There are no fees and there is no fee switch. Harberg is an immutable protocol that has been fair launched and will continue so.</p>
<h3>Why should I become a Holder?</h3>
<p>Holders just buy and claim claim a passive income from the tax the owners must pay. No market actions are required, just buy and hold.</p>
<h3>Why should I become an Owner?</h3>
<p>When the $HARB price rises new tokens are minted. Owners benefit by receiving a share of every new $HARB in circulation. But they need to watch their position and adjust their tax based on market conditions and sentiment.</p>
<h3>Why should I become an Owner when the price falls and tokens are sold?</h3>
<p>When the price form $HARB falls it creates new entry positions for holders to cheaply claim an owner slot. All existing owners will either have to readjust their taxes or unstake during these events.</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(["onmounted"])
onMounted(() => {
    emit("onmounted")
})
</script>