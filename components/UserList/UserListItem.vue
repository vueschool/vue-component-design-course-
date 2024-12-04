<script setup>
defineProps({
    user: {
        type: Object
    }
})
</script>
<template>
    <tr>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role }}</td>
    </tr>
</template>