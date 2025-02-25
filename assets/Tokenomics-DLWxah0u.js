import{d as n,l as o,c as a,v as r,o as s}from"./index-D8OBVc55.js";const p=n({__name:"Tokenomics",emits:["onmounted"],setup(d,{emit:i}){const t=i;return o(()=>{t("onmounted")}),(l,e)=>(s(),a("div",null,e[0]||(e[0]=[r(`<h1>Tokenomics</h1><p> This section describes the design and distribution of the protocol&#39;s native digital token, Kraiken ($KRK). The token is issued exclusively through its Uniswap V3 liquidity pool, and its supply adjusts dynamically with network growth and demand. Kraiken is a fair-launch protocol, meaning there are no allocations for teams or investors. This ensures equal opportunities for all participants from the very beginning. </p><h2>Primer to Liquidity Management</h2><p> The minting and burning of $KRK tokens are fully managed by an immutable Liquidity Manager (LM) contract, which oversees the token&#39;s supply and liquidity. The LM maintains three key liquidity positions: </p><h3>1. Floor</h3><p> The Floor is a liquidity position of narrow price range with highly concentrated liquidity. The Floor position is a reserve designed to provide a guaranteed minimum buyback price for $KRK. As the protocol grows, the LM allocates more ETH to the Floor position, increasing its stability and appeal to holders. At any time between 75% and 95% of all ETH managed by the protocol are located in the Floor position. </p><h3>2. Anchor</h3><p> The Anchor position with lower liquidity depth compared to the Floor, but covers a broader price span. It is dynamically balanced to support trading around the current price. It ensures smooth trading experiences by reducing slippage and maintaining efficient liquidity deployment. </p><h3>3. Discovery</h3><p> The Discovery position has more dept and range than the Anchor. It allows for price exploration beyond the current range, enabling efficient trading during periods of high demand or market growth. This position grows with network activity and serves to attract more liquidity. Ether that is accumulated in this position is regularly moved to Floor and Anchor. </p><br><pre>   ▲                                          ┌─────────────┐              
   │                                          │ ┌─┐         │              
   │ Floor                                    │ │%│  Ether  │              
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
</pre><br><p> When the price moves up, the LM rebalances by allocating more ETH to the Floor position and expanding Discovery. To support this growth, new $KRK tokens are minted. Conversely, when the price moves down, the LM shrinks the Floor and Discovery positions proportionally and burns excess tokens. For more details, see the <a href="#/docs/Liquidity-Management">Liquidity Management</a> section. </p><h2>Protocol Initialization</h2><p> The Kraiken Protocol is initialized with a single transaction. The team deposits 1 Ether into the Liquidity Manager, which sets the initial pool price at 1 cent per token. The Liquidity Manager bootstraps the Uniswap V3 liquidity pool and begins adjusting positions dynamically. </p><p> From the start, the LM rebalances positions whenever the price moves more than 2% up or down, ensuring liquidity is always optimized for current market conditions. </p><h2>Profit Flows</h2><p> All liquidity provider fees earned by the Liquidity Manager are sent to the reward pool. Token holders can withdraw their share of these earnings pro-rata at any time. This ensures that holders benefit directly from the protocol&#39;s trading activity, with no additional action required on their part. </p><pre>                                                                 
                               Retail                                
                                                                 
                                 ▲ │                                
                                 │ │                        ____    
                              buy│ │sell                   [____]   
                                 │ │        mint/burn      ]()()[   
   .-&quot;&quot;&quot;&quot;&quot;&quot;-.                    │ ▼        Token        ___\\__/___ 
  .&#39;          &#39;.             ┌───┴──────┐ ◄───────────► |__|    |__|
 /   O      O   \\    buy     │Uniswap V3│   move         |_|_/\\_|_| 
:                :  ◄────────┤Liquidity │   Liquidity    | | __ | | 
|                |           │Pool      │ ◄───────────►  |_|[::]|_| 
: &#39;,          ,&#39; :           └──────────┘                \\_|_||_|_/ 
 \\  &#39;-......-&#39;  /                                          |_||_|   
  &#39;.          .&#39;              ┌──────┐    Liquidity       _|_||_|_  
    &#39;-......-&#39;       claim    │Reward│    Fees           |___||___| 
      Holder        ◄──────── │Pool  │  ◄──────────────   Liquidity 
                              └──────┘                    Manager   
                                                                 
</pre><h2>Objective of Token Design</h2><p> The Kraiken Protocol is designed to provide a fair and adaptive token ecosystem. By launching with minimal initial liquidity and no team or investor allocations, the protocol ensures equal opportunities for all participants. Minting and burning respond dynamically to market conditions, supporting growth during expansion and reducing supply (and sell pressure) during contraction. </p><br><p> The Liquidity Manager provides deep liquidity, stabilizes the price, and accrues trading fees as rewards for token holders. This design allows casual holders to &quot;hold and forget,&quot; benefiting from passive income and a well-managed, stable ecosystem without needing to actively participate in liquidity management or market decisions. </p><h2>Risk Profile</h2><p> While the Liquidity Manager offers a &quot;guaranteed minimum buyback&quot; through the Floor position, the price is dynamic because some ETH is always allocated to the Anchor position for active trading. This ensures efficient price discovery and liquidity optimization but also introduces variability in the Floor’s backing. Compared to systems like Baseline, which use similar Floor, Anchor, and Discovery positions, Kraiken operates with a more dynamic and risk-tolerant approach. This allows for potentially higher rewards but comes with increased exposure to market fluctuations. </p>`,26)])))}});export{p as default};
