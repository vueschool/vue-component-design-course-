<script setup lang="ts">
const users = ref([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Moderator' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'User' }
]);


</script>
<template>
    <div>
        <PageHeading :number="4">List with List Item Pattern</PageHeading>
        <UserList :users="users" />
    </div>
</template>