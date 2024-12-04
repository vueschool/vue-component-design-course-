<script setup lang="ts">
const loading = ref(false);
watch(loading, async () => {
    if (loading.value) {
        await sleep(2000);
        loading.value = false
    }

})
</script>
<template>
    <div>
        <PageHeading :number="2">Slots and Template Props Pattern</PageHeading>
        <div class="flex gap-3">
            <AppButton :outline="true" @click="loading = true" :loading="loading">
                <strong>Click Me</strong>
            </AppButton>
        </div>
    </div>
</template>