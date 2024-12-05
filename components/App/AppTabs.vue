<script setup lang="ts">

// Here we provide a single spot to register all the tabs that should display
// This way we can loop over them and display the clickable tab for each
// It's empty at first because we're letting the child `AppTab`s
// determine the tab titles (based on their "title" prop)
const tabs = ref<string[]>([]);

// This is the state that keeps up with the single active tab
// Only one should ever be open at a time
// We'll determine which should be open by 
// setting the title of the active tab here
const activeTab = ref<string>();

// This is a helper function for setting the active tab.
// It's important to wrap it in a function if we want to
// allow the child `AppTab` to set an active tab
// Why? Because it's recommended in the Vue docs
// to keep direct mutations of your provided state 
// to the component that state is defined in (the parent).
// If you want to allow a child to mutate you should provide a function.
// This keeps the control of the state with the parent 
// only allowing the child to mutate the state in the allowed way
function activateTab(title: string) {
    activeTab.value = title;
}

// This function will allow the child `AppTabs` to register their title
// with the parent `AppTabs`
// Again it's a function because of the reasoning above.
function registerTab(title: string) {
    if (tabs.value.includes(title)) return;
    tabs.value.push(title);
}

// This is where the magic happens.
// The provide function exposes the data to the child
// The injection key is a unique identifier so that we can 
// "pickup" the data in the child using the same key
provide(injectionKey, {
    // This is just a good way for us to check in the child that the `AppTab`
    // was correctly used in the context of the `AppTabs` component
    withinTabs: true,

    // We expose the 2 functions defined above to the child
    registerTab,
    activateTab,

    // We expose the active tab to the child
    // but notice we use readonly to keep the child from directly mutating it
    activeTab: readonly(activeTab),
});
</script>

<!-- 
We define the injectionKey in a separate script tag
This makes it possible to export the injection key 
to import in the child component (AppTab)
(We can't export from inside the script setup tag)
 -->
<script lang="ts">
export const injectionKey = Symbol("AppTabs") as InjectionKey<{
    withinTabs: boolean;
    registerTab: (title: string) => void;
    activeTab: Readonly<Ref<string | undefined>>;
    activateTab: (title: string) => void;
}>;
</script>

<!--
In the template, we display a button for each tab (the UI element the user clicks on to change the active tab. 
And then we define a slot to display the content for all the panels in
-->
<template>
    <div class="tabs">
        <div class="tabs tabs-bordered">
            <button v-for="tab in tabs" :key="tab" class="tab" :class="{
                'btn-active': activeTab === tab,
            }" @click="activateTab(tab)">
                {{ tab }}
            </button>
        </div>
        <slot></slot>
    </div>
</template>