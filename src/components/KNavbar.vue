<template>
	<header>
		<div class="kraken-navbar" :class="{ scrolled: scrollPosition > 50 }">
			<div class="navbar-left" @click="router.push('/')">
				<div class="navbar-title">
					<span>K</span>
					<span class="big-spacing">r</span>
					<span class="small-spacing">A</span>
					<span class="big-spacing">I</span>
					<span>ken</span>
				</div>
			</div>
			<div class="navbar-right">
				<nav>
					<RouterLink to="/docs">Docs</RouterLink>
				</nav>
				<div class="navbar-socials">
					<social-button :dark="true" type="telegram"></social-button>
					<social-button :dark="true" type="twitter"></social-button>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import SocialButton from "./SocialButton.vue";
import { onMounted, ref } from "vue";

const router = useRouter();

const scrollPosition = ref(0);

function updateScroll() {
	scrollPosition.value = window.scrollY;
}

onMounted(() => {
	window.addEventListener("scroll", updateScroll);
});
</script>

<style lang="sass">
.kraken-navbar
    box-sizing: border-box
    background-color: transparent
    padding: 8px 24px
    height: 60px
    border-bottom: 2px solid transparent
    display: flex
    align-items: center
    justify-content: space-between
    position: fixed
    top: 0
    transition: 0.2s ease
    color: #07111B
    width: 100%
    z-index: 100
    &.scrolled
        border-bottom: 2px solid red
        background-color: #07111B
        color: #D6D6D6
        border-bottom: 2px solid #9A9898

        .navbar-right
            .navbar-socials
                .social-badge
                    border: 2px solid #D6D6D6
                    .social-badge-icon
                        svg
                            fill: #D6D6D6

            nav
                a
                    color: #D6D6D6
    .navbar-right
        display: flex
        gap: 24px
        align-items: center
        @media (min-width: 768px)
            gap: 48px
        nav
            a
                font-size: 18px
                // color: #D6D6D6
                color: #07111B
                line-height: 24px
                font-weight: 500
                text-decoration: none
                &:hover, &:active, &:focus
                    color: #F9F9FA
        .navbar-socials
            display: flex
            gap: 8px
            @media (min-width: 768px)
                gap: 24px
            .social-badge
                border: 2px solid #07111B
                .social-badge-icon
                    svg
                        fill: #07111B
    .navbar-left
        display: flex
        gap: 8px
        letter-spacing: 3.6px
        align-items: center
        font-size: 32px
        font-weight: 400
        &:hover, &:active, &:focus
            cursor: pointer
        img
            height: 40px
            width: 40px
            @media (min-width: 768px)
                height: auto
                width: auto
        .navbar-title
            font-size: 24px
            font-family: 'Audiowide', sans-serif
            >*
                font-family: 'Audiowide', sans-serif
            @media (min-width: 768px)
                display: block
                font-size: 36px
                font-weight: bold
            .big-spacing
                letter-spacing: 5.76px
            .small-spacing
                letter-spacing: 1.8px
</style>
