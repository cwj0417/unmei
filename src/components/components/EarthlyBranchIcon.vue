<template>
<span :style="getRenderStyle(src?.containingHeavenlyStems[0].element?.type,src?.containingHeavenlyStems[0].gender)">{{src?.name}}</span>
<span v-if="showHs" v-for="(item, index) of src?.containingHeavenlyStems" :style="{'font-size': (20 - index * 4) + 'px'}">
    <HeavenlyStemIcon :src="item" />
</span>
</template>
<script setup>
import HeavenlyStemIcon from './HeavenlyStemIcon.vue'
import { getRenderStyle } from '../../service/util';

defineProps(['src', 'showHs'])
</script>