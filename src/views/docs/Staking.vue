<template>
    <div>
    <h1>Staking</h1>
    <p>Staking has two important benefits:</p> 
        <p>1. It helps the AI Agent with market sentiment analysis.</p>
        <p>2. It transparently rewards users that promote the $KRK token and the KrAIken protocol without the need of backdoor deals or insider allocation.</p>
    <h2>1. Staking Slots</h2>
    <p>As a token holder you can stake your $KRK tokens to claim staking slots and become a Staker of the KrAIken Protocol. Stakers earn a share of newly minted tokens when the token supply expands (see Tokenomics).</p>
    <p>In exchange for that benefit stakers have to pay a self-assessed tax. At any time, another token holder who agrees to pay a higher tax can buyout lower-tax staking slots. This creates a fair and dynamic market for staking slots.</p>
    
    <ul>
        <li><strong>Owner Slots:</strong> How many slots you can claim depends on the percentage of tokens you own compared to the total supply. Staking 0.001% of $KRK total supply gives 1 owner slot.</li>
        <li><strong>Dynamic Value:</strong> As new tokens are minted (see supply expansion in Tokenomics), your claim automatically applies to the new total supply</li>
        <li><strong>Limited Capacity:</strong> There are only 20,000 staking slots that represent 20% of all $KRK at any time.</li>
    </ul>
    <p class="warning">Example: Alice stakes 10,000 $KRK. The current total supply sits at 1M. As she holds 1% of the current total supply she gets 1,000 owner slots. When the supply increases to 2M, the 1% (1,000 slots) are worth now 20,000 $KRK after expansion.</p>
</div>

<br>
<pre>
                   *** ### ### ***                   
              *##       ++        ##*              
          *##           ++            ##*          
       *##              ++               ##*       
      *#                ++                ##*      
    *##                 ++     20%          ##*    
   *##                  ++   Staking     +++ ##*   
  *##                   ++             +++    ##*  
 *##                    ++           ++       ##*  
 *##                    ++        ++++         ##* 
 *##                    ++     ++++            ##* 
*##                     ++  ++++                ##*
*##                     +++++                   ##*
*##                                             ##*
 *##                                           ##* 
 *##         80% Open Market                   ##* 
 *##                                           ##* 
  *##                                         ##*  
   *##                                       ##*   
    *##                                     ##*    
     *##                                   ##*     
       *#                                ##*       
          *##                         ##*          
              *##                 ##*              
                  *** ### ### ***                  
</pre>
<div class="concept-block">
    <h2>2. Harberger Tax Mechanism</h2>
    <p>To keep things fair and transparent, stakers need to pay a sel-assessed tax on their position. Inspired by the <a href="https://en.wikipedia.org/wiki/Harberger_tax" target="_blank">Harberger tax concept</a> but adapted for crypto:</p>
    
    <ul>
        <li><strong>Traditional Model:</strong> Owners self-assess property value and pay tax accordingly</li>
        <li><strong>KrAIken Adaptation:</strong> Stakers choose tax <em>rates</em> instead of values, creating a competitive market for positions</li>
    </ul>
    
    <p>This system achieves three key goals:</p>
    <ol>
        <li><strong>Market Efficiency:</strong> Positions flow to those willing to pay highest maintenance costs (tax)</li>
        <li><strong>Anti-Squating:</strong> Staking positions can get replaced anytime someone is willing to pay a higher tax, preventing permanent control</li>
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
    <p>While others can buyout your position at any time, crucial protections exist:</p>
    
    <ul>
        <li><strong>Full Principal Return:</strong> If replaced, you receive all untaxed $KRK and potential profit immediately</li>
        <li><strong>Three-Day Grace Period:</strong> New positions must pay minimum 3 days' tax upfront</li>
        <li><strong>Rate Transparency:</strong> All positions display current tax rates for informed decisions</li>
    </ul>
    
    <p class="warning">Key Insight: Losing a postion due to a buyout means lossing the benefit of <em>future</em> earnings from that stake, not existing tokens or profit.</p>
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
