<template>
	<header>
		<div class="kraken-navbar">
			<div class="navbar-left" @click="router.push('/')">
				<img src="@/assets/img/logo.png" alt="Logo" />
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

const router = useRouter();
</script>

<style lang="sass">
.kraken-navbar
    box-sizing: border-box
    background-color: #07111B
    padding: 8px 24px
    height: 60px
    border-bottom: 2px solid #9A9898
    display: flex
    align-items: center
    justify-content: space-between
    position: fixed
    top: 0
    color: #D6D6D6
    width: 100%
    .navbar-right
        display: flex
        gap: 24px
        align-items: center
        @media (min-width: 768px)
            gap: 48px
        nav
            a
                font-size: 18px
                color: #D6D6D6
                line-height: 24px
                text-decoration: none
                &:hover, &:active, &:focus
                    color: #F9F9FA
        .navbar-socials
            display: flex
            gap: 8px
            @media (min-width: 768px)
                gap: 24px
    .navbar-left
        display: flex
        gap: 8px
        letter-spacing: 3.6px
        align-items: center
        font-size: 32px
        font-weight: 400
        &:hover, &:active, &:focus
            cursor: pointer
        .navbar-title
            display: none
            @media (min-width: 768px)
                display: block
            .big-spacing
                letter-spacing: 5.76px
            .small-spacing
                letter-spacing: 1.8px
</style>
