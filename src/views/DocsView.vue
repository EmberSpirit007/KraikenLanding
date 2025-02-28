<template>
	<div class="docs-overlay" :class="{ open: sideMenuOpen }" @click="sideMenuOpen = false"></div>
	<div class="docs-view" ref="docsView" style="
        padding-top: 60px;
        ">
		<div class="docs--header">
			<div class="side-menu-toggle">
				<icon-menu @click="openSideMenu"></icon-menu>
			</div>
		</div>
		<transition name="slide">
			<div class="side-menu" v-if="sideMenuOpen">
				<h4>Navigation</h4>
				<RouterLink
					@click="sideMenuOpen = false"
					v-for="route in docsRoute?.children"
					:key="route.name"
					:to="route.path"
					>{{ route.name }}</RouterLink
				>
			</div>
		</transition>
		<div class="docs--body">
			<div class="left">
				<div class="left-navigation">
					<h4>Navigation</h4>
					<RouterLink v-for="route in docsRoute?.children" :key="route.name" :to="route.path">{{
						route.name
					}}</RouterLink>
				</div>
			</div>
			<div class="center">
				<RouterView @onmounted="routeOnMounted" />
			</div>
			<div class="right">
				<div class="content" :key="rerender">
					<div class="outline-marker" style="top: 71px; opacity: 1"></div>
					<div><b>On this page</b></div>
					<ul class="nav">
						<NavItem v-for="(item, index) in subMenu" :key="index" :item="item" />
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter, RouterLink } from "vue-router";
import { ref, onMounted, onBeforeUnmount, watch, provide } from "vue";
import IconMenu from "@/components/icons/IconMenu.vue";
import NavItem from "@/components/NavItem.vue";

const route = useRoute();
console.log("route", route);

const router = useRouter();
console.log("router", router.getRoutes());
const rerender = ref(0);
const docsView = ref();
const sideMenuOpen = ref(false);

const headings = ref();
const subMenu = ref<Array<any>>([]);

const docsRoute = router.getRoutes().find((obj) => obj.name === "Docs");

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
	loadHeadlines();
});

function loadHeadlines() {
	console.log("loadHeadlines");

	headings.value = [];
	subMenu.value = [];
	const headings1 = docsView.value.querySelectorAll("h1, h2, h3, h4, h5, h6");

	console.log("headings1", headings1);
	generateIds(headings1);
	subMenu.value = createMenuStructure(headings1);
	console.log("subMenu.value", subMenu.value);
}

function generateIds(headings: any) {
	for (let index = 0; index < headings.length; index++) {
		const element = headings[index];
		if (!element.id) {
			element.id = element.tagName + index;
		}
	}
}

function createMenuStructure(headings: any) {
	const menu: Array<any> = [];
	const stack = [{ level: 0, children: menu }];
	let i = 0;
	headings.forEach((heading: any) => {
		const level = parseInt(heading.tagName.slice(1), 10);
		const title = heading.textContent.trim();
		let id = heading.id || null;
		console.log("heading.id", heading.id);

		if (!id) {
			id = heading.tagName + i;
		}

		const newItem = { title, id, children: [] };

		// Passende Position im Stack finden
		while (stack.length > 0 && stack[stack.length - 1].level >= level) {
			stack.pop();
		}

		// Neues Element als Kind des aktuellen Stack-Eintrags hinzufügen
		stack[stack.length - 1].children.push(newItem);

		// Aktuelles Element auf den Stack legen
		stack.push({ level, children: newItem.children });
		i++;
	});

	return menu;
}

function openSideMenu() {
	sideMenuOpen.value = true;
}

function routeOnMounted() {
	console.log("routeOnMounted");
	rerender.value++;
	console.log("rerender", rerender);
	loadHeadlines();
}

const activeSection = ref("");

// Überwache den Scrollvorgang
const handleScroll = () => {
	const sections = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

	sections.forEach((section) => {
		const rect = section.getBoundingClientRect();
		if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
			activeSection.value = section.id;
		}
	});
};

provide("activeSection", activeSection);

// Scroll-Events verwalten
onBeforeUnmount(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="sass">
.docs-view 
    .docs--body 
        pre
            overflow: auto
            max-width: 100%
            width: calc(100vw - 48px)
            @media (min-width: 992px)
                width: auto
                overflow: unset
// docs styling e.g. warning-class
.warning
    color: #e6a23c
    font-weight: bold
.danger
    color: #f56c6c
    font-weight: bold
.docs-overlay
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%
    background-color: rgba(15, 15, 15, 0.7)
    display: none
    z-index: 100
    &.open
        display: block
.docs-view
    position: relative
    font-size: 16px
    text-align: left
    .docs--header
        height: 40px
        top: 80px
        position: sticky
        height: 40px
        padding: 4px
        display: flex
        align-items: center
        background-color: var(--color-primary)
        @media (min-width: 992px)
            display: none
        .side-menu-toggle
            height: 40px
            padding: 12px
            position: fixed
            top: 80px
            svg
                height: 25px
                path
                    fill: white
    .docs--body
        display: flex
        pre
            line-height: 1
            font-family: monospace
        h1, h2, h3
            text-align: left !important
        h1
            letter-spacing: -0.02em
            line-height: 40px
            font-size: 32px
        h2
            margin: 48px 0 16px
            border-top: 1px solid lightgrey
            padding-top: 24px
            letter-spacing: -0.02em
            line-height: 32px
            font-size: 24px
        h3
            margin: 24px 0 16px
            font-size: 20px
        ul
            padding-left: 1.25rem
            margin: 16px 0

        >div
            flex: 0 0 auto
        .right
            width: 224px
            padding: 0 32px 0 0
            position: relative
            display: none
            @media (min-width: 992px)
                display: block
            .content
                position: fixed
                border-left: 1px solid lightgrey
                padding-left: 16px
                font-size: 13px
                font-weight: 500
                margin-top: 20px
                ul
                    padding: 0 12px
                    margin: 0
                    li
                        list-style: none
                        &.active
                            color: #9667BE
                            font-weight: bold
        .left
            width: 272px
            padding: 0 16px
            position: relative
            display: none
            color: #D6D6D6
            @media (min-width: 992px)
                display: block
                padding: 0 64px
            .left-navigation
                display: flex
                flex-direction: column
                gap: 8px
                position: fixed
                a
                    color: inherit
                    text-decoration: none
                    &.router-link-active
                        color: #9667BE
                        font-weight: bold
        .center
            padding: 0 24px
            flex: 1 1 auto
            a
                text-decoration: underline
                color: #3451b2
                font-weight: bold


.side-menu
    display: flex
    flex-direction: column
    position: fixed
    top: 0
    left: 0
    z-index: 200
    padding: 112px 32px 96px 32px
    width: calc(100vw - 64px)
    max-width: 320px
    background-color: var(--vp-sidebar-bg-color)
    // opacity: 0
    box-shadow: var(--vp-c-shadow-3)
    overflow-x: hidden
    overflow-y: auto
    transition: opacity 0.5s, transform 0.25s ease
    overscroll-behavior: contain
    color: white
    background-color: var(--midnight-black, #0F0F0F)
    height: 100vh
    gap: 4px
    transform: translateX(0)
    .router-link-active
        color: white
        font-weight: bold
    a
        color: white
        text-decoration: none


.slide-enter
    transform: translateX(-100%)


.slide-enter-active
    transition: all .1s ease-in
    transform: translateX(-100%)




.slide-leave-active
    transition: all .2s ease-in

.slide-leave-to
    transform: translateX(-100%)
</style>
