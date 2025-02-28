<template>
	<div class="left-right-component" :class="{ 'left-right-component--reverse': props.reverse }">
		<div class="left">
			<slot name="left">
				<img src="@/assets/img/chest.png" alt="kraken" class="image-card" />
			</slot>
		</div>

		<div class="right">
			<slot name="right">
				<h2>Challenge the AI</h2>
				<p>
					KrAIken is a <u>DeFAI</u> Protocol in open beta.<br /><br />
					Everyone is invited to train the AI by trading and challenge it's liquidity positions.
				</p>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		reverse?: boolean;
	}>(),
	{
		reverse: false,
	}
);
</script>

<style lang="sass">
.left-right-component
    display: flex
    justify-content: space-between
    align-items: center
    gap: 64px
    flex-direction: column
    text-align: center
    @media (min-width: 768px)
        flex-direction: row
        text-align: unset
    &.left-right-component--reverse
        flex-direction: column
        @media (min-width: 768px)
            flex-direction: row-reverse
    .left
        img
            height: 255px
            width: 255px
            @media (min-width: 768px)
                width: unset
                height: unset
    .right
        max-width: 480px
        text-align: center
        @media (min-width: 768px)
            text-align: unset
            text-align: left

        h2
            font-size: 24px
            font-weight: 400
            @media (min-width: 768px)
                font-size: 27px

        p
            margin-bottom: 32px
            @media (min-width: 768px)
                font-size: 18px
</style>
