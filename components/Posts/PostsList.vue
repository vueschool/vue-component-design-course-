<script setup>
const props = defineProps({
    posts: { type: Array },
    showControls: { type: Boolean, default: false }
})
const filter = ref('');
const filteredPosts = computed(() => {
    return props.posts.filter(post =>
        post.title.toLowerCase().includes(filter.value.toLowerCase())
    );
});
</script>

<template>
    <div>
        <div v-if="showControls" class="flex justify-end mb-5">
            <input type="text" v-model="filter" placeholder="Search posts by title" class="input input-bordered" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            <PostsListItem v-for="post in filteredPosts" :key="post.id" :post="post" />
        </div>
    </div>
</template>