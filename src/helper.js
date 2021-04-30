export const processData = ( index ) => {
    if (!index) return {}
    var res = {
        city: "compare-tabs_1_city_" + index + "_name",
        aqi: "compare-tabs_1_city_" + index + "_aqi",
        cigg: "compare-tabs_1_city_" + index + "_cigg",
        info: "compare-tabs_1_method"
    }
    return res
}
