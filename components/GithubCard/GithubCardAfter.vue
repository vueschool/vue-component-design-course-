<!-- GithubProfile.vue -->
<script setup>
const props = defineProps({
  username: {
    type: String,
    required: true
  }
})

const loading = ref(true)
const userData = ref(null)

fetch(`https://api.github.com/users/${props.username}`)
  .then(async (response) => {
    await sleep(2000)
    userData.value = await response.json()
  }).catch(() => {
    console.error('Error fetching GitHub data:', error)
  })
  .finally(() => {
    loading.value = false
  })

</script>

<template>
  <div class="card bg-base-100 shadow-xl max-w-sm w-[350px]">
    <GithubCardSkeleton v-if="loading" />
    <GithubCardContent v-else :userData="userData" />
  </div>
</template>