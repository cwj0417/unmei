import { 五行种类, 五行对象, 阴阳, 四柱 } from './interface'
import { getRemainder } from './util'
import { elementRelation, jiaziYear, solarDayOffset, solarTerm, jiaziDay, stemBranchTimeRelation, solarTermOffset } from './relation'

const generateElement = (type: 五行种类): 五行对象 => ({
    ...elementRelation[type],
    get generate() {
        return generateElement(elementRelation[type].generateType)
    }
})

class 五行 {
    type: string
    self: 五行对象
    generate: 五行对象
    restrict: 五行对象
    restricted: 五行对象
    generateby: 五行对象
    十神: any // todo: type
    constructor(type: 五行种类) {
        this.type = elementRelation[type].type
        this.self = generateElement(type)
        this.generate = generateElement(type).generate
        this.restrict = generateElement(type).generate.generate
        this.restricted = generateElement(type).generate.generate.generate
        this.generateby = generateElement(type).generate.generate.generate.generate
        this.十神 = () => ({
            [this.generate.type]: ['食神', '伤官'],
            [this.restrict.type]: ['偏财', '正财'],
            [this.restricted.type]: ['七杀', '正官'],
            [this.generateby.type]: ['偏印', '正印'],
            [this.self.type]: ['比肩', '劫财']
        })
    }
}

export class 天干 {
    constructor(public name: string, public 五行: 五行, public 阴阳: 阴阳) { }
}

export class 地支 {
    constructor(public name: string, public 藏干: 天干[]) { }
}

export const 所有天干 = [
    new 天干('甲', new 五行('木'), '阳'),
    new 天干('乙', new 五行('木'), '阴'),
    new 天干('丙', new 五行('火'), '阳'),
    new 天干('丁', new 五行('火'), '阴'),
    new 天干('戊', new 五行('土'), '阳'),
    new 天干('己', new 五行('土'), '阴'),
    new 天干('庚', new 五行('金'), '阳'),
    new 天干('辛', new 五行('金'), '阴'),
    new 天干('壬', new 五行('水'), '阳'),
    new 天干('葵', new 五行('水'), '阴'),
]

export const 所有地支 = [
    new 地支('子', [所有天干[9]]),
    new 地支('丑', [所有天干[5], 所有天干[7], 所有天干[9]]),
    new 地支('寅', [所有天干[0], 所有天干[2], 所有天干[4]]),
    new 地支('卯', [所有天干[1]]),
    new 地支('辰', [所有天干[4], 所有天干[9], 所有天干[1]]),
    new 地支('巳', [所有天干[2], 所有天干[6], 所有天干[4]]),
    new 地支('午', [所有天干[3], 所有天干[5]]),
    new 地支('未', [所有天干[5], 所有天干[1], 所有天干[3]]),
    new 地支('申', [所有天干[6], 所有天干[8], 所有天干[4]]),
    new 地支('酉', [所有天干[7]]),
    new 地支('戌', [所有天干[4], 所有天干[7], 所有天干[3]]),
    new 地支('亥', [所有天干[8], 所有天干[0]]),
]

const getCurrentSolarTerm = (solarTermAnchor: number[], yearDiffCount: number) => {
    const tsDiff = (365 * 86400000 + solarDayOffset) * yearDiffCount
    return solarTermAnchor.map(i => i + tsDiff)
}

const getMonthOrder = (currentTs: number, solarTermAnchor: number[], yearDiffCount: number) => {
    const currentSolarTerm = getCurrentSolarTerm(solarTermAnchor, yearDiffCount)
    return currentSolarTerm.reduce((pre, cur) => pre === -1 ? (cur > currentTs ? currentSolarTerm.indexOf(cur) : -1) : pre, -1)
}

const getfourPillar = (ts: number = Date.now()): 四柱 => {
    // 年柱月柱要对比的基准干支年
    const year = new Date(ts).getFullYear()
    const solarTermYear = new Date(solarTerm[0]).getFullYear()
    const yearToSolarTermYear = year - solarTermYear
    // 年柱
    let yearDiff = new Date(ts).getFullYear() - jiaziYear
    const [, yearSeperator] = getCurrentSolarTerm(solarTerm, yearToSolarTermYear)
    if (ts < yearSeperator) yearDiff--
    const yearPillar = [所有天干[getRemainder(yearDiff, 10)], 所有地支[getRemainder(yearDiff, 12)]]
    // 月柱
    const monthOrder = solarTermOffset + getMonthOrder(ts, solarTerm, yearToSolarTermYear) + (yearToSolarTermYear) * 12
    const monthPillar = [所有天干[getRemainder(monthOrder, 10)], 所有地支[getRemainder(monthOrder, 12)]]
    // 日柱
    const dayDiff = Math.floor((ts - jiaziDay) / 86400000)
    let heavenlyStemOrder = getRemainder(dayDiff, 10)
    const dayPillar = [所有天干[heavenlyStemOrder], 所有地支[getRemainder(dayDiff, 12)]]
    // 时柱
    const time = stemBranchTimeRelation[new Date(ts).getHours()]
    const dayOrder = heavenlyStemOrder % 5
    const timePillar = [所有天干[(dayOrder * 12 + time) % 10], 所有地支[time]]
    return [yearPillar, monthPillar, dayPillar, timePillar]
}

export {
    getfourPillar,
}
