<template>
    <div class="loader"></div>
</template>
<style scoped>
.loader {
    width: 15px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 3px solid;
    border-color: currentColor transparent;
    animation: l1 1s infinite;
}

@keyframes l1 {
    to {
        transform: rotate(.5turn)
    }
}
</style>