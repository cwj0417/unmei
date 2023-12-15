import { elementType, simpleElement, yinyangType, fourPillars } from './interface'
import { getRemainder } from './util'
import { elementRelation, jiaziYear, solarDayOffset, solarTerm, jiaziDay, stemBranchTimeRelation, solarTermOffset } from './relation'

const generateElement = (type: elementType): simpleElement => ({
    ...elementRelation[type],
    get generate() {
        return generateElement(elementRelation[type].generateType)
    }
})

class Element {
    type: string
    name: string
    self: simpleElement
    generate: simpleElement
    restrict: simpleElement
    restricted: simpleElement
    generateby: simpleElement
    十神: any // todo: type
    constructor(type: elementType) {
        this.type = elementRelation[type].type
        this.name = elementRelation[type].name
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

export class HeavenlyStem {
    constructor(public name: string, public element: Element, public gender: yinyangType) { }
}

export class EarthlyBranch {
    constructor(public name: string, public containingHeavenlyStems: HeavenlyStem[]) { }
}

export const HeavenlyStems = [
    new HeavenlyStem('甲', new Element('wood'), 'yang'),
    new HeavenlyStem('乙', new Element('wood'), 'yin'),
    new HeavenlyStem('丙', new Element('fire'), 'yang'),
    new HeavenlyStem('丁', new Element('fire'), 'yin'),
    new HeavenlyStem('戊', new Element('earth'), 'yang'),
    new HeavenlyStem('己', new Element('earth'), 'yin'),
    new HeavenlyStem('庚', new Element('metal'), 'yang'),
    new HeavenlyStem('辛', new Element('metal'), 'yin'),
    new HeavenlyStem('壬', new Element('water'), 'yang'),
    new HeavenlyStem('葵', new Element('water'), 'yin'),
]

export const EarthlyBranchs = [
    new EarthlyBranch('子', [HeavenlyStems[9]]),
    new EarthlyBranch('丑', [HeavenlyStems[1], HeavenlyStems[7], HeavenlyStems[9]]),
    new EarthlyBranch('寅', [HeavenlyStems[0], HeavenlyStems[2], HeavenlyStems[4]]),
    new EarthlyBranch('卯', [HeavenlyStems[1]]),
    new EarthlyBranch('辰', [HeavenlyStems[4], HeavenlyStems[9], HeavenlyStems[1]]),
    new EarthlyBranch('巳', [HeavenlyStems[2], HeavenlyStems[6], HeavenlyStems[4]]),
    new EarthlyBranch('午', [HeavenlyStems[3], HeavenlyStems[5]]),
    new EarthlyBranch('未', [HeavenlyStems[5], HeavenlyStems[1], HeavenlyStems[3]]),
    new EarthlyBranch('申', [HeavenlyStems[6], HeavenlyStems[8], HeavenlyStems[4]]),
    new EarthlyBranch('酉', [HeavenlyStems[7]]),
    new EarthlyBranch('戌', [HeavenlyStems[4], HeavenlyStems[7], HeavenlyStems[3]]),
    new EarthlyBranch('亥', [HeavenlyStems[8], HeavenlyStems[0]]),
]

const getCurrentSolarTerm = (solarTermAnchor: number[], yearDiffCount: number) => {
    const tsDiff = (365 * 86400000 + solarDayOffset) * yearDiffCount
    return solarTermAnchor.map(i => i + tsDiff)
}

const getMonthOrder = (currentTs: number, solarTermAnchor: number[], yearDiffCount: number) => {
    const currentSolarTerm = getCurrentSolarTerm(solarTermAnchor, yearDiffCount)
    return currentSolarTerm.reduce((pre, cur) => pre === -1 ? (cur > currentTs ? currentSolarTerm.indexOf(cur) : -1) : pre, -1)
}

const getfourPillar = (ts: number = Date.now()): fourPillars => {
    // 年柱月柱要对比的基准干支年
    const year = new Date(ts).getFullYear()
    const solarTermYear = new Date(solarTerm[0]).getFullYear()
    const yearToSolarTermYear = year - solarTermYear
    // 年柱
    let yearDiff = new Date(ts).getFullYear() - jiaziYear
    const [, yearSeperator] = getCurrentSolarTerm(solarTerm, yearToSolarTermYear)
    if (ts < yearSeperator) yearDiff--
    const yearPillar = [HeavenlyStems[getRemainder(yearDiff, 10)], EarthlyBranchs[getRemainder(yearDiff, 12)]]
    // 月柱
    const monthOrder = solarTermOffset + getMonthOrder(ts, solarTerm, yearToSolarTermYear) + (yearToSolarTermYear) * 12
    const monthPillar = [HeavenlyStems[getRemainder(monthOrder, 10)], EarthlyBranchs[getRemainder(monthOrder, 12)]]
    // 日柱
    const dayDiff = Math.floor((ts - jiaziDay) / 86400000)
    let heavenlyStemOrder = getRemainder(dayDiff, 10)
    const dayPillar = [HeavenlyStems[heavenlyStemOrder], EarthlyBranchs[getRemainder(dayDiff, 12)]]
    // 时柱
    const time = stemBranchTimeRelation[new Date(ts).getHours()]
    const dayOrder = heavenlyStemOrder % 5
    const timePillar = [HeavenlyStems[(dayOrder * 12 + time) % 10], EarthlyBranchs[time]]
    return [yearPillar, monthPillar, dayPillar, timePillar]
}

export {
    getfourPillar,
}
