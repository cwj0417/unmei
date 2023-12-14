import { HeavenlyStem } from "./entity"
export const getRemainder = (n1: number, n2: number) => n1 % n2 >= 0 ? n1 % n2 : n1 % n2 + n2

export const getRenderStyle = (element: any, gender: any) => ({ // todo: type
    wood: {
        yin: {
            color: 'rgb(77, 245, 35)',
            textDecoration: 'underline'
        },
        yang: {
            color: 'rgb(77, 245, 35)',
        },
    },
    fire: {
        yin: {
            color: 'rgb(239, 79, 47)',
            textDecoration: 'underline'
        },
        yang: {
            color: 'rgb(239, 79, 47)'
        },
    },
    earth: {
        yin: {
            color: 'rgb(225, 171, 43)'
        },
        yang: {
            color: 'rgb(225, 171, 43)'
        },
    },
    metal: {
        yin: {
            color: 'rgb(236, 252, 12)',
            textDecoration: 'underline'
        },
        yang: {
            color: 'rgb(236, 252, 12)'
        },
    },
    water: {
        yin: {
            color: 'rgb(35, 161, 239)',
            textDecoration: 'underline'
        },
        yang: {
            color: 'rgb(35, 161, 239)'
        },
    },
} as any)[element]![gender]

export const getRelation = (self: HeavenlyStem, target: HeavenlyStem) => {
    return self.element.十神()[target.element.type][self.gender === target.gender ? '0' : '1']
}
