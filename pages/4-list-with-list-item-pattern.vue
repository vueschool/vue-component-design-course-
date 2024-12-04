<script setup lang="ts">
const users = ref([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Moderator' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'User' }
]);

const filter = ref('');
const filteredUsers = computed(() => {
    return users.value.filter(user => {
        return user.name.toLowerCase().includes(filter.value.toLowerCase());
    });
});
</script>
<template>
    <div>
        <PageHeading :number="4">List with List Item Pattern</PageHeading>
        <!-- User List -->
        <div class="flex gap-3">
            <div class="w-full">
                <div class="mb-4 w-56">
                    <input v-model="filter" type="text" placeholder="Filter users by name"
                        class="input input-bordered w-full" />
                </div>
                <div v-if="filteredUsers.length" class="overflow-x-auto ">
                    <table class="table table-auto table-zebra">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in filteredUsers" :key="user.id">
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.role }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else class="flex flex-col items-center justify-center py-10 w-full bg-base-200">
                    <p class="text-gray-500">No users available.</p>
                </div>
            </div>
        </div>
    </div>
</template>