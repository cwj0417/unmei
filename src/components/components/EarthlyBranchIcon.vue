<template>
<span :style="getRenderStyle(src?.藏干[0].五行?.type, src?.藏干[0].阴阳, size)">{{src?.name}}</span>
<span v-if="showHs" v-for="(item, index) of src?.藏干" :style="{'font-size': (20 - index * 4) + 'px'}">
    <HeavenlyStemIcon :size="size" :src="item" />
</span>
</template>
<script setup>
import HeavenlyStemIcon from './HeavenlyStemIcon.vue'
import { getRenderStyle } from '../../service/util';

defineProps(['src', 'showHs', 'size'])
</script>
