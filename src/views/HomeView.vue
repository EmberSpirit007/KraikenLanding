<template>
	<div class="header-section">
		<img src="@/assets/img/header-image.png" alt="Kraiken Boss" />
		<div class="header-text">Can you defeat the KrAIken?</div>
	</div>
	<div class="k-container">
		<section class="token-liquidity-section">
			<h2>Unrugable Token Liquidity</h2>
			<p>
				$KRK is the first token with unrugable liquidity managed by AI. <br /><br />
				The liquidity pool is protected by a sovereign AI Agent that optimizes liquidity positions based on real
				time market data.
			</p>
			<k-button outlined @click="openUniswap"> Get $KRK </k-button>
		</section>
		<section class="challenge-section">
			<img src="@/assets/img/chest.png" alt="kraken" class="image-card" />

			<div class="challenge-section-body">
				<h2>Challenge the AI</h2>
				<p>
					KrAIken is a <u>DeFAI</u> Protocol in open beta.<br /><br />
					Everyone is invited to train the AI by trading and challenge it's liquidity positions.
				</p>
				<k-button @click="router.push('/docs')"> Read Docs </k-button>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import KButton from "@/components/KButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function openUniswap(){
    window.open("https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x45caa5929f6ee038039984205bdecf968b954820", "_blank")
}
</script>

<style lang="sass">
.header-section
    position: relative
    img
        width: 100%
    .header-text
        color: #E6E6E6
        text-shadow: 0 0 10px rgba(160, 239, 255, 0.8), 0 0 20px rgba(160, 239, 255, 0.6), 0 0 30px rgba(160, 239, 255, 0.4)
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        width: 100%
        font-size: 35px
        @media (min-width: 768px)
            width: unset
            font-size: 60px
.image-card
    box-shadow: 0px 0px 43px #000000
    border-radius: 14.5px
.section-block
    display: flex
    flex-direction: column
    gap: 32px
    .kraken-button
        align-self: center

h2
    line-height: 133%
    letter-spacing: 0px

.hero-section
    display: flex
    justify-content: space-between
    align-items: center
    text-align: center
    flex-direction: column
    @media (min-width: 768px)
        text-align: left
        flex-direction: row-reverse
    img
        height: 450px
        width: 250px
        @media (min-width: 768px)
            width: unset
            height: unset

    .hero-text
        display: flex
        flex-direction: column
        align-items: center
        @media (min-width: 768px)
            width: 365px
        h1
            font-size: 27px
            @media (min-width: 768px)
                font-size: 42px

        p
            font-size: 18px
.token-liquidity-section
    text-align: center
    align-self: center
    max-width: 550px
    p
        text-align: left
        @media (min-width: 768px)
            text-align: unset
    h2
        font-weight: 700
        letter-spacing: 0.25px
        font-size: 24px
        @media (min-width: 768px)
            font-size: 27px

.challenge-section
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    @media (min-width: 768px)
        flex-direction: row-reverse
    img
        height: 255px
        width: 255px
        @media (min-width: 768px)
            width: unset
            height: unset

    .challenge-section-body
        max-width: 480px
        text-align: center
        @media (min-width: 768px)
            text-align: unset
            text-align: left

        h2
            font-size: 24px
            @media (min-width: 768px)
                font-size: 27px

        p
            text-align: left
            @media (min-width: 768px)
                font-size: 18px
                text-align: unset
</style>
