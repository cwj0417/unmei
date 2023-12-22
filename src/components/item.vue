<template>
    <div style="border-bottom: 2px solid #979797; width: 818px; margin: 15px auto; display: flex;">
        <div style="float: left;display: flex;font-size: 20px; padding-top: 10px;" @click="changeGender">
            <span :style="{ color: birthday.male ? '#f4f4f4' : '#555555' }">男</span>
            <span style="margin: 0 5px;">/</span>
            <span :style="{ color: !birthday.male ? '#f4f4f4' : '#555555' }">女</span>
        </div>
        <div class="w-item">
            <input type="number" :value="birthday.year" placeholder="输入 年" autofocus @input="yearChange"
                @focus="$event.target.select()" :style="{ border: valid(birthday.year, 4) ? 'none' : '1px solid red' }" />
            <span style="color: #555; font-size: 20px;">年</span>
        </div>
        <div class="w-item">
            <input type="number" :value="birthday.month" placeholder="输入 月" ref="input2Ref" @input="mChange"
                @focus="$event.target.select()" :style="{ border: valid(birthday.month, 2) ? 'none' : '1px solid red' }" />
            <span style="color: #555; font-size: 20px;">月</span>
        </div>
        <div class="w-item">
            <input type="number" :value="birthday.day" placeholder="输入 日" ref="input3Ref" @input="dChange"
                @focus="$event.target.select()" :style="{ border: valid(birthday.day, 2) ? 'none' : '1px solid red' }" />
            <span style="color: #555; font-size: 20px;">日</span>
        </div>
        <div class="w-item">
            <input type="number" :value="birthday.hrminsec" placeholder="输入 时分" ref="input4Ref" @input="timeChange"
                @focus="$event.target.select()"
                :style="{ border: valid(birthday.hrminsec, 4) ? 'none' : '1px solid red' }" />
            <span style="color: #555; font-size: 20px;">时</span>
        </div>
    </div>
    <div v-if="bazi">
        <div style="display: flex; justify-content: center;">
            <table>
                <tr class="text-sm">
                    <td class="w-item">
                        {{ getSelfRelation(bazi[0][0]) }}
                    </td>
                    <td class="w-item">
                        {{ getSelfRelation(bazi[1][0]) }}
                    </td>
                    <td class="w-item">
                        {{ getSelfRelation(bazi[2][0]) }}
                    </td>
                    <td class="w-item">
                        {{ getSelfRelation(bazi[3][0]) }}
                    </td>
                </tr>
                <tr class="text-lg">
                    <td class="w-item">
                        <HeavenlyStemIcon :size="60" :src="bazi[0][0]" />
                    </td>
                    <td class="w-item">
                        <HeavenlyStemIcon :size="60" :src="bazi[1][0]" />
                    </td>
                    <td class="w-item">
                        <HeavenlyStemIcon :size="60" :src="bazi[2][0]" />
                    </td>
                    <td class="w-item">
                        <HeavenlyStemIcon :size="60" :src="bazi[3][0]" />
                    </td>
                </tr>
                <tr class="text-lg">
                    <td class="w-item">
                        <EarthlyBranchIcon :size="60" :showHs="false" :src="bazi[0][1]" />
                    </td>
                    <td class="w-item">
                        <EarthlyBranchIcon :size="60" :showHs="false" :src="bazi[1][1]" />
                    </td>
                    <td class="w-item">
                        <EarthlyBranchIcon :size="60" :showHs="false" :src="bazi[2][1]" />
                    </td>
                    <td class="w-item">
                        <EarthlyBranchIcon :size="60" :showHs="false" :src="bazi[3][1]" />
                    </td>
                </tr>
                <tr class="text-sm">
                    <td class="w-item">
                        <div v-for="hs of bazi[0][1].藏干">
                            <HeavenlyStemIcon :size="35" :src="hs" /> {{ getSelfRelation(hs) }}
                        </div>
                    </td>
                    <td class="w-item">
                        <div v-for="hs of bazi[1][1].藏干">
                            <HeavenlyStemIcon :size="35" :src="hs" /> {{ getSelfRelation(hs) }}
                        </div>
                    </td>
                    <td class="w-item">
                        <div v-for="hs of bazi[2][1].藏干">
                            <HeavenlyStemIcon :size="35" :src="hs" /> {{ getSelfRelation(hs) }}
                        </div>
                    </td>
                    <td class="w-item">
                        <div v-for="hs of bazi[3][1].藏干">
                            <HeavenlyStemIcon :size="35" :src="hs" /> {{ getSelfRelation(hs) }}
                        </div>
                    </td>
                </tr>
            </table>
            <!-- <HeavenlyStemIcon :src="bazi[0][0]" />
        <EarthlyBranchIcon :src="bazi[0][1]" />
  
        <HeavenlyStemIcon :src="bazi[1][0]" />
        <EarthlyBranchIcon :src="bazi[1][1]" />
  
        <HeavenlyStemIcon :src="bazi[2][0]" />
        <EarthlyBranchIcon :src="bazi[2][1]" />
  
        <HeavenlyStemIcon :src="bazi[3][0]" />
        <EarthlyBranchIcon :src="bazi[3][1]" /> -->
        </div>

        <!-- <div>
        {{ getSelfRelation(bazi[0][0]) }}
        (<span v-for="hs of bazi[0][1].藏干">{{ getSelfRelation(hs) }}</span>)
  
        {{ getSelfRelation(bazi[1][0]) }}
        (<span v-for="hs of bazi[1][1].藏干">{{ getSelfRelation(hs) }}</span>)
  
        {{ getSelfRelation(bazi[2][0]) }}
        (<span v-for="hs of bazi[2][1].藏干">{{ getSelfRelation(hs) }}</span>)
  
        {{ getSelfRelation(bazi[3][0]) }}
        (<span v-for="hs of bazi[3][1].藏干">{{ getSelfRelation(hs) }}</span>)
      </div> -->

    </div>
</template>
  
<script setup>
import { reactive, ref, onMounted } from "vue";
import { getfourPillar } from "../service/entity";
import HeavenlyStemIcon from "./components/HeavenlyStemIcon.vue"
import EarthlyBranchIcon from "./components/EarthlyBranchIcon.vue"
import { getRelation } from "../service/util"

const props = defineProps(['order'])

// dom refs

const input2Ref = ref(null)
const input3Ref = ref(null)
const input4Ref = ref(null)

// vars

const birthday = reactive({
    year: '',
    month: '',
    day: '',
    hrminsec: '',
    male: true
})

const bazi = ref(null)

// fns

const getSelfRelation = (target) => getRelation(bazi.value[2][0], target)

let valid = (val, length) => val?.length === length

let yearChange = (e) => {
    birthday.year = e?.target.value;
    if (valid(birthday.year, 4)) {
        input2Ref.value.focus();
        check()
    }
}
let mChange = (e) => {
    birthday.month = e?.target.value;
    if (valid(birthday.month, 2)) {
        input3Ref.value.focus();
        check()
    }
}
let dChange = (e) => {
    birthday.day = e?.target.value;
    if (valid(birthday.day, 2)) {
        input4Ref.value.focus();
        check()
    }
}
let timeChange = (e) => {
    birthday.hrminsec = e?.target.value;
    if (valid(birthday.hrminsec, 4)) {
        check()
    }
}

let changeGender = () => {
    birthday.male = !birthday.male
    check()
}

let check = () => {
    if (valid(birthday.year, 4) && valid(birthday.month, 2) && valid(birthday.day, 2) && valid(birthday.hrminsec, 4)) {
        localStorage.setItem('unmeicache' + props.order, Object.values(birthday).join(','))
        bazi.value = getfourPillar(new Date(`${birthday.year} ${birthday.month} ${birthday.day} ${birthday.hrminsec.slice(0, 2)}:${birthday.hrminsec.slice(2, 4)}`))
    }
}

onMounted(() => {
    const cache = localStorage.getItem('unmeicache' + props.order)
    if (cache) {
        const parsed = cache.split(',')
        birthday.year = parsed[0]
        birthday.month = parsed[1]
        birthday.day = parsed[2]
        birthday.hrminsec = parsed[3]
        birthday.male = parsed[4] === 'true'
        check()
    }
})

</script>