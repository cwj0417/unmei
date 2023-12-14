<template>
<span :style="getRenderStyle(src?.element?.type,src?.gender)">{{ src?.name }}</span>
</template>
<script setup>
import { getRenderStyle } from '../../service/util';

defineProps(['src'])
</script>
