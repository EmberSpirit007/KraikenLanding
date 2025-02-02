import{d as n,l as o,c as r,v as a,o as s}from"./index-D--fKt_P.js";const l=n({__name:"Liquidity-Management",emits:["onmounted"],setup(c,{emit:t}){const i=t;return o(()=>{i("onmounted")}),(h,e)=>(s(),r("div",null,e[0]||(e[0]=[a(`<h1>Liquidity Management</h1><p>The liquidity of $HARB tokens is fully managed by an immutable Liquidity Manager (LM) contract. This contract governs the minting, burning, and allocation of liquidity to ensure market stability, efficient trading, and adaptive responses to market dynamics. The LM operates through three distinct liquidity positions: Floor, Anchor, and Discovery. Each serves a specific role in maintaining a balanced and resilient ecosystem.</p><p>The Liquidity Manager operates exclusively on a Uniswap V3 pool on the Base network with a tick spacing of 200, equivalent to 1% fee tier. Other fee tiers liquidity pools on different networks will only receive liquidity indirectly through arbitrage.</p><br><pre>   ▲                                          ┌─────────────┐              
   │                                          │ ┌─┐         │              
   │ Floor                                    │ │%│  Ether  │              
   │  ┌─┐                                     │ └─┘         │              
   │  │%│                                     │ ┌─┐         │              
   │  │%│                                     │ │+│  $HARB  │              
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
</pre><h2>Floor Position</h2><p>The Floor is a highly concentrated liquidity position within a narrow price range. Its primary function is to provide a guaranteed minimum buyback price for $HARB tokens. This reserve stabilizes the protocol by ensuring that token holders always have a predictable exit value. As the protocol grows, the LM allocates more Ether to the Floor, increasing its depth and reliability. Between 75% and 95% of all Ether managed by the protocol is typically held in the Floor position.</p><p>A critical aspect of the Floor position is its use of Volume Weighted Average Price (VWAP) to determine its pricing strategy. VWAP represents the average sale price of $HARB tokens weighted by trading volume, providing a kind of approximate and compressed memory over historic sales of tokens from its liquidity. The LM calculates the VWAP using cumulative trade data, ensuring that on average tokens are bought back for cheaper than they were sold for. By anchoring the protocol’s liquidity to a VWAP-adjusted price, the system retains a sober approach to Floor positioning while allowing for market-responsive adjustments of Anchor and Discovery.</p><h2>Anchor Position</h2><p>The Anchor position offers less liquidity depth than the Floor but spans a broader price range. It is always positioned at the current market price, ensuring its relevance to active trading. The size of the Anchor position dynamically adjusts based on the &quot;sentiment&quot; input, a value generated by an on-chain AI agent analyzing staking signals and trading data. Sentiment determines the allocation of 5% to 25% of the total Ether supply to the Anchor, influencing its liquidity depth and responsiveness. This adaptive sizing strategy puts more capital at risk during market uptrends while adopting a defensive posture when sentiment turns negative. The exact adjustment strategy depends on the training embedded in the on-chain AI agent, which targets developing the token price and maximizing trading fees for the protocol. For more on staking signals, visit the &quot;For Owners&quot; chapter, and for details about the AI agent, see the &quot;AI-Agent&quot; chapter.</p><h2>Discovery Position</h2><p>The Discovery position provides the broadest price coverage and greater liquidity depth compared to the Anchor. It is designed for price exploration beyond the current range, supporting efficient trading during periods of high demand or significant market growth. Discovery covers a price range up to three times the current price, and holds liquidity at a depth twice as concentrated as the Anchor position. This ensures robust liquidity for price exploration while incentivizing trading activity in less active price ranges. Ether accumulated in the Discovery position is periodically redistributed to the Floor and Anchor positions.</p><h2>Rebalancing Mechanism</h2><p>The Liquidity Manager rebalances the Floor, Anchor, and Discovery positions based on market price movements. This process is triggered through an open contract call that anyone can execute at any time. Before rebalancing occurs, the function ensures a key condition is met: the price must have moved significantly, surpassing a minimum amplitude threshold of twice the tick spacing (2%).</p><p>When the token price moves:</p><ul><li><strong>Upwards:</strong> The Liquidity Manager reallocates more Ether to the Floor position to enhance its stability and increases the size of the Discovery position for further price exploration. New $HARB tokens are minted to support this growth.</li><li><strong>Downwards:</strong> The Liquidity Manager reduces the Anchor and Discovery positions proportionally and burns excess tokens, maintaining equilibrium and reducing supply pressure.</li></ul><p>This dynamic system ensures that the protocol responds effectively to market conditions while safeguarding token holders and traders. The contract is immutable, guaranteeing that neither the team nor any other entity can access or control the liquidity. Users are encouraged to review the code to understand the mechanics before participating.</p>`,17)])))}});export{l as default};
