<template>
	<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group">
<path id="Vector" d="M16.558 0.345906L1.24462 6.2506C0.199293 6.66992 0.205631 7.2531 1.05407 7.5128L4.98317 8.73926L6.33449 13.1866C6.51217 13.677 6.42458 13.8716 6.93975 13.8716C7.33718 13.8716 7.51274 13.6899 7.7346 13.4742L9.64412 11.6175L13.6166 14.5525C14.3477 14.9559 14.8754 14.7469 15.0575 13.8739L17.6654 1.58466C17.9324 0.51398 17.2574 0.0283891 16.558 0.345906Z" />
<path id="Vector_2" d="M6.95616 12.6891L5.66016 8.424L15.6361 2.50586L8.26406 9.76418L6.95616 12.6891Z"/>
</g>
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
