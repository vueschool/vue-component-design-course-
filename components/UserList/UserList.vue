<script setup>
const props = defineProps({
    users: { type: Array, default: () => [] }
})
const filter = ref('');
const filteredUsers = computed(() => {
    return props.users.filter(user => {
        return user.name.toLowerCase().includes(filter.value.toLowerCase());
    });
});
</script>
<template>
    <div class="flex gap-3">
        <div class="w-full">

            <!-- User List Controls -->
            <div class="mb-4 w-56">
                <input v-model="filter" type="text" placeholder="Filter users by name"
                    class="input input-bordered w-full" />
            </div>

            <UserListContent v-if="filteredUsers.length" :users="filteredUsers" />

            <!-- User List Empty -->
            <UserListEmpty v-else />
        </div>
    </div>
</template>