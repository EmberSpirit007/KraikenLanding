<script setup lang="ts"></script>

<template>
	<div class="k-container">
		<section class="hero-section">
			<div class="hero-text">
				<h1>First AI Agent for Liquidity Optimization</h1>
				<span>Fully autonomous, sovereign and on-chain.</span>
			</div>
			<img src="@/assets/img/kraken.png" alt="kraken" class="image-card" />
		</section>
		<section class="token-liquidity-section">
			<h2>Unrugable Token Liquidity</h2>
			<p>
				$KRK is the first token with unrugable liquidity managed by AI. <br /><br />
				The liquidity pool is protected by a sovereign AI Agent that optimizes liquidity positions based on real
				time market data.
			</p>
			<k-button outlined> Get $KRK </k-button>
		</section>
		<section class="challenge-section">
			<img src="@/assets/img/chest.png" alt="kraken" class="image-card" />

			<div class="challenge-section-body">
				<h2>Challenge the AI</h2>
				<p>
					KrAIken is a <u>DeFAI</u> Protocol in open beta.<br /><br />
					Everyone is invited to train the AI by trading and challenge it's liquidity positions.
				</p>
				<k-button> Read Docs </k-button>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import KButton from "@/components/KButton.vue";
</script>

<style lang="sass">
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
    max-width: 550px
    @media (min-width: 768px)
        align-self: end
        text-align: right
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
            font-size: 18px
            text-align: left
            @media (min-width: 768px)
                text-align: unset
</style>
