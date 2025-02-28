<template>
    <button class="kraken-button" :class="{'kraken-button--outlined': props.outlined}">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    outlined?: boolean
}>(), {
    outlined: false
})
</script>


<style lang="sass">
.kraken-button
    background-color: #000000
    color: white
    font-family: 'Exo 2 Bold', sans-serif
    font-weight: 500
    line-height: 26px
    letter-spacing: 0.46px
    font-size: 14px
    padding: 16px 64px
    border-radius: 12px
    border: none
    cursor: pointer
    color: #BF62B2
    display: inline-block
    text-align: center
    text-decoration: none
    transition: all 0.3s ease-in-out
    box-shadow: 0px 0px 7.6px 0px #000, 0px 0px 20.6px 0px #BF62B2
    @media (min-width: 768px)
        font-size: 20px

    &:hover,&:active
        background-color: #F9F9FA
        color: #9667BE
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25) inset
</style>