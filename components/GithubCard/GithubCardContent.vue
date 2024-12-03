<script setup>
defineProps({
  userData: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="avatar">
      <div class="w-24 rounded-full">
        <img :src="userData.avatar_url" :alt="userData.login">
      </div>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl font-bold">{{ userData.name || userData.login }}</h2>
      <p class="text-base-content/60">{{ userData.bio || 'No bio available' }}</p>
    </div>

    <div class="stats shadow">
      <div class="stat place-items-center">
        <div class="stat-value">{{ userData.public_repos }}</div>
        <div class="stat-desc">Repos</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-value">{{ userData.followers }}</div>
        <div class="stat-desc">Followers</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-value">{{ userData.following }}</div>
        <div class="stat-desc">Following</div>
      </div>
    </div>
  </div>
</template>