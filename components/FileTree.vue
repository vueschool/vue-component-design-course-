<script setup>
const props = defineProps({
    files: { type: Array, required: true },
    modelValue: { type: String, default: null },
    path: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);

const open = ref([]);

function onFolderClick(file) {
    if (open.value.includes(file.name)) {
        open.value = open.value.filter((name) => name !== file.name);
    } else {
        open.value.push(file.name);
    }
}

function onFileClick(file) {
    console.log("file", `${props.path}/${file.name}`);
    emit("update:modelValue", `${props.path}/${file.name}`);
}

function getFileFullPath(file) {
    return `${props.path}/${file.name}`;
}
</script>

<template>
    <ul class="ml-4">
        <li v-for="file in files" :key="file.name" class="mb-2">
            <button v-if="file.children" data-test="folder-btn" @click="onFolderClick(file)"
                class="flex items-center my-1">
                <span v-if="open.includes(file.name)">
                    <Icon name="heroicons:folder-minus" class="mr-2" />
                </span>
                <span v-else>
                    <Icon name="heroicons:folder-plus" class="mr-2" />
                </span>
                {{ file.name }}
            </button>

            <button v-else data-test="file-btn" @click="onFileClick(file)"
                :class="{ 'text-primary': modelValue === getFileFullPath(file) }" class="flex items-center">
                <Icon name="heroicons:document" class="mr-2" />
                {{ file.name }}
            </button>
            <FileTree v-if="file.children && open.includes(file.name)" :files="file.children"
                :path="getFileFullPath(file)" @update:modelValue="$emit('update:modelValue', $event)"
                :modelValue="modelValue" class="ml-4">
            </FileTree>
        </li>
    </ul>
</template>
