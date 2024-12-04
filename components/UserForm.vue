<script setup>
const modelValue = defineModel()

watch(modelValue, () => {
    form.value = clone(modelValue.value)
}, { deep: true })

const form = ref(clone(modelValue.value) || {
    name: "",
    email: "",
    age: null
})

function clone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

function handleSubmit() {
    modelValue.value = clone(form.value)
}
</script>
<template>
    <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">
        <label class="input input-bordered flex items-center gap-2">
            Name
            <input class="flex-grow" type="text" v-model="form.name" required />
        </label>
        <label class="input input-bordered flex items-center gap-2">
            Email
            <input class="flex-grow" type="email" v-model="form.email" required />
        </label>
        <label class="input input-bordered flex items-center gap-2">
            Age
            <input class="flex-grow" type="number" v-model="form.age" min="3" required />
        </label>
        <AppButton>
            {{ modelValue ? 'Edit' : 'Create' }} User
        </AppButton>
    </form>
</template>