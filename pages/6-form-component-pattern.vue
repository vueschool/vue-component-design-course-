<script setup lang="ts">
const user = ref(null)
</script>
<template>
  <div>
    <PageHeading :number="6">Form Component Pattern</PageHeading>

    <UserForm v-model="user" />

    <pre>{{ user }}</pre>
  </div>
</template>