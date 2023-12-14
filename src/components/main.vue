<template>
  <div style="margin-bottom: 60px;">hi, there is unmei.</div>
  <div>
    <input :value="birthday.year" placeholder="年份, 如: 2023" autofocus @input="yearChange"
      :style="{ border: valid(birthday.year) ? 'none' : '1px solid red' }" />
    <input :value="birthday.monthday" placeholder="月日, 如: 1107" ref="input2Ref" @input="mdChange"
      :style="{ border: valid(birthday.monthday) ? 'none' : '1px solid red' }" />
    <input :value="birthday.hrminsec" placeholder="时分, 如: 2308" ref="input3Ref" @input="timeChange"
      :style="{ border: valid(birthday.hrminsec) ? 'none' : '1px solid red' }" />
  </div>
  <div v-if="bazi">
    <div style="display: flex; justify-content: center;">
      <HeavenlyStemIcon :src="bazi[0][0]" />
      <EarthlyBranchIcon :src="bazi[0][1]" />

      <HeavenlyStemIcon :src="bazi[1][0]" />
      <EarthlyBranchIcon :src="bazi[1][1]" />

      <HeavenlyStemIcon :src="bazi[2][0]" />
      <EarthlyBranchIcon :src="bazi[2][1]" />

      <HeavenlyStemIcon :src="bazi[3][0]" />
      <EarthlyBranchIcon :src="bazi[3][1]" />
    </div>

    <div>
      {{ getSelfRelation(bazi[0][0]) }}
      (<span v-for="hs of bazi[0][1].containingHeavenlyStems">{{ getSelfRelation(hs) }}</span>)

      {{ getSelfRelation(bazi[1][0]) }}
      (<span v-for="hs of bazi[1][1].containingHeavenlyStems">{{ getSelfRelation(hs) }}</span>)

      {{ getSelfRelation(bazi[2][0]) }}
      (<span v-for="hs of bazi[2][1].containingHeavenlyStems">{{ getSelfRelation(hs) }}</span>)

      {{ getSelfRelation(bazi[3][0]) }}
      (<span v-for="hs of bazi[3][1].containingHeavenlyStems">{{ getSelfRelation(hs) }}</span>)
    </div>

  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { getfourPillar } from "../service/entity";
import HeavenlyStemIcon from "./components/HeavenlyStemIcon.vue"
import EarthlyBranchIcon from "./components/EarthlyBranchIcon.vue"
import { getRelation } from "../service/util"

// dom refs

const input2Ref = ref(null)
const input3Ref = ref(null)

// vars

const birthday = reactive({
  year: '',
  monthday: '',
  hrminsec: ''
})

const bazi = ref(null)

// fns

const getSelfRelation = (target) => getRelation(bazi.value[2][0], target)

let valid = (val) => val?.length === 4

let yearChange = (e) => {
  birthday.year = e?.target.value;
  if (valid(birthday.year)) {
    input2Ref.value.focus();
  }
}
let mdChange = (e) => {
  birthday.monthday = e?.target.value;
  if (valid(birthday.monthday)) {
    input3Ref.value.focus();
  }
}
let timeChange = (e) => {
  birthday.hrminsec = e?.target.value;
  if (valid(birthday.hrminsec)) {
    check()
  }
}

let check = () => {
  if (valid(birthday.year) && valid(birthday.monthday) && valid(birthday.hrminsec)) {
    localStorage.setItem('unmeicache', Object.values(birthday).join(','))
    bazi.value = getfourPillar(new Date(`${birthday.year} ${birthday.monthday.slice(0, 2)} ${birthday.monthday.slice(2, 4)} ${birthday.hrminsec.slice(0, 2)}:${birthday.hrminsec.slice(2, 4)}`))
    console.log(bazi.value)
  }
}

onMounted(() => {
  const cache = localStorage.getItem('unmeicache')
  if (cache) {
    const parsed = cache.split(',')
    birthday.year = parsed[0]
    birthday.monthday = parsed[1]
    birthday.hrminsec = parsed[2]
    check()
  }
})

</script>

<style>
input {
  padding: 5px;
  margin: 5px;
  border: none;
  font-size: 20px;
  background: transparent;
}

input:focus {
  outline: none;
}
</style>
