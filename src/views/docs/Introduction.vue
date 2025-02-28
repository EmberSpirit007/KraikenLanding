<template>
    <div>
        <h1 id="first">Introduction</h1>
        <p>Welcome to KrAIken, a decentralized finance (DeFi) protocol that integrates artificial intelligence (AI) to optimize liquidity management. KrAIken operates autonomously, ensuring on-chain execution of adaptive liquidity strategies.</p>
        <p>At the core of KrAIken is the $KRK token and its liquidity pool, which acts as a testing ground and learning environment for the AI agent. The agent dynamically adjusts liquidity positions based on real-time market data, aiming to maintain stability and efficiency within the pool. Disclaimer: If the agent fails in its tasks, it may negatively impact the value of $KRK.</p>
        <p>This initiative not only tests the resilience of the protocol but also offers the community an opportunity to interact with and evaluate its performance. Through continuous iteration, KrAIken’s AI will eventually expand to other Uniswap liquidity pools, generating profits through liquidity fees and creating real utility for the protocol and the $KRK token.</p>
        <p>KrAIken is not just another centralized, hosted large language model (LLM). It is fully sovereign. Developed by <a href="https://sovraigns.network">SovrAIgns.network</a>, KrAIken represents an evolution in DeFi, combining decentralized finance principles with adaptive AI to create a truly innovative financial platform.</p>
        <p>In the chapters ahead, we will delve into KrAIken’s liquidity management strategies, the architecture of its AI agent, the tokenomics of $KRK, and staking mechanisms available to our community members.</p>
        <br>
        <pre>
                        ..-.                                                                                
                   -+:.:==-=++=-                                                                            
                 -=++++=++==+++++:                                                                          
               .=+++===:=++++==+++=                 :---:::                                                 
               =-++=--.     -+++**+:              .-=======::                                               
              =-+*+:.        :*****+            :--========-=:                                              
              +=**+.          :+***+           .++===-==+++=+==:                                        ::: 
              =+**+-:--==-:    *****:          +**+===+=+++++++=:             .--=--::               .::.   
              -=+*+=::- :--:   *****-         =***++┬┐*+ +┬┐+-  :           ======-:-=--:            --     
              :--=++:.::+.:-   -****=.      :-++++**└┴=**+└┴+++=:         =+=++++==+=----:          --      
       *:*+++= :*+==+=..=++-.  -****++     -+**********+*+*++: =-       =+++++++++++=+=--==:       :=-      
   :*:+*******+*=-+=-:.+-++-:  =++***++   -=**********+││*****+=+     =+***++++==  .==++=====      -==      
  *:*:*:*:****+*++++-- :***=   :++*****+=.=*******++***││****+=+*-  .++****++-+      +=-+=++==-:   ===      
 ***::        *+*+++++- :+**=    *****************++*+*****+++*+**********+*+:        =+++++++.-  .===      
*:            ++*++++=. =+***+-    *********::****+=+=****+-=+********::**+=           +++++++= . --=       
              +===++++. :+******=  +******:::****+=:=+****-:=+****:::::****            .:++==-=  ::--       
             :-+*+++++= :-=*+****:: ::::**:*****=::::*****=:.+*****::***=..:----.       ::-++++=== -:       
            +.:=+++++*+:.:=+*+*****:*:::******+-::::-****++:::-********+-+++++++++=-    .:+++++=++--.   -==-
 +:**     +***+-=++++++=::.==+******+********+:::::=******+=::::******++**+++++++++=-.   ++++++++++:.:  --: 
 **::*+****+++++==:+=++*= :--=******=******+=::::::*******++:::::+***=***+++:::=-----::  =+==++++==:----:   
    ***===  =++++=-+=*++++::-::++**+=+***+==::::::********+++::::+***+=++++::      ----:.==+++++++=--::     
                  +=*++=+++:--.+++++-++++=:::::=+**********++=:::::++==+++         ::::..=++++*++-----:     
                  -+-+++*+++=.:--===:==+===-=+===+****++++*++++:::::-=.===      ..:-----=++++++::+:         
                    ++++**++++-:-..--=. :--- ---==========- . +=+-:::::.--=-+======-.=++++++++::            
                      :+++++++++-::..:-::=:  . .:-.: .  .      :-.:--.::--:=---:.:::-  -++++:+:             
                         :--:-+++==-:-    -:                .-     :---=-=--=-:     .  =++++*+=             
                         : .:.=-:.--:....                 :          : :.::---=-.  .:-===+++=               
              ::   ..       ....  :. . -   :::              .             .   ..  .====+++******:.:         
           :-..-==:              .       :       :       :====++++++++++*****++++=-++**************=+       
           ***-:::::::=   ++++- -+=-   .--:::--=-=     ++++++=++=++++==+     *++**********    ******    
        </pre>
     </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(["onmounted"])
onMounted(() => {
    emit("onmounted")
})
</script>
