<template>
    <div>
        <h1 id="first">Fair Market Mechanism</h1>
        <p>The Harberger Tax, developed by economist Arnold Harberger and popularized in the book Radical Markets and the RadicalxChange movement’s “Partial Common Ownership” concept, is a system where property owners pay a tax based on their own assessed value of their property. However, they must be willing to sell the property at that value to anyone who wants to buy it. This approach encourages owners to be honest about the value of their assets and helps allocate resources to those who value them the most.</p>
<h2 id="second">Implementation in the Crypto Context</h2>
<p>In crypto, limited assets or positions are often held by a select few without options for redistributing ownership—examples include early investors, protocol teams, fee distributions, multisig holders, NFT owners etc. The HARBERG protocol aims to challenge the current model of protocol ownership and test an alternative approach.</p>
<h2 id="third">Key Differences</h2>
<p>In the traditional model, the value of the asset is constantly changeable to reflect the current market value and dynamics. In the HARBERG protocol, the tax rate is constantly changeable, and owners must evaluate it regularly to retain their ownership positions.
</p>
<h3>Read More:</h3>
<p> See <a href="website.org">Harberger Tax Blog Post</a> or <a href="website.org">Owner Tax</a> </p>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(["onmounted"])
onMounted(() => {
    emit("onmounted")
})
</script>