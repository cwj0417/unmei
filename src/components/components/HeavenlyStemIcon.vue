<template>
<span :style="getRenderStyle(src?.五行?.type,src?.阴阳)">{{ src?.name }}</span>
</template>
<script setup>
import { getRenderStyle } from '../../service/util';

defineProps(['src'])
</script>
