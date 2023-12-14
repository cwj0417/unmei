<template>
<span>{{src?.name}}</span>
<span v-for="(item, index) of src?.containingHeavenlyStems" :style="{'font-size': (20 - index * 4) + 'px'}">
    <HeavenlyStemIcon :src="item" />
</span>
</template>
<script setup>
import HeavenlyStemIcon from './HeavenlyStemIcon.vue'

defineProps(['src'])
</script>