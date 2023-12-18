import { 天干 } from "./entity"
export const getRemainder = (n1: number, n2: number) => n1 % n2 >= 0 ? n1 % n2 : n1 % n2 + n2

export const getRenderStyle = (五行: any, 阴阳: any) => ({ // todo: type
    木: {
        阴: {
            color: '#689C76',
            fontWeight: 300,
        },
        阳: {
            color: '#689C76',
            fontWeight: 700,
        },
    },
    火: {
        阴: {
            color: '#BE3E38',
            fontWeight: 300,
        },
        阳: {
            color: '#BE3E38',
            fontWeight: 700,
        },
    },
    土: {
        阴: {
            color: '#9D6621',
            fontWeight: 300,
        },
        阳: {
            color: '#9D6621',
            fontWeight: 700,
        },
    },
    金: {
        阴: {
            color: '#F6C543',
            fontWeight: 300,
        },
        阳: {
            color: '#F6C543',
            fontWeight: 700,
        },
    },
    水: {
        阴: {
            color: '#67A1F8',
            fontWeight: 300,
        },
        阳: {
            color: '#67A1F8',
            fontWeight: 700,
        },
    },
} as any)[五行]![阴阳]

export const getRelation = (self: 天干, target: 天干) => {
    return self.五行.十神()[target.五行.type][self.阴阳 === target.阴阳 ? '0' : '1']
}
