<script setup>
defineProps({
    post: {
        type: Object,
        required: true
    }
});
</script>
<template>
    <AppCard :img="post.imageUrl" :title="post.title">
        <p>{{ post.content }}</p>
        <template #actions>
            <button class="btn btn-primary">Read More</button>
        </template>
    </AppCard>
</template>
