<script setup>
defineProps({
    img: {
        type: String
    },
    title: {
        type: String,
    }
});
</script>
<template>
    <div class="card bg-base-100 shadow-xl ">
        <figure v-if="img">
            <img :src="img" alt="Post Image" width="384" height="288" class=" bg-base-300" />
        </figure>
        <div class="card-body">
            <h2 v-if="title" class="card-title">{{ title }}</h2>
            <slot></slot>
            <div class="card-actions justify-end">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
</template>
