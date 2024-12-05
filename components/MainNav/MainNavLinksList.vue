<script setup lang="ts">
const links = [
    {
        title: 'Branching Component Pattern',
        to: '1-branching-component-pattern',
    },
    {
        title: 'Slots and Template Props Pattern',
        to: '2-slots-and-template-props',
    },
    {
        title: 'List with ListItem Pattern',
        to: '3-list-with-list-item-pattern',
    },
    {
        title: 'Smart vs Dumb Components Pattern',
        to: '4-smart-vs-dumb-components-pattern',
    },
    {
        title: "Form Component Pattern",
        to: "5-form-component-pattern",
    },
    {
        title: "A Few Advanced Vue Component Patterns",
        to: "6-a-few-advanced-vue-component-patterns",
    }
];
</script>
<template>

    <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li v-for="link in links">
            <NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
        </li>
    </ul>
</template>
