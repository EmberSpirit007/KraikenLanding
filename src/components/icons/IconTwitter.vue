<template>
	<svg width="19" height="19" viewBox="0 0 19 19"  xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M0.5 0.5L7.4306 10.625L0.646792 18.5H2.14979L8.0944 11.5946L12.8213 18.5H18.5L11.2592 7.92259L17.6488 0.5H16.1504L10.5945 6.95025L6.17872 0.5H0.5ZM2.29474 1.44737H5.6811L16.7053 17.5526H13.3189L2.29474 1.44737Z"/>
</svg>

</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

const svgPath = ref();

interface Props {
	color?: string;
}

const props = withDefaults(defineProps<Props>(), {});

</script>
