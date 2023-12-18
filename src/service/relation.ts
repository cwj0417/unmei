import { 五行种类 } from './interface'

export const solarTerm = [ // 以19年来粗略计算万年历的节气.
    new Date(new Date(new Date().setFullYear(2019)).setMonth(0, 5)).setHours(23, 38, 52, 1), // 小寒 2018的小寒
    new Date(new Date(new Date().setFullYear(2019)).setMonth(1, 4)).setHours(11, 14, 14, 1), // 立春
    new Date(new Date(new Date().setFullYear(2019)).setMonth(2, 6)).setHours(5, 9, 39, 1), // 惊蛰
    new Date(new Date(new Date().setFullYear(2019)).setMonth(3, 5)).setHours(9, 51, 21, 1), // 清明
    new Date(new Date(new Date().setFullYear(2019)).setMonth(4, 6)).setHours(3, 2, 40, 1), // 立夏
    new Date(new Date(new Date().setFullYear(2019)).setMonth(5, 6)).setHours(7, 6, 18, 1), // 芒种
    new Date(new Date(new Date().setFullYear(2019)).setMonth(6, 7)).setHours(17, 20, 25, 1), // 小暑
    new Date(new Date(new Date().setFullYear(2019)).setMonth(7, 8)).setHours(3, 12, 57, 1), // 立秋
    new Date(new Date(new Date().setFullYear(2019)).setMonth(8, 8)).setHours(6, 16, 46, 1), // 白露
    new Date(new Date(new Date().setFullYear(2019)).setMonth(9, 8)).setHours(22, 5, 32, 1), // 寒露
    new Date(new Date(new Date().setFullYear(2019)).setMonth(10, 8)).setHours(1, 24, 15, 1), // 立冬
    new Date(new Date(new Date().setFullYear(2019)).setMonth(11, 7)).setHours(18, 18, 21, 1), // 大雪
]
export const solarTermOffset = 0 // 19年的立春是甲子月, 六十甲子的第1个月.

export const solarDayOffset = 20926000

export const jiaziYear = 1144

export const jiaziDay = new Date(new Date(new Date().setFullYear(2021)).setMonth(2, 16)).setHours(23, 0, 0, 1)

export const elementRelation: {
    [key in 五行种类]: {
        type: 五行种类,
        generateType: 五行种类,
        name: string,
    }
} = {
    木: {
        type: '木',
        generateType: '火',
        name: '木',
    },
    火: {
        type: '火',
        generateType: '土',
        name: '火',
    },
    土: {
        type: '土',
        generateType: '金',
        name: '土',
    },
    金: {
        type: '金',
        generateType: '水',
        name: '金',
    },
    水: {
        type: '水',
        generateType: '木',
        name: '水',
    },
}

export const stemBranchTimeRelation: { [normalTime: number]: number } = {
    0: 0,
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 3,
    6: 3,
    7: 4,
    8: 4,
    9: 5,
    10: 5,
    11: 6,
    12: 6,
    13: 7,
    14: 7,
    15: 8,
    16: 8,
    17: 9,
    18: 9,
    19: 10,
    20: 10,
    21: 11,
    22: 11,
    23: 0,
}
