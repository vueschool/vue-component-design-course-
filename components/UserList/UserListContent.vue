<script setup>
defineProps({
    users: { type: Array }
})
</script>
<template>
    <div class="overflow-x-auto ">
        <table class="table table-auto table-zebra">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <UserListItem v-for="user in users" :key="user.id" :user="user" />
            </tbody>
        </table>
    </div>
</template>