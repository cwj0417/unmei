<template>
  <div style="margin-bottom: 20px;" @click="add">hi, there is unmei.</div>
  <Item v-for="i in count" :order="i" :key="i"/>
  <div style="margin-bottom: 20px; margin-top: 20px;" @click="add">hi, there is unmei.</div>
</template>

<script setup>
import Item from './item.vue'
import { ref, onMounted } from 'vue'

const count = ref(1)

onMounted(() => {
  count.value = localStorage.getItem('unmeicount') ? +localStorage.getItem('unmeicount') : 1
})

const add = () => {
  count.value = +count.value + 1
  localStorage.setItem('unmeicount', count.value)
}

</script>
