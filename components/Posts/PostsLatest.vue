<!-- Smart Component: Page -->
<script setup>
const latestPosts = ref([])
fetch('/api/latest-posts').then(async (res) => {
    latestPosts.value = await res.json()
})
</script>

<template>
    <h1 class="text-2xl my-5">Latest Posts</h1>
    <div>
        <PostsList :posts="latestPosts" />
    </div>
</template>