// split index
export const splitIndex = (aqi) => {
    if (!aqi || (aqi.indexOf(' ') < 0)) return ["no data", "no data"]
    return aqi.split(" ")
}

// generate cigars
export const generateCigars = (num) => {
    let cigs = []
    if (num === 0) return cigs
    for (let i = 1; i <= num; i++) {
        cigs.push(i)
    }
    return cigs
}