import { HeavenlyStem } from "./entity"
export const getRemainder = (n1: number, n2: number) => n1 % n2 >= 0 ? n1 % n2 : n1 % n2 + n2

export const getRenderStyle = (element: any, gender: any) => ({ // todo: type
    wood: {
        yin: {
            color: '#689C76',
            fontWeight: 300,
        },
        yang: {
            color: '#689C76',
            fontWeight: 700,
        },
    },
    fire: {
        yin: {
            color: '#BE3E38',
            fontWeight: 300,
        },
        yang: {
            color: '#BE3E38',
            fontWeight: 700,
        },
    },
    earth: {
        yin: {
            color: '#9D6621',
            fontWeight: 300,
        },
        yang: {
            color: '#9D6621',
            fontWeight: 700,
        },
    },
    metal: {
        yin: {
            color: '#F6C543',
            fontWeight: 300,
        },
        yang: {
            color: '#F6C543',
            fontWeight: 700,
        },
    },
    water: {
        yin: {
            color: '#67A1F8',
            fontWeight: 300,
        },
        yang: {
            color: '#67A1F8',
            fontWeight: 700,
        },
    },
} as any)[element]![gender]

export const getRelation = (self: HeavenlyStem, target: HeavenlyStem) => {
    return self.element.十神()[target.element.type][self.gender === target.gender ? '0' : '1']
}
