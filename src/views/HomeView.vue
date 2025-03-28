<template>
	<div class="header-section">
		<img v-if="isMobile" src="@/assets/img/header-image-mobile.png" width="800" height="600" alt="Kraiken Boss" />
		<img v-else src="@/assets/img/header-image.png" width="1920" height="1080" alt="Kraiken Boss" />
		<div class="header-text">
			Deep Liquidity <br />
			AI Agent
		</div>
		<div class="blur-effect"></div>
	</div>
	<countdown v-model="countdownExpired" :end="endDt">
        <template #default>
            Coming soon
        </template>
    </countdown>
	<div class="k-container">
		<section class="token-liquidity-section">
			<h2>Unruggable Token Liquidity</h2>
			<p>
				$KRK is the first token with unruggable liquidity managed by AI.<br /><br />
				The liquidity pool is protected by a sovereign AI Agent that optimizes liquidity positions based on real
				time market data.
			</p>
			<br />
			<!-- <k-button outlined @click="openUniswap" @mouseover="onMouseOver" @mouseout="onMouseOut"> {{ getKrkText }} </k-button> -->
			<k-button outlined @mouseover="onMouseOver" @mouseout="onMouseOut"> {{ getKrkText }} </k-button>
		</section>
		<section class="challenge-section">
			<left-right-component reverse>
				<template #left>
					<img src="@/assets/img/chest.png" alt="kraken" class="image-card" />
				</template>
				<template #right>
					<h2>Going Deeper</h2>
					<p>
						KrAIken is built to deepen token liquidity, starting in the $KRK pool—an ideal ground for
						mastering market tides. <br /><br />

						Once matured, it extends its reach across the crypto ocean, managing diverse pools, generating
						profit, and expanding utility.
					</p>
				</template>
			</left-right-component>
			<left-right-component>
				<template #left>
					<img src="@/assets/img/arielle.png" alt="kraken" class="image-card" />
				</template>
				<template #right>
					<h2>Meet Arielle (coming soon)</h2>
					<p>
						Ask questions, challenge the protocol, and find edge cases for KrAIken. <br /><br />
						Arielle is here to assist.
					</p>
					<k-button @click="router.push('/docs')"> Read Docs</k-button>
				</template>
			</left-right-component>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import KButton from "@/components/KButton.vue";
import LeftRightComponent from "@/components/LeftRightComponent.vue";
import Countdown from "@/components/Countdown.vue";
import { useMobile } from "@/composables/useMobile";
import { useRouter } from "vue-router";

const endDt = new Date(1742572800000);
const countdownExpired = ref(1);
const getKrkText = ref("Get $KRK");
const isMobile = useMobile();
const router = useRouter();

function openUniswap() {
	window.open(
		"https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x45caa5929f6ee038039984205bdecf968b954820",
		"_blank"
	);
}

function onMouseOver(event: any) {
    getKrkText.value = "On launch";

}

function onMouseOut(event: any) {
    getKrkText.value = "Get $KRK";

}
</script>

<style lang="sass">
.header-section
    position: relative
    .blur-effect
        filter: blur(45px)
        height: 300px
        position: absolute
        bottom: -150px
        width: 100%
        background-color: #07111B
        left: -10%
        width: 120%

    img
        max-width: 100%
        min-width: 100%
        height: auto
    .header-text
        color: #E6E6E6
        mix-blend-mode: color-dodge
        font-weight: 500
        position: absolute
        text-align: left
        top: 50%
        left: 35%
        transform: translate(-50%, -50%)
        font-size: 35px
        font-weight: 500
        @media (min-width: 768px)
            width: unset
            font-size: 78px
.image-card
    box-shadow: 0px 0px 50px 0px #000
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
    margin-top: 88px
    max-width: 840px
    z-index: 10
    p
        text-align: center
        font-weight: 50
        @media (min-width: 768px)
            text-align: unset
    h2
        font-weight: 400
        letter-spacing: 0.25px
        font-size: 24px
        @media (min-width: 768px)
            font-size: 27px
.challenge-section
    display: flex
    flex-direction: column
    gap: 120px
</style>
