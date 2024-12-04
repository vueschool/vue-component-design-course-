<script setup>
const posts = ref([])
fetch('/api/posts').then(async (res) => {
  posts.value = await res.json()
})
</script>

<template>
  <div>
    <!-- All Posts -->
    <h1 class="text-2xl my-5">All Posts</h1>
    <PostsList :posts="posts" showControls />

    <!-- Latest Posts -->
    <PostsLatest />
  </div>
</template>