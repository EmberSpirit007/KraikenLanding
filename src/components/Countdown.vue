<template>
	<div class="countdown">
        <div class="countdown__title">
            Time until launch
        </div>
        <div class="countdown__time">
            <slot :days="differenceDays" :hours="differenceHours" :minutes="differenceMinutes">
                <div>{{ differenceDays }}d {{ differenceHours }}h {{ differenceMinutes }}m {{ differenceSeconds }}s</div>
            </slot>
        </div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
const seconds = ref(0);
let _timerId:ReturnType<typeof setTimeout>;

interface Props {
	modelValue: number;
	end: Date;
}

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<Props>(), {
	modelValue: 0,
});

const differenceDays = computed(() => {
    if(seconds.value <= 0){
        return 0
    } 
    return Math.floor(seconds.value / (3600 * 24))
});
//tage abziehen
const differenceHours = computed(() => {
    if(seconds.value <= 0){
        return 0
    }
    return Math.floor((seconds.value - differenceDays.value * 3600 * 24) / 3600)
});
//tage + stunden abziehen
const differenceMinutes = computed(() =>
	{
        if(seconds.value <= 0){
            return 0
        }
        return Math.floor((seconds.value - differenceDays.value * 3600 * 24 - differenceHours.value * 3600) / 60)
    }
);

const differenceSeconds = computed(() =>
    {
        if (seconds.value <= 0) {
            return 0;
        }
        return seconds.value - differenceDays.value * 86400 - differenceHours.value * 3600 - differenceMinutes.value * 60;
    }
);


onMounted(() => {
	seconds.value = Math.round((props.end.getTime() - new Date().getTime()) / 1000);
	if (seconds.value > 0) {
		_timerId = setInterval(() => {
			seconds.value--;
            emit("update:modelValue", seconds.value)

			if (seconds.value <= 0) {
                
				clearInterval(_timerId);
			}
		}, 1000);
        
	}
    emit("update:modelValue", seconds.value)

});


onUnmounted(() => clearInterval(_timerId));
</script>


<style lang="sass">

@keyframes borderAnimation
  0%
    background-position: 0% 50%
  50%
    background-position: 100% 50%
  100%
    background-position: 0% 50%


.countdown
    z-index: 10
    align-self: center
    font-weight: bold
    width: calc( 100vw - 48px)
    @media (min-width: 768px)
        width: 500px
    .countdown__title
        text-align: left
        font-size: 18px
        font-weight: 400
        margin: 8px
        @media (min-width: 768px)
            font-size: 20px
    .countdown__time
        box-sizing: border-box
        padding: 12px 24px
        font-size: 32px
        position: relative
        border-radius: 12px
        @media (min-width: 768px)
            font-size: 40px
        &>div
            font-family: 'orbitron', sans-serif
            font-weight: 400
        &::before
            content: ""
            position: absolute
            inset: 0
            border-radius: inherit
            /* Erbt die Abrundung */
            padding: 2px
            /* Dicke des Borders */
            background: linear-gradient(10deg, #BF62B2, black)
            -webkit-mask: linear-gradient(white, white) content-box, linear-gradient(white, white)
            -webkit-mask-composite: destination-out
            mask-composite: exclude
            z-index: -1
</style>