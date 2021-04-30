// generate cities
export const generateCities = ( data ) => {
    const res = []
    if (!data) return res
    const amount = data["total_cities_1_value"]
    for (let i = 1; i <= amount; i++) {
        let obj_name = "compare-tabs_1_city_" + i.toString() + "_name";
        res.push(data[obj_name])
    }
    return res
}