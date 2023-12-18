import { 天干, 地支 } from './entity'

export type 四柱 = [(天干 | 地支)[], (天干 | 地支)[], (天干 | 地支)[], (天干 | 地支)[]]

export type 阴阳 = '阴' | '阳'

export type 五行种类 = '金' | '木' | '水' | '火' | '土'

export type 五行对象 = {
    type: 五行种类,
    generate: 五行对象,
    name: string,
}
