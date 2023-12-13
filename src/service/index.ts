// import { getfourPillar } from './entity'
// import { fourPillars } from './interface'

// const format = (diagram: fourPillars) => {
//     diagram.forEach(item => {
//         console.log('')
//         item.forEach((i) => {
//             // console.log(i)
//             // console.log(i.name)
//             if ('containingHeavenlyStems' in i) {
//                 console.log(i.containingHeavenlyStems.map(hs => hs.element.name))
//             } else {
//                 console.log(i.element.name)
//             }
//         })
//     })
// }
// window.getfourPillareByDate = (y, m, d, h, s) => {
//     format(getfourPillar(new Date(new Date(new Date().setFullYear(y)).setMonth(m - 1, d)).setHours(h, s)))
// }

// export default () => {
//     console.log(getfourPillar(new Date('1991-11-07 23:45')).map(i => i.map(j => j.name)).flat().join(''))
//     console.log(getfourPillar(new Date('1991-11-27 14:24')).map(i => i.map(j => j.name)).flat().join(''))
//     console.log(getfourPillar(new Date('2021-10-13 01:36')).map(i => i.map(j => j.name)).flat().join(''))
//     console.log(getfourPillar(new Date('1992-9-11 05:15')).map(i => i.map(j => j.name)).flat().join(''))
//     // format(getfourPillar(new Date(new Date(new Date().setFullYear(1991)).setMonth(0, 1)).setHours(22, 28)))
//     // console.log(getfourPillar(new Date(new Date(new Date().setFullYear(1991)).setMonth(10, 27)).setHours(14, 14, 14, 1)))
//     // console.log(getfourPillar(Date.now()))
//     // getfourPillar(new Date().setFullYear(2024))
//     // getfourPillar(new Date().setFullYear(2023))
//     // getfourPillar(new Date().setFullYear(2022))
//     // getfourPillar(new Date().setFullYear(2021))
//     // getfourPillar(new Date().setFullYear(2020))
//     // getfourPillar(new Date().setFullYear(2019))
//     // getfourPillar(new Date().setFullYear(2018))
//     // getfourPillar(new Date().setFullYear(2017))
//     // getfourPillar(new Date().setFullYear(2016))
//     // getfourPillar(new Date().setFullYear(2015))
//     // getfourPillar(new Date().setFullYear(2010))
//     // console.log(getfourPillar(new Date().setHours(22, 10, 10)))
//     // console.log(getfourPillar(new Date().setHours(13, 10, 10)))
// }
