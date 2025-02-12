<template>
	<li :class="{ active: isActive, parentActive: hasActiveChild }">
		<router-link :to="'#' + props.item.id">{{ props.item.title }}</router-link>

		<ul class="nav" v-if="props.item.children && props.item.children.length > 0">
			<NavItem v-for="(child, index) in props.item.children" :key="index" :item="child" />
		</ul>
	</li>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from "vue";

interface MenuItem {
	title: string;
	id: string | null;
	children: MenuItem[];
}

// Props für das aktuelle Element
const props = defineProps<{ item: MenuItem }>();

// `inject` für die aktive Referenz
const activeSection: any = inject("activeSection");

// Prüfen, ob das aktuelle Element aktiv ist
const isActive = computed(() => {
	return activeSection.value === props.item.id;
});

// Rekursive Prüfung, ob ein untergeordnetes Element aktiv ist
const hasActiveChild = computed(() => {
	return props.item.children.some((child) => checkChildActive(child));
});

function checkChildActive(child: MenuItem): boolean {
	if (child.id === activeSection.value) {
		return true;
	}
	return child.children.some((subChild) => checkChildActive(subChild));
}
</script>

<style scoped>
.nav {
	list-style-type: none;
	padding: 0;
	margin: 0;
}

.nav li {
	margin: 5px 0;
}

.nav a {
	text-decoration: none;
    color: #D6D6D6;
}

.nav li.active a {
	font-weight: bold;
	color: #9667BE;
}

.nav li.parentActive > a {
	font-weight: bold;
	color: #9667BE;
}
</style>
