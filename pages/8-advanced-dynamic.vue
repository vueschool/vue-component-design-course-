<script setup>
const toggled = ref(true);

// const MyDynamicComponent1 = defineAsyncComponent(() =>
//     import('@/components/Dynamic/DynamicComp1.vue')
// )

// const MyDynamicComponent2 = defineAsyncComponent(() =>
//     import('@/components/Dynamic/DynamicComp2.vue')
// )


</script>
<template>
    <div>
        <PageHeading :number="8">Advanced: Lazy Dynamic Components</PageHeading>
        <button class="btn" @click="toggled = !toggled">Toggle Dynamic Components</button>
        <!-- <MyDynamicComponent1 v-if="toggled" />
        <MyDynamicComponent2 v-else /> -->

        <!-- Or with component :is -->
        <!-- <component :is="toggled ? MyDynamicComponent1 : MyDynamicComponent2" /> -->

        <!-- Or with Nuxt -->
        <LazyDynamicComp1 v-if="toggled" />
        <LazyDynamicComp2 v-else />

    </div>
</template>