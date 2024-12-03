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
        <!-- Loading State -->
        <div v-if="loading" class="p-4 space-y-4">
            <div class="skeleton w-24 h-24 rounded-full"></div>

            <div class="space-y-3">
                <div class="skeleton h-4 w-3/4"></div>
                <div class="skeleton h-3 w-1/2"></div>
            </div>

            <div class="stats bg-base-200">
                <div class="stat">
                    <div class="skeleton h-8 w-full"></div>
                </div>
                <div class="stat">
                    <div class="skeleton h-8 w-full"></div>
                </div>
                <div class="stat">
                    <div class="skeleton h-8 w-full"></div>
                </div>
            </div>
        </div>

        <!-- Loaded State -->
        <div v-else class="p-4 space-y-4">
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
    </div>
</template>