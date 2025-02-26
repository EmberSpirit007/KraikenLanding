<template>
    <div>
    <h2>1. Staking Basics</h2>
    <p>When you stake $KRK tokens, you're not simply locking them away - you're acquiring a <strong>percentage claim</strong> on the entire token supply. This works differently than traditional staking:</p>
    
    <ul>
        <li><strong>Fixed Percentage:</strong> Your stake represents X% of all existing $KRK tokens</li>
        <li><strong>Dynamic Value:</strong> As new tokens are minted (common occurrence), your claim automatically applies to the new total supply</li>
        <li><strong>Limited Capacity:</strong> Only 20% of all $KRK can be staked at any time</li>
    </ul>
    
    <p class="warning">Example: Staking 1% of the initial 1M supply (10,000 $KRK) becomes 1% of 2M supply (20,000 $KRK) after expansion</p>
</div>

<div class="concept-block">
    <h2>2. Harberger Tax Mechanism</h2>
    <p>Inspired by the <a href="https://en.wikipedia.org/wiki/Harberger_tax" target="_blank">Harberger tax concept</a> but adapted for crypto:</p>
    
    <ul>
        <li><strong>Traditional Model:</strong> Owners self-assess property value and pay tax accordingly</li>
        <li><strong>Kraiken Adaptation:</strong> Stakers choose tax <em>rates</em> instead of values, creating a competitive market for positions</li>
    </ul>
    
    <p>This system achieves three key goals:</p>
    <ol>
        <li><strong>Market Efficiency:</strong> Positions flow to those willing to pay highest maintenance costs</li>
        <li><strong>Anti-Hoarding:</strong> Low-tax positions get replaced, preventing permanent control</li>
        <li><strong>Protocol Funding:</strong> Collected taxes finance ongoing development</li>
    </ol>
</div>

<div class="concept-block">
    <h2>3. Earning Potential</h2>
    <p>Staking provides leveraged exposure to $KRK's growth through two channels:</p>
    
    <h3>A. Supply Expansion</h3>
    <p>The protocol's AI liquidity manager regularly mints new tokens to:</p>
    <ul>
        <li>Maintain exchange liquidity</li>
        <li>Fund ecosystem development</li>
        <li>Respond to market demand</li>
    </ul>
    
    <p>Your staked percentage automatically applies to the new larger supply. Regular holders only benefit from price changes - stakers gain from both price <em>and</em> supply growth.</p>
    
    <h3>B. Position Protection</h3>
    <p>By choosing optimal tax rates, you can:</p>
    <ul>
        <li>Maintain your percentage through market cycles</li>
        <li>Compound earnings through repeated staking</li>
        <li>Outpace simple token holding returns</li>
    </ul>
</div>

<div class="concept-block">
    <h2>4. Position Security</h2>
    <p>While others can replace your position, crucial protections exist:</p>
    
    <ul>
        <li><strong>Full Principal Return:</strong> If replaced, you receive all unstaxed $KRK immediately</li>
        <li><strong>Three-Day Grace Period:</strong> New positions must pay minimum 3 days' tax upfront</li>
        <li><strong>Rate Transparency:</strong> All positions display current tax rates for informed decisions</li>
    </ul>
    
    <p class="warning">Key Insight: Losing a position means forfeiting <em>future</em> earnings from that stake, not existing tokens</p>
</div>

<div class="concept-block">
    <h2>5. Strategic Considerations</h2>
    <p>Successful staking requires balancing:</p>
    
    <ul>
        <li><strong>Tax Rate Selection:</strong> Higher rates protect positions but reduce net returns</li>
        <li><strong>Market Monitoring:</strong> Track competing stakers' tax rates</li>
        <li><strong>Supply Forecasts:</strong> Anticipate minting events through protocol announcements</li>
    </ul>
    
    <p>Example Strategy: Use medium tax rates (5-15% daily) during high-growth periods to balance protection and returns</p>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
const emit = defineEmits(["onmounted"])

onMounted(() => {
    emit("onmounted")
})
</script>
