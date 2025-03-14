<template>
    <div>
<h1>Tokenomics</h1>

<p>
This section describes the design and distribution of the protocol's native digital token, Kraiken ($KRK). The token is issued exclusively through its Uniswap V3 liquidity pool, and its supply adjusts dynamically with network growth and demand.</p> 
<p>Kraiken is a fair-launch protocol, meaning there are no allocations or unlocks for teams or investors. This ensures equal opportunities for all participants from the very beginning.
</p>

<h2>Dynamic Supply</h2>
<p>There is no fixed supply for $KRK. The minting and burning of $KRK tokens are fully managed by an immutable Liquidity Manager (LM) contract, which oversees the token's supply and liquidity.</p>



<h3>Supply Expansion</h3>
<p>When buys exceed sells (rising demand), new $KRK tokens are minted to "refill" the liquidity pool (e.g., after tokens are purchased from Uniswap). This expands the total supply, which, assuming price stability, increases the protocol’s market capitalization.</p>
<pre> 
                       ▲                         ┬─────────┬             =       ▲          
                    ┌─────┐                      [         ]          ┌─────┐ ^-----^       
   A        $ETH    │     │    ▼                 [ 00110 1 ]          │     │ ^     ^       
  / \     ───────>  │     │ ┌─────┐              [ 1100 11 ]          │     │ ^-----^       
\/'-'\/             │     │ │     │     ─────>   [ 0100 10 ]  +$KRK   │     │ │  +  │       
 \_;_/      $KRK    │  +  │ │  -  │     ─────>   [ 0011110 ]  ──────> │ ETH │ │ KRK │       
  / \     <───────  │ ETH │ │ KRK │              [         ]          │     │ │     │       
                    │     │ │     │              ┴─────────┴          │     │ │     │       
                                                                                            
 Alice buys $KRK from Uniswap Pool            LM Contract mints $KRK and fills up Uniswap Pool 
</pre>
<br>
<br>

<h3>Token Burn</h3>
<p>When sells outpace buys, surplus $KRK tokens from the liquidity pool are automatically burned to maintain its balance (further stabilizing the price).</p>
<pre>
                               ▲                 ┬─────────┬                     ▼              
                            ┌─────┐              [         ]                  v-----v           
   A        $KRK       ▼    │     │              [ 00110 1 ]             =    v     v           
  / \     ───────>  ┌─────┐ │     │              [ 1100 11 ]          ┌─────┐ v-----v           
\/'-'\/             │     │ │     │     ─────>   [ 0100 10 ]   -$KRK  │     │ │     │           
 \_;_/      $ETH    │  -  │ │  +  │     ─────>   [ 0011110 ]  <─────  │     │ │  -  │           
  / \     <───────  │ ETH │ │ KRK │              [         ]          │ ETH │ │ KRK │           
                    │     │ │     │              ┴─────────┴          │     │ │     │           
                                                                                                
  Alice sells $KRK to Uniswap Pool              LM Contract burns $KRK and balances Uniswap Pool

</pre>
<br>

<p>These dynamic supply changes make tokenomics fair and transparent for everyone. Read further for more details.</p>

<h2>Primer to Liquidity Management</h2>

<p>
The LM maintains three key liquidity positions:
</p>

<h3>1. Floor</h3>
<p>
The Floor is a liquidity position of narrow price range with highly concentrated liquidity. The Floor position is a reserve designed to provide a guaranteed minimum buyback price for $KRK. As the protocol grows, the LM allocates more ETH to the Floor position, increasing its stability and appeal to holders. At any time between 75% and 95% of all ETH managed by the protocol are located in the Floor position.
</p>

<h3>2. Anchor</h3>
<p>
The Anchor position with lower liquidity depth compared to the Floor, but covers a broader price span. It is dynamically balanced to support trading around the current price. It ensures smooth trading experiences by reducing slippage and maintaining efficient liquidity deployment.
</p>

<h3>3. Discovery</h3>
<p>
The Discovery position has more dept and range than the Anchor. It allows for price exploration beyond the current range, enabling efficient trading during periods of high demand or market growth. This position grows with network activity and serves to attract more liquidity. $ETH that is accumulated in this position is regularly moved to Floor and Anchor.
</p>
<br>
<pre>
   ▲                                          ┌─────────────┐              
   │                                          │ ┌─┐         │              
   │ Floor                                    │ │%│  $ETH   │              
   │  ┌─┐                                     │ └─┘         │              
   │  │%│                                     │ ┌─┐         │              
   │  │%│                                     │ │+│  $KRK   │              
   │  │%│                                     │ └─┘         │              
   │  │%│                                     └─────────────┘              
   │  │%│                                                                  
   │  │%│                                                                  
   │  │%│                                                                  
 L │  │%│                                                                  
 i │  │%│                                                                  
 q │  │%│                                 Discovery                        
 u │  │%│                                                                  
 i │  │%│                     ┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐         
 d │  │%│                     │+││+││+││+││+││+││+││+││+││+││+││+│         
 i │  │%│                     │+││+││+││+││+││+││+││+││+││+││+││+│         
 t │  │%│                     │+││+││+││+││+││+││+││+││+││+││+││+│         
 y │  │%│      Anchor         │+││+││+││+││+││+││+││+││+││+││+││+│         
   │  │%│                     │+││+││+││+││+││+││+││+││+││+││+││+│         
   │  │%│┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐│+││+││+││+││+││+││+││+││+││+││+││+│         
   │  │%││%││%││%││+││+││+││+││+││+││+││+││+││+││+││+││+││+││+││+│         
   │  │%││%││%││%││+││+││+││+││+││+││+││+││+││+││+││+││+││+││+││+│         
   │  │%││%││%││%││+││+││+││+││+││+││+││+││+││+││+││+││+││+││+││+│         
   │  │%││%││%││%││%││+││+││+││+││+││+││+││+││+││+││+││+││+││+││+│         
   │  │%││%││%││%││%││+││+││+││+││+││+││+││+││+││+││+││+││+││+││+│         
   │  │%││%││%││%││%││+││+││+││+││+││+││+││+││+││+││+││+││+││+││+│         
   │  └─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘         
  ─┼─────────────────────────────────────────────────────────────────►     
                   ▲                                         Price         
            current Price                                                  
</pre>
<br>
<p>
When the price moves up, the LM rebalances by allocating more ETH to the Floor position and expanding Discovery. To support this growth, new $KRK tokens are minted. Conversely, when the price moves down, the LM shrinks the Floor and Discovery positions proportionally and burns excess tokens. For more details, see the <a href="#/docs/Liquidity-Management">Liquidity Management</a> section.
</p>

<h2>Protocol Initialization</h2>

<p>
The Kraiken Protocol is initialized with a single transaction. The team deposits 1 $ETH into the Liquidity Manager, which sets the initial pool price at 1 cent per token. The Liquidity Manager bootstraps the Uniswap V3 liquidity pool and begins adjusting positions dynamically.
</p>

<p>
From the start, the LM rebalances positions whenever the price moves more than 2% up or down, ensuring liquidity is always optimized for current market conditions.
</p>

<h2>Utility</h2>
<p>
The $KRK token and its liquidity pool generates sufficient training data to continuously improve the AI agent’s performance. It kickstarts AI-driven liquidity management systems across the crypto ecosystem.
The end goal: Enable the AI to autonomously manage liquidity positions across multiple token pools on Uniswap and other DEXs. This will result in fee revenue flowing back to $KRK holders.
</p>

<h2>Objective of Token Design</h2>

<p>
The Kraiken Protocol is designed to provide a fair and adaptive token ecosystem. By launching with minimal initial liquidity and no team or investor allocations, the protocol ensures equal opportunities for all participants. Minting and burning respond dynamically to market conditions, supporting growth during expansion and reducing supply (and sell pressure) during contraction.
</p>
<p>
The Liquidity Manager provides deep liquidity and stabilizes the price. This design allows casual holders to "hold and forget," benefiting from well-managed, stable token ecosystem without needing to actively participate in liquidity management or market decisions.
</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(["onmounted"])
onMounted(() => {
    emit("onmounted")
})
</script>
