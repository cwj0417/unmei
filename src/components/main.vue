<template>
  <div style="margin-bottom: 60px;">hi, there is unmei.</div>
  <div>
    <input placeholder="2023" autofocus @input="yearChange" :style="{ border: valid(birthday.year) ? 'none' : '1px solid red' }" />
    <input placeholder="1213" ref="input2Ref" @input="mdChange" :style="{ border: valid(birthday.monthday) ? 'none' : '1px solid red' }" />
    <input placeholder="1642" ref="input3Ref" @input="timeChange" :style="{ border: valid(birthday.hrminsec) ? 'none' : '1px solid red' }" />
  </div>
  <div v-if="bazi">
    {{ bazi[0].map(i => i.name).join('') }}
    {{ bazi[1].map(i => i.name).join('') }}
    {{ bazi[2].map(i => i.name).join('') }}
    {{ bazi[3].map(i => i.name).join('') }}
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { getfourPillar } from "../service/entity";

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
    bazi.value = getfourPillar(new Date(`${birthday.year} ${birthday.monthday.slice(0, 2)} ${birthday.monthday.slice(2, 4)} ${birthday.hrminsec.slice(0, 2)}:${birthday.hrminsec.slice(2, 4)}`))
  }
}

</script>

<style>
input {
  padding: 5px;
  margin: 5px;
  border: none;
  font-size: 20px;
}
input:focus {
  outline: none;
}
</style>
