import { getfourPillar } from './entity'

const format = (diagram: any[]) => {
    diagram.forEach(item => {
        console.log('')
        item.forEach((i: { name: any }) => {
            console.log(i.name)
        })
    })
}
window.getfourPillareByDate = (y, m, d, h, s) => {
    format(getfourPillar(new Date(new Date(new Date().setFullYear(y)).setMonth(m - 1, d)).setHours(h, s)))
}

export default () => {
    // format(getfourPillar(new Date(new Date(new Date().setFullYear(1991)).setMonth(0, 1)).setHours(22, 28)))
    // console.log(getfourPillar(new Date(new Date(new Date().setFullYear(1991)).setMonth(10, 27)).setHours(14, 14, 14, 1)))
    // console.log(getfourPillar(Date.now()))
    // getfourPillar(new Date().setFullYear(2024))
    // getfourPillar(new Date().setFullYear(2023))
    // getfourPillar(new Date().setFullYear(2022))
    // getfourPillar(new Date().setFullYear(2021))
    // getfourPillar(new Date().setFullYear(2020))
    // getfourPillar(new Date().setFullYear(2019))
    // getfourPillar(new Date().setFullYear(2018))
    // getfourPillar(new Date().setFullYear(2017))
    // getfourPillar(new Date().setFullYear(2016))
    // getfourPillar(new Date().setFullYear(2015))
    // getfourPillar(new Date().setFullYear(2010))
    // console.log(getfourPillar(new Date().setHours(22, 10, 10)))
    // console.log(getfourPillar(new Date().setHours(13, 10, 10)))
}
