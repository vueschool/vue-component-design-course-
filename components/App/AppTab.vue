<script setup lang="ts">
// Notice that import the injection key from the `AppTabs` component
// since it's a symbol we can be absolutely certain it's unique
// and since these are tightly coupled it makes sense to get it from the parent
import { injectionKey } from "./AppTabs.vue";

// This is a simple title prop
const props = defineProps<{
    title: string
}>();

// This is where the magic happens
// Here we "pick up" the data provided by the parent
// we also give some defaults with the same types as the provided
// to make TypeScript happy and keep our IDE autocompleting things correctly
const tabsProvider = inject(injectionKey, {
    withinTabs: false,
    registerTab: (title: string) => { },
    activeTab: readonly(ref()),
    activateTab: (title: string) => { },
});

// If withinTabs is false, then the injected data wasn't provided 
// Why? because withinTabs defaults to false
// So we're outside the context of `AppTabs` which is not a valid use of the panel component
if (!tabsProvider.withinTabs) {
    throw new Error("AppTab must be used within a AppTabs component");
}

// Here we push our panels title to the parent so that it can display the tabs properly
tabsProvider.registerTab(props.title);

// If there is no active tab set, go ahead and set it
// This will only ever be true for the first panel
// Meaning, the first panel will always be the default active one
if (!tabsProvider.activeTab.value) {
    tabsProvider.activateTab(props.title);
}

// Finally just check to see if this panel should be active
// based on the active `activeTab` state from the parent
const isActive = computed(() => tabsProvider.activeTab.value === props.title);
</script>

<!--- For the display, only show the panel content if it's active -->
<template>
    <div class="bg-base-200 border-base-300 rounded-b-md p-6" v-show="isActive">
        <slot></slot>
    </div>
</template>