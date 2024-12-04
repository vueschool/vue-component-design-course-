<script setup>
defineProps({
    // state props
    loading: { type: Boolean, default: false },

    // configuration props
    outline: { type: Boolean, default: false },
})

</script>
<template>
    <button class="btn flex items-center" :class="{
        'btn-outline': outline
    }">
        <AppSpinner v-if="loading" />
        <slot></slot>
    </button>
</template>