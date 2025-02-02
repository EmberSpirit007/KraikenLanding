<template>
	<a :href="props.href" target="_blank">
		<div
			class="social-badge"
		>
			<div class="social-badge-icon">
				<component :is="img" />
			</div>
		</div>
	</a>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from "vue";

interface Props {
	type?: string;
	href?: string;
}

const props = withDefaults(defineProps<Props>(), {});


const img = computed(() => {
	let img;
	switch (props.type) {
		case "discord":
			img = defineAsyncComponent(() => import(`../components/icons/IconDiscord.vue`));
			break;
		case "twitter":
			img = defineAsyncComponent(() => import(`../components/icons/IconTwitter.vue`));
			break;
		case "telegram":
			img = defineAsyncComponent(() => import(`../components/icons/IconTelegram.vue`));
			break;

		default:
			break;
	}

	return img;
});
</script>
<style lang="sass">
.social-badge
    border-radius: 14px
    display: flex
    border: 2px solid #D6D6D6
    padding: 8px 48px
    align-items: center
    flex: 0 1 0
    color: black
    height: 100%
    box-sizing: border-box
    .social-badge-icon
        display: flex
        svg
            fill: #D6D6D6
    &:hover,&:active,&:focus
        cursor: pointer
        background-color: #F9F9FA
        svg
            fill: unset
        
</style>
