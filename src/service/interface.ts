import { HeavenlyStem, EarthlyBranch } from './entity'

export type fourPillars = [(HeavenlyStem | EarthlyBranch)[], (HeavenlyStem | EarthlyBranch)[], (HeavenlyStem | EarthlyBranch)[], (HeavenlyStem | EarthlyBranch)[]]

export type yinyangType = 'yin' | 'yang'

export type elementType = 'metal' | 'wood' | 'water' | 'fire' | 'earth'

export type simpleElement = {
    type: elementType,
    generate: simpleElement,
    name: string,
}
