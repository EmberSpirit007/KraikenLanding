<template>
	<header>
		<div class="kraken-navbar" :class="{ scrolled: isScrolled }">
			<div class="navbar-left" @click="router.push('/')">
				<div class="navbar-title">
					<span>K</span>
					<span class="big-spacing">r</span>
					<span class="small-spacing">A</span>
					<span class="big-spacing">I</span>
					<span>ken</span>
				</div>
			</div>
			<div class="desktop-nav">
                <RouterLink to="/docs">Docs</RouterLink>
                <div class="social-buttons">
                    <social-button type="telegram" href="https://t.me/kraikenportal"></social-button>
                    <social-button type="twitter" href="https://x.com/KrAIkenProtocol"></social-button>
                </div>
            </div>
            <div class="menu-trigger" @click.stop="toggleMenu">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="2" :fill="isScrolled ? '#D6D6D6' : '#07111B'" />
                    <circle cx="12" cy="12" r="2" :fill="isScrolled ? '#D6D6D6' : '#07111B'" />
                    <circle cx="12" cy="19" r="2" :fill="isScrolled ? '#D6D6D6' : '#07111B'" />
                </svg>
            </div>            
		</div>
        <div class="menu-overlay" v-if="isMenuOpen" @click="closeMenu"></div>
        <div class="slide-menu" :class="{ 'is-open': isMenuOpen }">
            <div class="menu-items">
                <RouterLink 
                to="/" 
                @click="closeMenu" 
                :class="{ active: $route.path === '/' }"
            >Start</RouterLink>
            <RouterLink 
                to="/docs" 
                @click="closeMenu" 
                :class="{ active: $route.path === '/docs' }"
            >Docs</RouterLink>
            </div>
            <div class="menu-socials">
                <social-button type="telegram" href="https://t.me/kraikenportal"></social-button>
                <social-button type="twitter" href="https://x.com/KrAIkenProtocol"></social-button>
            </div>
        </div>
	</header>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import SocialButton from "./SocialButton.vue";
import { onMounted, onUnmounted, ref,computed } from "vue";

const router = useRouter();

const scrollPosition = ref(0);

const isMenuOpen = ref(false);

const isScrolled = computed(() => 
  router.currentRoute.value.fullPath.includes('/docs') || 
  scrollPosition.value > 50
);

function updateScroll() {
	scrollPosition.value = window.scrollY;
}
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMenu() {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
}
onMounted(() => window.addEventListener("scroll", updateScroll));
onUnmounted(() => window.removeEventListener("scroll", updateScroll));document.body.style.overflow = '';
</script>

<style lang="sass">

.desktop-nav
    display: none
    align-items: center
    gap: 24px
    @media (min-width: 768px)
        display: flex
    a
        color: #07111B
        text-decoration: none
        font-size: 18px
        line-height: 24px
        font-weight: 500
        &:hover, &:active, &:focus
            color: #F9F9FA
    .social-buttons
        display: flex
        gap: 16px
        margin-left: 16px
        .social-badge
            border: 2px solid #07111B
            transition: all 0.2s ease
            svg
                fill: #07111B
            &:hover
                border: 2px solid #07111B
                svg
                    fill: #07111B

.menu-trigger
    display: none
    cursor: pointer
    padding: 8px
    z-index: 99
    @media (max-width: 767px)
        display: block

.menu-overlay
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.6)
    z-index: 96
    display: none
    @media (max-width: 767px)
        display: block

.slide-menu
    position: fixed
    border-top-left-radius: 20px
    border-bottom-left-radius: 20px
    top: 0
    right: -240px
    width: 240px
    height: 400px
    background: #07111B
    z-index: 99
    transition: transform 0.3s ease
    display: none
    @media (max-width: 767px)
        display: flex
        flex-direction: column
        &.is-open
            transform: translateX(-240px)
    .menu-items
        padding: 80px 32px
        display: flex
        flex-direction: column
        gap: 24px
        flex: 1
        a
            color: #9A9898
            text-decoration: none
            font-size: 24px
            font-weight: 500
            &.router-link-active,
            &.active
                color: #D6D6D6
            &:hover
                opacity: 0.8
    .menu-socials
        padding: 32px
        display: flex
        gap: 16px
        justify-content: center

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
    z-index: 99
    &.scrolled
        border-bottom: 2px solid red
        background-color: #07111B
        color: #D6D6D6
        border-bottom: 2px solid #9A9898
        .desktop-nav
            a
                color: #D6D6D6
                &:hover
                    color: #F9F9FA
            .social-buttons 
                .social-badge
                    border-color: #D6D6D6
                    svg
                        fill: #D6D6D6
                    &:hover
                        border-color: #F9F9FA
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
